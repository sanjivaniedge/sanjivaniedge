import { JOBS as JOBS_BASE } from "@/data/careers";
import { readExtraJobs, JobRecord } from "@/lib/jobs-store";

export type Job = (typeof JOBS_BASE)[number];

function normalize(record: JobRecord): Job {
  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    description: record.description || "",
    type: record.type || "Full Time",
    location: record.location,
    category: record.category || "Development",
    experience: record.experience || "",
    aboutRole: record.aboutRole || "",
    lifeAt: record.lifeAt || "",
    responsibilities: record.responsibilities || [],
    requirements: record.requirements || [],
    perks: record.perks || [],
    hidden: record.hidden ?? false,
  } as Job;
}

export async function getAllJobs(): Promise<Job[]> {
  const extra = await readExtraJobs();
  const mapped = extra.map(normalize);
  // Best-effort: merge in optional datasets if present
  let jobsFromCareers3: Job[] = [];
  try {
    const mod3 = await import("@/data/careers");
    if (Array.isArray(mod3?.JOBS)) {
      jobsFromCareers3 = mod3.JOBS as Job[];
    }
  } catch {}
  const sets: Job[][] = [JOBS_BASE, jobsFromCareers3, mapped];
  // Deduplicate by slug to avoid collisions across files
  const seen = new Set<string>();
  const all: Job[] = [];
  for (const set of sets) {
    for (const j of set) {
      if (!seen.has(j.slug)) {
        seen.add(j.slug);
        all.push(j);
      }
    }
  }
  return all;
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  let base = JOBS_BASE.find((j) => j.slug === slug);
  if (!base) {
    try {
      const mod3 = await import("@/data/careers");
      const arr3: Job[] = (mod3?.JOBS as Job[]) ?? [];
      base = arr3.find((j) => j.slug === slug) ?? base;
    } catch {}
  }
  if (base) return base;
  const extra = await readExtraJobs();
  const found = extra.find((j) => j.slug === slug);
  return found ? normalize(found) : undefined;
}
