import ServicePageTemplate from "@/components/ui/service-page-template";

const infraPageData = {
  title: "IT Infrastructure",
  subtitle: "Reliable Foundations for Continuous Enterprise Performance",
  description:
    "Infrastructure determines the stability, speed, and resilience of business operations. Sanjivani Edge builds and manages environments designed for reliability and long-term performance.",
  heroImage: "/Images/it-banner.webp",
  heroImageAlt: "IT Infrastructure",
  capabilities: {
    title: "Our Infrastructure Capabilities",
    description:
      "End-to-end infrastructure services from design and deployment to management and optimization.",
    items: [
      {
        title: "Server Installation & Maintenance",
        description: "High-availability server environments with lifecycle management.",
         tools: " Windows Server, Linux",
        image: "/Images/cap-it/Server-Installation-Maintenance.webp",
      },
      {
        title: "Network Setup & Monitoring",
        description: "Secure, optimized network architectures with continuous monitoring.",
        tools: " Cisco, Juniper, Nagios",
        image: "/Images/cap-it/Network-Setup-Monitoring.webp",
      },
      {
        title: "Hardware & Software Support",
        description: "Multi-level troubleshooting and maintenance.",
        tools: " Remote Desktop, TeamViewer",
        image: "/Images/cap-it/Hardware-Software-Support.webp",
      },
      {
        title: "Data Center Management",
        description: "Operational controls, disaster recovery planning, resource management.",
        tools: " VMware, Hyper-V",
        image: "/Images/cap-it/Data-Center-Management.webp",
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
        title: "Process-driven operations",
        content: "Reference architectures tuned for availability, scale, and cost control.",
        image: "/Images/why-it/Process-Driven-Operations.webp",
      },
      {
        step: "Step 2",
        title: "Certified infrastructure experts",
        content: "Runbooks, observability, and SRE practices keep systems predictable.",
        image: "/Images/why-it/Certified-Infrastructure-Experts.webp",
      },
      {
        step: "Step 3",
        title: "Preventive maintenance approach",
        content: "Identity, encryption, and hardening embedded across the stack.",
        image: "/Images/why-it/Preventive-Maintenance-Approach.webp",
      },
      {
        step: "Step 4",
        title: "Rigorous monitoring frameworks",
        content: "Comprehensive metrics, alerting, and logging for proactive issue detection.",
        image: "/Images/why-it/Rigorous-Monitoring-Frameworks.webp",
      },
    ],
  },
  strategicValue: {
    title: "Strategic Value Delivered",
    description:
      "Measured improvements in availability, performance, and operational efficiency.",
    metrics: [
      { value: "99.95%", label: "Lower operational disruptions" },
      { value: "40%", label: "Efficient infrastructure costs" },
      { value: "2x", label: "Improved system redundancy" },
      { value: "30%", label: "Faster recovery in failure scenarios" },
      { value: "Enhanced lifecycle planning", label: "Enhanced lifecycle planning" },
    ],
  },
  deliveryFramework: {
    title: "Our Delivery Framework",
    description: "",
    timeline: [
      {
        title: "Assessment",
        content: "Current state analysis, constraints, and success criteria.",
        image: "/Images/time-it/Assessment.webp",
      },
      {
        title: "Setup",
        content: "Network, compute, storage, and security designs.",
        image: "/Images/time-it/Setup.webp",
      },
      {
        title: "Monitoring",
        content: "Controlled rollout with validation and sign-offs.",
        image: "/Images/time-it/Monitoring.webp",
      },
      {
        title: "Optimization",
        content: "Monitoring, runbooks, backup, and governance.",
        image: "/Images/time-it/Optimization.webp",
      },
      {
        title: "Maintenance",
        content: "Reviews, optimization, and roadmap updates.",
        image: "/Images/time-it/Maintenance.webp",
      },
      {
        title: "Upgrades",
        content: "Reviews, optimization, and roadmap updates.",
        image: "/Images/time-it/Upgrades.webp",
      },

    ],
  },
  philosophy: {
    title: "How We Define Success",
    description: "",
    image: "/Images/How-We-Define-Success-it.webp",
    imageAlt: "How We Define Success",
    successMetrics: [
      "Higher uptime.",
      "Predictable performance.",
      "Reduced outages.",
      "Faster problem resolution.",
      "Optimized hardware utilization."
    ],
    ctaText: "know more",
    ctaLink: "/about"
  },
  faqs: [
    {
      q: "What environments do you support?",
      a: "On‑prem, hybrid, and multi‑cloud with branch networks and datacenters across vendors.",
    },
    {
      q: "How do you improve availability?",
      a: "Reference architectures, redundancy, HA patterns, and proactive maintenance with tested failover.",
    },
    {
      q: "Do you offer monitoring and SRE?",
      a: "Yes — metrics, logs, alerts, SLIs/SLOs, runbooks, incident response, and postmortems.",
    },
    {
      q: "How is security enforced?",
      a: "Hardening, IAM, encryption, segmentation, patching, and compliance‑aligned operations.",
    },
    {
      q: "Can you help with DR and backups?",
      a: "Backup policies, replication, tested DR procedures, RTO/RPO alignment, and recovery drills.",
    },
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
