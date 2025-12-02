import ServicePageTemplate from "@/components/ui/service-page-template";

const consultingPageData = {
  title: "Consulting & Support",
  subtitle: "Strategic Technology Guidance for Sustainable Growth.",
  description:
    "Enterprises evolve when technology aligns with strategy. Sanjivani Edge provides advisory and support services that strengthen operational maturity and accelerate business enablement.",
  heroImage: "/Images/support-banner.webp",
  heroImageAlt: "Consulting & Support",
  capabilities: {
    title: "Consulting & AMC Capabilities",
    description:
      "From strategic architecture guidance to day‑to‑day maintenance and support, built for measurable outcomes.",
    items: [
      { title: "IT Strategy & Planning", description: "Roadmaps that balance innovation with operational reality.", image: "/Images/cap-support/IT-Strategy-Planning.webp" },
      { title: "Technical Support & Helpdesk", description: "Multi-level support for stability, resolution, and business continuity.", image: "/Images/cap-support/Technical-Support-&-helpdesk.webp" },
      { title: "Annual Maintenance Contracts (AMC)", description: "Preventive maintenance ensuring consistent performance.", image: "/Images/cap-support/Annual-Maintenance-Contract.webp" },
      { title: "Training & Knowledge Transfer", description: "Skill development programs to improve system adoption and effectiveness.", image: "/Images/cap-support/Training-&-Knowledge-Transfer.webp" },
    ],
  },
  whyChooseUs: {
    title: "Why Choose Our Consulting",
    description:
      "Outcome‑led advisory paired with dependable operations — practical, transparent, and value‑focused.",
    features: [
      { step: "Step 1", title: "Advisory backed by six decades of enterprise ethics", content: "Context, constraints, KPIs, and maturity assessment.", image: "/Images/why-support/Advisory-backed-by-six-decades.webp" },
      { step: "Step 2", title: "Structured support frameworks", content: "Architecture choices, governance, and risk mitigation.", image: "/Images/why-support/Structured-support-frameworks.webp" },
      { step: "Step 3", title: "Clear escalation pathways", content: "Runbooks, SLAs, monitoring, and continuous improvement.", image: "/Images/why-support/Clear-escalation-pathways.webp" },
       { step: "Step 3", title: "Transparent performance tracking", content: "Runbooks, SLAs, monitoring, and continuous improvement.", image: "/Images/why-support/Transparent-performance-tracking.webp" },


    ],
  },
  strategicValue: {
    title: "Strategic Value Delivered",
    description: "Clarity, reliability, and confidence across programs and platforms.",
    metrics: [
      { value: "30%", label: "Reduced operational friction" },
      { value: "20%", label: "Higher system efficiency" },
      { value: "2x", label: "Improved internal capability" },
      { value: "Smoother IT-business alignment", label: "Long-term technology stability" },
       { value: "Smoother IT-business alignment", label: "Cost-effective governance" },

    ],
  },
  deliveryFramework: {
    title: "Our Delivery Framework.",
    description: "",
    timeline: [
      { title: "Assessment", content: "Architecture, processes, and controls review.", image: "/Images/time-support/Assessment.webp" },
      { title: "Advisory", content: "Roadmap, governance, and SLAs.", image: "/Images/time-support/Advisory.webp" },
      { title: "Support Model Setup", content: "Operationalization and support setup.", image: "/Images/time-support/Support-model-setup.webp" },
      { title: "Execution", content: "Metrics, improvements, and audits.", image: "/Images/time-support/Execution.webp" },
      { title: "Reporting ", content: "Metrics, improvements, and audits.", image: "/Images/time-support/Reporting.webp" },
      { title: "Optimization", content: "Metrics, improvements, and audits.", image: "/Images/time-support/Optimization.webp" },
    ],
  },
  philosophy: {
    title: "How We Define Success",
    description: "",
    image: "/Images/How-We-Define-Success-support.webp",
    imageAlt: "How We Define Success",
    successMetrics: [
      "Faster resolution cycles.",
      "Improved maturity across operations.",
      "Predictable maintenance cadence.",
      "Better user adoption.",
      "Smoother IT-business alignment."
    ],
    ctaText: "know more",
    ctaLink: "/about"
  },
  faqs: [
    { q: "What consulting services do you provide?", a: "Architecture reviews, modernization roadmaps, governance setups, DevOps advisory, and security controls." },
    { q: "Do you offer AMC support?", a: "Yes. Patching, monitoring, backups, incident response, and improvement cycles with SLAs." },
    { q: "How do you measure success?", a: "KPIs and SLAs tied to reliability, throughput, and risk reduction, reviewed regularly." },
    { q: "Can you work with existing vendors?", a: "We collaborate with your teams and vendors to integrate controls and delivery processes." },
    { q: "Is governance included?", a: "Yes — change management, reviews, documentation, and audit readiness as part of engagements." },
  ],
  cta: {
    title: "Guidance strengthens execution.",
    description: "Sanjivani Edge ensures enterprises move forward with clarity and confidence.",
        buttonText: "Start Your Project",
        buttonHref: "/contact"
  },
};

export default function ConsultingServicePage() {
  return (
    <ServicePageTemplate
      data={consultingPageData}
      showCapabilities
      showWhyChooseUs
      showStrategicValue
      showDeliveryFramework
      showPhilosophy
    />
  );
}
