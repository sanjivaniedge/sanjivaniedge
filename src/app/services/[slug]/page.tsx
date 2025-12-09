import Image from "next/image";
import Link from "next/link";
import { LegacySection } from "@/components/ui/legacy-section";

type ServiceContent = {
  title: string;
  description: string[]; // paragraphs
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
};

const SERVICES: Record<string, ServiceContent> = {
  "software-development": {
    title: "Software Development",
    description: [
      "Engineering applications that serve as reliable, scalable, and secure foundations for enterprise operations.",
      "From custom solutions to programmatically integrated platforms, our development expertise is shaped by precision and architectural clarity.",
    ],
    bullets: ["Custom applications", "Web platforms", "Enterprise integration"],
    imageSrc: "/figma/capabilities-software-1a1c65.png",
    imageAlt: "Software Development",
  },
  "cloud-services": {
    title: "Cloud Services",
    description: [
      "Modernizing enterprise infrastructure through cloud strategy, migration, and optimization.",
      "Our cloud ecosystems are designed for elasticity, cost efficiency, and operational resilience.",
    ],
    bullets: ["Cloud consulting", "Migration", "Infrastructure management"],
    imageSrc: "/figma/capabilities-cloud-1a1c65.png",
    imageAlt: "Cloud Services",
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: [
      "Protecting systems, data, and identities through intelligent, integrated security frameworks.",
      "Our cybersecurity capabilities safeguard digital trust and ensure regulatory readiness.",
    ],
    bullets: ["Network security", "Data protection", "Vulnerability assessment"],
    imageSrc: "/figma/capabilities-shield.png",
    imageAlt: "Cybersecurity",
  },
  "it-infrastructure": {
    title: "IT Infrastructure",
    description: [
      "Building the stable foundations that enterprises depend on — servers, networks, data centers, and more.",
      "Our infrastructure solutions prioritize uptime, continuity, and operational consistency.",
    ],
    bullets: ["Servers & networks", "Data centers", "Hardware & software support"],
    imageSrc: "/figma/capabilities-infra-50d455.png",
    imageAlt: "IT Infrastructure",
  },
  "emerging-technologies": {
    title: "Emerging Technologies",
    description: [
      "Advancing enterprise capabilities with AI, machine learning, IoT, and automation.",
      "These solutions enable intelligent decision‑making, predictive insight, and process transformation.",
    ],
    bullets: ["AI & ML", "IoT solutions", "Automation services"],
    imageSrc: "/figma/Emerge.png",
    imageAlt: "Emerging Technologies",
  },
  "consulting-support": {
    title: "Consulting & Support",
    description: [
      "Strategic advisory and operational support that align technology with organizational goals.",
      "Our consulting and AMC services strengthen governance, maturity, and long‑term performance.",
    ],
    bullets: ["Architecture consulting", "AMC & support", "Process maturity"],
    imageSrc: "/figma/capabilities-consulting-725558.png",
    imageAlt: "Consulting & Support",
  },
  "bpo-services": {
    title: "BPO Services",
    description: [
      "Process outsourcing for operations and support functions.",
      "Improve throughput and reduce cost with quality controls.",
    ],
    bullets: ["Customer support operations", "Back‑office processing", "Quality assurance"],
    imageSrc: "/figma/capabilities-bpo-c73d5a.png",
    imageAlt: "BPO Services",
  },
  "erp-services": {
    title: "ERP Services",
    description: [
      "Implementation, integration, and customization.",
      "Unify financials, supply chain, and HR with robust ERP suites.",
    ],
    bullets: ["Implementation", "Integrations", "Customization"],
    imageSrc: "/figma/capabilities-erp-2f97a5-1671ce.png",
    imageAlt: "ERP Services",
  },
};

// Coming Soon component for services that don't exist yet
function ServiceComingSoon({ slug }: { slug: string }) {
  // Format the slug into a readable title
  const formatTitle = (s: string) =>
    s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const title = formatTitle(slug);

  return (
    <main className="bg-white min-h-screen">
      <section className="px-4 pt-16 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0175B2]/10 to-[#17ABD6]/10 px-6 py-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0175B2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0175B2]"></span>
              </span>
              <span className="text-sm font-medium text-[#0175B2]">Coming Soon</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1F3D] mb-6">
              {title}
              <br />
              <span className="bg-gradient-to-r from-[#0175B2] to-[#17ABD6] bg-clip-text text-transparent">
                Is Coming Soon
              </span>
              <span className="text-[#FF6B5A]">.</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#606060] max-w-2xl mb-12">
              We&apos;re crafting something exceptional for this service. Our team is working to bring you comprehensive solutions that will transform your enterprise operations.
            </p>

            {/* Decorative Elements */}
            <div className="relative w-full max-w-lg h-64 md:h-80 mb-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-[#0175B2]/20 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-dashed border-[#FF6B5A]/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#17ABD6]/30 animate-[spin_10s_linear_infinite]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#0175B2] to-[#17ABD6] flex items-center justify-center shadow-xl shadow-[#0175B2]/20">
                  <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-[6px] px-6 py-3 text-white font-medium transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 107, 90, 1) 0%, rgba(229, 83, 67, 1) 100%)",
                  boxShadow: "0 4px 14px rgba(255, 107, 90, 0.3)",
                }}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                View All Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[6px] px-6 py-3 border border-[#0175B2] text-[#0175B2] font-medium hover:bg-[#0175B2]/5 transition-colors"
              >
                Contact Us
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12">
        <LegacySection
          title="Interested in this service?"
          description="Get in touch with us to learn more about our upcoming offerings and how we can help transform your business."
          ctaHref="/contact"
          ctaText="Get in Touch"
          titleClassName="text-xl md:text-[30px] font-medium text-[#1A1F3D]"
        />
      </section>
    </main>
  );
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const data = SERVICES[params.slug];
  if (!data) return <ServiceComingSoon slug={params.slug} />;

  return (
    <main className="bg-white">
      <section className="px-4 mt-10">
        <div className="mx-auto max-w-[1392px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[88px] items-start">
          <div className="flex flex-col gap-6 md:gap-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A1F3D]">{data.title}</h1>
            {data.description.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-[#606060]">{p}</p>
            ))}
            <ul className="space-y-3">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[#1A1F3D]">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#D9D9D9] text-brand">•</span>
                  <span className="text-base md:text-lg">{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[6px] px-4 py-2 text-white"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 107, 90, 1) 0%, rgba(229, 83, 67, 1) 100%)",
                  border: "1px solid",
                  borderImage:
                    "linear-gradient(180deg, rgba(230,85,68,1) 0%, rgba(253,105,88,1) 100%) 1",
                }}
              >
                Get started
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative h-[320px] md:h-[667px] w-full overflow-hidden rounded-[10px]">
            <Image src={data.imageSrc} alt={data.imageAlt} fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}