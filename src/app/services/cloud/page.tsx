import ServicePageTemplate from "@/components/ui/service-page-template";

const cloudPageData = {
    title: "Cloud Solutions",
    description: "Modernize your infrastructure with scalable cloud solutions that enhance performance, reduce costs, and enable digital transformation.",
    heroImage: "/Images/cloud-hero.png",
    heroImageAlt: "Cloud Infrastructure",
    capabilities: {
        title: "Our Cloud Capabilities",
        description: "Comprehensive cloud services from migration to optimization, ensuring your infrastructure scales with your business.",
        items: [
            {
                title: "Cloud Migration",
                description: "Seamless migration of applications, data, and infrastructure to leading cloud platforms.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            },
            {
                title: "Cloud Architecture",
                description: "Design and implementation of scalable, secure, and cost-effective cloud architectures.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            },
            {
                title: "DevOps & Automation",
                description: "CI/CD pipelines, infrastructure as code, and automated deployment processes.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            },
            {
                title: "Cloud Security",
                description: "Comprehensive security solutions including identity management, encryption, and compliance.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            },
            {
                title: "Performance Optimization",
                description: "Cloud resource optimization for maximum performance and cost efficiency.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            },
            {
                title: "Multi-Cloud Strategy",
                description: "Strategic planning and implementation across multiple cloud providers.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            }
        ]
    },
    whyChooseUs: {
        title: "Why Choose Our Cloud Services",
        description: "We combine deep expertise in cloud technologies and a proven methodology for successful cloud transformations.",
        features: [
            {
                step: "Step 1",
                title: "Certified Experts",
                content: "Certified cloud architects and engineers ensuring best practices in every deployment.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                step: "Step 2",
                title: "Proven Methodology",
                content: "A proven migration methodology that minimizes risk and downtime.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                step: "Step 3",
                title: "24/7 Support",
                content: "Round-the-clock cloud monitoring and support to keep your business running.",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
            }
        ]
    },
    strategicValue: {
        title: "Cloud Transformation Benefits",
        description: "Our cloud solutions deliver significant improvements in performance, cost, and operational efficiency.",
        metrics: [
            {
                value: "60%",
                label: "Cost Reduction",
                description: "Lower infrastructure and operational costs"
            },
            {
                value: "99.99%",
                label: "Availability",
                description: "High availability and reliability"
            },
            {
                value: "3x",
                label: "Faster Deployment",
                description: "Accelerated application deployment"
            }
        ]
    },
    deliveryFramework: {
        title: "Our Cloud Migration Process",
        description: "A systematic approach to cloud adoption that minimizes risk and maximizes benefits.",
        timeline: [
            {
                title: "Assessment & Planning",
                content: "We conduct a thorough assessment of your current infrastructure and develop a detailed migration plan.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
            },
            {
                title: "Architecture Design",
                content: "Our architects design a secure and scalable cloud environment tailored to your specific needs.",
                image: "https://images.unsplash.com/photo-1558494949-efc02570fbc9?w=800&h=600&fit=crop"
            },
            {
                title: "Migration & Deployment",
                content: "We execute the migration with minimal disruption, moving your applications and data to the cloud.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Optimization & Testing",
                content: "We optimize your cloud resources for performance and cost, and conduct rigorous testing.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
            },
            {
                title: "Monitoring & Management",
                content: "We provide ongoing monitoring and management to ensure your cloud environment operates smoothly.",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
            }
        ]
    },
    philosophy: {
        title: "Our Cloud Philosophy",
        description: "We believe in building cloud solutions that are secure, scalable, and cost-effective, enabling businesses to focus on innovation rather than infrastructure management.",
        image: "/Images/cloud-philosophy.png",
        imageAlt: "Cloud Development Philosophy"
    },
    cta: {
        title: "Ready to Transform Your Infrastructure?",
        description: "Let's discuss how cloud solutions can modernize your operations and drive business growth.",
        buttonText: "Explore Cloud Solutions",
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
