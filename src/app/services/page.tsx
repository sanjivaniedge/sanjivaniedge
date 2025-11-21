import { EdgeLinkButton } from "@/components/ui/edge-link-button";
import { LegacySection } from "@/components/ui/legacy-section";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero per Figma  */}
      <section className=" px-4">
        <div className="mx-auto  rounded-[20px] bg-gradient-to-b from-white to-[#0175B2]/20 ">
          <div className="relative overflow-hidden rounded-[20px] h-auto">
            {/* BG Waves positioned to match x:957, y:103 and size ~827x802 */}
            <div className="pointer-events-none absolute top-[-50px] right-[-15vw] w-[827px] h-[802px] ">
              <Image src="/deco/bgservice.webp" alt="Decor Waves" fill className="object-contain" />
            </div>
            {/* Content block at x:142, y:236, width:1109, height:480 */}
            <div className="relative z-10 px-[24px] md:px-0 py-12 md:py-0">
              <div className="mx-auto md:ml-[142px] md:mt-[100px] md:mb-[150px] max-w-[1109px]">
                <h1 className="text-[28px] md:text-[64px] font-medium leading-[1.366] text-[#1A1F3D]">
                  Technology has become the architecture of modern business.
                </h1>
                <p className="mt-[24px] text-[16px] md:text-[18px] font-medium leading-[1.366] text-[#606060] max-w-[1109px]">
                  At Sanjivani Edge, every capability is built on a simple philosophy — systems must be engineered to endure, evolve, and empower.
                  <br /><br />
                  Our services span eight integrated domains, each designed to strengthen enterprise performance through precision engineering, disciplined execution, and responsible innovation.
                  <br /><br />
                  Explore the capabilities that define Sanjivani Edge.
                </p>
                <div className="mt-[24px]">
                  <EdgeLinkButton href="/solutions">EXPLORE THE EDGE</EdgeLinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Tabs Bar per Figma */}
      <section id="services" className="px-4 mt-6">
        <div className="mx-auto max-w-6xl">
          {/* Mobile: horizontal scrollable carousel; Desktop: wrapped centered tabs */}
          <nav
            aria-label="Services navigation"
            className="flex flex-nowrap md:flex-wrap md:justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar md:overflow-visible -mx-4 px-4 snap-x md:snap-none snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
          >
            {[
              { id: "software-development", label: "Software Development" },
              { id: "cloud-services", label: "Cloud Services" },
              { id: "cybersecurity", label: "Cybersecurity" },
              { id: "it-infrastructure", label: "IT Infrastructure" },
              { id: "emerging-technologies", label: "Emerging Technologies" },
              { id: "consulting-support", label: "Consulting & Support" },
              { id: "bpo-services", label: "BPO Services" },
              { id: "erp-services", label: "ERP Services" },
            ].map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="inline-flex items-center rounded-[10px] border border-[#FF6B5A] px-4 py-2 text-sm md:text-base text-[#1A1F3D] shadow-sm hover:shadow transition shrink-0 snap-start"
              >
                {t.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Services Sections */}
      <div className="mx-auto max-w-[1392px] px-4">
        {/* Software Development */}
        <ServiceRow
          id="software-development"
          title="Software Development"
          description="Engineering applications that serve as reliable, scalable, and secure foundations for enterprise operations. From custom systems to integrated platforms, our development expertise is shaped by precision and architectural clarity."
          imageSrc="/figma/capabilities-software-1a1c65.png"
          imageAlt="Software Development"
          reverse={false}
          gapClass="md:gap-[80px]"
          objectFit="fill"
          ctaHref="/services/software-development"
          bullets={["Custom applications", "Web platforms", "Enterprise integration"]}
        />

        {/* Cloud Services */}
        <ServiceRow
          id="cloud-services"
          title="Cloud Services"
          description="Modernizing enterprise infrastructure through cloud strategy, migration, and optimization. Our cloud ecosystems are designed for elasticity, cost efficiency, and operational resilience."
          imageSrc="/figma/capabilities-cloud-1a1c65.png"
          imageAlt="Cloud Services"
          reverse={true}
          gapClass="md:gap-[88px]"
          objectFit="fill"
          ctaHref="/services/cloud-services"
          bullets={["Cloud consulting", "Migration", "Infrastructure management"]}
        />

        {/* Cybersecurity */}
        <ServiceRow
          id="cybersecurity"
          title="Cybersecurity"
          description="Protecting systems, data, and identities through intelligent, integrated security frameworks. Our cybersecurity capabilities safeguard digital trust and ensure regulatory readiness."
          imageSrc="/Images/cyber.webp"
          imageAlt="Cybersecurity"
          reverse={false}
          gapClass="md:gap-[80px]"
          objectFit="cover"
          ctaHref="/services/cybersecurity"
          bullets={["Network security", "Data protection", "Vulnerability assessment"]}
        />

        {/* IT Infrastructure */}
        <ServiceRow
          id="it-infrastructure"
          title="IT Infrastructure"
          description="Building the stable foundations that enterprises depend on — servers, networks, data centers, and more. Our infrastructure solutions prioritize uptime, continuity, and operational consistency."
          imageSrc="/figma/capabilities-infra-50d455.png"
          imageAlt="IT Infrastructure"
          reverse={true}
          gapClass="md:gap-[88px]"
          objectFit="fill"
          ctaHref="/services/it-infrastructure"
          bullets={["Servers & networks", "Data centers", "Hardware & software support"]}
        />

        {/* Emerging Technologies */}
        <ServiceRow
          id="emerging-technologies"
          title="Emerging Technologies"
          description="Advancing enterprise capabilities with AI, machine learning, IoT, and automation. These solutions enable intelligent decision-making, predictive insight, and process transformation."
          imageSrc="/Images/emerge.webp"
          imageAlt="Emerging Technologies"
          reverse={false}
          gapClass="md:gap-[80px]"
          objectFit="cover"
          ctaHref="/services/emerging-technologies"
          bullets={["AI & ML", "IoT solutions", "Automation services"]}
        />

        {/* Consulting & Support */}
        <ServiceRow
          id="consulting-support"
          title="Consulting & Support"
          description="Strategic advisory and operational support that align technology with organizational goals.

Our consulting and AMC services strengthen governance, maturity, and long-term performance."
          imageSrc="/Images/consulting.webp"
          imageAlt="Consulting & Support"
          reverse={true}
          gapClass="md:gap-[88px]"
          objectFit="cover"
          ctaHref="/services/consulting-support"
          bullets={["IT strategy", "Helpdesk", "AMC", "Knowledge transfer"]}
        />

        {/* BPO Services */}
        <ServiceRow
          id="bpo-services"
          title="BPO Services"
          description="High-performance process outsourcing across customer service, finance, HR, and back-office operations.

Our BPO frameworks are built for consistency, accuracy, and scale."
          imageSrc="/Images/bpo.webp"
          imageAlt="BPO Services"
          reverse={false}
          gapClass="md:gap-[80px]"
          objectFit="cover"
          ctaHref="/services/bpo-services"
          bullets={["Customer support", "Finance & HR operations", "Back-office support"]}
        />

        {/* ERP Services */}
        <ServiceRow
          id="erp-services"
          title="ERP Services"
          description="End-to-end ERP modernization that enhances visibility, consistency, and operational efficiency.

Our SAP and Oracle services help enterprises streamline processes and drive strategic alignment."
          imageSrc="/Images/erp.webp"
          imageAlt="ERP Services"
          reverse={true}
          gapClass="md:gap-[88px]"
          objectFit="fill"
          ctaHref="/services/erp-services"
          bullets={["ERP planning", "Implementation", "Support & maintenance"]}
        />
      </div>

      {/* CTA End Card */}
      <section className="mt-12 md:mt-16 px-4">
        <LegacySection
          title="Transformation is not defined by tools alone — it is defined by clarity, governance, and intent."
          description="Sanjivani Edge brings all three together to build digital ecosystems that are resilient today and ready for tomorrow."
          ctaHref="/contact"
          ctaText="Get in touch"
          titleClassName="text-xl md:text-[30px] font-medium text-[#1A1F3D]"
        />
      </section>
    </main>
  );
}

function ServiceRow({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  gapClass = "md:gap-[80px]",
  objectFit = "cover",
  ctaHref = "/contact",
  bullets = [],
}: {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  gapClass?: string;
  objectFit?: "cover" | "fill";
  ctaHref?: string;
  bullets?: string[];
}) {
  return (
    <section id={id} className="mt-12 md:mt-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""} gap-[80px] ${gapClass} items-center`}>
        {/* Image */}
        <div className="md:w-[650px]">
          <div className="relative h-[320px] md:h-[667px] w-full overflow-hidden rounded-[10px]">
            <Image src={imageSrc} alt={imageAlt} fill className={objectFit === "fill" ? "object-fill" : "object-cover"} />
          </div>
        </div>
        {/* Content */}
        <div className="md:w-[650px] flex flex-col gap-6 md:gap-8">
          <div className="h-[2px] w-full bg-[#D9D9D9]" />
          <h3 className="text-2xl md:text-5xl font-semibold text-black">{title}</h3>
          <p className="text-base md:text-lg text-black/70">{description}</p>
          {!!bullets?.length && (
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-black">
                  <Image src="/figma/evolution-checkbox.svg" alt="" width={24} height={24} />
                  <span className="text-base md:text-lg">{b}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="pt-2">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-[6px] px-4 py-2 text-white"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 107, 90, 1) 0%, rgba(229, 83, 67, 1) 100%)",
                border: "1px solid",
                borderImage:
                  "linear-gradient(180deg, rgba(230,85,68,1) 0%, rgba(253,105,88,1) 100%) 1",
              }}
            >
              Explore {title}
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}