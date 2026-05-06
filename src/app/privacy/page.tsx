import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Sanjivani Edge",
    description: "Privacy Policy for Sanjivani Edge Pvt Ltd. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="px-4 pt-16 pb-12">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F3D] mb-4">
                            Privacy Policy
                            <span className="text-[#FF6B5A]">.</span>
                            <span className="text-[#17ABD6]">.</span>
                            <span className="text-[#0075B1]">.</span>
                        </h1>
                        <p className="text-lg text-[#606060] mb-2">
                            for Sanjivani Edge Pvt Ltd
                        </p>
                        <p className="text-sm text-[#606060]">
                            Last updated: 5/11/2025
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="px-4 pb-24">
                <div className="mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl border border-[#E8E4F3] p-8 md:p-12 shadow-sm">
                        {/* Welcome */}
                        <div className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1F3D] mb-4">
                                Your Privacy Matters
                            </h2>
                            <p className="text-[#606060] leading-relaxed">
                                At Sanjivani Edge, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
                            </p>
                        </div>

                        {/* Policy Sections */}
                        <div className="space-y-10">
                            {/* 1. Information Collection */}
                            <PolicySection
                                number="1"
                                title="Information Collection"
                            >
                                <p className="mb-3">
                                    We may collect personal information (name, email, contact details, etc.) for service delivery.
                                </p>
                            </PolicySection>

                            {/* 2. Data Usage & Protection */}
                            <PolicySection
                                number="2"
                                title="Data Usage & Protection"
                            >
                                <p className="mb-2">Your data will:</p>
                                <ul className="list-disc list-inside space-y-2 text-[#606060]">
                                    <li>Be kept confidential</li>
                                    <li>Not be sold or misused</li>
                                    <li>Be protected using industry-standard security measures</li>
                                </ul>
                            </PolicySection>

                            {/* 3. Cookies */}
                            <PolicySection
                                number="3"
                                title="Cookies"
                            >
                                <p>
                                    We use strictly necessary cookies for the website to function. These cookies do not store any personally identifiable information.
                                </p>
                            </PolicySection>

                            {/* 4. Contact Information */}
                            <PolicySection
                                number="4"
                                title="Contact Information"
                            >
                                <p className="mb-4">For any privacy-related questions or concerns, contact us at:</p>
                                <div className="flex flex-col gap-3">
                                    <a
                                        href="mailto:contact@sanjivaniedge.com"
                                        className="inline-flex items-center gap-2 text-[#0175B2] hover:underline"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        contact@sanjivaniedge.com
                                    </a>
                                </div>
                            </PolicySection>
                        </div>

                        {/* Back to Home */}
                        <div className="mt-12 pt-8 border-t border-[#E8E4F3] text-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-[6px] px-6 py-3 text-white font-medium transition-transform hover:scale-105"
                                style={{
                                    background: "linear-gradient(180deg, rgba(255, 107, 90, 1) 0%, rgba(229, 83, 67, 1) 100%)",
                                    boxShadow: "0 4px 14px rgba(255, 107, 90, 0.3)",
                                }}
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function PolicySection({
    number,
    title,
    children,
}: {
    number: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="border-l-4 border-[#0175B2] pl-6">
            <h3 className="text-xl font-semibold text-[#1A1F3D] mb-3">
                <span className="text-[#0175B2]">{number}.</span> {title}
            </h3>
            <div className="text-[#606060] leading-relaxed">{children}</div>
        </div>
    );
}
