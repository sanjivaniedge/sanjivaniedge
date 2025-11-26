import { EdgeLinkButton } from "@/components/ui/edge-link-button";
import { LegacySection } from "@/components/ui/legacy-section";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { CapabilitiesAccordion } from "@/components/ui/capabilities-accordion";
import { SuccessSection } from "@/components/ui/success-section";
import { StrategicValueSection } from "@/components/ui/strategic-value-section";
import { FeatureSteps } from "@/components/ui/feature-section";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export interface ServicePageData {
  title: string;
  subtitle?: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  capabilities?: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
      tools?: string | string[];
    }>;
  };
  whyChooseUs?: {
    title: string;
    description: string;
    features: Array<{
      step: string;
      title: string;
      content: string;
      image: string;
    }>;
  };
  strategicValue?: {
    title: string;
    description: string;
    metrics: Array<{
      value: string;
      label: string;
      description?: string;
    }>;
  };
  deliveryFramework?: {
    title: string;
    description: string;
    timeline: Array<{
      title: string;
      content: string;
      image?: string;
    }>;
  };
  philosophy?: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    successMetrics?: string[];
    ctaText?: string;
    ctaLink?: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

interface ServicePageTemplateProps {
  data: ServicePageData;
  showCapabilities?: boolean;
  showWhyChooseUs?: boolean;
  showStrategicValue?: boolean;
  showDeliveryFramework?: boolean;
  showPhilosophy?: boolean;
}

export default function ServicePageTemplate({
  data,
  showCapabilities = true,
  showWhyChooseUs = true,
  showStrategicValue = true,
  showDeliveryFramework = true,
  showPhilosophy = true,
}: ServicePageTemplateProps) {
  const cloudFaqs = [
    {
      q: "Which cloud providers do you support?",
      a: "We design and operate on AWS, Azure, Google Cloud, and Oracle Cloud, selecting the platform that best aligns with your workload, compliance, and cost objectives.",
    },
    {
      q: "How do you ensure secure migrations with minimal downtime?",
      a: "We use phased migration, blue/green deploys, database replication, and cutover windows with rollbacks. Identity hardening and encryption at-rest/in-transit are enforced throughout.",
    },
    {
      q: "Do you help with cost optimization?",
      a: "Yes. We implement rightsizing, autoscaling, reserved capacity, storage tiering, and observability-driven optimization to reduce waste while maintaining SLAs.",
    },
    {
      q: "What compliance standards can you work with?",
      a: "ISO 27001, SOC 2, HIPAA-like safeguards, and industry mandates. We integrate IAM controls, audit trails, encryption policies, and data residency requirements.",
    },
    {
      q: "Do you provide ongoing management and support?",
      a: "We offer 24/7 monitoring, patching, backup/restore, incident response, and continuous improvements via SRE/DevOps practices.",
    },
  ]
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="px-4">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[20px] h-auto">
            {/* BG Waves */}
            <div className="pointer-events-none absolute top-[-50px] right-[-15vw] w-[827px] h-[802px]">
              <Image src="/deco/bgservice.webp" alt="Decor Waves" fill className="object-contain" />
            </div>
            {/* Content */}
            <div className="relative z-10 px-[24px] md:px-0 py-12 md:py-0 justify-center items-center flex flex-col">
              <div className="mx-auto md:my-[80px]  max-w-7xl">
                <div className="text-center">
                  <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.366] text-[#1A1F3D]">
                    {data.title}
                  </h1>
                  {data.subtitle && (
                    <h2 className="mt-4 text-[20px] md:text-[24px] font-bold leading-[1.366] text-[#18AAD9]">
                      {data.subtitle}
                    </h2>
                  )}
                </div>
                <p className="mt-[24px] text-[16px] text-center md:text-[18px] font-medium leading-[1.366] text-[#606060] max-w-[1109px]">
                  {data.description}
                </p>
                {/* <div className="mt-[24px]">
                  <EdgeLinkButton href={data.cta.buttonHref}>
                    {data.cta.buttonText}
                  </EdgeLinkButton>
                </div> */}
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative z-20 mx-auto max-w-7xl px-4 pb-12">
              <div className="relative h-[320px] md:h-[412px] w-full overflow-hidden rounded-[10px] shadow-[0px_10px_0px_0px_rgba(1,117,178,1)]">
                <Image
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      {showCapabilities && data.capabilities && (
        <CapabilitiesAccordion features={data.capabilities.items} />
      )}

      {/* Logo Cloud Section */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <LogoCloud logos={[
            {
              src: "https://svgl.app/library/nvidia-wordmark-light.svg",
              alt: "Nvidia Logo",
            },
            {
              src: "https://svgl.app/library/supabase_wordmark_light.svg",
              alt: "Supabase Logo",
            },
            {
              src: "https://svgl.app/library/openai_wordmark_light.svg",
              alt: "OpenAI Logo",
            },
            {
              src: "https://svgl.app/library/turso-wordmark-light.svg",
              alt: "Turso Logo",
            },
            {
              src: "https://svgl.app/library/vercel_wordmark.svg",
              alt: "Vercel Logo",
            },
            {
              src: "https://svgl.app/library/github_wordmark_light.svg",
              alt: "GitHub Logo",
            },
            {
              src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
              alt: "Claude AI Logo",
            },
            {
              src: "https://svgl.app/library/clerk-wordmark-light.svg",
              alt: "Clerk Logo",
            },
          ]} />

          <div className="mt-8 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </div>
      </section>

      {/* How We Define Success. */}
      {showPhilosophy && data.philosophy && (
        <SuccessSection data={data.philosophy} />
      )}

      {/* Strategic Value Section */}
      {showStrategicValue && data.strategicValue && (
          <StrategicValueSection data={data.strategicValue} />
        )}

      {/* Why Choose Us Section */}
      {showWhyChooseUs && data.whyChooseUs && (
          <section className="pb-20 px-4">
            <FeatureSteps
              features={data.whyChooseUs.features}
              title={data.whyChooseUs.title}
              autoPlayInterval={4000}
              imageHeight="h-[400px] md:h-[500px]"
            />
          </section>
        )}

      {/* Delivery Framework Section */}
      {showDeliveryFramework && data.deliveryFramework && (
          <section className="max-w-7xl mx-auto text-center px-4">
            <Timeline
              className=""
              title={data.deliveryFramework.title}
              titleClassName="text-4xl md:text-6xl font-medium text-center pl-8"
              description={data.deliveryFramework.description}
              descriptionClassName="text-neutral-700 mt-5 text-sm md:text-base max-w-sm"
              data={data.deliveryFramework.timeline.map(item => ({
                title: item.title,
                content: (
                  <div className="max-w-xl mx-auto ">

                    {item.image && (
                      <div className="relative h-72 overflow-hidden ">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                )

              }))}
            />
          </section>
        )
      }
      {/* FAQs Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
            <h2 className="text-3xl md:text-5xl font-medium">Frequently Asked Questions(FAQ's)<span className="text-[#FF6B5A]">.</span></h2>
          </div>
          <div className="mt-6 md:mt-10 grid  gap-8">
            <Accordion type="single" collapsible className="space-y-4">
              {cloudFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border data-[state=open]:bg-[#F4F6F8] transition-all duration-300 ">
                  <AccordionTrigger className="px-4 py-4 text-left hover:no-underline cursor-pointer ">
                    <div className="flex items-center justify-between w-full">
                      <span className="font-medium text-[#1A1F3D]">{faq.q}</span>
                      {/* <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-300 data-[state=open]:rotate-180" aria-hidden /> */}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-4 pb-4 text-neutral-700">{faq.a}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-12 md:mt-16 px-4">
        <LegacySection
          title={data.cta.title}

          description={data.cta.description}
          ctaHref={data.cta.buttonHref}
          ctaText={data.cta.buttonText}
          titleClassName="text-xl md:text-[30px] font-medium text-[#1A1F3D]"
        />
      </section>
    </main >
  );
}
