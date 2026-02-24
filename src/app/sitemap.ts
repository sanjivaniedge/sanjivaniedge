import { MetadataRoute } from "next";
import { getAllJobs } from "@/lib/jobs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.sanjivaniedge.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/careers",
    // Static service pages
    "/services/bpo",
    "/services/cloud",
    "/services/consulting",
    "/services/cybersecurity",
    "/services/emerging",
    "/services/erp",
    "/services/it-infrastructure",
    "/services/software",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const jobs = await getAllJobs();
  const jobEntries: MetadataRoute.Sitemap = jobs.filter(
    (job) => !job.hidden,
  ).map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...jobEntries];
}
