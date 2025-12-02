import ServicePageTemplate from "@/components/ui/service-page-template";

const cloudPageData = {
  title: "Cloud Services",
  subtitle: "Modernizing Infrastructure for Elastic, Intelligent Operations",
  description:
    "Cloud ecosystems now serve as the backbone of enterprise transformation. Sanjivani Edge accelerates cloud adoption, migration, and management with architectures built for resilience, optimization, and scale.",
  heroImage: "/Images/cloud.webp",
  heroImageAlt: "Cloud Infrastructure",
  capabilities: {
    title: "Our Cloud Capabilities",
    description:
      "Comprehensive cloud services from migration to optimization, ensuring your infrastructure scales with your business.",
    items: [
      {
        title: "Cloud Consulting",
        description: "FCloud readiness assessments and architecture strategies aligned to enterprise goals.",
        tools: "AWS, Azure, Google Cloud",
        image:
          "/Images/cap-cloud/Cloud-Consulting.webp",
      },
      {
        title: "Cloud Migration",
        description:
          "Zero-downtime migration of workloads, applications, and databases.",
        tools: ["CloudEndure, Azure Migrate"],
        image:
          "/Images/cap-cloud/Cloud-migration.webp",
      },
      {
        title: "Cloud Backup & Storage",
        description:
          "Secure, scalable backup systems ensuring continuity and data integrity.",
        tools: ["S3, Glacier, Blob"],
        image:
          "/Images/cap-cloud/Cloud-backup.webp",
      },
      {
        title: "Cloud Infrastructure Management",
        description: "End-to-end monitoring, cost optimization, and configuration management.",
        tools: ["Prometheus, Terraform, Ansible"],
        image:
          "/Images/cap-cloud/Cloud-infrastructure-management.webp",
      },

    ],
  },
  whyChooseUs: {
    title: "Why Choose Our Cloud Services",
    description:
      "We combine deep expertise in cloud technologies and a proven methodology for successful cloud transformations.",
    features: [
      {
        step: "Step 1",
        title: "Certified cloud architects",
        content:
          "Certified cloud architects and engineers ensuring best practices in every deployment.",
        image:
          "/Images/why-cloud/Certified-cloud-architects.webp",
      },
      {
        step: "Step 2",
        title: "Proven migration methodology",
        content:
          "A proven migration methodology that minimizes risk and downtime.",
        image:
          "/Images/why-cloud/Proven-migration-methodology.webp",
      },
      {
        step: "Step 3",
        title: "Security-first approach",
        content:
          "Round-the-clock cloud monitoring and support to keep your business running.",
        image:
          "/Images/why-cloud/Security-first-approach.webp",
      },
      {
        step: "Step 4",
        title: "Automation-driven cloud operations",
        content:
          "Streamlined processes and reduced manual intervention.",
        image:
          "/Images/why-cloud/Automation-driven-cloud-operations.webp",
      },
    ],
  },
  strategicValue: {
    title: "Strategic Value Delivered",
    description:
      "Our cloud solutions deliver significant improvements in performance, cost, and operational efficiency.",
    metrics: [
      { value: "60%", label: "Reduced infrastructure cost", description: "Lower infrastructure and operational costs" },
      { value: "99.99%", label: "Faster deployment cycles", description: "High availability and reliability" },
      { value: "3x", label: "Enhanced resilience and failover readiness", description: "Accelerated application deployment" },
      { value: "90%", label: "Unified visibility across applications", description: "Strengthened data protection and compliance" },
      { value: "80%", label: "Future-ready cloud foundations", description: "Streamlined processes and reduced manual intervention" },
    ],
  },
  deliveryFramework: {
    title: "Our Delivery Framework",
    description:
      "A systematic approach to cloud adoption that minimizes risk and maximizes benefits.",
    timeline: [
      {
        title: "Assessment",
        content:
          "We conduct a thorough assessment of your current infrastructure and develop a detailed migration plan.",
        image:
          "/Images/time-cloud/Assessment.webp",
      },
      {
        title: "Architecture",
        content:
          "Our architects design a secure and scalable cloud environment tailored to your specific needs.",
        image:
          "/Images/time-cloud/Architecture.webp",
      },
      {
        title: "Migration",
        content:
          "We execute the migration with minimal disruption, moving your applications and data to the cloud.",
        image:
          "/Images/time-cloud/Migration.webp",
      },
      {
        title: "Optimization",
        content:
          "We optimize your cloud resources for performance and cost, and conduct rigorous testing.",
        image:
          "/Images/time-cloud/Optimization.webp",
      },
      {
        title: "Governance",
        content:
          "We provide ongoing monitoring and management to ensure your cloud environment operates smoothly.",
        image:
          "/Images/time-cloud/Governance.webp",
      },
      {
        title: "Monitoring",
        content:
          "We provide ongoing support to ensure your cloud environment operates smoothly.",
        image:
          "/Images/time-cloud/Monitoring.webp",
      },
      {
        title: "Continuous Improvement",
        content:
          "We provide ongoing support to ensure your cloud environment operates smoothly.",
        image:
          "/Images/time-cloud/Continuous-Improvement.webp",
      },
    ],
  },
  philosophy: {
    title: "How We Define Success",
    description: "",
    image: "/Images/How-We-Define-Success-Cloud.webp",
    imageAlt: "How We Define Success",
    successMetrics: [
      "Seamless migrations.",
      "Optimized cloud spend.",
      "High availability and uptime.",
      "Strengthened backup reliability.",
      "Stable multi-cloud environments."
    ],
    ctaText: "know more",
    ctaLink: "/about"
  },
  faqs: [
    {
      q: "Which cloud providers do you support?",
      a: "AWS, Azure, Google Cloud, and Oracle Cloud — selected per workload, compliance, and cost objectives.",
    },
    {
      q: "How do you ensure secure migrations with minimal downtime?",
      a: "Phased migration, blue/green deploys, replication, cutover windows, rollbacks, IAM hardening, and encryption at-rest/in-transit.",
    },
    {
      q: "Do you help with cost optimization?",
      a: "Rightsizing, autoscaling, reserved capacity, storage tiering, and observability-driven optimization tied to SLAs.",
    },
    {
      q: "What compliance standards can you work with?",
      a: "ISO 27001, SOC 2, HIPAA-like safeguards, and data residency with audit trails and policy enforcement.",
    },
    {
      q: "Do you provide ongoing management and support?",
      a: "24/7 monitoring, patching, backup/restore, incident response, and continuous improvements via SRE/DevOps.",
    },
  ],
  cta: {
    title: "Cloud, when architected responsibly, becomes a multiplier of enterprise performance.",
    description:
      "Sanjivani Edge ensures that multiplier is reliable and enduring.",
        buttonText: "Start Your Project",
        buttonHref: "/contact"
  },
};

export default function CloudServicesPage() {
  return (
    <ServicePageTemplate
      data={cloudPageData}
      showCapabilities
      showWhyChooseUs
      showStrategicValue
      showDeliveryFramework
      showPhilosophy
    />
  );
}
