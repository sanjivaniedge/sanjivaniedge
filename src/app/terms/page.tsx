import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms & Policies | Sanjivani Edge",
    description: "Terms and Policies for Sanjivani Edge Pvt Ltd. Read our terms of service, privacy policy, and other important policies.",
};

export default function TermsAndPoliciesPage() {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="px-4 pt-16 pb-12">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F3D] mb-4">
                            Terms & Policies
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
                                Welcome to Sanjivani Edge.
                            </h2>
                            <p className="text-[#606060] leading-relaxed">
                                By accessing or using our website, products, or services, you agree to the following Terms & Policies. Please read them carefully.
                            </p>
                        </div>

                        {/* Policy Sections */}
                        <div className="space-y-10">
                            {/* 1. Acceptance of Terms */}
                            <PolicySection
                                number="1"
                                title="Acceptance of Terms"
                            >
                                <p>
                                    By using our website or services, you agree to comply with and be bound by these Terms & Policies. If you do not agree, please discontinue using our services.
                                </p>
                            </PolicySection>

                            {/* 2. User Responsibilities */}
                            <PolicySection
                                number="2"
                                title="User Responsibilities"
                            >
                                <p className="mb-3">Users agree to:</p>
                                <ul className="list-disc list-inside space-y-2 text-[#606060]">
                                    <li>Provide accurate and complete information.</li>
                                    <li>Use our website/services only for lawful purposes.</li>
                                    <li>Not attempt to disrupt, hack, or misuse our platform.</li>
                                </ul>
                            </PolicySection>

                            {/* 3. Intellectual Property */}
                            <PolicySection
                                number="3"
                                title="Intellectual Property"
                            >
                                <p className="mb-3">
                                    All content on this website—including logos, code, graphics, and text—is the property of Sanjivani Edge and protected by copyright laws.
                                </p>
                                <p>
                                    You may not reproduce or distribute any content without written permission.
                                </p>
                            </PolicySection>


                            {/* 4. Payment & Billing */}
                            <PolicySection
                                number="4"
                                title="Payment & Billing"
                            >
                                <ul className="list-disc list-inside space-y-2 text-[#606060]">
                                    <li>Payments must be made according to the agreed project or service plan.</li>
                                    <li>Refunds, if applicable, will follow our refund policy.</li>
                                </ul>
                            </PolicySection>

                            {/* 5. Limitation of Liability */}
                            <PolicySection
                                number="5"
                                title="Limitation of Liability"
                            >
                                <p className="mb-2">We are not liable for:</p>
                                <ul className="list-disc list-inside space-y-2 text-[#606060]">
                                    <li>Any loss of data due to cyber-attacks or third-party actions</li>
                                    <li>Downtime, performance issues, or service interruptions</li>
                                    <li>Any damages arising from misuse of our services</li>
                                </ul>
                            </PolicySection>

                            {/* 6. Termination */}
                            <PolicySection
                                number="6"
                                title="Termination"
                            >
                                <p>
                                    We reserve the right to suspend or terminate access to our services for violations of these Terms & Policies.
                                </p>
                            </PolicySection>

                            {/* 7. Disclaimer */}
                            <PolicySection
                                number="7"
                                title="Disclaimer"
                            >
                                <p>
                                    Sanjivani Edge makes no warranty that: (a) the Site will meet your requirements; (b) the Site will be available on an uninterrupted, timely, secure, or error-free basis; (c) the results that may be obtained from the use of the Site or any services offered through the Site will be accurate or reliable.
                                </p>
                            </PolicySection>

                            {/* 8. Anti-Spam Policy */}
                            <PolicySection
                                number="8"
                                title="Anti-Spam Policy"
                            >
                                <p>
                                    Sanjivani Edge recognizes the receipt, transmission or distribution of spam emails (i.e. unsolicited bulk emails) as a major concern and has taken reasonable measures to minimize the transmission and effect of spam emails in our computing environment. All emails received by Sanjivani Edge are subject to spam check. Any email identified as spam will be rejected with sufficient information to the sender for taking necessary action. With this measure, along with other technical spam reduction measures, Sanjivani Edge hopes to minimize the effect of spam emails. Sanjivani Edge reserves the right to reject and/or report any suspicious spam emails, to the authorities concerned, for necessary action.
                                </p>
                            </PolicySection>

                            {/* 9. Strictly Necessary Cookies */}
                            <PolicySection
                                number="9"
                                title="Strictly Necessary Cookies"
                            >
                                <p>
                                    These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
                                </p>
                            </PolicySection>

                            {/* 10. Changes to Terms */}
                            <PolicySection
                                number="10"
                                title="Changes to Terms"
                            >
                                <p>
                                    We may update these Terms & Policies at any time. Updated versions will be posted on this page.
                                </p>
                            </PolicySection>

                            {/* 11. Grievance Redressal */}
                            <PolicySection
                                number="11"
                                title="Grievance Redressal"
                            >
                                <p>
                                    Any grievance or complaint, in relation to processing of personal information, should be sent to Sanjivani Edge in writing to the below mentioned email ID. Grievance shall be redressed as expeditiously as possible.
                                </p>
                            </PolicySection>

                            {/* 12. Contact Information */}
                            <PolicySection
                                number="12"
                                title="Contact Information"
                            >
                                <p className="mb-4">For any questions or concerns, contact us at:</p>
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
                                    <a
                                        href="tel:9599120082"
                                        className="inline-flex items-center gap-2 text-[#0175B2] hover:underline"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        9599120082
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
