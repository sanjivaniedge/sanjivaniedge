import ServicePageTemplate from "@/components/ui/service-page-template";

const erpPageData = {
  title: "ERP Services (SAP & Oracle)",
  subtitle: "Integrated Systems That Drive Enterprise Precision",
  description:
    "ERP systems anchor enterprise operations. Sanjivani Edge provides SAP and Oracle services that improve process visibility, decision accuracy, and operational efficiency.",
  heroImage: "/Images/banner-erp.webp",
  heroImageAlt: "ERP Services",
  capabilities: {
    title: "ERP Capabilities",
    description: "End‑to‑end ERP programs from design to stabilization.",
    items: [
      { title: "ERP Strategy & Planning", description: "Blueprints aligned to process, industry, and scale.", image: "/Images/cap-erp/Strategy.webp" },
      { title: "ERP Implementation", description: "End‑to‑end deployment across key business functions.", image: "/Images/cap-erp/ERP-Implementation.webp" },
      { title: "ERP Support & Maintenance", description: "AMS, stabilization, enhancements, and issue resolution.", image: "/Images/cap-erp/ERP-Support.webp" },
      { title: "Training & Change Management", description: "Preparing teams for confident adoption and effective usage.", image: "/Images/cap-erp/Training.webp" },
    ],
  },
  whyChooseUs: {
    title: "Why Choose Our ERP",
    description: "Practical ERP programs focused on adoption, data quality, and measurable improvements.",
    features: [
      { step: "Step 1", title: "Experienced SAP & Oracle consultants", content: "Map current state and target outcomes with stakeholders.", image: "/Images/why-erp/Experienced-SAP-&-Oracle-consultants.webp" },
      { step: "Step 2", title: "Governance-driven ERP execution", content: "Define data, roles, and workflows aligned to governance.", image: "/Images/why-erp/Governance-driven-ERP-execution.webp" },
      { step: "Step 3", title: "Strong legacy of operational discipline", content: "Connect systems and enable teams for smooth adoption.", image: "/Images/why-erp/Strong-legacy-of-operational-discipline.webp" },
      { step: "Step 4", title: "Long-term support orientation", content: "Regular reviews, feedback loops, and process enhancements.", image: "/Images/why-erp/Long-term-support-orientation.webp" },
    ],
  },
  strategicValue: {
    title: "Strategic Value Delivered",
    description: "A unified source of truth and efficient, auditable processes.",
    metrics: [
      { value: "1", label: "Streamlined operations" },
      { value: "30%", label: "Strong cross-functional alignment" },
      { value: "15%", label: "Lower process inefficiencies" },
      { value: "20%", label: "Enhanced reporting and insight" },
      { value: "10%", label: "Reduced operational overhead" },
    ],
  },
  deliveryFramework: {
    title: "Our Delivery Framework.",
    description: "",
    timeline: [
      { title: "Discovery", content: "Process mapping and requirements.", image: "/Images/time-erp/Discovery.webp" },
      { title: "Blueprinting", content: "Modules, data, roles, and controls.", image: "/Images/time-erp/Blueprinting.webp" },
      { title: "Configuration", content: "APIs, pipelines, and testing.", image: "/Images/time-erp/Configuration.webp" },
      { title: "Testing", content: "Enable teams and transition.", image: "/Images/time-erp/Testing.webp" },
      { title: "Deployment", content: "Support, metrics, and improvements.", image: "/Images/time-erp/Deployment.webp" },
      { title: "Hypercare", content: "Regular reviews, feedback loops, and process enhancements.", image: "/Images/time-erp/Hypercare.webp" },
      { title: "AMS", content: "Support, metrics, and improvements.", image: "/Images/time-erp/AMS.webp" },

    ],
  },
  philosophy: {
    title: "How We Define Success",
    description: "Our success is measured by the tangible impact we create for your business through technology.",
    image: "/Images/erp.webp",
    imageAlt: "How We Define Success",
    successMetrics: [
      "Smooth go-live with minimal disruption",
      "Improved business process efficiency",
      "Accurate data and reporting",
      "Lower operational errors",
      "Strong user enablement"
    ],
    ctaText: "know more",
    ctaLink: "/about"
  },
  faqs: [
    { q: "Which ERPs do you work with?", a: "SAP and Oracle, alongside integrations with CRMs, data platforms, and custom applications." },
    { q: "Can you migrate data?", a: "Yes — data extraction, cleansing, mapping, and validation with reconciliation reports." },
    { q: "Do you customize modules?", a: "We implement extensions, workflows, and reports to fit business processes responsibly." },
    { q: "What about training and support?", a: "We provide role‑based training, documentation, and post‑go‑live support with SLAs." },
    { q: "How do you handle compliance?", a: "Segregation of duties, audit logs, access controls, and data policies aligned to governance." },
  ],
  cta: {
    title: "ERP modernization is more than system change — it is organizational evolution.",
    description: "Sanjivani Edge ensures that evolution is smooth, strategic, and sustainable.",
    buttonText: "Start Your Project",
    buttonHref: "/contact"
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
