import ServicePageTemplate from "@/components/ui/service-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cybersecurity Company India",
    description: "Audits & ISO 27001",
    keywords: "The most reputable cybersecurity firm in India",
    alternates: {
        canonical: "https://www.sanjivaniedge.com/services/cybersecurity",
    },
};

const cloudPageData = {
    title: "Cybersecurity",
    subtitle: "Securing Digital Trust Through Intelligent Protection",
    description: "As enterprises grow more connected, cybersecurity becomes a strategic imperative. Sanjivani Edge provides integrated protection frameworks that secure systems, data, and operations.",
    heroImage: "/Images/cybersecurity.webp",
    heroImageAlt: "Cloud Infrastructure",
    capabilities: {
        title: "Our Cloud Capabilities",
        description: "Comprehensive cloud services from migration to optimization, ensuring your infrastructure scales with your business.",
        items: [
            {
                title: "Network Security",
                description: "Firewalls, intrusion prevention, and threat detection.",
                tools: "Cisco, Fortinet, Palo Alto",
                image: "/Images/cap-cyber/Network-Security.webp"
            },
            {
                title: "Data Protection & Encryption",
                description: "Encryption and access controls for confidentiality and data integrity.",
                tools: ["AES", "TLS"],
                image: "/Images/cap-cyber/Data-Protection-Encryption.webp"
            },
            {
                title: "Vulnerability Assessment",
                description: "End-to-end scanning and remediation planning.",
                tools: ["Nessus", "Qualys"],
                image: "/Images/cap-cyber/Vulnerability-Assessment.webp"
            },
            {
                title: "Security Audits & Compliance",
                description: "Audit frameworks aligned to ISO, SOC, and regulatory mandates.",
                tools: ["Splunk", "SIEM"],
                image: "/Images/cap-cyber/Security-Audits-Compliance.webp"
            },

        ]
    },
    whyChooseUs: {
        title: "Why Choose Our Cloud Services",
        description: "We combine deep expertise in cloud technologies and a proven methodology for successful cloud transformations.",
        features: [
            {
                step: "Step 1",
                title: "Certified cybersecurity specialists",
                content: "Certified cloud architects and engineers ensuring best practices in every deployment.",
                image: "/Images/why-cyber/certified-cybersecurity-specialists.webp"
            },
            {
                step: "Step 2",
                title: "Audit-driven frameworks",
                content: "A proven migration methodology that minimizes risk and downtime.",
                image: "/Images/why-cyber/audit-driven-frameworks.webp"
            },
            {
                step: "Step 3",
                title: "Real-time monitoring capability",
                content: "Round-the-clock cloud monitoring and support to keep your business running.",
                image: "/Images/why-cyber/real-time-monitoring-capability.webp"
            },
            {
                step: "Step 4",
                title: "Deep compliance understanding",
                content: "Elastic resources that scale with your business needs, ensuring optimal performance.",
                image: "/Images/why-cyber/deep-compliance-understanding.webp"
            }
        ]
    },
    strategicValue: {
        title: "Strategic Value Delivered",
        description: "Our cloud solutions deliver significant improvements in performance, cost, and operational efficiency.",
        metrics: [
            {
                value: "60%",
                label: "Stronger governance and risk posture",
                description: "Lower infrastructure and operational costs"
            },
            {
                value: "99.99%",
                label: "Proactive threat identification",
                description: "High availability and reliability"
            },
            {
                value: "3x",
                label: "Minimized operational disruption",
                description: "Accelerated application deployment"
            },
            {
                value: "24/7",
                label: "Regulatory alignment",
                description: "Round-the-clock cloud monitoring and support to keep your business running."
            },
            {
                value: "99.99%",
                label: "Enterprise-wide security maturity",
                description: "High availability and reliability"
            }
        ]
    },
    deliveryFramework: {
        title: "Our Delivery Framework",
        description: "",
        timeline: [
            {
                title: "Discovery",
                content: "We conduct a thorough assessment of your current infrastructure and develop a detailed migration plan.",
                image: "/Images/time-cyber/discovery.webp"
            },
            {
                title: "Assessment ",
                content: "Our architects design a secure and scalable cloud environment tailored to your specific needs.",
                image: "/Images/time-cyber/assessment.webp"
            },
            {
                title: "Safeguards",
                content: "We execute the migration with minimal disruption, moving your applications and data to the cloud.",
                image: "/Images/time-cyber/safeguards.webp"
            },
            {
                title: "SIEM Monitoring",
                content: "We optimize your cloud resources for performance and cost, and conduct rigorous testing.",
                image: "/Images/time-cyber/siem-monitoring.webp"
            },
            {
                title: "Response",
                content: "We provide ongoing monitoring and management to ensure your cloud environment operates smoothly.",
                image: "/Images/time-cyber/response.webp"
            },
            {
                title: "Compliance",
                content: "We ensure your cloud environment is compliant with industry regulations and standards.",
                image: "/Images/time-cyber/compliance.webp"
            },
            {
                title: "Continuous Hardening",
                content: "We offer post-migration support to ensure a smooth transition and minimize any disruptions to your business operations.",
                image: "/Images/time-cyber/continuous-hardening.webp"
            }
        ]
    },
    philosophy: {
        title: "How We Define Success",
        description: "Our success is measured by the tangible impact we create for your business through technology.",
        image: "/Images/How-we-define-success-cyber.webp",
        imageAlt: "How We Define Success",
        successMetrics: [
            "Reduced attack exposure",
            "Closed vulnerabilities within SLA",
            "Consistent compliance readiness",
            "Improved incident response maturity",
            "Enhanced visibility across networks"
        ],
        ctaText: "know more",
        ctaLink: "/about"
    },
    faqs: [
        { q: "Do you provide end-to-end security coverage?", a: "Yes — network, endpoint, identity, data protection, vulnerability management, SIEM, incident response, and compliance." },
        { q: "How do you handle compliance?", a: "We align controls and evidence to ISO 27001 and SOC 2, and implement audit trails, encryption, IAM and policy enforcement." },
        { q: "What is your approach to vulnerability management?", a: "Continuous scanning, prioritization, remediation planning, and verification — tracked against SLAs with reporting." },
        { q: "Can you integrate with our existing tools?", a: "Yes. We work with existing firewalls, EDR, IAM, SIEM, ticketing, and data platforms to avoid disruption." },
        { q: "Do you offer 24/7 monitoring and response?", a: "We provide ongoing monitoring and incident response with defined playbooks, runbooks, and escalation processes." },
    ],
    cta: {
        title: "Security is more than defense, it is trust.",
        description: "Sanjivani Edge strengthens that trust with intelligence, rigor, and continuity.",
        buttonText: "Start Your Project",
        buttonHref: "/contact"
    }
};

export default function CloudServicePage() {
    return (
        <ServicePageTemplate
            data={cloudPageData}
            showCapabilities={true}
            showWhyChooseUs={true}
            showStrategicValue={true}
            showDeliveryFramework={true}
            showPhilosophy={true}
        />
    );
}
