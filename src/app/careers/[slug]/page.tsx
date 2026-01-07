import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, CheckCircle2, Star } from "lucide-react";
import { JOBS } from "@/data/careers";

interface JobPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return JOBS.map((job) => ({
    slug: job.slug,
  }));
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-0 pb-2">
      {/* Hero Header */}
      <section className="bg-[#1A1F3D] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-6 max-w-3xl">
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <span className="px-4 py-1.5 rounded-sm bg-[#F9F7FC] text-xs font-semibold text-[#1A1F3D] border border-[#FF6B5A]">
                  {job.category}
                </span>
                <span className="px-4 py-1.5 rounded-sm bg-[#F9F7FC] text-xs font-semibold text-[#1A1F3D] border border-[#FF6B5A] flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {job.location}
                </span>
                <span className="px-4 py-1.5 rounded-sm bg-[#F9F7FC] text-xs font-semibold text-[#1A1F3D] border border-[#FF6B5A] flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> {job.type}
                </span>
                {job.experience && (
                  <span className="px-4 py-1.5 rounded-sm bg-[#F9F7FC] text-xs font-semibold text-[#1A1F3D] border border-[#FF6B5A] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {job.experience}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {job.title}
              </h1>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FF6B5A] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-[#E55A4A] transition-colors shadow-lg"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 -rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12 text-[#4A5568]">
          {/* About Role */}
          {job.aboutRole && (
            <section>
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-4">About the Role</h3>
              <p className="leading-relaxed text-lg">{job.aboutRole}</p>
            </section>
          )}

          {/* Life at Sanjivani Edge */}
          {job.lifeAt && (
            <section>
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-4">Life at Sanjivani Edge</h3>
              <p className="leading-relaxed text-lg">{job.lifeAt}</p>
            </section>
          )}

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-6">What You'll Be Doing</h3>
              <ul className="space-y-4">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FF6B5A] flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-6">What We're Looking For</h3>
              <ul className="space-y-4">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1A1F3D] mt-2.5 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

           {/* Perks */}
           {job.perks && job.perks.length > 0 && (
            <section className="bg-[#F9F7FC] p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-6">Why You'll Love Working Here</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.perks.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-brand fill-brand flex-shrink-0" />
                    <span className="font-medium text-[#1A1F3D]">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

           {/* Fallback for jobs with no extra data */}
           {!job.aboutRole && !job.responsibilities && (
             <div className="p-8 bg-gray-50 rounded-xl text-center">
               <p className="text-xl mb-4">Detailed description for this role is coming soon.</p>
               <p>{job.description}</p>
             </div>
           )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-[#1A1F3D] mb-6">Job Overview</h4>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Location</span>
                  <span className="font-medium text-[#1A1F3D]">{job.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Job Type</span>
                  <span className="font-medium text-[#1A1F3D]">{job.type}</span>
                </div>
                {job.experience && (
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Experience</span>
                    <span className="font-medium text-[#1A1F3D]">{job.experience}</span>
                  </div>
                )}
                {/* <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Date Posted</span>
                  <span className="font-medium text-[#1A1F3D]">Recently</span>
                </div> */}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#1A1F3D] text-white py-3 rounded-md font-bold hover:bg-[#2A3255] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* <div className="bg-[#E8E4F3] p-6 rounded-xl">
              <h4 className="font-bold text-[#1A1F3D] mb-2">Share this job</h4>
              <p className="text-sm text-gray-600 mb-4">Know someone who would be a perfect fit? Share this opportunity!</p>
            
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
