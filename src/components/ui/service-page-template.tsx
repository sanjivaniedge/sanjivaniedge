import { EdgeLinkButton } from "@/components/ui/edge-link-button";
import { LegacySection } from "@/components/ui/legacy-section";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { CapabilitiesAccordion } from "@/components/ui/capabilities-accordion";
import { SuccessSection } from "@/components/ui/success-section";
import { StrategicValueSection } from "@/components/ui/strategic-value-section";
import { FeatureSteps } from "@/components/ui/feature-section";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

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
            <div className="relative z-10 px-[24px] md:px-0 py-12 md:py-0 ">
              <div className="mx-auto md:ml-[142px] md:my-[100px]  max-w-7xl">
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
              <div className="relative h-[320px] md:h-[512px] w-full overflow-hidden rounded-[10px] shadow-[0px_10px_0px_0px_rgba(1,117,178,1)]">
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

      {
        showStrategicValue && data.strategicValue && (
          <StrategicValueSection data={data.strategicValue} />
        )
      }

      {/* Why Choose Us Section */}
      {
        showWhyChooseUs && data.whyChooseUs && (
          <section className="pb-20 px-4">
            <FeatureSteps
              features={data.whyChooseUs.features}
              title={data.whyChooseUs.title}
              autoPlayInterval={4000}
              imageHeight="h-[400px] md:h-[500px]"
            />
          </section>
        )
      }

      {/* Delivery Framework Section */}
      {
        showDeliveryFramework && data.deliveryFramework && (
          <section className="max-w-7xl mx-auto ">
            <Timeline className=""
              title={data.deliveryFramework.title}
              description={data.deliveryFramework.description}
              data={data.deliveryFramework.timeline.map(item => ({
                title: item.title,
                content: (
                  <div className="max-w-xl mx-auto ">
                 
                    {item.image && (
                      <div className="relative h-48 w-full overflow-hidden rounded-lg shadow-md">
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
