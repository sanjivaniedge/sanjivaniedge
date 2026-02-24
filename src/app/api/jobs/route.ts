import { NextRequest, NextResponse } from "next/server";
import { addJobs, readExtraJobs } from "@/lib/jobs-store";

export async function GET() {
  const jobs = await readExtraJobs();
  return NextResponse.json({ jobs });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const payload = Array.isArray(body)
      ? body
      : Array.isArray(body?.jobs)
      ? body.jobs
      : [body];
    const normalized = payload
      .map((j: any) => ({
        title: j.title,
        description: j.description ?? "",
        type: j.type ?? "Full Time",
        location: j.location,
        category: j.category ?? "Development",
        experience: j.experience ?? "",
        aboutRole: j.aboutRole ?? "",
        lifeAt: j.lifeAt ?? "",
        responsibilities: toArray(j.responsibilities),
        requirements: toArray(j.requirements),
        perks: toArray(j.perks),
        hidden: Boolean(j.hidden) || false,
      }))
      .filter((j: any) => j && j.title && j.location);
    if (normalized.length === 0) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const created = await addJobs(normalized);
    return NextResponse.json({ jobs: created });
  } catch (e: any) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

function toArray(input: any): string[] {
  if (!input) return [];
  if (Array.isArray(input)) return input.map(String).filter(Boolean);
  const s = String(input);
  const parts = s.split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
  return parts;
}
