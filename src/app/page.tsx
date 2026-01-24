import Hero from "@/components/Hero";
import ClientSection from "@/components/client-section";
import HomeBlogs from "@/components/HomeBlogs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LegacySection from "@/components/ui/legacy-section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT, ERP & Digital Transformation Company in India",
  description: "A leading IT & ERP implementation company in India providing SAP, Oracle, Cloud, AI & Cybersecurity solutions to Manufacturing, BFSI & Healthcare",
  keywords: "IT company India, ERP company, digital transformation India, SAP partner India, best IT services Mumbai",
  alternates: {
    canonical: "https://www.sanjivaniedge.com",
  },
};

export default function Home() {

  return (
    <div className="">
      <Hero />
      <ClientSection />
      <HomeBlogs />
                {/* Frequently Asked Questions(FAQ's) */}
            <section className="max-w-6xl px-4 py-12">
                <div className="flex items-center gap-6 md:gap-14">
                    <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
                    <h2 className="text-4xl md:text-[52px] font-medium text-[#1A1F3D]">FAQs<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span></h2>
                </div>
                <div className="mt-8 grid gap-8">
                    <Accordion type="single" collapsible className="space-y-4">
                        {[
                            { q: "What does Sanjivani Edge build?", a: "Full-stack solutions across Software, Cloud, Cybersecurity, Infrastructure, BPO, Consulting, and ERP (SAP & Oracle)." },
                            { q: "How do engagements start?", a: "We begin with discovery and a solution workshop to define scope, timelines, risks, and a value-backed delivery plan." },
                            { q: "Do you provide ongoing support?", a: "Yes. We offer SLAs, managed services, and governance with structured delivery and observable outcomes." },
                            { q: "How is data handled?", a: "We prioritize encryption at rest/in transit, access controls, and compliance-driven practices." },
                            { q: "Do you customize ERP?", a: "We implement and extend SAP and Oracle ERP with best-practice configurations and integrations." },
                        ].map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border data-[state=open]:bg-[#F4F6F8] transition-all duration-300">
                                <AccordionTrigger className="px-4 py-4 text-left hover:no-underline cursor-pointer">
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
            </section>

            {/* The Legacy Ahead Section  */}
            <LegacySection
                title="The Legacy Ahead"
                paragraphs={[
                    "From cooperative fields to global networks, the journey continues. What began as an enterprise of farmers and visionaries now empowers enterprises of coders and creators.",
                    (<>
                        <span className="font-semibold text-[#1A1F3D]">Sanjivani Edge</span>{" "}
                        carries forward that same promise, to build systems that sustain growth and ideas that outlast change.
                    </>),
                ]}
                ctaHref="/contact"
                ctaLabel="Start Your Project"
            />

    </div>
  );
}
