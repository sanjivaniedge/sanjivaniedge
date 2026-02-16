import Image from "next/image";
import { Metadata } from "next";
import { JOBS } from "@/data/careers";
import { JobSection } from "@/components/careers/job-section";
import { WhoWeAre } from "@/components/careers/who-we-are";

export const metadata: Metadata = {
  title: "Careers | IT Jobs at Sanjivani Edge",
  description:
    "Explore exciting IT career opportunities at Sanjivani Edge. Join our team of innovators in software development, cloud services, ERP, cybersecurity and more.",
  openGraph: {
    title: "Careers | IT Jobs at Sanjivani Edge",
    description:
      "Explore exciting IT career opportunities at Sanjivani Edge. Join our team of innovators in software development, cloud services, ERP, cybersecurity and more.",
    url: "https://www.sanjivaniedge.com/careers",
    siteName: "Sanjivani Edge",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sanjivaniedge.com/careers",
  },
};


export default function CareersPage() {
  const developmentJobs = JOBS.filter(job => job.category === "Development" && !job.hidden);
  const operationsJobs = JOBS.filter(job => job.category === "Operations" && !job.hidden);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Top Row: Title + Description */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F3D] leading-tight flex-shrink-0">
              Join Sanjivani Edge<span className="text-brand">.</span>
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-xl lg:pt-2">
              Sanjivani Edge is where six decades of trust meet the precision of modern technology — a convergence of experience, ethics, and enterprise transformation.
            </p>
          </div>

          {/* Bottom Row: Full Width Image */}
          <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/figma/careers-hero.svg"
              alt="Sanjivani Edge Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>



      {/* Current Openings Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#E8E4F34D] relative">
        {/* BG Waves Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-60">
          <Image
            src="/figma/careers-bg-waves.svg"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold text-[#1A1F3D] mb-4">
              Current <span className="text-brand">Openings</span>.
            </h2>
            <p className="text-[#606060] text-lg">
              Explore exciting career opportunities at Sanjivani Edge.
            </p>
          </div>

          <JobSection title="Development" jobs={developmentJobs} />
          <JobSection title="Operations" jobs={operationsJobs} />
        </div>
      </section>
      {/* Who We Are Section */}
      <WhoWeAre />
    </main>
  );
}
