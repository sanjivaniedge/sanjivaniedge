import ServicePageTemplate from "@/components/ui/service-page-template";

const bpoPageData = {
  title: "BPO Services",
  subtitle: "Operational scale with quality and efficiency",
  description:
    "We operate customer support and back‑office processes with disciplined quality controls, analytics, and automation to raise throughput and reduce cost.",
  heroImage: "/figma/capabilities-bpo-c73d5a.png",
  heroImageAlt: "BPO Services",
  capabilities: {
    title: "BPO Capabilities",
    description: "End‑to‑end operations management backed by metrics and automation.",
    items: [
      { title: "Customer Support Ops", description: "Omnichannel interactions with QA and coaching.", image: "/figma/capabilities-bpo-c73d5a.png" },
      { title: "Back‑office Processing", description: "Data entry, validation, reconciliation, and reporting.", image: "/figma/capabilities-erp-2f97a5-1671ce.png" },
      { title: "Quality Management", description: "Sampling, scorecards, and feedback loops.", image: "/figma/capabilities-shield.png" },
      { title: "Automation", description: "RPA and workflow tools to reduce manual steps.", image: "/figma/Emerge.png" },
    ],
  },
  whyChooseUs: {
    title: "Why Choose Our BPO",
    description: "Predictable operations with measurable outcomes and continuous improvements.",
    features: [
      { step: "Step 1", title: "Process Mapping", content: "Define SOPs, SLAs, and handoffs with clarity.", image: "/figma/capabilities-erp-2f97a5-1671ce.png" },
      { step: "Step 2", title: "Execution & QA", content: "Run operations with monitoring and coaching.", image: "/figma/capabilities-bpo-c73d5a.png" },
      { step: "Step 3", title: "Optimize & Automate", content: "Use analytics and automation to drive efficiency.", image: "/figma/Emerge.png" },
    ],
  },
  strategicValue: {
    title: "Value Delivered",
    description: "Higher throughput, lower cost, and better customer experience.",
    metrics: [
      { value: "35%", label: "Cost Reduction" },
      { value: "25%", label: "Throughput Increase" },
      { value: "+20", label: "NPS Improvement" },
    ],
  },
  deliveryFramework: {
    title: "Operations Framework",
    description: "From onboarding to optimization.",
    timeline: [
      { title: "Onboarding", content: "SOPs, SLAs, and training.", image: "/figma/capabilities-bpo-c73d5a.png" },
      { title: "Steady State", content: "Runbooks, QA, and reporting.", image: "/figma/capabilities-erp-2f97a5-1671ce.png" },
      { title: "Optimization", content: "Analytics, automation, and refinements.", image: "/figma/Emerge.png" },
    ],
  },
  philosophy: {
    title: "Operations Philosophy",
    description: "Documented processes, clear metrics, and continuous coaching create reliable outcomes.",
    image: "/figma/capabilities-bpo-c73d5a.png",
    imageAlt: "BPO Philosophy",
  },
  faqs: [
    { q: "Which processes can you run?", a: "Customer support, data entry, validation, reconciliation, finance back‑office, and reporting." },
    { q: "How do you ensure quality?", a: "Sampling, scorecards, coaching plans, and feedback loops with targets." },
    { q: "Can you integrate with our tools?", a: "Yes — ticketing, CRM, ERP, and analytics platforms with secure access controls." },
    { q: "Do you provide automation?", a: "We implement RPA and workflow automation to reduce manual steps and errors." },
    { q: "What KPIs do you track?", a: "Throughput, accuracy, TAT, NPS/CSAT, and defect rates with dashboards." },
  ],
  cta: {
    title: "Ready to Scale Operations?",
    description: "Let’s run your processes with measurable quality and efficiency.",
    buttonText: "Explore BPO",
    buttonHref: "/contact",
  },
};

export default function BPOServicePage() {
  return (
    <ServicePageTemplate
      data={bpoPageData}
      showCapabilities
      showWhyChooseUs
      showStrategicValue
      showDeliveryFramework
      showPhilosophy
    />
  );
}
