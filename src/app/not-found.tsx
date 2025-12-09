import { LegacySection } from "@/components/ui/legacy-section";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section with Coming Soon */}
            <section className="px-4 pt-16 pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-center justify-center text-center">
                        {/* Coming Soon Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0175B2]/10 to-[#17ABD6]/10 px-6 py-2 mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0175B2] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0175B2]"></span>
                            </span>
                            <span className="text-sm font-medium text-[#0175B2]">Coming Soon</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A1F3D] mb-6">
                            Something Amazing
                            <br />
                            <span className="bg-gradient-to-r from-[#0175B2] to-[#17ABD6] bg-clip-text text-transparent">
                                Is on the Way{" "}
                            </span>
                            {/* <span className="text-[#FF6B5A]">.</span> */}
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-[#606060] max-w-2xl mb-12">
                            We&apos;re working hard to bring you something exceptional. This page is currently under construction, but we&apos;ll be launching soon with exciting new content.
                        </p>

                        {/* Decorative Elements */}
                        <div className="relative w-full max-w-lg h-64 md:h-80 mb-12">
                            {/* Animated circles */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed border-[#0175B2]/20 animate-[spin_20s_linear_infinite]"></div>
                                <div className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-dashed border-[#FF6B5A]/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                                <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-dashed border-[#17ABD6]/30 animate-[spin_10s_linear_infinite]"></div>
                            </div>

                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#0175B2] to-[#17ABD6] flex items-center justify-center shadow-xl shadow-[#0175B2]/20">
                                    <svg className="w-10 h-10 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-[6px] px-6 py-3 text-white font-medium transition-transform hover:scale-105"
                                style={{
                                    background: "linear-gradient(180deg, rgba(255, 107, 90, 1) 0%, rgba(229, 83, 67, 1) 100%)",
                                    boxShadow: "0 4px 14px rgba(255, 107, 90, 0.3)",
                                }}
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Go to Homepage
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 rounded-[6px] px-6 py-3 border border-[#0175B2] text-[#0175B2] font-medium hover:bg-[#0175B2]/5 transition-colors"
                            >
                                Explore Services
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Preview Section */}
            <section className="px-4 py-16 bg-gradient-to-b from-white to-[#0175B2]/5">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1F3D] mb-4">
                            While You Wait, Explore Our Expertise
                        </h2>
                        <p className="text-[#606060] max-w-xl mx-auto">
                            Discover what Sanjivani Edge has to offer across our comprehensive service portfolio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Software Development",
                                description: "Custom applications engineered for scale and reliability.",
                                href: "/services/software",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Cloud Services",
                                description: "Scalable cloud solutions for modern enterprises.",
                                href: "/services/cloud",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Cybersecurity",
                                description: "Protecting your digital assets with intelligent frameworks.",
                                href: "/services/cybersecurity",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                            },
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="group p-6 rounded-2xl border border-[#E8E4F3] bg-white hover:shadow-lg hover:border-[#0175B2]/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0175B2] to-[#17ABD6] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-[#1A1F3D] mb-2 group-hover:text-[#0175B2] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#606060] text-sm">{item.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-12">
                <LegacySection
                    title="Have questions or need immediate assistance?"
                    description="Our team is here to help. Reach out and let's discuss how we can support your enterprise needs."
                    ctaHref="/contact"
                    ctaText="Contact Us"
                    titleClassName="text-xl md:text-[30px] font-medium text-[#1A1F3D]"
                />
            </section>
        </main>
    );
}
