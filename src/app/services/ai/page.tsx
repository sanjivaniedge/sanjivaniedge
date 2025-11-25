import ServicePageTemplate from "@/components/ui/service-page-template";

const aiPageData = {
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions that transform your business operations.",
    heroImage: "/Images/ai-hero.png",
    heroImageAlt: "AI & Machine Learning Solutions",
    capabilities: {
        title: "Our AI & ML Capabilities",
        description: "From predictive analytics to intelligent automation, we deliver AI solutions that create measurable business impact.",
        items: [
            {
                title: "Machine Learning Models",
                description: "Custom ML models trained on your data to predict outcomes, classify information, and optimize decisions.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
            },
            {
                title: "Natural Language Processing",
                description: "NLP solutions for sentiment analysis, chatbots, document processing, and language understanding.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
            },
            {
                title: "Computer Vision",
                description: "Image and video analysis solutions for object detection, recognition, and automated quality control.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
            },
            {
                title: "Predictive Analytics",
                description: "Advanced analytics to forecast trends, identify patterns, and make data-driven business decisions.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
            },
            {
                title: "AI-Powered Automation",
                description: "Intelligent process automation that reduces manual effort and improves operational efficiency.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
            },
            {
                title: "AI Strategy Consulting",
                description: "Strategic guidance on AI implementation, roadmap development, and technology selection.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
            }
        ]
    },
    whyChooseUs: {
        title: "Why Choose Our AI & ML Services",
        description: "We combine cutting-edge AI research with practical business applications to deliver solutions that drive real results.",
        features: [
            {
                step: "Step 1",
                title: "Expert Team",
                content: "Expert team with PhD-level AI/ML expertise dedicated to solving your most complex challenges.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            },
            {
                step: "Step 2",
                title: "Proven Track Record",
                content: "Proven track record across multiple industries, delivering successful AI implementations.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
            },
            {
                step: "Step 3",
                title: "End-to-End Solutions",
                content: "Comprehensive end-to-end AI solution development from strategy to deployment.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
            }
        ]
    },
    strategicValue: {
        title: "Strategic Business Impact",
        description: "Our AI solutions deliver transformative results across key performance indicators.",
        metrics: [
            {
                value: "75%",
                label: "Process Efficiency",
                description: "Reduction in manual processing time"
            },
            {
                value: "90%",
                label: "Prediction Accuracy",
                description: "Improved decision-making capabilities"
            },
            {
                value: "50%",
                label: "Cost Savings",
                description: "Operational cost reduction"
            }
        ]
    },
    deliveryFramework: {
        title: "Our AI Development Process",
        description: "A structured approach to AI development that ensures reliable, ethical, and scalable solutions.",
        timeline: [
            {
                title: "Data Assessment & Strategy",
                content: "We begin by analyzing your data infrastructure and defining a clear AI strategy aligned with your business goals.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            },
            {
                title: "Model Development & Training",
                content: "Our experts develop and train custom machine learning models using state-of-the-art algorithms and frameworks.",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
            },
            {
                title: "Testing & Validation",
                content: "Rigorous testing and validation ensure that the models perform accurately and reliably in real-world scenarios.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
            },
            {
                title: "Deployment & Integration",
                content: "We seamlessly deploy the AI solutions into your existing infrastructure and integrate them with your workflows.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            },
            {
                title: "Monitoring & Optimization",
                content: "Continuous monitoring and optimization ensure that the AI solutions remain effective and adapt to changing data patterns.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
            }
        ]
    },
    philosophy: {
        title: "Our AI Philosophy",
        description: "We believe in building AI solutions that augment human capabilities, maintain transparency, and deliver ethical, responsible intelligence that benefits both business and society.",
        image: "/Images/ai-philosophy.png",
        imageAlt: "AI Development Philosophy"
    },
    cta: {
        title: "Ready to Transform Your Business with AI?",
        description: "Let's explore how artificial intelligence can revolutionize your operations and create competitive advantage.",
        buttonText: "Explore AI Solutions",
        buttonHref: "/contact"
    }
};

export default function AIServicePage() {
    return (
        <ServicePageTemplate
            data={aiPageData}
            showCapabilities={true}
            showWhyChooseUs={true}
            showStrategicValue={true}
            showDeliveryFramework={true}
            showPhilosophy={true}
        />
    );
}
