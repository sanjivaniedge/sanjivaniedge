import ServicePageTemplate from "@/components/ui/service-page-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BPO Services India",
  description: "Customer Support & Finance Outsourcing",
  keywords: "A dependable BPO business located in India providing 24x7 support to customers, F&A, HR & process outsourcing for back office processes.",
  alternates: {
    canonical: "https://www.sanjivaniedge.com/services/bpo",
  },
};

const bpoPageData = {
  title: "BPO Services",
  subtitle: "Process Excellence for Scalable, High-Performance Operations",
  description:
    "Operational efficiency is vital in high-volume environments. Sanjivani Edge delivers process-driven BPO services across customer support, finance, HR, and back-office functions.",
  heroImage: "/Images/bpo-banner.webp",
  heroImageAlt: "BPO Services",
  capabilities: {
    title: "BPO Capabilities",
    description: "Core operations delivered with clarity, compliance, and speed.",
    items: [
      { title: "Customer Support", description: "Omnichannel assistance designed for responsiveness and experience.", image: "/Images/cap-bpo/Customer-support.webp" },
      { title: "Finance & Accounting", description: "Accurate, compliant, and consistent financial operations.", image: "/Images/cap-bpo/Finance.webp" },
      { title: "HR Operations", description: "Employee lifecycle management, payroll, and operations support.", image: "/Images/cap-bpo/HR.webp" },
      { title: "Back‑Office Support", description: "Data processing and administrative support with accuracy and speed.", image: "/Images/cap-bpo/Back-office.webp" },
    ],
  },
  whyChooseUs: {
    title: "Why Choose Our BPO",
    description: "Predictable operations with measurable outcomes and continuous improvements.",
    features: [
      { step: "Step 1", title: "Skilled process teams", content: "Define SOPs, SLAs, and handoffs with clarity.", image: "/Images/why-bpo/Skilled-Process-Teams.webp" },
      { step: "Step 2", title: "Transparent reporting", content: "Run operations with monitoring and coaching.", image: "/Images/why-bpo/Transparent-Reporting.webp" },
      { step: "Step 3", title: "Standard operating procedures", content: "Use analytics and automation to drive efficiency.", image: "/Images/why-bpo/Standard-operating-procedures.webp" },
      { step: "Step 4", title: "Quality assurance frameworks", content: "Regular reviews, feedback loops, and process refinements.", image: "/Images/why-bpo/Quality-assurance-frameworks.webp" },
    ],
  },
  strategicValue: {
    title: "Strategic Value Delivered",
    description: "Higher throughput, lower cost, and better customer experience.",
    metrics: [
      { value: "35%", label: "Scalable operations" },
      { value: "25%", label: "Reduced cost of service" },
      { value: "+20", label: "Enhanced customer satisfaction" },
      { value: "95%", label: "Standardized workflows" },
    ],
  },
  deliveryFramework: {
    title: "Our Delivery Framework.",
    description: "",
    timeline: [
      { title: "Process Mapping", content: "SOPs, SLAs, and training.", image: "/Images/time-bpo/Process-mapping.webp" },
      { title: "SOP Design", content: "Runbooks, QA, and reporting.", image: "/Images/time-bpo/SOP-design.webp" },
      { title: "Training", content: "Analytics, automation, and refinements.", image: "/Images/time-bpo/Training.webp" },
      { title: "Execution", content: "Continuous process improvement.", image: "/Images/time-bpo/Execution.webp" },
      { title: "Quality Check", content: "Regular reviews, feedback loops, and process refinements.", image: "/Images/time-bpo/Quality-check.webp" },
      { title: "Reporting", content: "Data-driven decisions, process optimization, and customer feedback.", image: "/Images/time-bpo/Reporting.webp" },
    ],
  },
  philosophy: {
    title: "How We Define Success",
    description: "",
    image: "/Images/How-We-Define-Success-bpo.webp",
    imageAlt: "BPO Success",
    successMetrics: [
      "Higher first‑contact resolution",
      "Improved processing accuracy",
      "Lower cycle times",
      "Strong SLA adherence",
      "Consistent service reliability",
    ],
  },
  faqs: [
    { q: "Which processes can you run?", a: "Customer support, data entry, validation, reconciliation, finance back‑office, and reporting." },
    { q: "How do you ensure quality?", a: "Sampling, scorecards, coaching plans, and feedback loops with targets." },
    { q: "Can you integrate with our tools?", a: "Yes — ticketing, CRM, ERP, and analytics platforms with secure access controls." },
    { q: "Do you provide automation?", a: "We implement RPA and workflow automation to reduce manual steps and errors." },
    { q: "What KPIs do you track?", a: "Throughput, accuracy, TAT, NPS/CSAT, and defect rates with dashboards." },
  ],
  cta: {
    title: "Processes shape performance",
    description: "Sanjivani Edge ensures those processes remain precise, scalable, and dependable.",
    buttonText: "Start Your Project",
    buttonHref: "/contact"
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
