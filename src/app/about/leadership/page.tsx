import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Fragment } from "react";
import LegacySection from "@/components/ui/legacy-section";
import AuthorLink from "@/components/author-link";

export const metadata = {
    title: "Leadership | Sanjivani Edge",
    description: "Meet the leadership team driving sustainable growth and innovation at Sanjivani Edge.",
};

export default function LeadershipPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative px-4 pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
                {/* Background Waves */}
                <div className="absolute top-40 -right-40 w-[55%] h-full z-0 pointer-events-none opacity-50">
                    <Image
                        src="/deco/bg-waves.webp"
                        alt="Background Waves"
                        fill
                        className="object-contain object-top brightness-0 opacity-10 no-repeat"
                        priority
                    />
                </div>

                <div className="mx-auto max-w-6xl relative z-10">
                    {/* Top Text Section */}
                    <div className="flex flex-col md:flex-row gap-8 md:gap-24 md:items-start justify-between mb-16 md:mb-20">
                        <div className="flex flex-row items-center">
                            <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F3D] ">
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



            {/* Vivek Bipindada Kolhe */}

            <div className="mx-auto max-w-6xl px-4 flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] whitespace-nowrap">Vivek Bipindada Kolhe</h2>
                    <div className="h-px bg-gray-200 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden bg-[#F5F5F7] border-b-10 border-[#0175B2]">
                            <Image
                                src="/leadership/vivek.png"
                                alt="Vivek Bipindada Kolhe"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
                        <div className="space-y-4">
                            <LeaderAccordionItem
                                title="Chairman & Visionary Leader"
                                content="Vivek Bipindada Kolhe is a dynamic leader whose commitment to service and community transformation stems from a legacy of social impact and grassroots leadership. With deep roots in cooperative governance, education, and rural development, Vivek brings purpose-led leadership to Sanjivani Edge - one that blends strategic vision with authentic connection to the communities we serve. "
                                isOpen={true}
                            />
                            <LeaderAccordionItem
                                title="A Leader with Purpose and People-Centric Vision"
                                content={
                                    <>
                                        <p className="mb-4">
                                            From his early days in student leadership to his current roles across cooperative, education, and financial institutions, Vivek has consistently championed causes that strengthen social infrastructure and human capability. Known for his ability to connect with youth and communities, he has built a reputation for bringing practical, impact-oriented solutions to life.
                                        </p>
                                        <p className="mb-2 font-medium text-[#1A1F3D]">He holds significant leadership positions including:</p>
                                        <ul className="list-none space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span><span className="font-medium text-[#1A1F3D]">Chairman</span> – Sahakar Maharshi Shankarrao Kolhe Cooperative Sugar Factory Ltd.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span><span className="font-medium text-[#1A1F3D]">Trustee</span> – Sanjivani Rural Education Society (Sanjivani University)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span><span className="font-medium text-[#1A1F3D]">Director</span> – Indian Farmers Fertilizer Cooperative (IFFCO)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span><span className="font-medium text-[#1A1F3D]">Director</span> – Maharashtra State Cooperative Sugar Factories Federation</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span><span className="font-medium text-[#1A1F3D]">Director</span> – Ahmednagar District Central Cooperative Bank Ltd.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span><span className="font-medium text-[#1A1F3D]">Chairman</span> – Kopargaon Industrial Cooperative Society (Estate) Ltd.</span>
                                            </li>
                                        </ul>
                                    </>
                                }
                            />
                            <LeaderAccordionItem
                                title="Driving Social Impact Across Sectors"
                                content={
                                    <>
                                        <p className="mb-4">
                                            Vivek’s journey reflects a blend of enterprise building, community service, and institutional leadership:
                                        </p>
                                        <ul className="list-none space-y-4">
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span>He launched employment initiatives in Kopargaon, including the city’s first BPO call center.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span>As a catalyst for youth engagement and empowerment, he founded <span className="font-medium text-[#1A1F3D]">Sanjivani Yuva Pratishthan</span>, inspiring thousands to work toward social unity, health, education, environment, and agricultural development.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span>During the COVID-19 pandemic, he led the establishment of the <span className="font-medium text-[#1A1F3D]">Sanjivani Dedicated COVID Health Care Center</span>, offering free treatment, medicines, ambulance services, and care to hundreds of patients in need.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-[#FF6B5A] mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-current" />
                                                <span>He has organized and supported initiatives such as blood donation camps, mobile health clinics, tree plantations, community weddings for underprivileged families, flood relief efforts, and more — all reinforcing his belief that service is a duty.</span>
                                            </li>
                                        </ul>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-full bg-[#F9F7FC] py-24">
                <div className="mx-auto max-w-6xl px-4 pb-4">
                    {/* Debayan Bhattacharya */}
                    <section className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] whitespace-nowrap">Debayan Bhattacharya</h2>
                            <div className="h-px bg-gray-200 flex-grow"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <div className="lg:col-span-5 order-2 lg:order-2">
                                <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden bg-[#F5F5F7] border-b-10 border-[#0175B2]">
                                    <Image
                                        src="/leadership/debayan.webp"
                                        alt="Debayan Bhattacharya"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            </div>
                            <div className="lg:col-span-7 order-1 lg:order-1 flex flex-col justify-center">
                                <div className="space-y-4">
                                    <LeaderAccordionItem
                                    title="CEO & Managing Director"
                                    content="Debayan Bhattacharya is a seasoned enterprise leader with over two decades of experience in building, scaling and transforming high-performance organizations across global and Indian markets. As CEO and Managing Director of Sanjivani Edge, he plays a pivotal role in shaping the company’s strategic direction, governance framework and long-term growth roadmap.
Known for his ability to align business goals with people strategy, Debayan brings a rare combination of strategic vision and operational depth. His leadership philosophy centres on creating future-ready enterprises by integrating talent intelligence, digital innovation and ethical governance.
A Hogan Certified professional, Debayan leverages scientifically backed personality and leadership assessment frameworks to build stronger leadership pipelines, enhance organizational culture and drive sustainable performance across teams."
                                    isOpen={true}
                                />
                                    <LeaderAccordionItem
                                        title="Strategic Leadership"
                                        content="Throughout his career, Debayan has led large-scale talent acquisition and workforce transformation initiatives that have enabled organizations to expand rapidly while maintaining quality and cultural integrity. He has successfully guided businesses through complex phases of growth, restructuring, and change - ensuring that people strategies remain closely aligned with business objectives."
                                    />
                                    <LeaderAccordionItem
                                        title="Driving Digital and Organizational Transformation"
                                        content="A strong advocate of data-driven decision-making, Debayan has spearheaded enterprise-wide digital transformation programs focused on recruitment technology, predictive analytics, and workforce intelligence. His work has consistently delivered measurable improvements in efficiency, scalability, and long-term organizational agility.
He has also been instrumental in designing scalable talent supply chains and leadership pipelines, helping organizations prepare for future skill demands while strengthening succession planning and leadership continuity.
Debayan is widely regarded as a trusted advisor to boards and senior leadership teams, offering strategic counsel on human capital, organizational design, and transformation initiatives. His leadership style emphasizes ethical governance, transparency, and accountability - fostering cultures that encourage innovation, collaboration, and sustained performance.
Under his guidance, Sanjivani Edge continues to evolve as a trusted partner for enterprises seeking responsible, people-centric digital transformation.
"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 space-y-24 py-24">
                {/* Shantham Shukla */}
                <section className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] whitespace-nowrap">Dr. Shantam Shukla</h2>
                        <div className="h-px bg-gray-200 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                         <div className="lg:col-span-5 order-1 lg:order-1">
                            <div className="relative h-[500px] w-full rounded-[20px] overflow-hidden bg-[#F5F5F7] border-b-10 border-[#0175B2]">
                                <Image
                                    src="/leadership/shantham.png"
                                    alt="Shantham Shukla"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                         <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col justify-center">
                            <div className="space-y-4">
                                <LeaderAccordionItem
                                    title={
                                        <span className="flex items-center gap-2 flex-wrap">
                                            <span>Director</span>
                                            <span className="text-gray-300">|</span>
                                            <span>Author</span>
                                            <span className="text-sm font-normal text-gray-500 flex items-center gap-1">
                                                (
                                                <AuthorLink>Book Link</AuthorLink>
                                                )
                                            </span>
                                        </span>
                                    }
                                    content={
                                        <div className="space-y-4">
                                            <p>
                                                Dr. Shantam Shukla is a strategy and innovation professional with deep experience across academia and industry. A Fellow (Ph.D.) in Business Policy from Indian Institute of Management Ahmedabad, he works at the intersection of strategy, innovation, and institutional design.
                                            </p>
                                            <p className="text-bold">Dr.Shantam Shukla is also a co - author to a book named <span className="font-bold">Strategic management</span> &nbsp; -  <AuthorLink>  Amazon</AuthorLink>.
                                            </p>
                                        </div>
                                    }
                                    isOpen={true}
                                />
                                <LeaderAccordionItem
                                    title="Strategic Leadership"
                                    content={
                                        <div className="space-y-4">
                                            <p>
                                                Dr. Shukla has led and advised strategy initiatives across FMCG, manufacturing, and technology sectors, helping organizations build durable competitive advantage. He serves on Strategy Advisory Boards of multiple firms and is a co-founder of Opinova, an open-innovation venture rooted in his research.
                                            </p>
                                            <p>
                                                His work is guided by a belief that meaningful progress is created when knowledge, empathy, and disciplined execution come together to build systems of long-term, shared value.
                                            </p>
                                        </div>
                                    }
                                />
                                <LeaderAccordionItem
                                    title="Driving Digital and Organizational Transformation"
                                    content={
                                        <p>
                                            At the intersection of strategy and institutional design, Dr. Shukla drives the adoption of digital technologies not just as tools, but as enablers of cultural evolution. He focuses on building agile, data-informed organizational structures that can rapidly adapt to technological shifts. His approach ensures that digital transformation at Sanjivani Edge is human-centric, fostering a workspace where innovation is embedded in daily operations and shared value is continuously created.
                                        </p>
                                    }
                                />
                            </div>
                        </div>
                        
                       
                       

                    </div>
                </section>

                {/* Recognition and Awards */}
                <section className="lg:py-12 py-6">
                    <div className="text-center mb-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F3D] mb-6">Recognition and Awards</h2>
                        <p className="text-lg text-[#606060] leading-relaxed">
                            Vivek’s dedication and leadership have earned him accolades including the “Promising Young Leader” title from Navbharat and Navrashtra media groups, and industry recognition for excellence in entrepreneurship from the National Sugar Institute, Kanpur.
                        </p>
                    </div>
                    <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border-b-10 border-[#0175B2]">
                        <Image
                            src="/leadership/leader.webp"
                            alt="Recognition and Awards"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>
            </div>

            {/* Ethos Section */}

            {/* The Legacy Ahead Section  */}
            <LegacySection
                title="The Sanjivani Ethos."
                paragraphs={[
                    (<Fragment key="p1">
                        <span className="font-semibold text-[#1A1F3D]">Sanjivani Edge believes that progress is not a product<br /> — it is a practice.</span>{" "}
                    </Fragment>),
                    (<Fragment key="p2">
                        <span className="text-sm">
                            Every partnership, process, and platform reflects this principle.<br /><br />Built on trust, refined through innovation, and executed with precision — <br /><br />Sanjivani Edge is not just an IT services company; it is a commitment to responsible transformation.</span>
                    </Fragment>),
                ]}
                ctaHref="/contact"
                ctaLabel="Start Your Project"
            />

        </main>
    );
}

function LeaderAccordionItem({ title, content, isOpen = false }: { title: React.ReactNode; content: React.ReactNode; isOpen?: boolean }) {
    return (
        <div className="rounded-[10px] overflow-hidden border border-[#E8E4F3]">
            <Accordion type="single" collapsible defaultValue={isOpen ? "item-1" : undefined}>
                <AccordionItem
                    value="item-1"
                    className="border-b-0 data-[state=open]:bg-[#E2E2E280] data-[state=closed]:bg-[#E8E4F380] transition-colors duration-300"
                >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-transparent [&[data-state=open]]:bg-transparent">
                        <span className="text-lg font-semibold text-[#1A1F3D] text-left">{title}</span>
                        {/* Icon is handled by AccordionTrigger but we can customize if needed. 
                             The default trigger has a chevron. The design shows a plus/cross or similar. 
                             We'll stick to default Chevron for now as per Shadcn component, 
                             or we could override it. Let's stick to default for simplicity and consistency. 
                             The design has a specific button style on the right. 
                             The Shadcn accordion puts chevron on the right.
                          */}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2 bg-transparent text-[#606060] text-base leading-relaxed">
                        {content}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
