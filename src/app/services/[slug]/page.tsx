import Image from "next/image";
import { notFound } from "next/navigation";

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

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const data = SERVICES[params.slug];
  if (!data) return notFound();

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