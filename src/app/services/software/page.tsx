import ServicePageTemplate from "@/components/ui/service-page-template";

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
                tools: "Tools: .NET, Java, Python, Jira",
                image: "/Images/Custom-Software-Solutions.webp"
            },
            {
                title: "Web Application Development",
                description: "High-performance web platforms optimized for speed, usability, and global interaction. ",
                tools: "Tools: React, Angular, Node.js, Selenium",
                image: "/Images/Web-Application-Development.webp"
            },
            {
                title: "Enterprise Application Integration",
                description: "Integration frameworks that unify applications and unlock real-time operational visibility.",
                tools: "MuleSoft, Boomi, Postman",
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
        description: "A proven process that ensures successful project delivery every time.",
        timeline: [
            {
                title: "Requirement Structuring",
                content: "We work closely with you to understand your requirements, goals, and constraints to define a clear project roadmap.",
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop"
            },
            {
                title: "Architecture Blueprint",
                content: "Our team designs a robust and scalable architecture that meets your current needs and future growth.",
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop"
            },
            {
                title: "Agile Sprints",
                content: "We follow agile development practices with continuous testing to ensure high-quality code and rapid delivery.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
            },
            {
                title: "Code Reviews",
                content: "We manage the deployment process to ensure a smooth launch with minimal downtime.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                title: "Testing → Integration",
                content: "We provide ongoing support and optimization to keep your software running at peak performance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Deployment",
                content: "We provide ongoing support and optimization to keep your software running at peak performance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Ongoing Enhancements",
                content: "We provide ongoing support and optimization to keep your software running at peak performance.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            }
        ]
    },
    philosophy: {
        title: "How We Define Success",
        description: "Our success is measured by the tangible impact we create for your business through technology.",
        image: "/Images/philosophy-image-281190.png",
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
    cta: {
        title: "Ready to Build Your Next Software Solution?",
        description: "Let's discuss your project requirements and create a custom solution that drives your business forward.",
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
