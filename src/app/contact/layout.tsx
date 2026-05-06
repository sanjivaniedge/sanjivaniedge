import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Sanjivani Edge India",
    description: "Get in touch with India's dependable SAP, Oracle & Cloud experts. Offices in Mumbai & Pune. Get started today with your digital transformation",
    keywords: "contact IT company Mumbai, ERP consultation India, SAP partner Mumbai, digital transformation consultant Pune",
    alternates: {
        canonical: "https://www.sanjivaniedge.com/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
