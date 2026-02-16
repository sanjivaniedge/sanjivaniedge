import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2, Star, AlertCircle } from "lucide-react";
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

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: "Job Not Found | Sanjivani Edge Careers",
    };
  }

  const title = `${job.title} | ${job.location} | Sanjivani Edge Careers`;
  const description = job.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.sanjivaniedge.com/careers/${job.slug}`,
      siteName: "Sanjivani Edge",
      type: "website",
    },
    alternates: {
      canonical: `https://www.sanjivaniedge.com/careers/${job.slug}`,
    },
  };
}

function JobPostingSchema({ job }: { job: (typeof JOBS)[number] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: "2026-02-16",
    employmentType: job.type === "Full Time" ? "FULL_TIME" : "CONTRACT",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sanjivani Edge",
      sameAs: "https://www.sanjivaniedge.com",
      logo: "https://www.sanjivaniedge.com/logo/logo.webp",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "IN",
      },
    },
    ...(job.experience && { experienceRequirements: job.experience }),
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    directApply: false,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  // Get other active (non-hidden) jobs for the "Other Openings" section
  const otherJobs = JOBS.filter((j) => j.id !== job.id && !j.hidden).slice(0, 4);

  // If the job is hidden (filled), show a "position filled" page
  if (job.hidden) {
    const activeJobs = JOBS.filter((j) => !j.hidden).slice(0, 6);
    return (
      <main className="min-h-screen bg-white pt-0 pb-2">
        <JobPostingSchema job={job} />

        {/* Hero Header */}
        <section className="bg-[#1A1F3D] text-white py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Openings
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {job.title}
            </h1>
          </div>
        </section>

        {/* Position Filled Notice */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="bg-[#FFF8F7] border border-[#FF6B5A]/30 rounded-2xl p-8 md:p-12 text-center mb-12">
            <AlertCircle className="w-12 h-12 text-[#FF6B5A] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F3D] mb-4">
              This position has been filled
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto mb-6">
              Thank you for your interest in this role. This position is no longer accepting applications.
              However, we have other exciting opportunities available!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-[#1A1F3D] text-white px-6 py-3 rounded-md font-bold hover:bg-[#2A3255] transition-colors"
              >
                View All Openings
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF6B5A] text-white px-6 py-3 rounded-md font-bold hover:bg-[#E55A4A] transition-colors"
              >
                Submit Your Resume
              </Link>
            </div>
          </div>

          {/* Suggest Similar Open Roles */}
          <h3 className="text-2xl font-bold text-[#1A1F3D] mb-6">Explore Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeJobs.map((activeJob) => (
              <Link
                key={activeJob.id}
                href={`/careers/${activeJob.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#FF6B5A]/30 transition-all group"
              >
                <h4 className="text-lg font-bold text-[#1A1F3D] group-hover:text-[#FF6B5A] transition-colors mb-2">
                  {activeJob.title}
                </h4>
                <div className="flex flex-wrap gap-2 text-sm text-[#4A5568]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {activeJob.location}
                  </span>
                  {activeJob.experience && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {activeJob.experience}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-0 pb-2">
      <JobPostingSchema job={job} />

      {/* Hero Header */}
      <section className="bg-[#1A1F3D] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Openings
          </Link>
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
                  <Briefcase className="w-3 h-3" /> Full-time
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
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-6">What You&apos;ll Be Doing</h3>
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
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-6">What We&apos;re Looking For</h3>
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
              <h3 className="text-2xl font-bold text-[#1A1F3D] mb-6">Why You&apos;ll Love Working Here</h3>
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
          </div>
        </div>
      </div>

      {/* Other Openings Section */}
      {otherJobs.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pb-16">
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-[#1A1F3D] mb-8">Other Open Positions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherJobs.map((otherJob) => (
                <Link
                  key={otherJob.id}
                  href={`/careers/${otherJob.slug}`}
                  className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#FF6B5A]/30 transition-all group"
                >
                  <h4 className="text-lg font-bold text-[#1A1F3D] group-hover:text-[#FF6B5A] transition-colors mb-2">
                    {otherJob.title}
                  </h4>
                  <p className="text-sm text-[#4A5568] mb-3 line-clamp-2">{otherJob.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-[#4A5568]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {otherJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" /> {otherJob.type}
                    </span>
                    {otherJob.experience && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {otherJob.experience}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-[#FF6B5A] font-bold hover:underline"
              >
                View All Openings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
