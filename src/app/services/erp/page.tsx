import ServicePageTemplate from "@/components/ui/service-page-template";

const erpPageData = {
  title: "ERP Services",
  subtitle: "Unified operations across finance, supply chain, and HR",
  description:
    "We implement, integrate, and optimize ERP platforms to provide a single source of truth and efficient processes across your enterprise.",
  heroImage: "/figma/capabilities-erp-2f97a5-1671ce.png",
  heroImageAlt: "ERP Services",
  capabilities: {
    title: "ERP Capabilities",
    description: "End‑to‑end ERP programs from design to stabilization.",
    items: [
      { title: "Implementation", description: "Module setup, configurations, and data migration.", image: "/figma/capabilities-erp-2f97a5-1671ce.png" },
      { title: "Integration", description: "APIs and pipelines with CRMs, BIs, and custom apps.", image: "/figma/capabilities-software-1a1c65.png" },
      { title: "Customization", description: "Extensions and workflows tailored to business needs.", image: "/figma/Emerge.png" },
      { title: "Support & Training", description: "Runbooks, knowledge transfer, and change management.", image: "/figma/capabilities-shield.png" },
    ],
  },
  whyChooseUs: {
    title: "Why Choose Our ERP",
    description: "Practical ERP programs focused on adoption, data quality, and measurable improvements.",
    features: [
      { step: "Step 1", title: "Process Discovery", content: "Map current state and target outcomes with stakeholders.", image: "/figma/capabilities-erp-2f97a5-1671ce.png" },
      { step: "Step 2", title: "Design & Configure", content: "Define data, roles, and workflows aligned to governance.", image: "/figma/capabilities-software-1a1c65.png" },
      { step: "Step 3", title: "Integrate & Train", content: "Connect systems and enable teams for smooth adoption.", image: "/figma/Emerge.png" },
    ],
  },
  strategicValue: {
    title: "Value Delivered",
    description: "A unified source of truth and efficient, auditable processes.",
    metrics: [
      { value: "1", label: "Source of Truth" },
      { value: "30%", label: "Cycle Time Reduction" },
      { value: "15%", label: "Error Rate Reduction" },
    ],
  },
  deliveryFramework: {
    title: "ERP Delivery Framework",
    description: "A structured program from discovery to stabilization.",
    timeline: [
      { title: "Discovery", content: "Process mapping and requirements.", image: "/figma/capabilities-erp-2f97a5-1671ce.png" },
      { title: "Design & Configure", content: "Modules, data, roles, and controls.", image: "/figma/capabilities-software-1a1c65.png" },
      { title: "Integration", content: "APIs, pipelines, and testing.", image: "/figma/Emerge.png" },
      { title: "Training & Go‑Live", content: "Enable teams and transition.", image: "/figma/capabilities-shield.png" },
      { title: "Stabilization", content: "Support, metrics, and improvements.", image: "/figma/capabilities-erp-2f97a5-1671ce.png" },
    ],
  },
  philosophy: {
    title: "ERP Philosophy",
    description: "Adoption and data quality matter more than features — design for clarity and governance.",
    image: "/figma/capabilities-erp-2f97a5-1671ce.png",
    imageAlt: "ERP Philosophy",
  },
  faqs: [
    { q: "Which ERPs do you work with?", a: "SAP and Oracle, alongside integrations with CRMs, data platforms, and custom applications." },
    { q: "Can you migrate data?", a: "Yes — data extraction, cleansing, mapping, and validation with reconciliation reports." },
    { q: "Do you customize modules?", a: "We implement extensions, workflows, and reports to fit business processes responsibly." },
    { q: "What about training and support?", a: "We provide role‑based training, documentation, and post‑go‑live support with SLAs." },
    { q: "How do you handle compliance?", a: "Segregation of duties, audit logs, access controls, and data policies aligned to governance." },
  ],
  cta: {
    title: "Ready to Unify Operations?",
    description: "Let’s deliver an ERP that teams actually adopt and trust.",
    buttonText: "Explore ERP",
    buttonHref: "/contact",
  },
};

export default function ERPServicePage() {
  return (
    <ServicePageTemplate
      data={erpPageData}
      showCapabilities
      showWhyChooseUs
      showStrategicValue
      showDeliveryFramework
      showPhilosophy
    />
  );
}
