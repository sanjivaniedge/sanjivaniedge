"use client"

import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CanvasFractalGrid from "@/components/ui/canvas-fractal-grid";
import { EdgeLinkButton } from "@/components/ui/edge-link-button";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { PixelImage } from "@/components/ui/pixel-image";
import LegacySection from "@/components/ui/legacy-section";


function Stat({ label, value, desc }: { label: string; value: string; desc: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Tween | null>(null);
    const objRef = useRef<{ n: number }>({ n: 0 });
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const numeric = parseInt(value.replace(/[^0-9]/g, ""));
        const suffix = value.replace(/[0-9]/g, "");
        const obj = objRef.current;
        const start = () => {
            obj.n = 0;
            tlRef.current = gsap.to(obj, {
                n: numeric,
                duration: 1.2,
                ease: "power2.out",
                onUpdate: () => {
                    el.textContent = `${Math.round(obj.n)}${suffix}`;
                },
            });
        };
        el.textContent = `${numeric}${suffix}`;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        start();
                    }
                });
            },
            { threshold: [0.25, 0.5, 0.75] },
        );
        io.observe(el);
        return () => {
            io.disconnect();
            if (tlRef.current) tlRef.current.kill();
        };
    }, [value]);
    return (
        <div className="bg-[color:var(--tile-fill)] p-6 md:p-10">
            <div ref={ref} className="text-5xl md:text-7xl font-semibold text-brand">{value}</div>
            <div className="mt-6 md:mt-8 text-lg md:text-xl font-semibold text-foreground">{label}</div>
            <div className="mt-2 text-xs md:text-sm text-muted">{desc}</div>
        </div>
    );
}

function SpeedoCounter({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const objRef = useRef<{ n: number }>({ n: 0 });
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obj = objRef.current;
        const update = () => {
            el.textContent = `${Math.round(obj.n)}${suffix}`;
        };
        const tl = gsap.timeline({ paused: true });
        tl.to(obj, { n: value * 0.7, duration: 0.5, ease: "power3.in", onUpdate: update }, 0)
            .to(el, { scale: 1.06, duration: 0.5, ease: "power3.in" }, 0)
            .to(obj, { n: value + 4, duration: 0.4, ease: "power3.out", onUpdate: update }, ">")
            .to(el, { scale: 1.02, duration: 0.4, ease: "power3.out" }, "<")
            .to(obj, { n: value, duration: 0.3, ease: "power1.out", onUpdate: update }, ">")
            .to(el, { scale: 1, duration: 0.3, ease: "power1.out" }, "<");
        tlRef.current = tl;
        update();
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        obj.n = 0;
                        tl.restart();
                    }
                });
            },
            { threshold: [0.25, 0.5, 0.75] },
        );
        io.observe(el);
        return () => {
            io.disconnect();
            tl.kill();
        };
    }, [value, suffix]);
    return <div ref={ref} className={className}>{`${value}${suffix}`}</div>;
}
function CapabilityCard({ title, points, href, illus, imageSrc, imageAlt }: { title: string; points: string[]; href: string; illus?: "screen" | "cloud" | "shield" | "infra" | "emerge" | "consulting" | "bpo" | "erp"; imageSrc?: string; imageAlt?: string }) {

    const getSrc = () => {
        if (imageSrc) return imageSrc;
        switch (illus) {
            case "screen": return "/figma/capabilities-software.png";
            case "cloud": return "/figma/capabilities-cloud.png";
            case "shield": return "/figma/capabilities-shield.png";
            case "infra": return "/figma/capabilities-infra.png";
            case "emerge": return "/figma/Emerge.png";
            case "consulting": return "/figma/capabilities-consulting-725558.png";
            case "bpo": return "/figma/capabilities-bpo-c73d5a.png";
            case "erp": return "/figma/capabilities-erp-2f97a5.png";
            default: return "";
        }
    };
    const finalSrc = getSrc();

    return (
        <div className="cap-card relative h-[420px] md:h-[336px] rounded-[10px] bg-[color:var(--tile-fill)] px-6 py-6 sm:px-8 sm:py-8 md:px-11 md:py-9 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="max-w-xl">
                <div className="text-[22px] sm:text-[26px] md:text-[32px] font-bold text-[#1A1F3D]">{title}</div>
                <ul className="mt-3 md:mt-4 list-disc pl-5 space-y-1 text-[#606060] text-[16px] md:text-[18px]">
                    {points.map((p) => (
                        <li key={p}>{p}</li>
                    ))}
                </ul>
                <Link href={href} className="mt-5 md:mt-6 inline-block font-semibold underline underline-offset-4 text-[#1A1F3D] text-[14px] md:text-[16px]">
                    {`Explore ${title} ›`}
                </Link>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 opacity-80 w-full md:w-[200px] h-[140px] md:h-full flex items-end justify-end">
                <CardContainer containerClassName="py-0 w-full h-full" className="w-full h-full">
                    <CardBody className="w-full h-full">
                        <CardItem translateZ={50} className="w-full h-full cursor-pointer">
                            {finalSrc && <PixelImage src={finalSrc} className="w-full h-full" />}
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </div>
    );
}
function CapabilitiesCarousel() {
    const pages: Array<
        Array<{
            title: string;
            points: string[];
            href: string;
            illus?: "screen" | "cloud" | "shield" | "infra" | "emerge" | "consulting" | "bpo" | "erp";
            imageSrc?: string;
            imageAlt?: string;
            width: number;
        }>
    > = [
            [
                { title: "Software Development", points: ["Custom applications", "Web platforms", "Enterprise integration"], href: "/services/software", illus: "screen", width: 538, imageSrc: "/Images/capabilities/software.webp" },
                { title: "Cloud Services", points: ["Cloud consulting", "Migration", "Infrastructure management"], href: "/services/cloud", illus: "cloud", width: 676, imageSrc: "/Images/capabilities/cloud.webp" },
                { title: "Cybersecurity", points: ["Network security", "Data protection", "Vulnerability assessment"], href: "/services/cybersecurity", illus: "shield", width: 606, imageSrc: "/Images/capabilities/shield.webp" },
                { title: "IT Infrastructure", points: ["Servers & networks", "Data centers", "Hardware & software support"], href: "/services/it-infrastructure", illus: "infra", width: 606, imageSrc: "/Images/capabilities/infra.webp" },
            ],
            [
                { title: "Emerging Technologies", points: ["AI & Machine Learning", "Blockchain", "Internet of Things"], href: "/services/emerging", illus: "emerge", width: 538, imageSrc: "/Images/capabilities/emerge.webp" },
                { title: "Consulting & Support", points: ["IT strategy", "Helpdesk", "AMC", "Knowledge transfer"], href: "/services/consulting", illus: "consulting", width: 676, imageSrc: "/Images/capabilities/consulting.webp" },
                { title: "BPO Services", points: ["Customer support", "Finance & HR operations", "Back-office support"], href: "/services/bpo", illus: "bpo", width: 606, imageSrc: "/Images/capabilities/bpo.webp" },
                { title: "ERP Services (SAP & Oracle)", points: ["ERP planning", "Implementation", "Support & maintenance"], href: "/services/erp", illus: "erp", width: 606, imageSrc: "/Images/capabilities/erp.webp" },
            ],
        ];
    const [page, setPage] = useState(0);
    const flatItems = pages.flat();
    const [mIndex, setMIndex] = useState(0);
    const [winW, setWinW] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
    useEffect(() => {
        const onResize = () => setWinW(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return (
        <div>
            {/* Desktop (lg+) — keep 4-card pages without animation */}
            <div className="hidden lg:block">
                <div className="mt-[56px]">
                    <div className="flex flex-wrap justify-center gap-4">
                        {pages[page].map((c, i) => (
                            <div
                                key={`${c.title}-${c.width}-${i}`}
                                className="w-full md:flex-none"
                                style={{ width: winW >= 1020 && winW < 1540 ? 606 : c.width }}
                            >
                                <CapabilityCard title={c.title} points={c.points} href={c.href} illus={c.illus} imageSrc={c.imageSrc} imageAlt={c.imageAlt} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                    <div className="inline-flex items-center justify-center gap-[10px] p-[20px] rounded-[18px] bg-white ">
                        <button aria-label="Previous" className="h-[88px] w-[88px] flex items-center justify-center cursor-pointer rounded-[12px] border border-[#C9C4D6]" onClick={() => setPage((p) => (p - 1 + pages.length) % pages.length)}>
                            <ChevronLeft className="h-10 w-10" />
                        </button>
                        <button aria-label="Next" className="h-[88px] w-[88px] flex items-center justify-center cursor-pointer rounded-[12px] border border-[#C9C4D6]" onClick={() => setPage((p) => (p + 1) % pages.length)}>
                            <ChevronRight className="h-10 w-10" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet (<lg) — single card with arrows, no animation */}
            <div className="md:hidden">
                <div className="mt-6 px-4 overflow-hidden">
                    {(() => {
                        const c = flatItems[mIndex];
                        return (
                            <div className="flex justify-center">
                                <div className="w-full ">
                                    <CapabilityCard title={c.title} points={c.points} href={c.href} illus={c.illus} imageSrc={c.imageSrc} imageAlt={c.imageAlt} />
                                </div>
                            </div>
                        );
                    })()}
                </div>
                <div className="mt-6 flex items-center justify-center">
                    <div className="inline-flex items-center justify-center gap-[10px] p-[14px] rounded-[18px] bg-white ">
                        <button aria-label="Previous" className="h-[44px] w-[44px] flex items-center justify-center cursor-pointer rounded-[12px] border border-[#C9C4D6]" onClick={() => { setMIndex((i) => (i - 1 + flatItems.length) % flatItems.length); }}>
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button aria-label="Next" className="h-[44px] w-[44px] flex items-center justify-center cursor-pointer rounded-[12px] border border-[#C9C4D6]" onClick={() => { setMIndex((i) => (i + 1) % flatItems.length); }}>
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function IndustryGraphic({ index }: { index: number }) {
    if (index === 0) {
        return (
            <PixelImage src="/Images/Manufacturing.webp" className="w-[70%] h-[220px]" grid="6x4" />
        );
    }
    if (index === 1) {
        return (
            <PixelImage src="/Images/BFSI.webp" className="w-[70%] h-[220px]" grid="6x4" />
        );
    }
    if (index === 2) {
        return (
            <PixelImage src="/Images/Healthcare.webp" className="w-[70%] h-[220px]" grid="6x4" />
        );
    }
    if (index === 3) {
        return (
            <PixelImage src="/Images/Education.webp" className="w-[70%] h-[220px]" grid="6x4" />
        );
    }
    if (index === 4) {
        return (
            <PixelImage src="/Images/PublicSector.webp" className="w-[70%] h-[220px]" grid="6x4" />
        );
    }

}
export default function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [useUpdatedBg, setUseUpdatedBg] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setUseUpdatedBg(true), 1000);
        return () => clearTimeout(t);
    }, []);
    const industriesItems = [
        {
            title: "01. Manufacture",
            description: "Technology is only as strong as the values behind it. Sanjivani Edge operates on the same foundation that shaped its legacy, integrity, collaboration, and purposeful growth.",
            content: <IndustryGraphic index={0} />,
        },
        {
            title: "02. BFSI",
            description: "Trusted systems and compliant operations that scale. Sanjivani Edge enables resilient platforms with strong governance and security.",
            content: <IndustryGraphic index={1} />,
        },
        {
            title: "03. Healthcare",
            description: "Digital care with secure, reliable data pipelines. Sanjivani Edge builds interoperable systems for outcomes that matter.",
            content: <IndustryGraphic index={2} />,
        },
        {
            title: "04. Education",
            description: "Empowering learners with secure, reliable data pipelines. Sanjivani Edge builds interoperable systems for outcomes that matter.",
            content: <IndustryGraphic index={3} />,
        },
        {
            title: "05. Retail",
            description: "Experience-led platforms that convert and retain. Sanjivani Edge delivers scalable commerce technology and analytics.",
            content: <IndustryGraphic index={4} />,
        },
    ];
    const industriesTimeline = industriesItems.map((item) => ({
        title: item.title,
        content: (
            <div className="grid md:grid-cols-2 items-start gap-8">
                <p className="text-muted text-sm md:text-base">{item.description}</p>
                <div className="rounded-2xl border border-[color:var(--tile-stroke)] bg-white/80 flex items-center justify-center p-6">
                    {item.content}
                </div>
            </div>
        ),
    }));

    return (
        <div ref={scrollRef} className="overflow-hidden ">
            <div className="absolute inset-0 -z-10">
                <CanvasFractalGrid
                    dotSize={useUpdatedBg ? 2 : 2}
                    dotSpacing={useUpdatedBg ? 10 : 10}
                    dotOpacity={useUpdatedBg ? 0.8 : 0.8}
                    waveIntensity={useUpdatedBg ? 24 : 30}
                    waveRadius={useUpdatedBg ? 220 : 200}
                    dotColors={["#0075B1", "#18ACD9"]}
                    glowColor=""
                    enableNoise={true}
                    noiseOpacity={0.03}
                    enableMouseGlow={false}
                    enableGradient={false}
                    enableSpacingPulse={false}
                    pulseIntervalMs={1000}
                    pulseDurationMs={250}
                    pulseAmount={0.35}
                />
            </div>
            {/* Hero Section  */}
            <section className="relative h-[95vh] max-w-6xl grid gap-6 pt-20  px-4 text-center ">
                <div className="bg-white/50 max-w-4xl mx-auto p-4 rounded-full space-y-4 flex justify-center items-center flex-col md:mt-[-10vw] mt-[-20vh]">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-6xl text-4xl font-medium leading-tight tracking-tight md:text-6xl "
                    >
                        Rooted in Values<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span>
                        <br />
                        <span className="font-bold">Engineered for the <span className="text-brand">Future</span><span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span></span>
                    </motion.h1>
                    <p className="mx-auto max-w-3xl pb-10 font-bold">
                        Delivering IT, ERP, and Digital Transformation Solutions that power enterprise evolution
                    </p>
                    <div className="mx-auto">
                        <EdgeLinkButton href="/services">EXPLORE THE EDGE</EdgeLinkButton>
                    </div>
                </div>
            </section>

            {/* Stats Section  */}
            <section className="max-w-6xl grid grid-cols-1 md:grid-cols-3 justify-between gap-6 md:gap-10 divide-y md:divide-y-0 md:divide-x-10 divide-white rounded-xl overflow-hidden px-4 md:px-4">

                <Stat label="Integrated Domains" value="8" desc="Full-Stack Technology & Workforce Solutions" />
                <Stat label="Delivery Governance" value="100%" desc="Structured, Reliable & Outcome-Driven Execution" />
                <Stat label="Engineering & Process Capabilities" value="200+" desc="Across ERP, Cloud, Cyber & BPO" />

            </section>

            {/* Evolution Section  */}
            <section className="relative max-w-6xl py-14 md:pt-20 px-4">
                <div className="absolute -z-10 right-0 -top-12">
                    <Image src="/deco/bg-waves.webp" alt="bg-waves" width={545} height={522} className="" />
                </div>
                <div className="flex items-center gap-6 md:gap-14">
                    <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
                    <h2 className="text-4xl md:text-6xl font-medium text-[#1A1F3D]">The Evolution<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span></h2>
                </div>
                <div className="mt-8 md:mt-10 grid md:grid-cols-2 items-center gap-10 md:gap-[176px] py-4">
                    <div className="space-y-[54px] max-w-[540px]">
                        <div className="space-y-6">
                            <p className="text-foreground/80">
                                Sanjivani Edge represents the Group&apos;s transition into the technology era, where domain expertise, engineering precision, and human capability converge to support modern enterprise transformation.
                            </p>
                            <p className="text-foreground/80">

                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Delivering responsible modernization across ERP, digital engineering, cybersecurity, and workforce transformation",
                                    "Extending Sanjivani&apos;s legacy of governance and reliability into the digital age.",
                                    "Building technology ecosystems that enable organizations to scale with clarity, confidence, and continuity.",
                                ].map((t) => (
                                    <li key={t} className="flex   gap-3">
                                        <span className="inline-flex h-6 w-10   ">
                                            <Image src="/figma/evolution-checkbox.svg" alt="check" width={14} height={14} className="" />
                                        </span>
                                        <span className="text-muted">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <EdgeLinkButton className="bg-[#FF6B5A] text-white" href="/about">Know More</EdgeLinkButton>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-[31px]">
                        <SpeedoCounter value={60} suffix="+" className="text-[160px] md:text-[257px] font-extrabold tracking-[-0.04em] leading-none text-brand" />
                        <div className="text-[18px] md:text-[26px] text-black">Years in Business</div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section  */}
            <section id="capabilities" className="max-w-6xl mx-auto py-6 md:pt-10 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16 xl:gap-[140px] 2xl:gap-[206px]">
                    <h2 className=" text-3xl md:text-6xl  leading-tight font-medium text-[#1A1F3D]">Our Capabilities<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span></h2>
                    <p className="md:text-right text-[#606060] max-w-[526px]">Eight domains. One integrated vision, to build digital systems that are stable today and ready for tomorrow.</p>
                </div>
                <CapabilitiesCarousel />
            </section>

            {/* Philosophy Section  */}
            <section id="philosophy" className="relative max-w-6xl py-4 md:pt-20 px-4">
                <div className="absolute -z-10 left-[-268px] -top-9 hidden md:block">
                    <Image src="/figma/philosophy-waves.png" alt="bg-waves" width={745} height={722} />
                </div>
                <div className="flex items-center gap-6 md:gap-14">
                    <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
                    <h2 className="text-4xl md:text-[64px] font-medium text-[#1A1F3D]">The Philosophy<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span></h2>
                </div>
                <div className="mt-6 grid md:grid-cols-2 items-center gap-8 md:gap-[99px] py-4">
                    <CardContainer containerClassName="py-0" className="w-full rounded-lg overflow-hidden border border-[color:var(--tile-stroke)] bg-white">
                        <CardBody className="w-full">
                            <CardItem translateZ={20} className="w-full">
                                <Image src="/figma/philosophy-image-281190.png" alt="philosophy" width={604} height={469} className="w-full h-[469px] object-cover" />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                    <div className="space-y-10 md:space-y-[54px]">
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-sm md:text-base text-foreground/80">Technology is only as strong as the values behind it.</p>
                            <p className="text-sm md:text-base text-foreground/80"><span className="font-semibold">Sanjivani Edge</span> operates on the same foundation that shaped its legacy, integrity, collaboration, and purposeful growth.</p>
                            <p className="text-sm md:text-base text-foreground/80">In a world driven by speed, <span className="font-semibold">Sanjivani Edge</span> emphasizes direction.</p>
                            <p className="text-sm md:text-base text-foreground/80">Innovation here is not about disruption, it’s about designing systems that last.</p>
                        </div>
                        <EdgeLinkButton className="bg-[#FF6B5A] text-white max-w-[225px]" href="/about">KNOW MORE</EdgeLinkButton>
                    </div>
                </div>
            </section>

            {/* Industries Served Section  */}
            <section id="industries" className="w-full py-0 md:pt-10 max-w-6xl mx-auto relative ">
                <Timeline
                    data={industriesTimeline}
                    title={<span>Industries Served<span className="text-[#FF6B5A]">.</span><span className="text-[#17ABD6]">.<span className="text-[#0075B1]">.</span></span></span>}
                    description="Across sectors, Sanjivani Edge delivers technology that scales intelligently, combining domain depth with operational precision."
                />
            </section>

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
    )
}

