import ServicePageTemplate from "@/components/ui/service-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Software Development Company India",
    description: "The most prestigious custom software, web and mobile application development business with offices in Mumbai as well as Pune",
    keywords: "Software company India and custom software development Mumbai Web application development Pune Mobile app India",
    alternates: {
        canonical: "https://www.sanjivaniedge.com/services/software",
    },
};

const softwarePageData = {
    title: "Software Development",
    subtitle: "Engineering Systems That Adapt, Scale, and Endure",
    description: "Software defines the rhythm and resilience of modern enterprises. At Sanjivani Edge, software development is treated as a disciplined craft — engineered for clarity, stability, and long-term performance. Our teams design systems that evolve with the business and remain reliable under scale.",
    heroImage: "/Images/software-hero-new-3f52f5.png",
    heroImageAlt: "Software Development",
    capabilities: {
        title: "Capabilities.",
        description: "Our comprehensive software development capabilities ensure your digital transformation success.",
        items: [
            {
                title: "Custom Software Solutions",
                description: "Tailored applications built for domain-specific needs and operational transformation.",
                tools: ".NET, Java, Python, Jira",
                image: "/Images/Custom-Software-Solutions.webp"
            },
            {
                title: "Web Application Development",
                description: "High-performance web platforms optimized for speed, usability, and global interaction. ",
                tools: "React, Angular, Node.js, Selenium",
                image: "/Images/Web-Application-Development.webp"
            },
            {
                title: "Enterprise Application Integration",
                description: "Integration frameworks that unify applications and unlock real-time operational visibility.",
                tools: "Boomi, Workato, Postman",
                image: "/Images/Enterprise-Applications-Integrations.webp"
            }
        ]
    },
    whyChooseUs: {
        title: "Why Choose Our Software Development Services",
        description: "We combine technical excellence with business acumen to deliver solutions that drive real results.",
        features: [
            {
                step: "Step 1",
                title: "Certified engineering talent",
                content: "Tailored applications built for domain-specific needs and operational transformation.",
                image: "/Images/Certified-Engineering-Talent.webp"
            },
            {
                step: "Step 2",
                title: "Governance-backed delivery",
                content: "High-performance web platforms optimized for speed, usability, and global interaction. ",
                image: "/Images/Governance-Backed-Delivery.webp"
            },
            {
                step: "Step 3",
                title: "Agile and test-driven development",
                content: "Integration frameworks that unify applications and unlock real-time operational visibility.",
                image: "/Images/Agile-Devleopment-Testing.webp"
            },
            {
                step: "Step 4",
                title: "Strong legacy and high-trust culture",
                content: "Integration frameworks that unify applications and unlock real-time operational visibility.",
                image: "/Images/Strong-legacy-and-high-trust-culture.webp"
            },
            {
                step: "Step 5",
                title: "Transparent communication and reporting",
                content: "Integration frameworks that unify applications and unlock real-time operational visibility.",
                image: "/Images/Transparent-Communication-and-Reporting.webp"
            }
        ]
    },
    strategicValue: {
        title: "Strategic Value Delivered",
        description: "Our software development services deliver measurable business impact through cutting-edge technology solutions.",
        metrics: [
            {
                value: "",
                label: "Future-ready, modular architectures",
                description: "We've made it easy to use and understand."
            },
            {
                value: "",
                label: "Reduced operational risk and downtime",
                description: "We've made it fast and reliable."
            },
            {
                value: "",
                label: "Higher process efficiency and automation",
                description: "We've made it beautiful and modern."
            },
            {
                value: "",
                label: "Real-time decision support",
                description: "We've made it easy to use and understand."
            },
            {
                value: "",
                label: "Faster innovation cycles and adaptability",
                description: "We've made it fast and reliable."
            },
            {
                value: "",
                label: "Beautiful and modern",
                description: "We've made it beautiful and modern."
            }
        ]
    },
    deliveryFramework: {
        title: "Our Delivery Framework.",
        description: "",
        timeline: [
            {
                title: "Requirement Structuring",
                content: "We work closely with you to understand your requirements, goals, and constraints to define a clear project roadmap.",
                image: "/Images/software-timeline/Requirement-Structuring.webp"
            },
            {
                title: "Architecture Blueprint",
                content: "Our team designs a robust and scalable architecture that meets your current needs and future growth.",
                image: "/Images/software-timeline/Architecture-Blueprint.webp"
            },
            {
                title: "Agile Sprints",
                content: "We follow agile development practices with continuous testing to ensure high-quality code and rapid delivery.",
                image: "/Images/software-timeline/Agile-Sprints.webp"
            },
            {
                title: "Code Reviews",
                content: "We manage the deployment process to ensure a smooth launch with minimal downtime.",
                image: "/Images/software-timeline/Code-Reviews.webp"
            },
            {
                title: "Testing ",
                content: "We provide ongoing support and optimization to keep your software running at peak performance.",
                image: "/Images/software-timeline/Testing.webp"
            },
            {
                title: "Integration",
                content: "We provide ongoing support and optimization to keep your software running at peak performance.",
                image: "/Images/software-timeline/Integration.webp"
            },
            {
                title: "Deployment",
                content: "We provide ongoing support and optimization to keep your software running at peak performance.",
                image: "/Images/software-timeline/Deployment.webp"
            },
            {
                title: "Ongoing Enhancements",
                content: "We provide ongoing support and optimization to keep your software running at peak performance.",
                image: "/Images/software-timeline/Ongoing-Enhancements.webp"
            }
        ]
    },
    philosophy: {
        title: "How We Define Success",
        description: "Our success is measured by the tangible impact we create for your business through technology.",
        image: "/Images/How-we-define-success.webp",
        imageAlt: "How We Define Success",
        successMetrics: [
            "Delivery aligned with structured milestones",
            "Stable, low-defect releases",
            "High application uptime",
            "Seamless API and data integration",
            "Strong user adoption and engagement"
        ],
        ctaText: "know more",
        ctaLink: "/about"
    },
    faqs: [
        { q: "What delivery methodology do you use?", a: "Discovery and architecture first, then agile sprints with test automation, code reviews, and CI/CD." },
        { q: "Can you integrate with our existing systems?", a: "Yes. We design stable APIs, data pipelines, and integrations for ERPs, CRMs, and legacy apps." },
        { q: "How do you ensure code quality?", a: "Static analysis, unit and integration tests, peer reviews, and branch protection with CI gates." },
        { q: "What about security?", a: "Secure coding practices, dependency audits, IAM, encryption in transit/at rest, and compliance-aligned controls." },
        { q: "Do you provide maintenance and support?", a: "We offer SLAs for bug fixes, enhancements, monitoring, and performance optimization." },
    ],
    cta: {
        title: "Software built with purpose endures.",
        description: "At Sanjivani Edge, we engineer systems that remain stable today and capable tomorrow.",
        buttonText: "Start Your Project",
        buttonHref: "/contact"
    }
};

export default function SoftwareServicePage() {
    return (
        <ServicePageTemplate
            data={softwarePageData}
            showCapabilities={true}
            showWhyChooseUs={true}
            showStrategicValue={true}
            showDeliveryFramework={true}
            showPhilosophy={true}
        />
    );
}
