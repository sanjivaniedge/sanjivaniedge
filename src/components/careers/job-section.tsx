import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Job } from "@/data/careers";

interface JobSectionProps {
  title: string;
  jobs: Job[];
}

export function JobSection({ title, jobs }: JobSectionProps) {
  if (jobs.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-black uppercase tracking-wide mb-6">
        {title}
      </h3>

      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col group cursor-pointer"
          >
            {/* Top Row: Pills (Left) + Apply Button (Right) */}
            <div className="flex justify-between items-start mb-4">
              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-sm bg-[#F9F7FC] text-xs font-semibold text-[#1A1F3D] border border-[#FF6B5A]">
                  Full-time
                </span>
                <span className="inline-flex items-center px-4 py-1.5 rounded-sm bg-[#F9F7FC] text-xs font-semibold text-[#1A1F3D] border border-[#FF6B5A]">
                  {job.location}
                </span>
              </div>

              {/* Apply Button */}
              <Link
                href={`/careers/${job.slug}`}
                className="hidden md:inline-flex items-center justify-center gap-2 bg-[#FF6B5A] text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-[#E55A4A] transition-colors shadow-sm"
              >
                View Details
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </Link>
            </div>

            {/* Job Content */}
            <div className="flex-1">
              <Link href={`/careers/${job.slug}`} className="group">
                <h4 className="text-xl md:text-2xl font-bold text-[#1A1F3D] mb-3 group-hover:text-brand transition-colors">
                  {job.title}
                </h4>
              </Link>
              <p className="text-[#4A5568] text-sm md:text-base leading-relaxed max-w-4xl">
                {job.description}
              </p>
            </div>

            {/* Mobile Apply Button (Visible only on small screens) */}
            <div className="mt-6 md:hidden">
              <Link
                href={`/careers/${job.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B5A] text-white px-6 py-3 rounded-md font-semibold w-full hover:bg-[#E55A4A] transition-colors shadow-sm"
              >
                View Details
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
