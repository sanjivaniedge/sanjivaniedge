import gsap from "gsap";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DotMatrixBackground from "@/components/dot-matrix-bg";
import { EdgeLinkButton } from "@/components/ui/edge-link-button";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";


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
function CapabilityCard({ title, points, href, illus }: { title: string; points: string[]; href: string; illus: "screen" | "cloud" | "shield" | "infra" | "emerge" | "consulting" | "bpo" | "erp" }) {
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
                {illus === "screen" && (
                    <Image src="/figma/capabilities-software.png" alt="Software illustration" width={200} height={200} className="object-contain w-auto h-full" />
                )}
                {illus === "cloud" && (
                    <Image src="/figma/capabilities-cloud.png" alt="Cloud illustration" width={200} height={200} className="object-contain w-auto h-full" />
                )}
                {illus === "shield" && (
                    <Image src="/figma/capabilities-shield.png" alt="Cybersecurity illustration" width={200} height={200} className="object-contain w-auto h-full" />
                )}
                {illus === "infra" && (
                    <Image src="/figma/capabilities-infra.png" alt="Infrastructure illustration" width={200} height={200} className="object-contain w-auto h-full" />
                )}
                 {illus === "emerge" && (
                    <Image src="/figma/Emerge.png" alt="Emerging Technologies" width={200} height={200} className="object-contain w-auto h-full" />
                )}

                {illus === "consulting" && (
                    <Image src="/figma/capabilities-consulting-725558.png" alt="Consulting & Support illustration" width={200} height={200} className="object-contain w-auto h-full" />
                )}
                {illus === "bpo" && (
                    <Image src="/figma/capabilities-bpo-c73d5a.png" alt="BPO Services illustration" width={200} height={200} className="object-contain w-auto h-full" />
                )}
                {illus === "erp" && (
                    <Image src="/figma/capabilities-erp-2f97a5.png" alt="ERP Services illustration" width={200} height={200} className="object-contain w-auto h-full" />
                )}
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
            illus: "screen" | "cloud" | "shield" | "infra" | "emerge" | "consulting" | "bpo" | "erp";
            width: number;
        }>
    > = [
            [
                { title: "Software Development", points: ["Custom applications", "Web platforms", "Enterprise integration"], href: "/services/software", illus: "screen", width: 538 },
                { title: "Cloud Services", points: ["Cloud consulting", "Migration", "Infrastructure management"], href: "/services/cloud", illus: "cloud", width: 676 },
                { title: "Cybersecurity", points: ["Network security", "Data protection", "Vulnerability assessment"], href: "/services/cybersecurity", illus: "shield", width: 606 },
                { title: "IT Infrastructure", points: ["Servers & networks", "Data centers", "Hardware & software support"], href: "/services/infra", illus: "infra", width: 606 },
            ],
            [
                { title: "Emerging Technologies", points: ["AI & Machine Learning", "Blockchain", "Internet of Things"], href: "/services/emerge", illus: "emerge", width: 538 },
                { title: "Consulting & Support", points: ["IT strategy", "Helpdesk", "AMC", "Knowledge transfer"], href: "/services/consulting", illus: "consulting", width: 676 },
                { title: "BPO Services", points: ["Customer support", "Finance & HR operations", "Back-office support"], href: "/services/bpo", illus: "bpo", width: 606 },
                { title: "ERP Services (SAP & Oracle)", points: ["ERP planning", "Implementation", "Support & maintenance"], href: "/services/erp", illus: "erp", width: 606 },
            ],
        ];
    const [page, setPage] = useState(0);
    const flatItems = pages.flat();
    const [mIndex, setMIndex] = useState(0);
    return (
        <div>
            {/* Desktop (lg+) — keep 4-card pages without animation */}
            <div className="hidden lg:block">
                <div className="mt-[56px]">
                    <div className="flex flex-wrap justify-center gap-4">
                        {pages[page].map((c, i) => (
                            <div key={`${c.title}-${c.width}-${i}`} className="w-full md:flex-none" style={{ width: c.width }}>
                                <CapabilityCard title={c.title} points={c.points} href={c.href} illus={c.illus} />
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
            <div className="lg:hidden">
                <div className="mt-6 px-4 overflow-hidden">
                    {(() => {
                        const c = flatItems[mIndex];
                        return (
                            <div className="flex justify-center">
                                <div className="w-full max-w-[360px] ">
                                    <CapabilityCard title={c.title} points={c.points} href={c.href} illus={c.illus} />
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
            <Image src="/Images/Manufacturing.webp" alt="Industry 1" width={300} height={220} className="w-[70%]" />
        );
    }
    if (index === 1) {
        return (
            <Image src="/Images/BFSI.webp" alt="Industry 2" width={300} height={220} className="w-[70%]" />
        );
    }
    if (index === 2) {
        return (
            <Image src="/Images/Healthcare.webp" alt="Industry 3" width={300} height={220} className="w-[70%]" />
        );
    }
    if (index === 3) {
        return (
            <Image src="/Images/Education.webp" alt="Industry 4" width={300} height={220} className="w-[70%]" />
        );
    }
    if (index === 4) {
        return (
            <Image src="/Images/PublicSector.webp" alt="Industry 5" width={300} height={220} className="w-[70%]" />
        );
    }
   
}
export default function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const industriesItems = [
        {
            title: "01. Manufacturing",
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
          title:"04. Education",
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
            <DotMatrixBackground
                className="absolute inset-0 -z-10 p-2"
                colors={[[180, 190, 210], [22, 117, 244]]}
                opacities={[0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.9, 1]}
                dotSize={5}
            />
            {/* Hero Section  */}
            <section className="relative h-[80vh] md:h-screen max-w-6xl grid gap-6 py-16 md:py-28 px-4 text-center ">
                <div className="bg-white/50 max-w-3xl mx-auto p-4 rounded-full space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-3xl text-4xl font-medium leading-tight tracking-tight md:text-6xl "
                    >
                        Rooted in Values.
                        <br />
                        <span className="font-bold">Engineered for the <span className="text-brand">Future</span>.</span>
                    </motion.h1>
                    <p className="mx-auto max-w-2xl pb-10">
                        Delivering IT, ERP, and Digital Transformation Solutions that power enterprise evolution.
                    </p>
                    <div className="mx-auto">
                        <EdgeLinkButton href="/solutions">EXPLORE THE EDGE</EdgeLinkButton>
                    </div>
                </div>
            </section>

            {/* Stats Section  */}
            <section className="max-w-6xl grid grid-cols-1 md:grid-cols-3 justify-between gap-6 md:gap-10 divide-y md:divide-y-0 md:divide-x-10 divide-white rounded-xl overflow-hidden px-4 md:px-0 md:py-24">

                <Stat label="Integrated Domains" value="8" desc="Full-Stack Technology & Workforce Solutions" />
                <Stat label="Delivery Governance" value="100%" desc="Structured, Reliable & Outcome-Driven Execution" />
                <Stat label="Engineering & Process Capabilities" value="200+" desc="Across ERP, Cloud, Cyber & BPO" />

            </section>

            {/* Evolution Section  */}
            <section className="relative max-w-6xl py-14 md:py-20 px-4">
                <div className="absolute -z-10 right-0 -top-12">
                    <Image src="/deco/bg-waves.webp" alt="bg-waves" width={545} height={522} className="" />
                </div>
                <div className="flex items-center gap-6 md:gap-14">
                    <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
                    <h2 className="text-4xl md:text-[64px] font-medium text-[#1A1F3D]">The Evolution<span className="text-accent">.</span></h2>
                </div>
                <div className="mt-8 md:mt-10 grid md:grid-cols-2 items-center gap-10 md:gap-[176px] py-4">
                    <div className="space-y-[54px] max-w-[540px]">
                        <div className="space-y-6">
                            <p className="text-foreground/80">
                                Sanjivani Edge is the technology and workforce solutions enterprise of the Sanjivani Group, where engineering precision, digital intelligence, and human expertise converge.
                            </p>
                            <p className="text-foreground/80">
                                The company enables businesses to modernize responsibly through solutions spanning ERP, digital engineering, cybersecurity, and workforce transformation.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Where factories once stood, now stand data centers.",
                                    "Where crops once grew, now grow code and capability.",
                                    "The essence remains the same, progress, built on purpose.",
                                ].map((t) => (
                                    <li key={t} className="flex items-start gap-3">
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </span>
                                        <span className="text-muted">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <EdgeLinkButton className="bg-[#FF6B5A] text-white" href="/contact">BUTTON</EdgeLinkButton>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 md:gap-[31px]">
                        <SpeedoCounter value={60} suffix="+" className="text-[120px] md:text-[257px] font-extrabold tracking-[-0.04em] leading-none text-brand" />
                        <div className="text-[18px] md:text-[26px] text-black">Years in Business</div>
                    </div>
                </div>
            </section>

            {/* Capabilities Section  */}
            <section id="capabilities" className="max-w-6xl py-14 md:py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-[206px]">
                    <h2 className=" text-4xl md:text-[48px]  xl:text-[64px] leading-tight font-medium text-[#1A1F3D]">Our Capabilities<span className="text-accent">.</span></h2>
                    <p className="md:text-right text-[#606060] max-w-[526px]">Eight domains. One integrated vision, to build digital systems that are stable today and ready for tomorrow.</p>
                </div>
                <CapabilitiesCarousel />
            </section>

            {/* Philosophy Section  */}
            <section id="philosophy" className="relative max-w-6xl py-4 md:py-20 px-4">
                <div className="absolute -z-10 left-[-268px] -top-9 hidden md:block">
                    <Image src="/figma/philosophy-waves.png" alt="bg-waves" width={745} height={722} />
                </div>
                <div className="flex items-center gap-6 md:gap-14">
                    <div className="hidden md:flex h-px flex-1 bg-[color:var(--tile-stroke)]" />
                    <h2 className="text-4xl md:text-[64px] font-medium text-[#1A1F3D]">The Philosophy<span className="text-accent">.</span></h2>
                </div>
                <div className="mt-6 grid md:grid-cols-2 items-center gap-8 md:gap-[99px] py-4">
                    <div className="rounded-2xl overflow-hidden border border-[color:var(--tile-stroke)] bg-white">
                        <Image src="/figma/philosophy-image-281190.png" alt="philosophy" width={604} height={469} className="w-full h-auto" />
                    </div>
                    <div className="space-y-6 md:space-y-[54px]">
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-sm md:text-base text-foreground/80">Technology is only as strong as the values behind it.</p>
                            <p className="text-sm md:text-base text-foreground/80"><span className="font-semibold">Sanjivani Edge</span> operates on the same foundation that shaped its legacy, integrity, collaboration, and purposeful growth.</p>
                            <p className="text-sm md:text-base text-foreground/80">In a world driven by speed, <span className="font-semibold">Sanjivani Edge</span> emphasizes direction.</p>
                            <p className="text-sm md:text-base text-foreground/80">Innovation here is not about disruption, it’s about designing systems that last.</p>
                        </div>
                        <EdgeLinkButton className="bg-[#FF6B5A] text-white max-w-[225px]" href="/philosophy">KNOW MORE</EdgeLinkButton>
                    </div>
                </div>
            </section>

            {/* Industries Served Section  */}
            <section id="industries" className="w-full py-0 md:py-20 max-w-6xl mx-auto relative ">
                <Timeline
                    data={industriesTimeline}
                    title="Industries Served."
                    description="Across sectors, Sanjivani Edge delivers technology that scales intelligently, combining domain depth with operational precision."
                />
            </section>

            {/* The Legacy Ahead Section  */}
            <section className="max-w-6xl px-4 py-12 md:py-16">
                <div className="relative rounded-[5px] border border-[color:var(--tile-stroke)] overflow-hidden">
                    <div className="absolute inset-0">
                        <Image src="/figma/legacy-bg-229f51.png" alt="Legacy background" fill className="object-cover md:object-fill rotate-180" priority />
                    </div>
                    <div className="relative flex justify-center md:justify-end items-center md:items-end px-6 py-8 md:px-[64px] md:py-[67px]">
                        <div className="w-full md:w-[543px] flex flex-col items-end gap-6 md:gap-[46px]">
                            <h3 className="text-2xl md:text-[48px] font-medium text-[#1A1F3D] text-right">The Legacy Ahead<span className="text-accent">.</span></h3>
                            <div className="space-y-4 md:space-y-6 text-right">
                                <p className="text-[#606060] text-[16px] md:text-[18px]">From cooperative fields to global networks, the journey continues. What began as an enterprise of farmers and visionaries now empowers enterprises of coders and creators.</p>
                                <p className="text-[#606060] text-[16px] md:text-[18px]"><span className="font-semibold text-[#1A1F3D]">Sanjivani Edge</span> carries forward that same promise, to build systems that sustain growth and ideas that outlast change.</p>
                            </div>
                            <Link href="/legacy" >
                                <EdgeLinkButton href="/solutions">Discover</EdgeLinkButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

