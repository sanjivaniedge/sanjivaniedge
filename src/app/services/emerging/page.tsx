import ServicePageTemplate from "@/components/ui/service-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI, ML & IoT Company in India",
  description: "The top AI & Machine Learning development firm located in India providing Chatbots and predictive Analytics and IoT solutions",
  keywords: "AI firm India Machine learning Mumbai, IoT development Pune, RPA automation India",
  alternates: {
    canonical: "https://www.sanjivaniedge.com/services/emerging",
  },
};

const infraPageData = {
  title: "Emerging Technologies",
  subtitle: "Intelligent Capabilities for the Enterprises of Tomorrow.",
  description:
    "Emerging technologies accelerate competitive advantage. Sanjivani Edge develops AI, ML, IoT, and automation solutions that help enterprises innovate responsibly and adapt efficiently.",
  heroImage: "/Images/emerging-banner.webp",
  heroImageAlt: "Emerging Technologies",
  capabilities: {
    title: "Our Capabilities",
    description:
      "End-to-end infrastructure services from design and deployment to management and optimization.",
    items: [
      {
        title: "AI & Machine Learning",
        description: "Models that enhance forecasting, decision-making, and automation.",
        tools: "TensorFlow, AWS AI",
        image: "/Images/cap-emerging/AI-Machine-Learning.webp",
      },
      {
        title: "IoT Solutions",
        description: "Connected assets enabling real-time monitoring and controls.",
        tools: "MQTT, AWS IoT Core",
        image: "/Images/cap-emerging/IoT-Solutions.webp",
      },
      {
        title: "Automation Services",
        description: "RPA and workflow automation to reduce manual intervention and increase throughput.",
        tools: "UiPath, Automation Anywhere",
        image: "/Images/cap-emerging/Automation-Services.webp",
      },


    ],
  },
  whyChooseUs: {
    title: "Why Choose Our Infrastructure Services",
    description:
      "Pragmatic engineering, disciplined operations, and clear governance — built for real-world reliability.",
    features: [
      {
        step: "Step 1",
        title: "Architecture-first mindset",
        content: "Reference architectures tuned for availability, scale, and cost control.",
        image: "/Images/why-emerging/Architecture-first mindset.webp",
      },
      {
        step: "Step 2",
        title: "Business-outcome-led innovation",
        content: "Runbooks, observability, and SRE practices keep systems predictable.",
        image: "/Images/why-emerging/Business-outcome-led innovation.webp",
      },
      {
        step: "Step 3",
        title: "Balanced approach to automation",
        content: "Identity, encryption, and hardening embedded across the stack.",
        image: "/Images/why-emerging/Balanced-approach-to-automation.webp",
      },
      {
        step: "Step 4",
        title: "Scalable deployment capability",
        content: "Comprehensive metrics, alerting, and logging for proactive issue detection.",
        image: "/Images/why-emerging/Scalable-deployment-capability.webp",
      },
    ],
  },
  strategicValue: {
    title: "Strategic Value Delivered",
    description:
      "Measured improvements in availability, performance, and operational efficiency.",
    metrics: [
      { value: "99.95%", label: "Accelerated innovation" },
      { value: "40%", label: "Predictive insights at scale" },
      { value: "2x", label: "Reduced manual workloads" },
      { value: "30%", label: "Process intelligence" },
      { value: "Enhanced lifecycle planning", label: "Enhanced efficiency across functions" },
    ],
  },
  deliveryFramework: {
    title: "Our Delivery Framework",
    description: "",
    timeline: [
      {
        title: "Discovery",
        content: "Current state analysis, constraints, and success criteria.",
        image: "/Images/time-emerging/Discovery.webp",
      },
      {
        title: "Data Understanding",
        content: "Network, compute, storage, and security designs.",
        image: "/Images/time-emerging/Data-Understanding.webp",
      },
      {
        title: "Model Design",
        content: "Controlled rollout with validation and sign-offs.",
        image: "/Images/time-emerging/Model-Design.webp",
      },
      {
        title: "Training",
        content: "Monitoring, runbooks, backup, and governance.",
        image: "/Images/time-emerging/Training.webp",
      },
      {
        title: "Deployment",
        content: "Reviews, optimization, and roadmap updates.",
        image: "/Images/time-emerging/Deployment.webp",
      },
      {
        title: "Monitoring",
        content: "Reviews, optimization, and roadmap updates.",
        image: "/Images/time-emerging/Monitoring.webp",
      },
      {
        title: "Continuous Improvement",
        content: "Reviews, optimization, and roadmap updates.",
        image: "/Images/time-emerging/Continuous-Improvement.webp",
      }
    ],
  },
  philosophy: {
    title: "How We Define Success",
    description: "",
    image: "/Images/How-We-Define Success-emeraging.webp",
    imageAlt: "How We Define Success",
    successMetrics: [
      "Higher automation rates.",
      "Faster decision cycles.",
      "Lower operational overhead.",
      "Improved accuracy and forecasting.",
      "Enhanced real-time visibility."
    ],
    ctaText: "know more",
    ctaLink: "/about"
  },
  faqs: [
    { q: "Which AI/ML use cases do you deliver?", a: "Forecasting, classification, anomaly detection, recommendations, RAG assistants, and automation aligned to measurable business outcomes." },
    { q: "How do you manage data quality and governance?", a: "Data pipelines with validation, lineage tracking, access controls, MDM, and auditability across sources." },
    { q: "What is your approach to model lifecycle management?", a: "Experiment tracking, versioning, CI/CD for models, monitoring for drift, retraining schedules, and rollback plans." },
    { q: "Do you build IoT platforms end to end?", a: "Device onboarding, MQTT/HTTP ingestion, edge processing, data storage, dashboards, alerting, and integrations with enterprise systems." },
    { q: "How do you ensure responsible AI?", a: "Bias testing, explainability, human-in-the-loop, privacy safeguards, and compliance with organizational policies." },
  ],
  cta: {
    title: "Infrastructure must be invisible — seen only when it fails.",
    description:
      "Sanjivani Edge ensures it never does.",
    buttonText: "Start Your Project",
    buttonHref: "/contact"
  },
};

export default function InfrastructureServicePage() {
  return (
    <ServicePageTemplate
      data={infraPageData}
      showCapabilities
      showWhyChooseUs
      showStrategicValue
      showDeliveryFramework
      showPhilosophy
    />
  );
}
