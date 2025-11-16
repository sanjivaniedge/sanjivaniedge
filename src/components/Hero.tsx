import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DotMatrixBackground from "@/components/dot-matrix-bg";
import { EdgeLinkButton } from "@/components/ui/edge-link-button";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { PixelatedCanvas } from "./ui/pixelated-canvas";

function Stat({ label, value, desc }: { label: string; value: string; desc: string }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const numeric = parseInt(value.replace(/[^0-9]/g, ""));
        const suffix = value.replace(/[0-9]/g, "");
        const obj = { n: 0 };
        gsap.to(obj, {
            n: numeric,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
                el.textContent = `${Math.round(obj.n)}${suffix}`;
            },
        });
    }, [value]);
    return (
        <div className="bg-[color:var(--tile-fill)] p-10">
            <div ref={ref} className="text-6xl md:text-7xl font-semibold text-brand">{value}</div>
            <div className="mt-8 text-xl font-semibold text-foreground">{label}</div>
            <div className="mt-2 text-sm text-muted">{desc}</div>
        </div>
    );
}

function SpeedoCounter({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obj = { n: 0 };
        const update = () => {
            el.textContent = `${Math.round(obj.n)}${suffix}`;
        };
        const tl = gsap.timeline();
        tl.to(obj, { n: value * 0.7, duration: 0.5, ease: "power3.in", onUpdate: update }, 0)
            .to(el, { scale: 1.06, duration: 0.5, ease: "power3.in" }, 0)
            .to(obj, { n: value + 4, duration: 0.4, ease: "power3.out", onUpdate: update }, ">")
            .to(el, { scale: 1.02, duration: 0.4, ease: "power3.out" }, "<")
            .to(obj, { n: value, duration: 0.3, ease: "power1.out", onUpdate: update }, ">")
            .to(el, { scale: 1, duration: 0.3, ease: "power1.out" }, "<");
    }, [value, suffix]);
    return <div ref={ref} className={className}>{`${value}${suffix}`}</div>;
}
function CapabilityCard({ title, points, href, illus }: { title: string; points: string[]; href: string; illus: "screen" | "cloud" | "shield" }) {
    return (
        <CardSpotlight radius={650} color="rgba(22,117,244,0.4)" className="rounded-xl border border-[color:var(--tile-stroke)] bg-[color:var(--tile-fill)] p-8 flex items-center justify-between">
            <div className="w-fullbg-white">
                <div className="text-xl font-semibold text-foreground">{title}</div>
                <ul className="mt-4 space-y-2">
                    {points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-muted">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--tile-stroke)]" />
                            <span className="text-black">{p}</span>
                        </li>
                    ))}
                </ul>
                <Link href={href} className="mt-4 inline-block font-medium hover:text-brand">
                    {`Explore ${title} >`}
                </Link>
            </div>
            <div className="ml-8 opacity-80">
                {illus === "screen" && (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <rect x="20" y="20" width="70" height="50" rx="6" fill="#EEE8F5" stroke="#C9C4D6" />
                        <rect x="25" y="28" width="40" height="6" rx="3" fill="#C9C4D6" />
                        <circle cx="85" cy="80" r="18" fill="#C9C4D6" />
                        <path d="M80 80h10" stroke="#726A83" strokeWidth="3" />
                    </svg>
                )}
                {illus === "cloud" && (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <path d="M44 72c0-10 8-18 18-18 6 0 11 3 14 7 2-1 4-2 6-2 9 0 16 7 16 16s-7 16-16 16H52c-9 0-16-7-16-16 0-1 0-2 0-3" fill="#EEE8F5" stroke="#C9C4D6" strokeWidth="2" />
                        <rect x="50" y="84" width="28" height="10" rx="2" fill="#C9C4D6" />
                        <circle cx="92" cy="90" r="16" fill="#C9C4D6" />
                    </svg>
                )}
                {illus === "shield" && (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <path d="M60 24l26 12v18c0 20-12 32-26 40-14-8-26-20-26-40V36l26-12z" fill="#EEE8F5" stroke="#C9C4D6" strokeWidth="2" />
                        <path d="M60 42v30" stroke="#726A83" strokeWidth="3" />
                        <path d="M48 54h24" stroke="#726A83" strokeWidth="3" />
                    </svg>
                )}
            </div>
        </CardSpotlight>
    );
}
function CapabilitiesCarousel() {
    const items = [
        { title: "Software Development", points: ["Custom applications", "Web platforms", "Enterprise integration"], href: "/services/software", illus: "screen" as const },
        { title: "Cloud Services", points: ["Cloud consulting", "Migration", "Infrastructure management"], href: "/services/cloud", illus: "cloud" as const },
        { title: "Cybersecurity", points: ["Network security", "Data protection", "Vulnerability assessment"], href: "/services/cybersecurity", illus: "shield" as const },
        { title: "IT Infrastructure", points: ["Servers & networks", "Data centers", "Hardware & software support"], href: "/services/infra", illus: "screen" as const },
    ];
    const pageCount = Math.max(1, Math.ceil(items.length / 4));
    const slides = Array.from({ length: pageCount }, (_, i) => items.slice(i * 4, i * 4 + 4));
    const [page, setPage] = useState(0);
    return (
        <div>
            <div className="mt-8 overflow-hidden">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${page * 100}%)` }}>
                    {slides.map((slide, i) => (
                        <div key={i} className="w-full flex-shrink-0 grid gap-6 md:grid-cols-2">
                            {slide.map((c) => (
                                <CapabilityCard key={c.title} title={c.title} points={c.points} href={c.href} illus={c.illus} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-10 flex items-center justify-center">
                <div className="inline-flex overflow-hidden rounded-2xl border border-[color:var(--tile-stroke)] bg-white">
                    <button className="h-12 w-12 flex items-center justify-center border-r border-[color:var(--tile-stroke)]" onClick={() => setPage((p) => (p - 1 + pageCount) % pageCount)}>
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button className="h-12 w-12 flex items-center justify-center" onClick={() => setPage((p) => (p + 1) % pageCount)}>
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
export default function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={scrollRef} className="overflow-hidden ">
            <DotMatrixBackground
                className="absolute inset-0 -z-10 p-2"
                colors={[[180, 190, 210], [22, 117, 244]]}
                opacities={[0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.9, 1]}
                dotSize={5}
            />
            {/* Hero Section  */}
            <section className="relative max-w-6xl grid gap-6 py-20 text-center md:py-28 ">
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
            <section className="max-w-6xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-10 divide-white rounded-xl overflow-hidden py-10 ">
                <Stat label="Integrated Domains" value="8" desc="Full-Stack Technology & Workforce Solutions" />
                <Stat label="Delivery Governance" value="100%" desc="Structured, Reliable & Outcome-Driven Execution" />
                <Stat label="Engineering & Process Capabilities" value="200+" desc="Across ERP, Cloud, Cyber & BPO" />

            </section>

            {/* Evolution Section  */}
            <section className="max-w-6xl py-20">
                <div className="flex lg:justify-end items-center flex-row">
                    {/* <div className="h-px bg-black" /> */}
                    <div className=" text-4xl md:text-5xl font-medium tracking-wide text-foreground">
                        The Evolution<span className="text-accent">.</span>
                    </div>
                </div>
                <div className="grid gap-12 pt-10 md:grid-cols-2 items-start">
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
                        <EdgeLinkButton className="bg-[#FF6B5A] text-white" href="/contact">BUTTON</EdgeLinkButton>
                    </div>
                    <div className="relative flex flex-col items-center justify-center py-8">
                        <div className="absolute inset-0 -z-10 -top-20  lg:left-[300px]">
                            <Image src="/deco/bg-waves.webp" alt="bg-waves" width={1200} height={600} className="w-full lg:h-[500px]" />
                        </div>

                        <SpeedoCounter value={60} suffix="+" className="text-[160px] md:text-[220px] font-semibold text-brand leading-none lg:ml-32 ml-0" />
                        <div className="mt-2 text-xl lg:text-right text-foreground">Years in Business</div>

                    </div>
                </div>
            </section>

            {/* Capabilities Section  */}
            <section id="capabilities" className="max-w-6xl py-16">
                <div className="grid md:grid-cols-2 items-start">
                    <h2 className=" text-4xl md:text-5xl font-medium tracking-wide text-foreground">Our Capabilities<span className="text-accent">.</span></h2>
                    <p className="md:text-right text-muted">Eight domains. One integrated vision, to build digital systems that are stable today and ready for tomorrow.</p>
                </div>
                <CapabilitiesCarousel />
            </section>

            {/* Philosophy Section  */}
            <section id="philosophy" className="relative max-w-6xl py-20">
                <div className="absolute inset-0 -z-10 opacity-30">
                    <Image src="/deco/bg-waves.webp" alt="bg-waves" width={600} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-6">
                    <div className="h-px flex-1 bg-[color:var(--tile-stroke)]/80" />
                    <h2 className=" text-4xl md:text-5xl font-medium tracking-wide text-foreground">The Philosophy<span className="text-accent">.</span></h2>
                </div>
                <div className="grid gap-12 pt-10 md:grid-cols-2 item-end ">
                    <div className="rounded-2xl overflow-hidden border border-[color:var(--tile-stroke)] bg-white">
                        <PixelatedCanvas
                            src="/images/philosophy.webp"
                            width={600}
                            height={400}
                            cellSize={4}
                            dotScale={1}
                            shape="circle"
                            backgroundColor="#000000"
                            dropoutStrength={0.00001}
                            interactive
                            distortionStrength={0.1}
                            distortionRadius={100}
                            distortionMode="repel"
                            followSpeed={0.2}
                            jitterStrength={2}
                            jitterSpeed={1}
                            sampleAverage
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="space-y-6 flex flex-col justify-end">
                        <p className="text-foreground/80">Technology is only as strong as the values behind it.</p>
                        <p className="text-foreground/80"><span className="font-semibold">Sanjivani Edge</span> operates on the same foundation that shaped its legacy, integrity, collaboration, and purposeful growth.</p>
                        <p className="text-foreground/80">In a world driven by speed, <span className="font-semibold">Sanjivani Edge</span> emphasizes direction.</p>
                        <p className="text-foreground/80">Innovation here is not about disruption, it’s about designing systems that last.</p>
                        <EdgeLinkButton className="bg-[#FF6B5A] text-white max-w-[225px]" href="/philosophy">KNOW MORE</EdgeLinkButton>
                    </div>
                </div>
            </section>

            {/* Industries Served Section  */}
            <section id="industries" className="max-w-6xl py-16">
                <h3 className="text-xl font-semibold">Industries Served.</h3>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="tile rounded-xl p-6">
                        <div className="text-sm font-medium">01. Manufacturing</div>
                        <p className="mt-2 text-sm text-muted">Digital modernization for plants and supply chains.</p>
                    </div>
                    <div className="tile rounded-xl p-6">
                        <div className="text-sm font-medium">02. BFSI</div>
                        <p className="mt-2 text-sm text-muted">Secure systems and compliant data operations.</p>
                    </div>
                </div>
            </section>

            {/* The Legacy Ahead Section  */}
            <section className="max-w-6xl py-16">
                <div className="relative rounded-2xl border border-[color:var(--tile-stroke)] overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/Images/legacy.webp')] bg-cover bg-left rotate-180" />
                    <div className="relative grid md:grid-cols-2 gap-6 p-8 md:p-10 bg-white/70">
                        <div className="hidden md:block" />
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-semibold text-foreground">The Legacy Ahead<span className="text-accent">.</span></h3>
                            <p className="text-foreground/80">From cooperative fields to global networks, the journey continues. What began as an enterprise of farmers and visionaries now empowers enterprises of coders and creators.</p>
                            <p className="text-foreground/80"><span className="font-semibold">Sanjivani Edge</span> carries forward that same promise, to build systems that sustain growth and ideas that outlast change.</p>
                            <EdgeLinkButton className="bg-[#FF6B5A] text-white border-[#FF6B5A] max-w-[220px]" href="/legacy">DISCOVER</EdgeLinkButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
