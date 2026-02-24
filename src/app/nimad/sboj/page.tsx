"use client";
import { useState } from "react";
import type { Job } from "@/data/careers";
import { CircleHelp } from "lucide-react";

type NewJob = Omit<Job, "id" | "slug">;

type NewJobDraft = {
  title: string;
  description?: string;
  type?: string;
  location: string;
  category?: Job["category"];
  experience?: string;
  aboutRole?: string;
  lifeAt?: string;
  responsibilities?: string;
  requirements?: string;
  perks?: string;
  hidden?: boolean;
};

function ExcelFormatHelp() {
  return (
    <div className="relative inline-flex items-center gap-2">
      <div className="group relative inline-flex">
        <button
          type="button"
          aria-label="Excel format help"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-2 text-[#1A1F3D] hover:bg-gray-50"
        >
          <CircleHelp className="h-4 w-4" />
        </button>
        <div className="pointer-events-none absolute right-0 top-full z-20 mt-2 hidden w-[340px] rounded-lg border border-gray-200 bg-white p-3 text-sm text-[#1A1F3D] shadow-lg group-hover:block">
          <div className="font-semibold mb-2">Excel columns (no id / slug)</div>
          <div className="mb-2">
            <div className="font-medium">Required</div>
            <div>title, location</div>
          </div>
          <div className="mb-2">
            <div className="font-medium">Optional</div>
            <div>
              description, type, category, experience, aboutRole, lifeAt,
              responsibilities, requirements, perks, hidden
            </div>
          </div>
          <div className="text-[#4A5568]">
            responsibilities / requirements / perks can be multi-line cells (one
            item per line).
          </div>
        </div>
      </div>
    </div>
  );
}

const AdminJobsPage = () => {
  const [form, setForm] = useState<NewJobDraft>({
    title: "",
    description: "",
    type: "Full Time",
    location: "",
    category: "Development",
    experience: "",
    aboutRole: "",
    lifeAt: "",
    responsibilities: "",
    requirements: "",
    perks: "",
    hidden: false,
  });
  const [batch, setBatch] = useState<NewJob[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmitSingle(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toPayload(form)),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setMessage(`Added ${data.jobs?.length ?? 1} job`);
      setForm({
        title: "",
        description: "",
        type: "Full Time",
        location: "",
        category: "Development",
        experience: "",
        aboutRole: "",
        lifeAt: "",
        responsibilities: "",
        requirements: "",
        perks: "",
        hidden: false,
      });
    } catch {
      setMessage("Error adding job");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmitBatch() {
    if (batch.length === 0) return;
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobs: batch.map(toPayload) }),
      });
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setMessage(`Added ${data.jobs?.length ?? batch.length} jobs`);
      setBatch([]);
    } catch {
      setMessage("Error adding jobs");
    } finally {
      setLoading(false);
    }
  }

  function toPayload(j: NewJobDraft | NewJob): NewJob {
    return {
      title: j.title,
      description: j.description || "",
      type: j.type || "Full Time",
      location: j.location,
      category: normalizeCategory(j.category),
      experience: j.experience || "",
      aboutRole: j.aboutRole || "",
      lifeAt: j.lifeAt || "",
      responsibilities: toStringArray(j.responsibilities),
      requirements: toStringArray(j.requirements),
      perks: toStringArray(j.perks),
      hidden: Boolean(j.hidden) || false,
    };
  }

  function splitLines(s?: string) {
    if (!s) return [];
    return s
      .split(/\r?\n/)
      .map((x) => x.trim())
      .filter(Boolean);
  }

  function toStringArray(input: unknown): string[] {
    if (!input) return [];
    if (Array.isArray(input)) {
      return input
        .map(String)
        .map((x) => x.trim())
        .filter(Boolean);
    }
    return splitLines(String(input));
  }

  function normalizeCategory(input: unknown): Job["category"] {
    const s = String(input ?? "")
      .trim()
      .toLowerCase();
    return s === "operations" || s === "operation"
      ? "Operations"
      : "Development";
  }

  type ExcelRow = Record<string, unknown>;

  function getCell(row: ExcelRow, ...keys: string[]) {
    for (const k of keys) {
      const v = row[k];
      if (v !== undefined && v !== null && String(v).trim() !== "") return v;
    }
    return "";
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const XLSX = await import("xlsx");
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json<ExcelRow>(sheet, { defval: "" });
    const parsed: NewJob[] = json
      .map((row) => ({
        title: String(getCell(row, "title", "Title", "Job Title")).trim(),
        description: String(getCell(row, "description", "Description")).trim(),
        type:
          String(getCell(row, "type", "Type", "Position")).trim() ||
          "Full Time",
        location: String(getCell(row, "location", "Location")).trim(),
        category: normalizeCategory(getCell(row, "category", "Category")),
        experience: String(getCell(row, "experience", "Experience")).trim(),
        aboutRole: String(
          getCell(row, "aboutRole", "AboutRole", "About Role"),
        ).trim(),
        lifeAt: String(getCell(row, "lifeAt", "LifeAt", "Life At")).trim(),
        responsibilities: splitLines(
          String(getCell(row, "responsibilities", "Responsibilities")),
        ),
        requirements: splitLines(
          String(getCell(row, "requirements", "Requirements")),
        ),
        perks: splitLines(String(getCell(row, "perks", "Perks"))),
        hidden: Boolean(getCell(row, "hidden", "Hidden")) || false,
      }))
      .filter((j) => j.title && j.location);
    setBatch(parsed);
    setMessage(`Loaded ${parsed.length} rows from Excel`);
  }

  return (
    <main className="min-h-screen bg-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1F3D]">
          Add Jobs
        </h1>
        {message && (
          <div className="p-3 rounded-md border border-gray-200 text-sm">
            {message}
          </div>
        )}

        <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1F3D]">Upload Excel</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFile}
              className="block"
            />
            <div className="md:ml-auto">
              <ExcelFormatHelp />
            </div>
          </div>
          {batch.length > 0 && (
            <div className="space-y-2">
              <div className="text-sm text-[#4A5568]">
                Preview: {batch.length} rows
              </div>
              <div className="max-h-64 overflow-auto border rounded">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left">Title</th>
                      <th className="p-2 text-left">Location</th>
                      <th className="p-2 text-left">Type</th>
                      <th className="p-2 text-left">Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batch.map((b, i) => (
                      <tr key={i} className="border-t">
                        <td className="p-2">{b.title}</td>
                        <td className="p-2">{b.location}</td>
                        <td className="p-2">{b.type}</td>
                        <td className="p-2">{b.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={handleSubmitBatch}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-[#1A1F3D] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#2A3255] disabled:opacity-50"
              >
                Submit {batch.length} Jobs
              </button>
            </div>
          )}
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-[#1A1F3D]">Manual Add</h2>
          <form
            onSubmit={handleSubmitSingle}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                className="w-full border rounded p-2"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                className="w-full border rounded p-2"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                className="w-full border rounded p-2 bg-white"
                value={form.type ?? "Full Time"}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                className="w-full border rounded p-2 bg-white"
                value={form.category ?? "Development"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value as Job["category"],
                  })
                }
              >
                <option value="Development">Development</option>
                <option value="Operations">Operations</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Experience
              </label>
              <input
                className="w-full border rounded p-2"
                value={form.experience}
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <textarea
                className="w-full border rounded p-2"
                rows={2}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                About Role
              </label>
              <textarea
                className="w-full border rounded p-2"
                rows={3}
                value={form.aboutRole}
                onChange={(e) =>
                  setForm({ ...form, aboutRole: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Life At Sanjivani Edge
              </label>
              <textarea
                className="w-full border rounded p-2"
                rows={3}
                value={form.lifeAt}
                onChange={(e) => setForm({ ...form, lifeAt: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Responsibilities (one per line)
              </label>
              <textarea
                className="w-full border rounded p-2"
                rows={4}
                value={form.responsibilities}
                onChange={(e) =>
                  setForm({ ...form, responsibilities: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Requirements (one per line)
              </label>
              <textarea
                className="w-full border rounded p-2"
                rows={4}
                value={form.requirements}
                onChange={(e) =>
                  setForm({ ...form, requirements: e.target.value })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Perks (one per line)
              </label>
              <textarea
                className="w-full border rounded p-2"
                rows={4}
                value={form.perks}
                onChange={(e) => setForm({ ...form, perks: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                id="hidden"
                type="checkbox"
                checked={form.hidden}
                onChange={(e) => setForm({ ...form, hidden: e.target.checked })}
              />
              <label htmlFor="hidden" className="text-sm">
                Hidden
              </label>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B5A] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#E55A4A] disabled:opacity-50"
              >
                Add Job
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default AdminJobsPage;
