import fs from "node:fs/promises";
import path from "node:path";

export type JobRecord = {
  id: number;
  slug: string;
  title: string;
  description?: string;
  type?: string;
  location: string;
  category?: string;
  experience?: string;
  aboutRole?: string;
  lifeAt?: string;
  responsibilities?: string[];
  requirements?: string[];
  perks?: string[];
  hidden?: boolean;
};

const dirPath = path.join(process.cwd(), "var");
const filePath = path.join(dirPath, "jobs-extra.json");

async function ensureStore() {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    await fs.access(filePath);
  } catch {
    await fs.writeFile(filePath, JSON.stringify({ jobs: [] }, null, 2), "utf8");
  }
}

export async function readExtraJobs(): Promise<JobRecord[]> {
  await ensureStore();
  const raw = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(raw || "{}");
  return Array.isArray(data.jobs) ? data.jobs : [];
}

export async function writeExtraJobs(jobs: JobRecord[]) {
  await ensureStore();
  await fs.writeFile(filePath, JSON.stringify({ jobs }, null, 2), "utf8");
}

export async function addJobs(newJobs: Omit<JobRecord, "id" | "slug">[]) {
  const careersPath = path.join(process.cwd(), "src", "data", "careers.ts");
  const careersSource = await fs.readFile(careersPath, "utf8");
  const jobsArray = extractJobsArrayRange(careersSource);
  const jobsArrayText = careersSource.slice(
    jobsArray.openBracketIndex + 1,
    jobsArray.closeBracketIndex,
  );
  const existingIds = [...jobsArrayText.matchAll(/\bid:\s*(\d+)/g)].map((m) =>
    Number(m[1]),
  );
  const existingSlugs = [...jobsArrayText.matchAll(/\bslug:\s*"([^"]+)"/g)].map(
    (m) => String(m[1]),
  );
  let maxId = existingIds.reduce((m, id) => Math.max(m, id), 0);
  const slugSet = new Set(existingSlugs);
  const result: JobRecord[] = [];

  const existingExtra = await readExtraJobs();
  const migratedExtra: Omit<JobRecord, "id" | "slug">[] = existingExtra.map(
    (j) => ({
      title: j.title,
      description: j.description || "",
      type: j.type || "Full Time",
      location: j.location,
      category: j.category === "Operations" ? "Operations" : "Development",
      experience: j.experience || "",
      aboutRole: j.aboutRole || "",
      lifeAt: j.lifeAt || "",
      responsibilities: j.responsibilities || [],
      requirements: j.requirements || [],
      perks: j.perks || [],
      hidden: j.hidden ?? false,
    }),
  );
  const incoming = [...migratedExtra, ...newJobs];

  for (const job of incoming) {
    maxId += 1;
    const baseSlug = slugify(job.title);
    const slug = uniqueSlugFromSet(baseSlug, slugSet);
    slugSet.add(slug);
    const rec: JobRecord = {
      id: maxId,
      slug,
      title: job.title,
      description: job.description || "",
      type: job.type || "Full Time",
      location: job.location,
      category: job.category === "Operations" ? "Operations" : "Development",
      experience: job.experience || "",
      aboutRole: job.aboutRole || "",
      lifeAt: job.lifeAt || "",
      responsibilities: job.responsibilities || [],
      requirements: job.requirements || [],
      perks: job.perks || [],
      hidden: job.hidden ?? false,
    };
    result.push(rec);
  }

  const updatedCareers = insertJobsIntoCareers(
    careersSource,
    jobsArray,
    result,
  );
  await fs.writeFile(careersPath, updatedCareers, "utf8");
  if (existingExtra.length) {
    await writeExtraJobs([]);
  }
  return result;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function uniqueSlugFromSet(base: string, existingSlugs: Set<string>) {
  let slug = base;
  let i = 1;
  while (existingSlugs.has(slug)) {
    i += 1;
    slug = `${base}-${i}`;
  }
  return slug;
}

function extractJobsArrayRange(source: string) {
  const marker = "export const JOBS";
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) {
    throw new Error("JOBS array not found in careers.ts");
  }
  const equalsIndex = source.indexOf("=", markerIndex);
  if (equalsIndex < 0) {
    throw new Error("JOBS array assignment not found");
  }
  const openBracketIndex = source.indexOf("[", equalsIndex);
  if (openBracketIndex < 0) {
    throw new Error("JOBS array opening bracket not found");
  }
  const closeBracketIndex = findMatchingBracket(
    source,
    openBracketIndex,
    "[",
    "]",
  );
  return { openBracketIndex, closeBracketIndex };
}

function findMatchingBracket(
  source: string,
  openIndex: number,
  openChar: string,
  closeChar: string,
) {
  let depth = 0;
  let inString: '"' | "'" | "`" | null = null;
  let escape = false;
  for (let i = openIndex; i < source.length; i += 1) {
    const ch = source[i];
    if (inString) {
      if (escape) {
        escape = false;
        continue;
      }
      if (ch === "\\") {
        escape = true;
        continue;
      }
      if (ch === inString) {
        inString = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inString = ch as '"' | "'" | "`";
      continue;
    }
    if (ch === openChar) depth += 1;
    if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error("Matching bracket not found");
}

function insertJobsIntoCareers(
  source: string,
  range: { openBracketIndex: number; closeBracketIndex: number },
  jobs: JobRecord[],
) {
  const beforeClose = source.slice(0, range.closeBracketIndex);
  const afterClose = source.slice(range.closeBracketIndex);
  const arrayBody = source.slice(
    range.openBracketIndex + 1,
    range.closeBracketIndex,
  );
  const trimmed = arrayBody.trimEnd();
  const needsComma = trimmed.length > 0 && !trimmed.endsWith(",");
  const jobsText = jobs.map(jobRecordToTsObject).join("\n");
  const insertion = `${needsComma ? "," : ""}\n${jobsText}\n`;
  return `${beforeClose}${insertion}${afterClose}`;
}

function jobRecordToTsObject(job: JobRecord) {
  const lines: string[] = [];
  lines.push("  {");
  lines.push(`    id: ${job.id},`);
  lines.push(`    slug: ${JSON.stringify(job.slug)},`);
  lines.push(`    title: ${JSON.stringify(job.title)},`);
  lines.push(`    description: ${JSON.stringify(job.description ?? "")},`);
  lines.push(`    type: ${JSON.stringify(job.type ?? "Full Time")},`);
  lines.push(`    location: ${JSON.stringify(job.location)},`);
  lines.push(
    `    category: ${job.category === "Operations" ? '"Operations"' : '"Development"'},`,
  );
  if (job.experience)
    lines.push(`    experience: ${JSON.stringify(job.experience)},`);
  if (job.hidden) lines.push("    hidden: true,");
  if (job.aboutRole)
    lines.push(`    aboutRole: ${JSON.stringify(job.aboutRole)},`);
  if (job.lifeAt) lines.push(`    lifeAt: ${JSON.stringify(job.lifeAt)},`);
  if (job.responsibilities && job.responsibilities.length) {
    lines.push("    responsibilities: [");
    for (const item of job.responsibilities)
      lines.push(`      ${JSON.stringify(item)},`);
    lines.push("    ],");
  }
  if (job.requirements && job.requirements.length) {
    lines.push("    requirements: [");
    for (const item of job.requirements)
      lines.push(`      ${JSON.stringify(item)},`);
    lines.push("    ],");
  }
  if (job.perks && job.perks.length) {
    lines.push("    perks: [");
    for (const item of job.perks) lines.push(`      ${JSON.stringify(item)},`);
    lines.push("    ],");
  }
  lines.push("  },");
  return lines.join("\n");
}
