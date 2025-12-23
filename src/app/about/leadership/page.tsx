import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight, Plus } from "lucide-react";

export const metadata = {
  title: "Leadership | Sanjivani Edge",
  description: "Meet the leadership team driving sustainable growth and innovation at Sanjivani Edge.",
};

export default function LeadershipPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          {/* Top Text Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 md:items-start justify-between mb-16 md:mb-20">
            <div className="md:w-1/3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F3D]">
                Leadership<span className="text-[#FF6B5A]">.</span>
              </h1>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg md:text-xl text-[#606060] leading-relaxed max-w-3xl">
                At Sanjivani Edge, leadership is built on experience, accountability, and a deep understanding of how people, technology, and governance come together to drive sustainable growth. Our leadership team brings decades of hands-on expertise across enterprise transformation, human capital strategy and operational excellence - guiding organizations through complexity with clarity and purpose.
              </p>
            </div>
          </div>

          {/* Full Width Image Section */}
          <div className="relative h-[300px] md:h-[600px] w-full rounded-2xl overflow-hidden">
              <Image 
                src="/leadership/hero-leadership.png" 
                alt="Sanjivani Edge Leadership Team" 
                fill
                className="object-cover object-center"
                priority
              />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 space-y-24 pb-24">
        {/* Debayan Bhattacharya */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 order-2 lg:order-2">
                 <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden bg-[#F5F5F7]">
                    <Image
                        src="/leadership/debayan.png"
                        alt="Debayan Bhattacharya"
                        fill
                        className="object-cover object-top"
                    />
                 </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] mb-2">Debayan Bhattacharya<span className="text-[#FF6B5A]">.</span></h2>
                <div className="w-full h-px bg-gray-200 my-8"></div>
                
                <div className="space-y-4">
                    <LeaderAccordionItem 
                        title="CEO & Managing Director" 
                        content="Omnichannel assistance designed for responsiveness and experience. Leading the company with a vision for sustainable growth and technological innovation."
                        isOpen={true}
                    />
                    <LeaderAccordionItem 
                        title="Strategic Leadership" 
                        content="Driving strategic initiatives that position Sanjivani Edge as a leader in the IT services sector, focusing on long-term value creation for clients and stakeholders."
                    />
                    <LeaderAccordionItem 
                        title="Driving Digital and Organizational Transformation" 
                        content="Spearheading digital transformation efforts to modernize enterprise operations and enhance organizational agility through cutting-edge technology solutions."
                    />
                </div>
            </div>
        </section>

        {/* Vivek Bipindada Kolhe */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 order-2 lg:order-1">
                 <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden bg-[#F5F5F7]">
                    <Image
                        src="/leadership/vivek.png"
                        alt="Vivek Bipindada Kolhe"
                        fill
                        className="object-cover object-top"
                    />
                 </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] mb-2">Vivek Bipindada Kolhe<span className="text-[#FF6B5A]">.</span></h2>
                 <div className="w-full h-px bg-gray-200 my-8"></div>

                <div className="space-y-4">
                    <LeaderAccordionItem 
                        title="Chairman & Visionary Leader" 
                        content="Omnichannel assistance designed for responsiveness and experience. Guiding the organization with a focus on ethical leadership and community impact."
                        isOpen={true}
                    />
                    <LeaderAccordionItem 
                        title="A Leader with Purpose and People-Centric Vision" 
                        content="Believing in the power of people to drive change, fostering a culture of inclusivity, empowerment, and continuous learning within the organization."
                    />
                    <LeaderAccordionItem 
                        title="Driving Social Impact Across Sectors" 
                        content="Leveraging technology and resources to create positive social change, addressing critical challenges in education, healthcare, and rural development."
                    />
                </div>
            </div>
        </section>

        {/* Shantham Shukla */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             <div className="lg:col-span-5 order-2 lg:order-2">
                 <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden bg-[#F5F5F7]">
                    <Image
                        src="/leadership/shantham.png"
                        alt="Shantham Shukla"
                        fill
                        className="object-cover object-top"
                    />
                 </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] mb-2">Shantham Shukla<span className="text-[#FF6B5A]">.</span></h2>
                 <div className="w-full h-px bg-gray-200 my-8"></div>

                <div className="space-y-4">
                    <LeaderAccordionItem 
                        title="Chief Executive Officer" 
                        content="Omnichannel assistance designed for responsiveness and experience. Overseeing global operations and ensuring operational excellence across all service lines."
                        isOpen={true}
                    />
                    <LeaderAccordionItem 
                        title="Strategic Leadership" 
                        content="Formulating and executing strategies that drive operational efficiency, market expansion, and client satisfaction."
                    />
                    <LeaderAccordionItem 
                        title="Driving Digital and Organizational Transformation" 
                        content="Championing the adoption of emerging technologies to streamline processes and deliver superior value to clients."
                    />
                </div>
            </div>
        </section>

        {/* Recognition and Awards */}
        <section className="py-12">
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] mb-6">Recognition and Awards</h2>
                <p className="text-lg text-[#606060] leading-relaxed">
                    Vivek’s dedication and leadership have earned him accolades including the “Promising Young Leader” title from Navbharat and Navrashtra media groups, and industry recognition for excellence in entrepreneurship from the National Sugar Institute, Kanpur.
                </p>
            </div>
            <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                    src="/leadership/awards.png"
                    alt="Recognition and Awards"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
      </div>

      {/* Ethos Section */}
      <section className="bg-[#F0F4FF] py-20 px-4 relative overflow-hidden">
         {/* Background decoration could go here */}
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] mb-6">The Sanjivani Ethos<span className="text-[#FF6B5A]">.</span></h2>
            <p className="text-lg md:text-xl text-[#1A1F3D] font-medium italic mb-8">
                “Sanjivani Edge believes that progress is not a product — it is a practice.”
            </p>
            <p className="text-[#606060] leading-relaxed mb-8">
                Every partnership, process, and platform reflects this principle. Built on trust, refined through innovation, and measured by precision.
            </p>
            <p className="text-[#606060] leading-relaxed mb-10">
                Sanjivani Edge is not just an IT services company; it is a commitment to responsible transformation.
            </p>
            <Link href="/contact">
                <Button className="bg-[#FFE5E5] text-[#FF6B5A] hover:bg-[#FFD1D1] border border-[#FF6B5A]/20 px-8 py-6 text-lg rounded-xl">
                    CONNECT WITH US <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
         </div>
      </section>
    </main>
  );
}

function LeaderAccordionItem({ title, content, isOpen = false }: { title: string; content: string; isOpen?: boolean }) {
    return (
        <div className="border border-[#E8E4F3] rounded-[10px] bg-[#F8F9FB] overflow-hidden">
            <Accordion type="single" collapsible defaultValue={isOpen ? "item-1" : undefined}>
                <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 [&[data-state=open]]:bg-white">
                        <span className="text-lg font-semibold text-[#1A1F3D] text-left">{title}</span>
                         {/* Icon is handled by AccordionTrigger but we can customize if needed. 
                             The default trigger has a chevron. The design shows a plus/cross or similar. 
                             We'll stick to default Chevron for now as per Shadcn component, 
                             or we could override it. Let's stick to default for simplicity and consistency. 
                             The design has a specific button style on the right. 
                             The Shadcn accordion puts chevron on the right.
                          */}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2 bg-white text-[#606060] text-base leading-relaxed">
                        {content}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
