export interface Job {
  id: number;
  slug: string;
  title: string;
  description: string;
  type: string;
  location: string;
  category: "Development" | "Operations";
  experience?: string;
  aboutRole?: string;
  lifeAt?: string;
  responsibilities?: string[];
  requirements?: string[];
  perks?: string[];
  hidden?: boolean;
}

export const JOBS: Job[] = [
  {
    id: 1,
    slug: "csharp-selenium-automation",
    title: "C# Selenium Automation Engineer",
    description:
      "Build scalable automation frameworks using C#, Selenium WebDriver, and CI/CD tools for enterprise-grade testing.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "6 to 10 Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Developing and maintaining automation frameworks using C# and Selenium WebDriver for web application testing",
      "Integrating automation with CI/CD pipelines using Jenkins and Azure DevOps",
      "Managing version control using Git",
      "Performing cross-browser and cross-platform testing to ensure consistent user experience",
      "Conducting API testing using Postman and RestAssured for backend service validation",
      "Designing reusable automation scripts and implementing best practices to optimize test coverage and execution",
      "Collaborating closely with QA, development and DevOps teams to align testing strategies with release cycles",
      "Troubleshooting and resolving automation issues to ensure reliability and scalability of test suites",
      "Documenting processes and maintaining test reports for transparency and continuous improvement",
    ],
    requirements: [
      "6–10 years of strong hands-on experience in C# Selenium automation",
      "Proven experience building and maintaining automation frameworks",
      "Hands-on CI/CD and API testing exposure",
      "Strong problem-solving mindset and attention to detail",
      "Good communication and collaboration skills",
      "Ability to take ownership and work independently when needed",
    ],
    perks: [
      "Work on enterprise-grade automation and QA platforms",
      "Exposure to modern DevOps and testing practices",
      "Long-term growth and leadership opportunities",
      "Transparent, collaborative and people-first culture",
      "Teams that value clean work, accountability and innovation",
    ],
  },
  {
    id: 2,
    slug: "technical-recruiter",
    title: "Technical (IT) Recruiter",
    description:
      "Drive full-cycle recruitment for technical roles using Naukri, LinkedIn, and Boolean search strategies in a fast-paced hiring environment.",
    type: "Full Time",
    location: "Noida (Work From Office)",
    category: "Operations",
    experience: "2 to 3 Years",
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Handling the full-cycle recruitment process for IT, sales, product, technical and other roles",
      "Sourcing candidates using Naukri (Resdex), LinkedIn and niche portals through advanced Boolean search strategies",
      "Partnering with Hiring Managers to understand role requirements and share market insights on salary benchmarks",
      "Building and maintaining a steady candidate pipeline to reduce Time-to-Hire",
      "Ensuring a seamless and professional interview experience for candidates",
      "Tracking and reporting recruitment metrics such as Lead-to-Hire ratio and Source effectiveness using ATS tools",
      "Contributing to employer branding and recruitment process improvements",
    ],
    requirements: [
      "Graduate/Post-Graduate (MBA in HR is a plus)",
      "2–3 years of core IT recruitment experience (Agency or Corporate)",
      "Proven track record in high-impact sourcing and closing difficult roles",
      "Excellent verbal and written English communication skills",
      "Strong ownership and relationship-building skills",
      "Candidates who can join within 30 days or immediately will be preferred",
    ],
    perks: [
      "Direct impact on building high-performance technical teams",
      "Transparent hiring culture and leadership exposure",
      "Long-term growth opportunities in HR and Talent Acquisition",
      "Collaborative and people-first work environment",
      "Teams that value clean work, accountability and innovation",
    ],
  },
  {
    id: 3,
    slug: "mulesoft-developer",
    title: "MuleSoft Developer",
    description:
      "Design, develop and maintain integrations using MuleSoft 3.x and 4.x, with Java as a core development skill.",
    type: "Full Time",
    location: "Pune / Bangalore / Remote / PAN",
    category: "Development",
    experience: "4 to 7 Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and maintain integrations using MuleSoft 3.x and 4.x, with Java as a core development skill",
      "Build API-led and pub-sub integration solutions using Mule to support enterprise data flows",
      "Design scalable, high-performance schemas and data models aligned with functional and technical requirements",
      "Work on complex integrations across domains such as Master Data Management, Supply Chain and CRM",
      "Troubleshoot production issues and resolve development-time challenges through structured problem-solving",
      "Collaborate closely with functional and technical stakeholders to explain integration designs and ensure alignment across source and target systems",
    ],
    requirements: [
      "4–7 years of hands-on experience working with MuleSoft (3.x and 4.x) and Java (mandatory)",
      "Proven experience building API-led and event-driven integrations using Mule",
      "Strong expertise in schema design, data transformation and integration performance optimization",
      "Domain awareness in Master Data, Supply Chain or CRM environments is a strong advantage",
      "Solid analytical and problem-solving skills with the ability to handle production issues independently",
      "Excellent communication skills to effectively bridge technical designs with business and functional teams",
      "A strong sense of ownership and accountability for integration delivery",
    ],
    perks: [
      "Opportunity to work on large-scale enterprise integration programs",
      "Exposure to multiple business domains and modern integration architectures",
      "Clear ownership of integrations from design to production support",
      "Long-term, stable projects with real business impact",
      "A collaborative, people-first culture that values clarity, execution and expertise",
    ],
  },
  {
    id: 4,
    slug: "oracle-fusion-technical-consultant",
    title: "Oracle Fusion Cloud Technical Consultant (GL & FA)",
    description:
      "Work as a technical consultant on Oracle Fusion Cloud implementations and support engagements, with a primary focus on General Ledger (GL) and Fixed Assets (FA).",
    type: "Full Time",
    location: "Pune / Bangalore / Chennai / Hyderabad / Kolkata",
    category: "Development",
    experience: "7+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Work as a technical consultant on Oracle Fusion Cloud implementations and support engagements, with a primary focus on General Ledger (GL) and Fixed Assets (FA)",
      "Configure, customize and support Oracle Fusion modules including GL, Accounts Payables, Accounts Receivables, Cash Management, Fixed Assets, HCM and Procurement (future PO needs)",
      "Develop and maintain integrations using Oracle Integration Cloud (OIC) to support end-to-end business processes",
      "Design and develop reports using BI Publisher (BIP) to meet statutory, operational and management reporting needs",
      "Build and support analytics using OTBI, Business Intelligence Cloud Connector (BICC) and Fusion Analytics Warehouse",
      "Collaborate with functional teams, finance stakeholders and technical teams to translate business requirements into scalable Oracle Fusion solutions",
    ],
    requirements: [
      "7+ years of overall experience with strong hands-on exposure to Oracle Fusion Cloud",
      "Mandatory experience in General Ledger (GL) and Fixed Assets (FA) modules",
      "Proven experience working with Oracle Integration Cloud (OIC)",
      "Functional and technical understanding of additional modules including AP, AR, CM, HCM and Procurement",
      "Strong experience in BIP report development, OTBI, BICC and Fusion Analytics Warehouse",
      "Ability to handle technical configurations, integrations and reporting requirements independently",
      "Strong analytical, communication and stakeholder management skills",
    ],
    perks: [
      "Opportunity to work on enterprise-scale Oracle Fusion Cloud programs",
      "Exposure to both technical and functional aspects of Oracle Finance ecosystems",
      "Long-term, stable projects with clear ownership and accountability",
      "Collaborative teams that value precision, clarity and execution",
      "A people-first culture that supports growth and continuous learning",
    ],
  },
  {
    id: 5,
    slug: "sr-workday-specialist",
    title: "Sr Workday Specialist – HR Technology",
    description:
      "Act as Systems Administrator for Workday and HR Technology platforms, supporting Core HCM, Time Tracking, Payroll, Time Off, Absence and related modules.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "6+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Act as Systems Administrator for Workday and HR Technology platforms, supporting Core HCM, Time Tracking, Payroll, Time Off, Absence and related modules",
      "Configure, maintain and enhance Workday business processes, data structures and integrations, ensuring data accuracy and system reliability",
      "Partner with stakeholders across HR, Payroll, Finance, Audit, Legal and IT to gather requirements, troubleshoot issues and implement system improvements",
      "Design, build and manage complex Workday reports and integration touchpoints, ensuring alignment across end-to-end business processes",
      "Support data optimization initiatives including legacy data cleansing, conversion planning and validation",
      "Lead audit and compliance activities related to associate master data, ensuring consistency, integrity and adherence to company policies",
    ],
    requirements: [
      "6+ years of progressively responsible experience in HRIS / Workday ecosystems, with strong hands-on exposure",
      "Functional experience in Workday Core HCM, Time Tracking, Time Off, Absence, Recruiting and Compensation / Advanced Compensation",
      "Proven experience working as a Workday Systems Administrator supporting enterprise HR technology environments",
      "Strong understanding of end-to-end HR business processes and data governance",
      "Experience working with integrated vendors such as ADP (Payroll) and Fidelity (Benefits)",
      "Strong analytical, problem-solving and stakeholder management skills",
      "Excellent written and verbal communication skills with the ability to work across technical and non-technical teams",
    ],
    perks: [
      "Opportunity to own and shape enterprise-wide Workday HR technology platforms",
      "Exposure to complex reporting, integrations and compliance-driven HR environments",
      "High-visibility role with direct interaction with business and leadership stakeholders",
      "Long-term, stable HR technology programs with real organizational impact",
      "A collaborative, people-first culture that values trust, ownership and continuous improvement",
    ],
  },
  {
    id: 6,
    slug: "senior-workday-hcm-reporting-consultant",
    title: "Senior Workday HCM & Reporting Consultant (Functional)",
    description:
      "Design, configure and support Workday Core HCM modules, including Staffing, Compensation and Benefits, ensuring alignment with business needs.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "4+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, configure and support Workday Core HCM modules, including Staffing, Compensation and Benefits, ensuring alignment with business needs",
      "Analyze existing HR workflows to identify gaps and bottlenecks, and configure Business Process (BP) frameworks for improved efficiency",
      "Build and maintain complex Workday reports such as Matrix, Composite and Trending reports using Report Writer and Calculated Fields",
      "Develop dashboards and reporting views to support HR and leadership decision-making",
      "Partner with HR and Finance stakeholders to gather requirements and translate them into functional system solutions",
      "Support testing, validation and deployment of configuration and reporting changes",
    ],
    requirements: [
      "4+ years of functional HRIS experience, with strong hands-on exposure to Workday",
      "Deep functional expertise in Workday Core HCM",
      "Good understanding of Workday Report Writer and Calculated Fields (added advantage)",
      "Experience working directly with business stakeholders to deliver functional solutions",
      "Strong analytical and documentation skills",
      "Ability to manage multiple priorities in a fast-paced environment",
      "Clear communication skills and a collaborative working style",
    ],
    perks: [
      "Opportunity to work on enterprise Workday HCM implementations",
      "High-visibility functional role with direct stakeholder interaction",
      "Exposure to complex reporting and business process optimization initiatives",
      "Long-term projects with clearly defined responsibilities",
      "A collaborative, people-first work culture that values ownership and expertise",
    ],
  },
  {
    id: 7,
    slug: "senior-workday-integration-developer",
    title: "Senior Workday Integration Developer",
    description:
      "Design and develop end-to-end Workday integrations, including inbound and outbound interfaces using EIBs, Core Connectors and Workday Studio.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "4+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design and develop end-to-end Workday integrations, including inbound and outbound interfaces using EIBs, Core Connectors and Workday Studio",
      "Implement custom data transformations using XSLT and XML, and manage API interactions through SOAP and REST web services",
      "Evaluate integration requirements and recommend the most effective technical architecture based on business and system needs",
      "Monitor scheduled integrations, troubleshoot failures and perform root-cause analysis to ensure system stability",
      "Manage weekly Workday service updates, including regression testing and post-release validation",
      "Collaborate with functional Workday teams and business stakeholders to ensure seamless integration delivery",
    ],
    requirements: [
      "4+ years of hands-on experience in Workday Integration development",
      "Expert-level proficiency in Workday Studio, EIB, Cloud Connect, XSLT and XML",
      "Strong understanding of Workday Web Services (WWS) and SOAP/REST APIs",
      "Proven experience designing and maintaining complex Workday integrations",
      "Strong analytical and debugging skills with the ability to resolve integration issues independently",
      "Good communication skills and the ability to collaborate with cross-functional teams",
    ],
    perks: [
      "Opportunity to work on complex Workday integration landscapes for enterprise clients",
      "Exposure to advanced integration architectures and real-world HR technology ecosystems",
      "High-ownership role with visibility across functional and technical teams",
      "Long-term, stable programs with continuous enhancement opportunities",
      "A collaborative, people-first culture that values expertise, ownership and execution",
    ],
  },
  {
    id: 8,
    slug: "oracle-functional-ebs-crm-consultant-wms",
    title: "Oracle – Functional – EBS CRM Consultant (WMS Implementation)",
    description:
      "Act as a functional SME for Oracle EBS Warehouse Management (WMS), owning end-to-end configuration, implementation and support.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "8 to 12 Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Act as a functional SME for Oracle EBS Warehouse Management (WMS), owning end-to-end configuration, implementation and support",
      "Analyze business and warehouse requirements, perform fit-gap analysis, and translate them into effective Oracle WMS solution designs and configurations",
      "Lead and support end-to-end WMS implementation activities including system setup, configuration, functional testing and user training",
      "Collaborate with internal teams, project managers, technical consultants and business stakeholders to ensure successful delivery and integration",
      "Resolve functional challenges, facilitate workshops, document functional designs and assist with post-go-live support",
    ],
    requirements: [
      "8–12 years of experience as an Oracle EBS Functional Consultant, with strong exposure to Warehouse Management System (WMS) projects",
      "Proven track record of Oracle EBS WMS implementation and configuration, with deep understanding of warehouse business processes",
      "Strong skills in requirement gathering, functional design, business process analysis and documentation",
      "Experience working in full project lifecycles (CRP, UAT, cutover, support) and interacting directly with clients and stakeholders",
      "Excellent communication, stakeholder management and problem-solving skills with the ability to work across teams and locations",
    ],
    perks: [
      "Opportunity to work on enterprise class Oracle EBS WMS implementations impacting supply chain and warehousing operations",
      "Exposure to functional business processes and configuration best practices across EBS modules",
      "High visibility role with direct client interaction and real business impact",
      "Long-term, stable assignments with potential for extended engagements",
      "A collaborative, people-first culture that values clarity, ownership and smart execution",
    ],
  },
  {
    id: 9,
    slug: "oracle-cloud-technical-developer-oic-vbcs-apex",
    title: "Oracle Cloud Technical Developer (OIC & VBCS – APEX)",
    description:
      "Design, develop and implement integrations using Oracle Integration Cloud (OIC), including connections, orchestrations, mappings and REST/SOAP APIs.",
    type: "Full-time / Subcontractor",
    location: "Remote / Hybrid",
    category: "Development",
    experience: "5 to 15 Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and implement integrations using Oracle Integration Cloud (OIC), including connections, orchestrations, mappings and REST/SOAP APIs for enterprise applications",
      "Build responsive, scalable web and mobile applications using Oracle Visual Builder Cloud Service (VBCS) to extend Oracle Cloud SaaS functionality",
      "Develop custom applications and extensions using Oracle APEX, integrating with Oracle Fusion/Cloud SaaS and reporting layers",
      "Collaborate with functional teams, architects and stakeholders to gather requirements, define technical designs and deliver solutions",
      "Troubleshoot issues, optimize solution performance and maintain technical documentation for integrations, custom apps and deployments",
    ],
    requirements: [
      "5–15 years of hands-on experience with Oracle Cloud technical development, particularly OIC, VBCS and APEX",
      "Strong expertise in designing and implementing Oracle Integration Cloud (OIC) solutions including adapters, REST/SOAP integrations and event-based flows",
      "Experience building UI/UX applications using Oracle Visual Builder Cloud Service (VBCS) and strong skills in JavaScript/HTML/CSS",
      "Practical experience developing extensions and applications using Oracle APEX, including reporting and integration with backend services",
      "Strong problem-solving, communication and collaboration skills across technical and business teams",
    ],
    perks: [
      "Opportunity to work on enterprise-scale Oracle PaaS solutions spanning integration, frontend and low-code/modern app development",
      "Exposure to multiple Oracle Cloud technologies such as OIC, VBCS, APEX and Oracle Fusion SaaS",
      "High-ownership role that bridges both technical engineering and client delivery",
      "Long-term, impactful projects with global clients",
      "A collaborative, people-first culture that values innovation and execution",
    ],
  },
  {
    id: 10,
    slug: "oracle-apex-developer-api-rest-api",
    title: "Oracle APEX Developer – API, REST API",
    description:
      "Design, develop and maintain enterprise-grade Oracle APEX applications, including interactive reports, forms, pages and dashboards.",
    type: "Contract-to-Hire (C2H)",
    location: "Remote / Hybrid / PAN India",
    category: "Development",
    experience: "6 Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and maintain enterprise-grade Oracle APEX applications, including interactive reports, forms, pages and dashboards",
      "Build and integrate RESTful APIs and web services (REST/ORDS) for data access and integration with external systems",
      "Write optimized PL/SQL and SQL code to support application logic, database operations and performance-tuned features",
      "Collaborate with cross-functional teams, analysts and stakeholders to understand requirements and deliver high-quality solutions",
      "Troubleshoot, test and debug issues, implement fixes and ensure application reliability, security and performance",
    ],
    requirements: [
      "6+ years of hands-on experience in Oracle APEX development building enterprise web applications",
      "Strong experience working with RESTful APIs and integrations in Oracle environments",
      "Proficient in SQL, PL/SQL and database object development for Oracle Database",
      "Experience with APEX component configuration, page design, interactive grids, reports and security",
      "Good collaboration, analytical and communication skills with the ability to work with remote teams",
    ],
    perks: [
      "Ownership of oracle low-code applications used by enterprise clients",
      "Exposure to modern cloud, API and enterprise integration landscapes",
      "Opportunity to work on custom, high-impact APEX projects with global teams",
      "A collaborative, people-first culture that values execution, learning and clarity",
      "Long-term C2H assignments that challenge your skills and grow your expertise",
    ],
  },
  {
    id: 11,
    slug: "workday-advanced-reporting-consultant",
    title: "Workday Advanced Reporting Consultant",
    description:
      "Design and develop advanced Workday reports including Matrix, Composite, Trending and Dashboards.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design and develop advanced Workday reports including Matrix, Composite, Trending and Dashboards",
      "Build and maintain calculated fields, report prompts and complex data logic to meet business reporting needs",
      "Partner with HR, Payroll, Finance and stakeholders to understand reporting requirements and translate them into accurate Workday outputs",
      "Support data validation, audit reporting and compliance requirements across Workday modules",
      "Troubleshoot reporting issues, optimize performance and support enhancements in ongoing Workday environments",
    ],
    requirements: [
      "5+ years of hands-on experience working with Workday Advanced Reporting",
      "Strong expertise in Workday Report Writer, Calculated Fields and Dashboards",
      "Good understanding of Workday HCM data structures and cross-functional reporting",
      "Experience supporting business users with ad-hoc, operational and management reports",
      "Strong analytical, documentation and stakeholder communication skills",
    ],
    perks: [
      "Opportunity to work on enterprise-scale Workday reporting solutions",
      "High-visibility role supporting critical HR and business insights",
      "Exposure to complex reporting use cases across global clients",
      "Flexible PAN India engagement with long-term C2H potential",
      "A collaborative, people-first culture that values clarity, accuracy and execution",
    ],
  },
  {
    id: 12,
    slug: "workday-us-payroll-consultant",
    title: "Workday US Payroll Consultant",
    description:
      "Configure, implement and support Workday US Payroll end-to-end, ensuring accurate and compliant payroll processing.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Configure, implement and support Workday US Payroll end-to-end, ensuring accurate and compliant payroll processing",
      "Manage payroll setups including earnings, deductions, taxes, garnishments and year-end activities",
      "Partner with HR, Finance and Payroll teams to gather requirements, resolve issues and support payroll cycles",
      "Support payroll integrations with Time Tracking, Benefits and third-party vendors",
      "Assist with testing, audits, compliance updates and ongoing payroll enhancements",
    ],
    requirements: [
      "5+ years of hands-on experience working with Workday US Payroll",
      "Strong understanding of US payroll processes, tax regulations and compliance requirements",
      "Experience with payroll configuration, troubleshooting and production support",
      "Exposure to Workday Time Tracking and Benefits integrations is a plus",
      "Strong analytical, communication and stakeholder-management skills",
    ],
    perks: [
      "Opportunity to work on critical payroll systems for enterprise clients",
      "High-visibility role with direct impact on payroll accuracy and compliance",
      "Exposure to complex payroll operations and regulatory environments",
      "Flexible PAN India engagement with long-term C2H potential",
      "A collaborative, people-first culture that values clarity, ownership and execution",
    ],
  },
  {
    id: 13,
    slug: "workday-hcm-reporting-consultant",
    title: "Workday HCM & Reporting Consultant",
    description:
      "Configure and support Workday Core HCM modules and deliver end-to-end reporting solutions for business stakeholders.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Configure and support Workday Core HCM modules including staffing, organizations, business processes and security",
      "Design and develop Workday reports and dashboards, including advanced, matrix and composite reports using calculated fields",
      "Partner with HR and business stakeholders to gather requirements and deliver end-to-end HCM and reporting solutions",
      "Support data validation, audits and compliance reporting across Workday HCM",
      "Troubleshoot issues, support enhancements and assist with testing during Workday updates and releases",
    ],
    requirements: [
      "5+ years of hands-on experience working as a Workday HCM & Reporting Consultant",
      "Strong knowledge of Workday Core HCM configuration and business process frameworks",
      "Proven experience with Workday reporting, calculated fields and dashboards",
      "Ability to work closely with HR, Payroll and cross-functional teams in a client-facing environment",
      "Strong analytical, documentation and communication skills",
    ],
    perks: [
      "Opportunity to work on enterprise-scale Workday HCM implementations",
      "High-visibility role supporting critical HR operations and insights",
      "Exposure to diverse Workday use cases across global clients",
      "Flexible PAN India engagement with long-term C2H potential",
      "A collaborative, people-first culture that values clarity, ownership and execution",
    ],
  },
  {
    id: 14,
    slug: "workday-time-absence-reporting-consultant",
    title: "Workday Time & Absence + Reporting Consultant",
    description:
      "Configure, implement and support Workday Time Tracking, Time Off and Absence modules with reporting.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
    hidden: true,
    aboutRole:
      "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt:
      "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Configure, implement and support Workday Time Tracking, Time Off and Absence modules end-to-end",
      "Design and maintain Workday reports and dashboards related to time, absence, accruals and compliance",
      "Partner with HR, Payroll and business stakeholders to gather requirements and deliver accurate time and absence solutions",
      "Support time-related integrations with Payroll and other downstream systems",
      "Troubleshoot issues, support audits, testing and enhancements during Workday releases and updates",
    ],
    requirements: [
      "5+ years of hands-on experience working with Workday Time & Absence and Reporting",
      "Strong understanding of time tracking rules, absence plans, accruals and eligibility configurations",
      "Proven experience building advanced Workday reports, calculated fields and dashboards",
      "Experience supporting Payroll integrations and compliance requirements",
      "Strong analytical, communication and stakeholder-management skills",
    ],
    perks: [
      "Opportunity to work on enterprise-scale Workday Time & Absence implementations",
      "High-impact role supporting workforce management and payroll accuracy",
      "Exposure to complex time, absence and compliance scenarios across clients",
      "Flexible PAN India engagement with long-term C2H potential",
      "A collaborative, people-first culture that values clarity, ownership and execution",
    ],
  },
  {
    id: 15,
    slug: "sap-ppqm-senior-consultant",
    title: "SAP PPQM Senior Consultant",
    description:
      "Lead end-to-end SAP PP & QM implementations on ECC and S/4 HANA for pharma clients, covering design, rollout, integration, and post go-live support.",
    type: "Full Time",
    location: "Mumbai – Airoli (Client Location)",
    category: "Development",
    experience: "9–16 Years (Immediate Joiners)",
    aboutRole:
      "We are seeking an experienced SAP PPQM Senior Consultant with strong expertise in SAP ECC and S/4 HANA (PP & QM). The role demands complete ownership of implementation, rollout, and support projects across Production Planning and Quality Management modules. Pharma domain experience is mandatory.",
    lifeAt:
      "You will work closely with business stakeholders, cross-functional SAP teams, and client leadership to deliver high-impact SAP transformation programs. This role offers the opportunity to lead critical manufacturing and quality processes while contributing to large-scale enterprise implementations in a dynamic client environment.",
    responsibilities: [
      "Lead end-to-end implementation, rollout, and support projects in SAP PP and QM modules",
      "Configure and optimize PP processes including BOM, Work Centers, Routings, MRP, Batch Management, Production Execution, Forecasting, S&OP, and PPDS",
      "Manage master data migration and ensure data accuracy across systems",
      "Design and configure QM processes including Inspection Plans, MICs, Notifications, Calibration, and Quality integration in Procurement, Production, and Sales",
      "Ensure seamless PP-QM integration and cross-module integration with MM, SD, and FI/CO",
      "Handle integrations with MES, LIMS, QMS, and weighing scale systems",
      "Prepare Functional Specification Documents (FSD) and support development activities",
      "Drive testing cycles including Unit Testing (UT), SIT, and UAT",
      "Monitor background jobs and provide post go-live support",
      "Engage with stakeholders and manage client communications effectively",
    ],
    requirements: [
      "9–16 years of strong hands-on experience in SAP PP and QM",
      "Proven expertise in SAP ECC and S/4 HANA (PP & QM)",
      "Mandatory experience in Pharma domain projects",
      "Deep knowledge of production planning, quality management, and PP-QM integration",
      "Experience with MES, LIMS, QMS integrations and third-party systems",
      "Strong cross-module knowledge in MM, SD, and FI/CO",
      "Hands-on experience in FSD preparation and testing cycles (UT, SIT, UAT)",
      "Experience handling post go-live support and background job monitoring",
      "Excellent stakeholder management and client-facing skills",
    ],
    perks: [
      "Opportunity to lead large-scale SAP transformation programs",
      "Exposure to S/4 HANA implementations in regulated industries",
      "High-visibility client-facing role",
      "Collaborative and performance-driven work environment",
      "Career growth in enterprise SAP consulting engagements",
    ],
  },
  {
    id: 16,
    slug: "sap-abap-fiori-full-stack-ui5-core-abap",
    title: "SAP ABAP + Fiori (Full Stack – UI5 & Core ABAP)",
    description:
      "Looking for experienced SAP ABAP + Fiori Full Stack consultants with strong expertise in UI5 and Core ABAP to deliver scalable enterprise SAP solutions.",
    type: "Full Time",
    location: "PAN India | Hybrid",
    category: "Development",
    experience: "7+ Years (March Joiners Preferred)",
    aboutRole:
      "We are hiring experienced SAP ABAP + Fiori (Full Stack – UI5 & Core ABAP) professionals who can design, develop, and deliver enterprise-grade SAP solutions. The role involves working across backend ABAP development and frontend SAP Fiori/UI5 applications to build scalable and high-performance business applications.",
    lifeAt:
      "At our organization, you will work on enterprise SAP landscapes with modern UI5 and Fiori applications, collaborating with functional consultants and business stakeholders. You will be part of a high-performing team focused on quality delivery, ownership, and innovation while working in a flexible hybrid model across PAN India.",
    responsibilities: [
      "Develop and enhance Core ABAP programs including Reports, Enhancements, Forms, Interfaces, and Conversions",
      "Design and develop SAP Fiori applications using SAP UI5",
      "Build and consume OData services for seamless front-end and back-end integration",
      "Work on performance optimization and code reviews to ensure high-quality deliverables",
      "Collaborate with functional consultants for technical design and solutioning",
      "Handle end-to-end development lifecycle including design, build, testing, and deployment",
      "Troubleshoot and resolve technical issues across ABAP and Fiori components",
      "Support integration with other SAP modules and third-party systems",
    ],
    requirements: [
      "7+ years of strong hands-on experience in SAP ABAP",
      "Proven experience in SAP Fiori and SAP UI5 development",
      "Strong knowledge of OData services and Gateway configuration",
      "Experience in enhancements, BADI, User Exits, Smart Forms, Adobe Forms",
      "Good understanding of SAP system architecture and integrations",
      "Strong debugging, performance tuning, and problem-solving skills",
      "Ability to work independently and in a hybrid work model",
      "Immediate or March joiners preferred",
    ],
    perks: [
      "Hybrid work model across PAN India",
      "Opportunity to work on enterprise SAP Fiori implementations",
      "Exposure to modern SAP UI/UX technologies",
      "Collaborative and growth-focused environment",
      "Long-term career growth in SAP full-stack development",
    ],
  },
  {
    id: 17,
    slug: "enterprise-architect-oracle-commerce-salesforce-experience-cloud",
    title: "Enterprise Architect - Oracle Commerce & Salesforce Experience Cloud",
    description:
      "Seeking a seasoned Enterprise Architect with deep expertise in Oracle Commerce and Salesforce Experience Cloud to drive architecture strategy and large-scale digital commerce implementations.",
    type: "Full Time",
    location: "Bengaluru (Hybrid – Occasional Client Office Visit Required)",
    category: "Development",
    experience: "10–20 Years (Immediate Joiners Preferred)",
    aboutRole:
      "We are looking for an experienced Enterprise Architect with strong expertise in Oracle Commerce and Salesforce Experience Cloud. The role involves defining enterprise architecture strategy, leading digital commerce transformations, and ensuring scalable, secure, and high-performance solutions across platforms.",
    lifeAt:
      "In this role, you will collaborate with business leaders, technology teams, and client stakeholders to architect and deliver enterprise-grade commerce and experience platforms. You will work in a hybrid environment based in Bengaluru, contributing to high-impact digital transformation initiatives while guiding technical teams and influencing strategic decisions.",
    responsibilities: [
      "Define and drive enterprise architecture strategy for Oracle Commerce and Salesforce Experience Cloud implementations",
      "Design scalable, secure, and high-performance commerce and customer experience solutions",
      "Lead architecture reviews, solution blueprints, and technical governance processes",
      "Ensure seamless integration between Oracle Commerce, Salesforce Experience Cloud, and other enterprise systems",
      "Provide technical leadership to development and integration teams",
      "Collaborate with business stakeholders to translate requirements into architectural solutions",
      "Oversee system performance, scalability, security, and compliance standards",
      "Guide modernization, migration, and digital transformation initiatives",
      "Support pre-sales, proposal development, and client presentations when required",
    ],
    requirements: [
      "10–20 years of overall IT experience with strong enterprise architecture background",
      "Hands-on experience with Oracle Commerce and Salesforce Experience Cloud",
      "Proven track record in architecting large-scale digital commerce platforms",
      "Strong understanding of system integration, APIs, and middleware architectures",
      "Experience in cloud platforms and hybrid architecture environments",
      "Strong stakeholder management and client-facing experience",
      "Excellent communication, leadership, and strategic thinking skills",
      "Immediate joiners preferred",
    ],
    perks: [
      "Leadership role in enterprise digital transformation programs",
      "Hybrid work model with strategic client engagement",
      "Opportunity to influence enterprise-wide architecture decisions",
      "Work with cross-functional and global teams",
      "Long-term growth in enterprise architecture leadership",
    ],
  },
  {
    id: 18,
    slug: "oracle-hyperion-planning-consultant",
    title: "Oracle Hyperion Planning Consultant",
    description:
      "Hiring Oracle Hyperion Planning Consultant with strong expertise in planning, budgeting, forecasting, and financial reporting solutions.",
    type: "Full Time",
    location: "Pune (Hybrid/Remote)",
    category: "Development",
    experience: "4 to 6 Years",
    aboutRole:
      "We are looking for an experienced Oracle Hyperion Planning Consultant to design, implement, and support enterprise planning and budgeting solutions. The role involves working closely with finance and business stakeholders to deliver scalable and efficient financial planning systems.",
    lifeAt:
      "You will collaborate with cross-functional teams and client stakeholders to build robust planning and forecasting solutions. This role offers flexibility with a hybrid/remote work model in Pune, along with exposure to enterprise-level financial transformation initiatives.",
    responsibilities: [
      "Implement and support Oracle Hyperion Planning applications",
      "Design and configure planning, budgeting, and forecasting solutions",
      "Develop business rules, calculation scripts, and data forms",
      "Manage data integration and ensure data accuracy across systems",
      "Work with finance teams to gather and translate functional requirements",
      "Perform application testing, validation, and user training",
      "Support month-end, quarter-end, and year-end planning cycles",
      "Troubleshoot and resolve system and performance issues",
    ],
    requirements: [
      "4–6 years of hands-on experience in Oracle Hyperion Planning",
      "Strong understanding of planning, budgeting, and forecasting processes",
      "Experience in business rule development and calculation scripts",
      "Knowledge of data integration tools and financial reporting",
      "Good understanding of financial consolidation and reporting concepts",
      "Strong analytical and problem-solving skills",
      "Ability to work independently in hybrid or remote environments",
    ],
    perks: [
      "Hybrid/Remote work flexibility",
      "Exposure to enterprise financial transformation projects",
      "Collaborative and growth-oriented work culture",
      "Opportunity to work closely with finance leadership teams",
      "Long-term career growth in Oracle EPM solutions",
    ],
  },
  {
    "id": 19,
    "slug": "java-developer",
    "title": "Java Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5+ Years",
    "aboutRole": "We are looking for an experienced Java Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop, test and maintain Java-based enterprise applications using modern frameworks.",
      "Build RESTful APIs and microservices following scalable architecture patterns.",
      "Collaborate with cross-functional teams to understand requirements and deliver solutions.",
      "Optimize application performance and troubleshoot production issues.",
      "Participate in code reviews, testing cycles and deployment activities."
    ],
    "requirements": [
      "5+ years of hands-on Java development experience.",
      "Strong knowledge of Spring Boot and REST APIs.",
      "Experience with relational databases and integration patterns.",
      "Familiarity with CI/CD pipelines and version control tools.",
      "Strong analytical and communication skills."
    ],
    "perks": [
      "Opportunity to work on enterprise-scale Java platforms.",
      "Exposure to modern architecture and cloud-based solutions.",
      "Long-term projects with growth opportunities.",
      "High-ownership development role.",
      "Collaborative, people-first culture."
    ]
  },
  {
    "id": 20,
    "slug": "salesforce-developer",
    "title": "Salesforce Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5+ Years",
    "aboutRole": "We are looking for an experienced Salesforce Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and develop Salesforce customizations using Apex and Lightning.",
      "Configure Sales and Service Cloud features as per business requirements.",
      "Build integrations using REST/SOAP APIs.",
      "Support data migrations and deployment activities.",
      "Troubleshoot production issues and optimize performance."
    ],
    "requirements": [
      "5+ years of Salesforce development experience.",
      "Strong hands-on experience in Apex, LWC and Flows.",
      "Understanding of Salesforce security and data model.",
      "Experience with integrations and APIs.",
      "Strong stakeholder communication skills."
    ],
    "perks": [
      "Enterprise Salesforce transformation projects.",
      "Exposure to multi-cloud implementations.",
      "High-impact, client-facing work.",
      "Growth-driven environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 21,
    "slug": "oracle-technical-consultant",
    "title": "Oracle Technical Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "",
    "location": "PAN India",
    "category": "Development",
    "experience": "6+ Years",
    "aboutRole": "We are looking for an experienced Oracle Technical Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop and support Oracle applications and custom components.",
      "Work on PL/SQL, reports and integrations.",
      "Support data migration and system enhancements.",
      "Collaborate with functional teams for requirement gathering.",
      "Troubleshoot production and performance issues."
    ],
    "requirements": [
      "6+ years of Oracle technical development experience.",
      "Strong expertise in PL/SQL and Oracle tools.",
      "Experience with integrations and APIs.",
      "Strong analytical skills.",
      "Ability to work in fast-paced environments."
    ],
    "perks": [
      "Large-scale Oracle projects.",
      "Exposure to ERP transformation programs.",
      "Ownership-driven role.",
      "Stable, long-term assignments.",
      "Supportive team culture."
    ]
  },
  {
    "id": 22,
    "slug": "workday-consultant",
    "title": "Workday Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5+ Years",
    "aboutRole": "We are looking for an experienced Workday Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and support Workday HCM modules.",
      "Develop reports and dashboards.",
      "Support integrations and testing activities.",
      "Gather requirements and deliver functional solutions.",
      "Support production enhancements."
    ],
    "requirements": [
      "5+ years of Workday functional experience.",
      "Strong knowledge of Core HCM.",
      "Experience with reporting and integrations.",
      "Good documentation and stakeholder skills.",
      "Strong analytical mindset."
    ],
    "perks": [
      "Enterprise Workday implementations.",
      "High-visibility HR transformation projects.",
      "Long-term Contract engagement.",
      "Learning-driven environment.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 23,
    "slug": "net-developer",
    "title": ".NET Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5+ Years",
    "aboutRole": "We are looking for an experienced .NET Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and develop applications using .NET Core and C#.",
      "Build APIs and backend services.",
      "Work with SQL databases and optimize queries.",
      "Collaborate with QA and product teams.",
      "Participate in code reviews and deployments."
    ],
    "requirements": [
      "5+ years of .NET development experience.",
      "Strong knowledge of C# and .NET Core.",
      "Experience with REST APIs and SQL Server.",
      "Familiarity with cloud deployments.",
      "Strong problem-solving skills."
    ],
    "perks": [
      "Enterprise-grade .NET development projects.",
      "Exposure to cloud-native architectures.",
      "Ownership-driven work environment.",
      "Stable Full Time engagement.",
      "People-first culture."
    ]
  },
  {
    "id": 24,
    "slug": "java-microservices-developer",
    "title": "Java Microservices Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Java Microservices Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and develop microservices-based applications using Spring Boot.",
      "Build scalable REST APIs and event-driven services.",
      "Work on containerization and cloud deployments.",
      "Optimize application performance and ensure high availability.",
      "Collaborate with cross-functional teams for delivery."
    ],
    "requirements": [
      "5+ years of Java development experience.",
      "Strong expertise in Spring Boot and microservices architecture.",
      "Experience with REST APIs and distributed systems.",
      "Knowledge of CI/CD pipelines and cloud platforms.",
      "Strong analytical and debugging skills."
    ],
    "perks": [
      "Exposure to enterprise microservices architecture.",
      "High-ownership development role.",
      "Long-term Contract engagement.",
      "Modern tech stack environment.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 25,
    "slug": "sap-functional-consultant",
    "title": "SAP Functional Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6+ Years",
    "aboutRole": "We are looking for an experienced SAP Functional Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Gather and analyze business requirements for SAP modules.",
      "Configure and implement SAP solutions.",
      "Support testing, UAT and deployment cycles.",
      "Provide functional documentation and training.",
      "Support post-go-live enhancements."
    ],
    "requirements": [
      "6+ years of SAP functional experience.",
      "Strong knowledge of relevant SAP modules.",
      "Experience in implementation and support projects.",
      "Good documentation and stakeholder skills.",
      "Ability to work in dynamic environments."
    ],
    "perks": [
      "Enterprise SAP transformation programs.",
      "Client-facing consulting exposure.",
      "Stable Full Time engagement.",
      "Learning-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 26,
    "slug": "angular-developer",
    "title": "Angular Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Angular Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop responsive web applications using Angular.",
      "Integrate frontend with REST APIs.",
      "Optimize UI performance and usability.",
      "Collaborate with backend and QA teams.",
      "Participate in agile ceremonies."
    ],
    "requirements": [
      "4+ years of Angular development experience.",
      "Strong knowledge of TypeScript and UI components.",
      "Experience with REST API integrations.",
      "Understanding of responsive design principles.",
      "Good communication skills."
    ],
    "perks": [
      "Modern frontend technology exposure.",
      "High-impact UI projects.",
      "Long-term Contract role.",
      "Growth-oriented environment.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 27,
    "slug": "devops-engineer",
    "title": "DevOps Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5+ Years",
    "aboutRole": "We are looking for an experienced DevOps Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and manage CI/CD pipelines.",
      "Automate deployment and infrastructure processes.",
      "Monitor system performance and reliability.",
      "Manage cloud environments and containerization.",
      "Ensure security and compliance standards."
    ],
    "requirements": [
      "5+ years of DevOps experience.",
      "Strong knowledge of CI/CD tools and cloud platforms.",
      "Experience with containerization technologies.",
      "Scripting and automation skills.",
      "Strong troubleshooting abilities."
    ],
    "perks": [
      "Cloud-native transformation projects.",
      "High-impact infrastructure role.",
      "Stable full-time engagement.",
      "Exposure to enterprise environments.",
      "Collaborative culture."
    ]
  },
  {
    "id": 28,
    "slug": "business-analyst",
    "title": "Business Analyst",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5+ Years",
    "aboutRole": "We are looking for an experienced Business Analyst to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Gather and document business requirements.",
      "Perform gap analysis and solution mapping.",
      "Create functional specifications and user stories.",
      "Coordinate between business and technical teams.",
      "Support testing and UAT activities."
    ],
    "requirements": [
      "5+ years of Business Analyst experience.",
      "Strong requirement documentation skills.",
      "Experience working in agile environments.",
      "Good stakeholder communication skills.",
      "Analytical and problem-solving mindset."
    ],
    "perks": [
      "Exposure to enterprise transformation projects.",
      "High-visibility client interaction role.",
      "Long-term Contract opportunity.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 29,
    "slug": "qa-automation-engineer",
    "title": "QA Automation Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced QA Automation Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and develop automated test frameworks for web and API applications.",
      "Execute regression, functional and performance testing.",
      "Integrate automated test suites with CI/CD pipelines.",
      "Identify, document and track defects through resolution.",
      "Collaborate with developers and business teams to improve quality standards."
    ],
    "requirements": [
      "4+ years of experience in test automation.",
      "Strong knowledge of automation tools and frameworks.",
      "Experience with API testing and CI/CD integration.",
      "Good understanding of agile testing methodologies.",
      "Strong analytical and debugging skills."
    ],
    "perks": [
      "Enterprise-grade automation projects.",
      "High-ownership QA role.",
      "Long-term Contract opportunity.",
      "Exposure to modern tech environments.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 30,
    "slug": "react-developer",
    "title": "React Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced React Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop responsive and scalable web applications using React.",
      "Integrate frontend components with backend APIs.",
      "Optimize performance and ensure seamless user experience.",
      "Write reusable and maintainable UI components.",
      "Participate in agile ceremonies and code reviews."
    ],
    "requirements": [
      "4+ years of React development experience.",
      "Strong knowledge of JavaScript and modern UI frameworks.",
      "Experience with REST API integration.",
      "Understanding of state management libraries.",
      "Strong communication skills."
    ],
    "perks": [
      "Exposure to modern frontend frameworks.",
      "Enterprise-level UI development projects.",
      "Stable Full Time engagement.",
      "Learning-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 31,
    "slug": "data-engineer",
    "title": "Data Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Data Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and build scalable data pipelines and ETL processes.",
      "Work with structured and unstructured datasets.",
      "Optimize data storage and processing systems.",
      "Collaborate with analytics and BI teams.",
      "Ensure data quality and governance standards."
    ],
    "requirements": [
      "5+ years of data engineering experience.",
      "Strong knowledge of databases and ETL tools.",
      "Experience with big data technologies.",
      "Familiarity with cloud data platforms.",
      "Strong analytical skills."
    ],
    "perks": [
      "Enterprise data transformation projects.",
      "High-impact analytics environments.",
      "Long-term Contract role.",
      "Exposure to modern data stacks.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 32,
    "slug": "project-manager",
    "title": "Project Manager",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "8+ Years",
    "aboutRole": "We are looking for an experienced Project Manager to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Lead end-to-end project delivery and execution.",
      "Manage timelines, budgets and stakeholder expectations.",
      "Coordinate cross-functional teams and vendors.",
      "Monitor project risks and mitigation strategies.",
      "Ensure quality and timely delivery of milestones."
    ],
    "requirements": [
      "8+ years of project management experience.",
      "Strong leadership and communication skills.",
      "Experience managing IT transformation projects.",
      "Familiarity with agile and waterfall methodologies.",
      "Strong risk management capabilities."
    ],
    "perks": [
      "Leadership role in enterprise programs.",
      "Exposure to global client engagements.",
      "Stable full-time position.",
      "High-impact delivery role.",
      "Collaborative work culture."
    ]
  },
  {
    "id": 33,
    "slug": "ui-ux-designer",
    "title": "UI/UX Designer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced UI/UX Designer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design intuitive user interfaces and experiences.",
      "Create wireframes, prototypes and high-fidelity designs.",
      "Conduct user research and usability testing.",
      "Collaborate with developers and product teams.",
      "Ensure design consistency and brand alignment."
    ],
    "requirements": [
      "4+ years of UI/UX design experience.",
      "Strong proficiency in design tools like Figma.",
      "Understanding of user research methodologies.",
      "Experience working in agile environments.",
      "Strong creative and analytical skills."
    ],
    "perks": [
      "Creative ownership on enterprise products.",
      "Exposure to global digital transformation programs.",
      "Long-term Contract opportunity.",
      "Growth-focused environment.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 34,
    "slug": "python-developer",
    "title": "Python Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Python Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop scalable backend applications using Python frameworks.",
      "Build APIs and integrate with databases and third-party systems.",
      "Write clean, maintainable and efficient code.",
      "Optimize application performance and troubleshoot issues.",
      "Collaborate with cross-functional teams in agile environments."
    ],
    "requirements": [
      "4+ years of Python development experience.",
      "Strong knowledge of Django or Flask frameworks.",
      "Experience with REST APIs and database management.",
      "Familiarity with cloud environments and CI/CD tools.",
      "Strong analytical and debugging skills."
    ],
    "perks": [
      "Exposure to enterprise backend systems.",
      "High-impact development role.",
      "Stable full-time engagement.",
      "Learning-driven environment.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 35,
    "slug": "cloud-engineer",
    "title": "Cloud Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Cloud Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and manage cloud infrastructure solutions.",
      "Implement cloud migration and modernization projects.",
      "Monitor performance and optimize cloud resources.",
      "Ensure security, compliance and reliability standards.",
      "Collaborate with DevOps and application teams."
    ],
    "requirements": [
      "5+ years of cloud engineering experience.",
      "Strong knowledge of AWS, Azure or GCP.",
      "Experience with infrastructure-as-code tools.",
      "Familiarity with CI/CD and containerization.",
      "Strong troubleshooting skills."
    ],
    "perks": [
      "Enterprise cloud transformation programs.",
      "Exposure to hybrid and multi-cloud environments.",
      "Long-term Contract opportunity.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 36,
    "slug": "sap-abap-developer",
    "title": "SAP ABAP Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced SAP ABAP Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop and enhance SAP ABAP programs and reports.",
      "Work on interfaces, enhancements and forms.",
      "Support SAP module integrations.",
      "Perform debugging and performance optimization.",
      "Participate in testing and deployment cycles."
    ],
    "requirements": [
      "5+ years of SAP ABAP development experience.",
      "Strong knowledge of reports, enhancements and forms.",
      "Experience with SAP integrations.",
      "Good debugging and analytical skills.",
      "Ability to work in dynamic environments."
    ],
    "perks": [
      "Enterprise SAP implementation projects.",
      "Stable full-time role.",
      "High-ownership development environment.",
      "Exposure to cross-functional modules.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 37,
    "slug": "full-stack-developer",
    "title": "Full Stack Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Full Stack Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop frontend and backend components for web applications.",
      "Build APIs and integrate databases.",
      "Ensure performance and scalability of applications.",
      "Participate in code reviews and deployments.",
      "Collaborate in agile project environments."
    ],
    "requirements": [
      "5+ years of full stack development experience.",
      "Strong knowledge of frontend and backend technologies.",
      "Experience with REST APIs and databases.",
      "Familiarity with CI/CD pipelines.",
      "Strong problem-solving skills."
    ],
    "perks": [
      "Exposure to modern tech stacks.",
      "Long-term Contract engagement.",
      "Enterprise application development projects.",
      "Learning-driven environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 38,
    "slug": "it-support-engineer",
    "title": "IT Support Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Operations",
    "experience": "3 to 6 Years",
    "aboutRole": "We are looking for an experienced IT Support Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Provide technical support for hardware and software systems.",
      "Troubleshoot and resolve IT incidents.",
      "Manage user accounts and access controls.",
      "Maintain system documentation and reports.",
      "Ensure uptime and operational continuity."
    ],
    "requirements": [
      "3+ years of IT support experience.",
      "Strong troubleshooting and communication skills.",
      "Knowledge of operating systems and networking basics.",
      "Experience with ticketing systems.",
      "Ability to handle multiple support requests."
    ],
    "perks": [
      "Stable full-time support role.",
      "Exposure to enterprise IT environments.",
      "Growth-focused environment.",
      "Collaborative team culture.",
      "Hands-on operational experience."
    ]
  },
  {
    "id": 39,
    "slug": "power-bi-developer",
    "title": "Power BI Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Power BI Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and develop interactive dashboards and reports using Power BI.",
      "Work with business stakeholders to understand reporting needs.",
      "Build data models and optimize DAX queries.",
      "Integrate data from multiple sources.",
      "Ensure report accuracy, performance and governance standards."
    ],
    "requirements": [
      "4+ years of Power BI development experience.",
      "Strong knowledge of DAX and data modeling.",
      "Experience working with large datasets.",
      "Familiarity with SQL and ETL concepts.",
      "Strong analytical and communication skills."
    ],
    "perks": [
      "Enterprise data visualization projects.",
      "Exposure to large-scale analytics environments.",
      "Long-term Contract engagement.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 40,
    "slug": "azure-data-engineer",
    "title": "Azure Data Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Azure Data Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Build and maintain data pipelines using Azure services.",
      "Design scalable data storage and processing solutions.",
      "Work with Azure Data Factory and Synapse.",
      "Optimize data performance and reliability.",
      "Collaborate with analytics and BI teams."
    ],
    "requirements": [
      "5+ years of data engineering experience.",
      "Strong expertise in Azure data services.",
      "Experience with ETL pipelines and SQL.",
      "Familiarity with big data technologies.",
      "Strong analytical skills."
    ],
    "perks": [
      "Enterprise cloud data projects.",
      "Stable full-time engagement.",
      "Exposure to modern Azure environments.",
      "High-impact data role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 41,
    "slug": "network-engineer",
    "title": "Network Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Network Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and manage network infrastructure.",
      "Monitor network performance and resolve issues.",
      "Implement security protocols and firewalls.",
      "Support network upgrades and maintenance.",
      "Maintain documentation and compliance standards."
    ],
    "requirements": [
      "4+ years of networking experience.",
      "Strong knowledge of routing and switching.",
      "Experience with firewall and security systems.",
      "Good troubleshooting skills.",
      "Strong communication abilities."
    ],
    "perks": [
      "Enterprise infrastructure projects.",
      "Stable full-time engagement.",
      "Exposure to large-scale IT environments.",
      "Growth-focused environment.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 42,
    "slug": "security-analyst",
    "title": "Security Analyst",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Security Analyst to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Monitor security systems and detect vulnerabilities.",
      "Conduct risk assessments and security audits.",
      "Implement security controls and compliance measures.",
      "Respond to incidents and perform root cause analysis.",
      "Maintain security documentation and reporting."
    ],
    "requirements": [
      "5+ years of cybersecurity experience.",
      "Knowledge of security frameworks and compliance standards.",
      "Experience with SIEM tools.",
      "Strong analytical and incident response skills.",
      "Good communication abilities."
    ],
    "perks": [
      "Enterprise cybersecurity projects.",
      "Long-term Contract engagement.",
      "High-impact security role.",
      "Exposure to global compliance standards.",
      "Collaborative culture."
    ]
  },
  {
    "id": 43,
    "slug": "database-administrator",
    "title": "Database Administrator",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Database Administrator to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Install, configure and maintain databases.",
      "Monitor performance and optimize queries.",
      "Ensure data security and backup strategies.",
      "Support database migrations and upgrades.",
      "Troubleshoot and resolve database issues."
    ],
    "requirements": [
      "5+ years of database administration experience.",
      "Strong knowledge of SQL and database systems.",
      "Experience with performance tuning and backup strategies.",
      "Familiarity with cloud database services.",
      "Strong analytical skills."
    ],
    "perks": [
      "Enterprise data management projects.",
      "Stable full-time engagement.",
      "Exposure to large-scale database environments.",
      "High-ownership technical role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 44,
    "slug": "android-developer",
    "title": "Android Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Android Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop and maintain Android mobile applications.",
      "Integrate mobile apps with backend APIs.",
      "Optimize performance and ensure app stability.",
      "Conduct testing and resolve defects.",
      "Collaborate with UI/UX and backend teams."
    ],
    "requirements": [
      "4+ years of Android development experience.",
      "Strong knowledge of Kotlin or Java.",
      "Experience with REST API integrations.",
      "Familiarity with mobile app lifecycle management.",
      "Strong problem-solving skills."
    ],
    "perks": [
      "Enterprise mobile application projects.",
      "Long-term Contract engagement.",
      "Exposure to modern mobile tech stacks.",
      "Growth-focused environment.",
      "Collaborative team culture."
    ]
  },
  {
    "id": 45,
    "slug": "ios-developer",
    "title": "iOS Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced iOS Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop and maintain iOS applications.",
      "Integrate applications with backend services.",
      "Optimize app performance and usability.",
      "Conduct testing and debugging activities.",
      "Collaborate with cross-functional teams."
    ],
    "requirements": [
      "4+ years of iOS development experience.",
      "Strong knowledge of Swift.",
      "Experience with REST API integration.",
      "Understanding of mobile architecture patterns.",
      "Strong analytical skills."
    ],
    "perks": [
      "Enterprise mobile development projects.",
      "Stable full-time engagement.",
      "Exposure to modern iOS frameworks.",
      "High-ownership technical role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 46,
    "slug": "etl-developer",
    "title": "ETL Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced ETL Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and develop ETL workflows.",
      "Extract, transform and load data from various sources.",
      "Optimize data processing performance.",
      "Ensure data quality and validation.",
      "Collaborate with data and analytics teams."
    ],
    "requirements": [
      "5+ years of ETL development experience.",
      "Strong knowledge of ETL tools and SQL.",
      "Experience with data warehousing concepts.",
      "Familiarity with cloud data platforms.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise data integration projects.",
      "Long-term Contract opportunity.",
      "Exposure to modern data architectures.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 47,
    "slug": "scrum-master",
    "title": "Scrum Master",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced Scrum Master to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Facilitate agile ceremonies and sprint planning sessions.",
      "Remove impediments and support development teams.",
      "Track project progress and report metrics.",
      "Promote agile best practices and continuous improvement.",
      "Coordinate between stakeholders and technical teams."
    ],
    "requirements": [
      "6+ years of experience in agile project environments.",
      "Strong understanding of Scrum framework.",
      "Experience managing cross-functional teams.",
      "Strong communication and leadership skills.",
      "Ability to manage risks and timelines."
    ],
    "perks": [
      "Leadership role in agile delivery programs.",
      "Stable full-time engagement.",
      "Exposure to enterprise projects.",
      "Growth-oriented environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 48,
    "slug": "technical-architect",
    "title": "Technical Architect",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "10+ Years",
    "aboutRole": "We are looking for an experienced Technical Architect to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Define system architecture and technology roadmap.",
      "Design scalable and secure application solutions.",
      "Review technical designs and enforce standards.",
      "Guide development teams on implementation best practices.",
      "Collaborate with stakeholders for solution alignment."
    ],
    "requirements": [
      "10+ years of technical experience.",
      "Strong knowledge of architecture patterns and frameworks.",
      "Experience in enterprise system design.",
      "Strong leadership and stakeholder management skills.",
      "Ability to drive technical strategy."
    ],
    "perks": [
      "High-impact architecture role.",
      "Exposure to enterprise transformation programs.",
      "Long-term Contract engagement.",
      "Leadership-driven environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 49,
    "slug": "sap-fico-consultant",
    "title": "SAP FICO Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP FICO Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and support SAP FICO modules.",
      "Configure financial accounting and controlling processes.",
      "Conduct requirement gathering and gap analysis.",
      "Support UAT, testing and production deployments.",
      "Provide post-go-live enhancements and support."
    ],
    "requirements": [
      "6+ years of SAP FICO functional experience.",
      "Strong understanding of finance and accounting processes.",
      "Experience in implementation and support projects.",
      "Good stakeholder communication skills.",
      "Ability to work in fast-paced environments."
    ],
    "perks": [
      "Enterprise SAP finance transformation projects.",
      "Stable full-time engagement.",
      "Exposure to global clients.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 50,
    "slug": "salesforce-administrator",
    "title": "Salesforce Administrator",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Salesforce Administrator to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Manage Salesforce configurations and user access.",
      "Create reports, dashboards and workflows.",
      "Support data management and system enhancements.",
      "Troubleshoot and resolve user issues.",
      "Maintain Salesforce documentation and governance."
    ],
    "requirements": [
      "4+ years of Salesforce administration experience.",
      "Strong knowledge of Salesforce data model and security.",
      "Experience with reports and dashboards.",
      "Good stakeholder support skills.",
      "Strong problem-solving abilities."
    ],
    "perks": [
      "Enterprise Salesforce environments.",
      "Long-term Contract engagement.",
      "Exposure to multi-cloud setups.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 51,
    "slug": "oracle-dba",
    "title": "Oracle DBA",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Oracle DBA to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Install and maintain Oracle databases.",
      "Monitor database performance and tuning.",
      "Implement backup and recovery strategies.",
      "Support database upgrades and migrations.",
      "Ensure data security and compliance."
    ],
    "requirements": [
      "5+ years of Oracle DBA experience.",
      "Strong knowledge of database performance tuning.",
      "Experience with backup and recovery processes.",
      "Familiarity with cloud-based databases.",
      "Strong troubleshooting skills."
    ],
    "perks": [
      "Enterprise database environments.",
      "Stable full-time engagement.",
      "Exposure to large-scale systems.",
      "High-ownership technical role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 52,
    "slug": "automation-test-engineer",
    "title": "Automation Test Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Automation Test Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop and execute automated test cases.",
      "Build scalable test automation frameworks.",
      "Integrate tests into CI/CD pipelines.",
      "Identify and document defects.",
      "Collaborate with development teams to improve quality."
    ],
    "requirements": [
      "4+ years of automation testing experience.",
      "Strong knowledge of testing tools and frameworks.",
      "Experience with API and UI automation.",
      "Familiarity with agile practices.",
      "Strong debugging skills."
    ],
    "perks": [
      "Enterprise automation initiatives.",
      "Long-term Contract engagement.",
      "Exposure to modern testing tools.",
      "High-impact QA role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 53,
    "slug": "product-owner",
    "title": "Product Owner",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "7 to 10 Years",
    "aboutRole": "We are looking for an experienced Product Owner to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Define product vision and roadmap.",
      "Manage product backlog and prioritize features.",
      "Collaborate with development teams for delivery.",
      "Engage stakeholders and gather feedback.",
      "Ensure alignment between business goals and product outcomes."
    ],
    "requirements": [
      "7+ years of product management experience.",
      "Strong understanding of agile frameworks.",
      "Experience working with cross-functional teams.",
      "Strong analytical and communication skills.",
      "Ability to drive product strategy."
    ],
    "perks": [
      "Leadership role in digital product initiatives.",
      "Stable full-time engagement.",
      "Exposure to enterprise transformation programs.",
      "High-ownership strategic role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 54,
    "slug": "sap-mm-consultant",
    "title": "SAP MM Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP MM Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and support SAP MM module.",
      "Gather procurement and inventory requirements.",
      "Perform fit-gap analysis and documentation.",
      "Support testing and deployment activities.",
      "Provide post-go-live support and enhancements."
    ],
    "requirements": [
      "6+ years of SAP MM experience.",
      "Strong understanding of procurement processes.",
      "Experience in implementation and support projects.",
      "Good stakeholder communication skills.",
      "Ability to manage multiple priorities."
    ],
    "perks": [
      "Enterprise SAP supply chain projects.",
      "Stable full-time engagement.",
      "Exposure to global clients.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 55,
    "slug": "sap-sd-consultant",
    "title": "SAP SD Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP SD Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and support SAP SD processes.",
      "Configure order-to-cash workflows.",
      "Conduct requirement analysis and documentation.",
      "Support UAT and go-live activities.",
      "Provide ongoing support and optimization."
    ],
    "requirements": [
      "6+ years of SAP SD functional experience.",
      "Strong knowledge of order management processes.",
      "Experience in SAP implementations.",
      "Good documentation skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise sales transformation projects.",
      "Long-term Contract engagement.",
      "Exposure to cross-module integrations.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 56,
    "slug": "salesforce-qa-analyst",
    "title": "Salesforce QA Analyst",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Salesforce QA Analyst to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Execute functional and regression testing for Salesforce applications.",
      "Develop and maintain test cases and documentation.",
      "Coordinate with development teams for defect resolution.",
      "Perform data validation and integration testing.",
      "Ensure quality standards across Salesforce projects."
    ],
    "requirements": [
      "4+ years of QA experience in Salesforce projects.",
      "Strong understanding of Salesforce functionality.",
      "Experience with testing tools and methodologies.",
      "Good documentation and communication skills.",
      "Strong analytical mindset."
    ],
    "perks": [
      "Enterprise Salesforce environments.",
      "Stable full-time engagement.",
      "Exposure to multi-cloud projects.",
      "High-impact QA role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 57,
    "slug": "aws-cloud-architect",
    "title": "AWS Cloud Architect",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "10+ Years",
    "aboutRole": "We are looking for an experienced AWS Cloud Architect to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design scalable and secure AWS cloud architectures.",
      "Lead cloud migration and modernization initiatives.",
      "Define infrastructure best practices and standards.",
      "Review implementations and ensure compliance.",
      "Guide teams on cloud strategy and optimization."
    ],
    "requirements": [
      "10+ years of IT experience with strong AWS expertise.",
      "Deep understanding of cloud architecture patterns.",
      "Experience in enterprise cloud transformations.",
      "Strong leadership and stakeholder skills.",
      "Ability to drive technical strategy."
    ],
    "perks": [
      "Enterprise cloud transformation programs.",
      "Long-term Contract engagement.",
      "High-ownership architecture role.",
      "Exposure to global clients.",
      "Collaborative culture."
    ]
  },
  {
    "id": 58,
    "slug": "hr-business-partner",
    "title": "HR Business Partner",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Operations",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced HR Business Partner to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Partner with business leaders on HR strategy.",
      "Manage employee engagement and performance processes.",
      "Support talent acquisition and workforce planning.",
      "Drive HR policies and compliance initiatives.",
      "Handle employee relations and conflict resolution."
    ],
    "requirements": [
      "6+ years of HR business partnering experience.",
      "Strong knowledge of HR processes and compliance.",
      "Experience supporting IT or enterprise environments.",
      "Strong communication and interpersonal skills.",
      "Ability to manage sensitive situations effectively."
    ],
    "perks": [
      "Strategic HR leadership exposure.",
      "Stable full-time engagement.",
      "High-visibility role with business stakeholders.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 59,
    "slug": "devops-engineer",
    "title": "DevOps Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced DevOps Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and maintain CI/CD pipelines.",
      "Automate build and deployment processes.",
      "Manage containerized environments and orchestration.",
      "Monitor system performance and reliability.",
      "Collaborate with development and infrastructure teams."
    ],
    "requirements": [
      "5+ years of DevOps experience.",
      "Strong knowledge of CI/CD tools like Jenkins or Azure DevOps.",
      "Experience with Docker and Kubernetes.",
      "Familiarity with cloud platforms.",
      "Strong troubleshooting and automation skills."
    ],
    "perks": [
      "Enterprise DevOps transformation initiatives.",
      "Stable full-time engagement.",
      "Exposure to cloud-native environments.",
      "High-ownership engineering role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 60,
    "slug": "sap-basis-consultant",
    "title": "SAP Basis Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP Basis Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Install, configure and maintain SAP systems.",
      "Manage system upgrades and patches.",
      "Monitor performance and resolve system issues.",
      "Support SAP transport management.",
      "Ensure system security and compliance."
    ],
    "requirements": [
      "6+ years of SAP Basis experience.",
      "Strong knowledge of SAP system architecture.",
      "Experience in SAP upgrades and migrations.",
      "Good troubleshooting and monitoring skills.",
      "Strong communication abilities."
    ],
    "perks": [
      "Enterprise SAP infrastructure projects.",
      "Long-term Contract engagement.",
      "Exposure to large-scale SAP landscapes.",
      "High-ownership technical role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 61,
    "slug": "data-analyst",
    "title": "Data Analyst",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Data Analyst to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Analyze datasets and identify trends.",
      "Prepare reports and dashboards for stakeholders.",
      "Validate and clean data for accuracy.",
      "Collaborate with business teams to understand requirements.",
      "Support data-driven decision making."
    ],
    "requirements": [
      "4+ years of data analysis experience.",
      "Strong knowledge of SQL and reporting tools.",
      "Experience with data visualization platforms.",
      "Good analytical and communication skills.",
      "Ability to interpret complex datasets."
    ],
    "perks": [
      "Enterprise analytics initiatives.",
      "Stable full-time engagement.",
      "Exposure to modern data tools.",
      "High-impact insights role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 62,
    "slug": "it-security-engineer",
    "title": "IT Security Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced IT Security Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and manage security solutions.",
      "Conduct vulnerability assessments and penetration testing.",
      "Monitor security alerts and respond to incidents.",
      "Ensure compliance with security standards.",
      "Maintain security documentation and reporting."
    ],
    "requirements": [
      "5+ years of IT security experience.",
      "Knowledge of security tools and frameworks.",
      "Experience with incident response processes.",
      "Strong analytical and troubleshooting skills.",
      "Good stakeholder communication abilities."
    ],
    "perks": [
      "Enterprise cybersecurity initiatives.",
      "Long-term Contract engagement.",
      "Exposure to global compliance environments.",
      "High-ownership security role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 63,
    "slug": "technical-business-analyst",
    "title": "Technical Business Analyst",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced Technical Business Analyst to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Gather and document technical and business requirements.",
      "Perform gap analysis and solution mapping.",
      "Work closely with development and QA teams.",
      "Support testing and deployment activities.",
      "Facilitate stakeholder communication and reporting."
    ],
    "requirements": [
      "6+ years of business analysis experience.",
      "Strong understanding of IT systems and processes.",
      "Experience working in agile environments.",
      "Good documentation and communication skills.",
      "Ability to translate business needs into technical solutions."
    ],
    "perks": [
      "Strategic role in enterprise transformation programs.",
      "Stable full-time engagement.",
      "Exposure to cross-functional teams.",
      "High-visibility stakeholder interaction.",
      "Collaborative culture."
    ]
  },
  {
    "id": 64,
    "slug": "sap-hana-consultant",
    "title": "SAP HANA Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP HANA Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and optimize SAP HANA data models.",
      "Develop calculation views and procedures.",
      "Support performance tuning and system enhancements.",
      "Collaborate with functional teams for solution design.",
      "Assist in HANA migrations and upgrades."
    ],
    "requirements": [
      "6+ years of SAP HANA experience.",
      "Strong knowledge of HANA modeling and optimization.",
      "Experience in SAP implementations.",
      "Good analytical and troubleshooting skills.",
      "Ability to manage complex technical requirements."
    ],
    "perks": [
      "Enterprise SAP transformation initiatives.",
      "Long-term Contract engagement.",
      "Exposure to S/4HANA landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 65,
    "slug": "salesforce-developer",
    "title": "Salesforce Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Salesforce Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop Apex classes, triggers and Lightning components.",
      "Customize Salesforce objects and workflows.",
      "Integrate Salesforce with external systems.",
      "Support deployments and production fixes.",
      "Collaborate with functional consultants for requirement alignment."
    ],
    "requirements": [
      "5+ years of Salesforce development experience.",
      "Strong knowledge of Apex, SOQL and Lightning.",
      "Experience with integrations and APIs.",
      "Good debugging and analytical skills.",
      "Strong communication abilities."
    ],
    "perks": [
      "Enterprise Salesforce programs.",
      "Stable full-time engagement.",
      "Exposure to multi-cloud ecosystems.",
      "High-impact development role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 66,
    "slug": "azure-devops-engineer",
    "title": "Azure DevOps Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Azure DevOps Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and manage Azure DevOps pipelines.",
      "Automate builds and deployments.",
      "Integrate code repositories with CI/CD workflows.",
      "Monitor system health and performance.",
      "Collaborate with development teams for DevOps best practices."
    ],
    "requirements": [
      "5+ years of DevOps experience with Azure.",
      "Strong knowledge of CI/CD tools.",
      "Experience with containerization and cloud deployments.",
      "Good scripting and automation skills.",
      "Strong troubleshooting abilities."
    ],
    "perks": [
      "Enterprise DevOps modernization programs.",
      "Long-term Contract engagement.",
      "Exposure to cloud-native technologies.",
      "High-ownership automation role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 67,
    "slug": "servicenow-developer",
    "title": "ServiceNow Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced ServiceNow Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop and customize ServiceNow modules.",
      "Create workflows and automation scripts.",
      "Integrate ServiceNow with external systems.",
      "Support upgrades and enhancements.",
      "Troubleshoot and resolve production issues."
    ],
    "requirements": [
      "4+ years of ServiceNow development experience.",
      "Strong knowledge of ServiceNow platform architecture.",
      "Experience with integrations and scripting.",
      "Good debugging skills.",
      "Strong stakeholder communication abilities."
    ],
    "perks": [
      "Enterprise ITSM transformation projects.",
      "Stable full-time engagement.",
      "Exposure to large-scale ServiceNow environments.",
      "High-ownership technical role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 68,
    "slug": "qa-lead",
    "title": "QA Lead",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "7 to 10 Years",
    "aboutRole": "We are looking for an experienced QA Lead to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Lead QA strategy and testing initiatives.",
      "Manage automation and manual testing teams.",
      "Define quality standards and best practices.",
      "Track defects and ensure resolution timelines.",
      "Collaborate with stakeholders for release readiness."
    ],
    "requirements": [
      "7+ years of QA experience with leadership exposure.",
      "Strong knowledge of automation frameworks.",
      "Experience managing enterprise testing programs.",
      "Good communication and coordination skills.",
      "Ability to drive quality culture across teams."
    ],
    "perks": [
      "Leadership role in enterprise quality programs.",
      "Long-term Contract engagement.",
      "Exposure to global client projects.",
      "High-impact decision-making role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 69,
    "slug": "sap-pp-consultant",
    "title": "SAP PP Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP PP Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and support SAP PP processes.",
      "Conduct requirement gathering and solution design.",
      "Perform system testing and deployment support.",
      "Integrate PP module with other SAP modules.",
      "Provide post-go-live optimization and support."
    ],
    "requirements": [
      "6+ years of SAP PP functional experience.",
      "Strong knowledge of production planning processes.",
      "Experience in SAP implementation projects.",
      "Good documentation and stakeholder skills.",
      "Ability to manage multiple priorities."
    ],
    "perks": [
      "Enterprise manufacturing transformation projects.",
      "Stable full-time engagement.",
      "Exposure to global SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 70,
    "slug": "salesforce-business-analyst",
    "title": "Salesforce Business Analyst",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Salesforce Business Analyst to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Gather and document Salesforce requirements.",
      "Perform business process analysis and gap identification.",
      "Coordinate with developers for solution implementation.",
      "Support testing and user training sessions.",
      "Ensure alignment between business needs and system capabilities."
    ],
    "requirements": [
      "5+ years of Salesforce BA experience.",
      "Strong knowledge of Sales and Service Cloud.",
      "Experience in stakeholder management.",
      "Good documentation skills.",
      "Ability to translate business needs into functional designs."
    ],
    "perks": [
      "Enterprise CRM transformation programs.",
      "Long-term Contract engagement.",
      "High-visibility stakeholder role.",
      "Exposure to global implementations.",
      "Collaborative culture."
    ]
  },
  {
    "id": 71,
    "slug": "cloud-support-engineer",
    "title": "Cloud Support Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "4 to 7 Years",
    "aboutRole": "We are looking for an experienced Cloud Support Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Provide support for cloud infrastructure and services.",
      "Monitor system performance and availability.",
      "Troubleshoot incidents and resolve issues.",
      "Assist in cloud deployments and updates.",
      "Maintain documentation and compliance standards."
    ],
    "requirements": [
      "4+ years of cloud support experience.",
      "Knowledge of AWS, Azure or GCP.",
      "Strong troubleshooting skills.",
      "Experience with ticketing systems.",
      "Good communication abilities."
    ],
    "perks": [
      "Enterprise cloud operations exposure.",
      "Stable full-time engagement.",
      "High-ownership support role.",
      "Exposure to modern cloud technologies.",
      "Collaborative culture."
    ]
  },
  {
    "id": 72,
    "slug": "sap-qm-consultant",
    "title": "SAP QM Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP QM Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and support SAP QM processes.",
      "Conduct requirement gathering and documentation.",
      "Integrate QM module with other SAP modules.",
      "Support testing and go-live activities.",
      "Provide ongoing support and optimization."
    ],
    "requirements": [
      "6+ years of SAP QM functional experience.",
      "Strong knowledge of quality management processes.",
      "Experience in SAP implementation projects.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise quality transformation projects.",
      "Long-term Contract engagement.",
      "Exposure to integrated SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 73,
    "slug": "technical-support-engineer",
    "title": "Technical Support Engineer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "3 to 6 Years",
    "aboutRole": "We are looking for an experienced Technical Support Engineer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Provide technical support for enterprise systems.",
      "Troubleshoot software and infrastructure issues.",
      "Monitor service requests and ensure resolution.",
      "Maintain support documentation.",
      "Assist in system upgrades and maintenance."
    ],
    "requirements": [
      "3+ years of technical support experience.",
      "Strong troubleshooting skills.",
      "Knowledge of enterprise IT environments.",
      "Good communication and coordination abilities.",
      "Ability to handle multiple tasks efficiently."
    ],
    "perks": [
      "Stable full-time engagement.",
      "Exposure to enterprise IT ecosystems.",
      "High-ownership support role.",
      "Growth-focused environment.",
      "Collaborative culture."
    ]
  },
  {
    "id": 74,
    "slug": "sap-ariba-consultant",
    "title": "SAP Ariba Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP Ariba Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and support SAP Ariba procurement solutions.",
      "Configure sourcing and contract management processes.",
      "Conduct requirement analysis and fit-gap assessments.",
      "Support integration with SAP ERP systems.",
      "Provide post-go-live support and optimization."
    ],
    "requirements": [
      "6+ years of SAP Ariba experience.",
      "Strong knowledge of procurement workflows.",
      "Experience in SAP integration projects.",
      "Good documentation and stakeholder skills.",
      "Ability to manage multiple priorities."
    ],
    "perks": [
      "Enterprise procurement transformation programs.",
      "Long-term Contract engagement.",
      "Exposure to global SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 75,
    "slug": "salesforce-solution-architect",
    "title": "Salesforce Solution Architect",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "10+ Years",
    "aboutRole": "We are looking for an experienced Salesforce Solution Architect to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Define end-to-end Salesforce architecture.",
      "Design scalable CRM solutions across clouds.",
      "Lead technical design reviews and governance.",
      "Guide development teams on best practices.",
      "Collaborate with stakeholders on transformation strategy."
    ],
    "requirements": [
      "10+ years of Salesforce experience.",
      "Strong expertise in Sales, Service or Experience Cloud.",
      "Experience leading enterprise CRM programs.",
      "Excellent stakeholder management skills.",
      "Ability to define long-term architecture roadmap."
    ],
    "perks": [
      "Leadership role in enterprise CRM programs.",
      "Stable full-time engagement.",
      "High-impact strategic responsibility.",
      "Exposure to global clients.",
      "Collaborative culture."
    ]
  },
  {
    "id": 76,
    "slug": "sap-successfactors-consultant",
    "title": "SAP SuccessFactors Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced SAP SuccessFactors Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and configure SAP SuccessFactors modules.",
      "Conduct business requirement workshops.",
      "Perform system testing and deployment support.",
      "Integrate SuccessFactors with SAP ERP systems.",
      "Provide post-go-live enhancements and support."
    ],
    "requirements": [
      "5+ years of SuccessFactors experience.",
      "Strong knowledge of HR processes.",
      "Experience in SAP HCM or cloud HR systems.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise HR digital transformation projects.",
      "Long-term Contract engagement.",
      "Exposure to cloud-based HR platforms.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 77,
    "slug": "site-reliability-engineer-sre",
    "title": "Site Reliability Engineer (SRE)",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced Site Reliability Engineer (SRE) to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Ensure system reliability and uptime.",
      "Automate infrastructure and monitoring processes.",
      "Manage incident response and root cause analysis.",
      "Optimize system performance and scalability.",
      "Collaborate with DevOps and engineering teams."
    ],
    "requirements": [
      "6+ years of SRE or DevOps experience.",
      "Strong knowledge of monitoring tools.",
      "Experience with automation and scripting.",
      "Familiarity with cloud platforms.",
      "Strong troubleshooting skills."
    ],
    "perks": [
      "Enterprise reliability engineering programs.",
      "Stable full-time engagement.",
      "High-ownership operational role.",
      "Exposure to cloud-native architectures.",
      "Collaborative culture."
    ]
  },
  {
    "id": 78,
    "slug": "sap-ewm-consultant",
    "title": "SAP EWM Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP EWM Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and support SAP EWM processes.",
      "Configure warehouse management workflows.",
      "Conduct requirement analysis and solution design.",
      "Support integration with other SAP modules.",
      "Provide post-go-live support and enhancements."
    ],
    "requirements": [
      "6+ years of SAP EWM experience.",
      "Strong knowledge of warehouse processes.",
      "Experience in SAP implementation projects.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise supply chain transformation projects.",
      "Long-term Contract engagement.",
      "Exposure to integrated SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 79,
    "slug": "sap-technical-lead",
    "title": "SAP Technical Lead",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "8 to 12 Years",
    "aboutRole": "We are looking for an experienced SAP Technical Lead to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Lead SAP technical development initiatives.",
      "Review ABAP and integration designs.",
      "Guide teams on technical best practices.",
      "Support complex enhancements and upgrades.",
      "Collaborate with functional consultants for solution delivery."
    ],
    "requirements": [
      "8+ years of SAP technical experience.",
      "Strong expertise in ABAP and integrations.",
      "Experience leading technical teams.",
      "Good stakeholder coordination skills.",
      "Ability to manage complex SAP landscapes."
    ],
    "perks": [
      "Leadership role in SAP transformation programs.",
      "Stable full-time engagement.",
      "Exposure to enterprise S/4HANA initiatives.",
      "High-impact technical ownership.",
      "Collaborative culture."
    ]
  },
  {
    "id": 80,
    "slug": "salesforce-integration-developer",
    "title": "Salesforce Integration Developer",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "5 to 8 Years",
    "aboutRole": "We are looking for an experienced Salesforce Integration Developer to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop Salesforce integrations with external systems.",
      "Build APIs and middleware solutions.",
      "Support real-time and batch data exchanges.",
      "Troubleshoot integration issues and optimize performance.",
      "Ensure security and data integrity across systems."
    ],
    "requirements": [
      "5+ years of Salesforce integration experience.",
      "Strong knowledge of REST/SOAP APIs.",
      "Experience with middleware platforms.",
      "Good debugging and analytical skills.",
      "Strong communication abilities."
    ],
    "perks": [
      "Enterprise CRM integration projects.",
      "Long-term Contract engagement.",
      "Exposure to complex multi-system environments.",
      "High-ownership technical role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 81,
    "slug": "sap-co-consultant",
    "title": "SAP CO Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP CO Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and support SAP Controlling processes.",
      "Conduct requirement workshops and documentation.",
      "Support integration with FICO and other modules.",
      "Perform testing and deployment activities.",
      "Provide ongoing optimization and support."
    ],
    "requirements": [
      "6+ years of SAP CO experience.",
      "Strong knowledge of cost accounting processes.",
      "Experience in SAP implementation projects.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise financial transformation programs.",
      "Stable full-time engagement.",
      "Exposure to integrated SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 82,
    "slug": "cloud-solutions-architect",
    "title": "Cloud Solutions Architect",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "10+ Years",
    "aboutRole": "We are looking for an experienced Cloud Solutions Architect to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Define end-to-end cloud architecture strategies.",
      "Lead migration and modernization programs.",
      "Ensure scalability, security and compliance.",
      "Guide engineering teams on best practices.",
      "Collaborate with stakeholders on digital transformation roadmaps."
    ],
    "requirements": [
      "10+ years of cloud architecture experience.",
      "Strong expertise in AWS, Azure or GCP.",
      "Experience leading enterprise cloud programs.",
      "Excellent stakeholder management skills.",
      "Ability to define long-term technology strategy."
    ],
    "perks": [
      "Leadership role in cloud transformation programs.",
      "Long-term Contract engagement.",
      "High-impact strategic responsibility.",
      "Exposure to global clients.",
      "Collaborative culture."
    ]
  },
  {
    "id": 83,
    "slug": "it-operations-manager",
    "title": "IT Operations Manager",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Operations",
    "experience": "8 to 12 Years",
    "aboutRole": "We are looking for an experienced IT Operations Manager to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Manage IT operations and infrastructure services.",
      "Ensure system availability and performance.",
      "Lead support and operations teams.",
      "Implement operational best practices and governance.",
      "Coordinate with stakeholders for service delivery."
    ],
    "requirements": [
      "8+ years of IT operations experience.",
      "Strong leadership and coordination skills.",
      "Experience managing enterprise IT environments.",
      "Good stakeholder communication abilities.",
      "Ability to drive operational efficiency."
    ],
    "perks": [
      "Leadership role in enterprise IT operations.",
      "Stable full-time engagement.",
      "High-visibility operational responsibility.",
      "Exposure to global programs.",
      "Collaborative culture."
    ]
  },
  {
    "id": 84,
    "slug": "sap-s-4hana-consultant",
    "title": "SAP S/4HANA Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "7 to 10 Years",
    "aboutRole": "We are looking for an experienced SAP S/4HANA Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and support SAP S/4HANA solutions.",
      "Conduct business requirement workshops.",
      "Perform system configuration and testing.",
      "Support migration from ECC to S/4HANA.",
      "Provide post-go-live enhancements and optimization."
    ],
    "requirements": [
      "7+ years of SAP experience with S/4HANA exposure.",
      "Strong knowledge of end-to-end business processes.",
      "Experience in SAP migration projects.",
      "Good stakeholder communication skills.",
      "Strong analytical and documentation abilities."
    ],
    "perks": [
      "Enterprise S/4HANA transformation initiatives.",
      "Long-term Contract engagement.",
      "Exposure to large-scale SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 85,
    "slug": "salesforce-cpq-consultant",
    "title": "Salesforce CPQ Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced Salesforce CPQ Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and implement Salesforce CPQ solutions.",
      "Design pricing and quoting workflows.",
      "Support integrations with Sales Cloud.",
      "Conduct requirement analysis and solution mapping.",
      "Provide post-implementation support."
    ],
    "requirements": [
      "6+ years of Salesforce experience with CPQ expertise.",
      "Strong understanding of pricing models and quoting processes.",
      "Experience in enterprise CRM projects.",
      "Good documentation and stakeholder skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise CPQ transformation programs.",
      "Stable full-time engagement.",
      "High-visibility consulting role.",
      "Exposure to global CRM implementations.",
      "Collaborative culture."
    ]
  },
  {
    "id": 86,
    "slug": "sap-fi-consultant",
    "title": "SAP FI Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP FI Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Configure and support SAP FI processes.",
      "Conduct requirement gathering and documentation.",
      "Support system testing and deployment.",
      "Integrate FI module with other SAP modules.",
      "Provide post-go-live support and enhancements."
    ],
    "requirements": [
      "6+ years of SAP FI experience.",
      "Strong knowledge of financial accounting processes.",
      "Experience in SAP implementation projects.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise finance transformation initiatives.",
      "Long-term Contract engagement.",
      "Exposure to integrated SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 87,
    "slug": "salesforce-marketing-cloud-consultant",
    "title": "Salesforce Marketing Cloud Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced Salesforce Marketing Cloud Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and configure Marketing Cloud journeys.",
      "Design campaign automation workflows.",
      "Manage data segmentation and audience targeting.",
      "Integrate Marketing Cloud with other CRM systems.",
      "Provide post-implementation support and optimization."
    ],
    "requirements": [
      "6+ years of Salesforce experience with Marketing Cloud expertise.",
      "Strong knowledge of campaign management processes.",
      "Experience in enterprise CRM projects.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise digital marketing transformation programs.",
      "Stable full-time engagement.",
      "High-visibility consulting role.",
      "Exposure to global implementations.",
      "Collaborative culture."
    ]
  },
  {
    "id": 88,
    "slug": "it-infrastructure-architect",
    "title": "IT Infrastructure Architect",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Operations",
    "experience": "10+ Years",
    "aboutRole": "We are looking for an experienced IT Infrastructure Architect to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design enterprise IT infrastructure architecture.",
      "Define network, server and cloud strategies.",
      "Ensure scalability, performance and security standards.",
      "Guide infrastructure modernization initiatives.",
      "Collaborate with stakeholders on technology roadmaps."
    ],
    "requirements": [
      "10+ years of infrastructure architecture experience.",
      "Strong knowledge of enterprise IT systems.",
      "Experience leading large-scale transformation programs.",
      "Excellent stakeholder management skills.",
      "Ability to define long-term infrastructure strategy."
    ],
    "perks": [
      "Leadership role in enterprise infrastructure programs.",
      "Long-term Contract engagement.",
      "High-impact strategic responsibility.",
      "Exposure to global clients.",
      "Collaborative culture."
    ]
  },
  {
    "id": 89,
    "slug": "sap-grc-consultant",
    "title": "SAP GRC Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP GRC Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and support SAP GRC solutions.",
      "Manage access control and risk analysis processes.",
      "Conduct compliance assessments and audits.",
      "Integrate GRC with other SAP modules.",
      "Provide post-go-live enhancements and support."
    ],
    "requirements": [
      "6+ years of SAP GRC experience.",
      "Strong understanding of compliance and governance frameworks.",
      "Experience in SAP security and risk management.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise governance transformation programs.",
      "Stable full-time engagement.",
      "Exposure to global compliance environments.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 90,
    "slug": "salesforce-technical-lead",
    "title": "Salesforce Technical Lead",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "8 to 12 Years",
    "aboutRole": "We are looking for an experienced Salesforce Technical Lead to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Lead Salesforce development and architecture initiatives.",
      "Review code and enforce technical standards.",
      "Design scalable CRM solutions.",
      "Guide integration and deployment strategies.",
      "Collaborate with stakeholders on solution roadmap."
    ],
    "requirements": [
      "8+ years of Salesforce development experience.",
      "Strong expertise in Apex, Lightning and integrations.",
      "Experience leading enterprise CRM programs.",
      "Excellent stakeholder coordination skills.",
      "Ability to drive technical excellence."
    ],
    "perks": [
      "Leadership role in CRM transformation projects.",
      "Long-term Contract engagement.",
      "High-impact technical ownership.",
      "Exposure to global implementations.",
      "Collaborative culture."
    ]
  },
  {
    "id": 91,
    "slug": "sap-bw-consultant",
    "title": "SAP BW Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP BW Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Develop and maintain SAP BW reports and data models.",
      "Design data extraction and transformation processes.",
      "Support performance tuning and enhancements.",
      "Integrate BW with SAP and non-SAP systems.",
      "Provide post-go-live support and optimization."
    ],
    "requirements": [
      "6+ years of SAP BW experience.",
      "Strong knowledge of data warehousing concepts.",
      "Experience in SAP BI implementations.",
      "Good analytical and troubleshooting skills.",
      "Strong stakeholder communication abilities."
    ],
    "perks": [
      "Enterprise analytics transformation programs.",
      "Stable full-time engagement.",
      "Exposure to integrated SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 92,
    "slug": "cloud-migration-specialist",
    "title": "Cloud Migration Specialist",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "7 to 10 Years",
    "aboutRole": "We are looking for an experienced Cloud Migration Specialist to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Lead end-to-end cloud migration programs.",
      "Assess existing infrastructure and define migration strategy.",
      "Ensure minimal downtime and data integrity.",
      "Optimize cloud performance post-migration.",
      "Collaborate with stakeholders for transition planning."
    ],
    "requirements": [
      "7+ years of cloud and infrastructure experience.",
      "Strong expertise in AWS, Azure or GCP migrations.",
      "Experience in enterprise modernization programs.",
      "Good stakeholder communication skills.",
      "Strong analytical and planning abilities."
    ],
    "perks": [
      "Enterprise cloud modernization initiatives.",
      "Long-term Contract engagement.",
      "High-impact strategic role.",
      "Exposure to global clients.",
      "Collaborative culture."
    ]
  },
  {
    "id": 93,
    "slug": "it-compliance-manager",
    "title": "IT Compliance Manager",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Operations",
    "experience": "8 to 12 Years",
    "aboutRole": "We are looking for an experienced IT Compliance Manager to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Define and manage IT compliance frameworks.",
      "Conduct audits and risk assessments.",
      "Ensure adherence to regulatory standards.",
      "Develop compliance policies and procedures.",
      "Collaborate with security and operations teams."
    ],
    "requirements": [
      "8+ years of IT compliance experience.",
      "Strong knowledge of regulatory frameworks.",
      "Experience in enterprise governance programs.",
      "Good stakeholder communication skills.",
      "Strong analytical and documentation abilities."
    ],
    "perks": [
      "Leadership role in governance initiatives.",
      "Stable full-time engagement.",
      "High-visibility strategic responsibility.",
      "Exposure to global compliance programs.",
      "Collaborative culture."
    ]
  },
  {
    "id": 94,
    "slug": "sap-crm-consultant",
    "title": "SAP CRM Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP CRM Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Implement and support SAP CRM solutions.",
      "Configure sales and service processes.",
      "Conduct business requirement workshops.",
      "Integrate CRM with SAP ERP systems.",
      "Provide post-go-live support and enhancements."
    ],
    "requirements": [
      "6+ years of SAP CRM experience.",
      "Strong knowledge of customer lifecycle processes.",
      "Experience in SAP implementation projects.",
      "Good stakeholder communication skills.",
      "Strong analytical abilities."
    ],
    "perks": [
      "Enterprise CRM transformation initiatives.",
      "Stable full-time engagement.",
      "Exposure to integrated SAP landscapes.",
      "High-ownership consulting role.",
      "Collaborative culture."
    ]
  },
  {
    "id": 95,
    "slug": "salesforce-release-manager",
    "title": "Salesforce Release Manager",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "7 to 10 Years",
    "aboutRole": "We are looking for an experienced Salesforce Release Manager to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Plan and manage Salesforce release cycles.",
      "Coordinate deployments across environments.",
      "Ensure compliance with release governance standards.",
      "Manage rollback and risk mitigation strategies.",
      "Collaborate with development and QA teams."
    ],
    "requirements": [
      "7+ years of Salesforce experience with release management exposure.",
      "Strong knowledge of CI/CD and deployment tools.",
      "Experience managing enterprise CRM environments.",
      "Good coordination and communication skills.",
      "Ability to manage risks effectively."
    ],
    "perks": [
      "High-visibility CRM governance role.",
      "Long-term Contract engagement.",
      "Exposure to enterprise release frameworks.",
      "Strategic coordination responsibility.",
      "Collaborative culture."
    ]
  },
  {
    "id": 96,
    "slug": "sap-analytics-consultant",
    "title": "SAP Analytics Consultant",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Development",
    "experience": "6 to 9 Years",
    "aboutRole": "We are looking for an experienced SAP Analytics Consultant to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Design and implement SAP analytics solutions.",
      "Build reports and dashboards for business users.",
      "Integrate analytics tools with SAP systems.",
      "Optimize data models for performance.",
      "Support data-driven transformation initiatives."
    ],
    "requirements": [
      "6+ years of SAP analytics experience.",
      "Strong knowledge of reporting and BI tools.",
      "Experience in SAP BW or SAC environments.",
      "Good analytical and troubleshooting skills.",
      "Strong stakeholder communication abilities."
    ],
    "perks": [
      "Enterprise analytics transformation programs.",
      "Stable full-time engagement.",
      "High-impact data insights role.",
      "Exposure to global SAP landscapes.",
      "Collaborative culture."
    ]
  },
  {
    "id": 97,
    "slug": "multi-cloud-architect",
    "title": "Multi-Cloud Architect",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Development",
    "experience": "10+ Years",
    "aboutRole": "We are looking for an experienced Multi-Cloud Architect to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Define multi-cloud architecture strategy.",
      "Design secure and scalable cross-cloud solutions.",
      "Ensure interoperability between cloud platforms.",
      "Guide modernization and migration programs.",
      "Collaborate with stakeholders on technology roadmap."
    ],
    "requirements": [
      "10+ years of cloud architecture experience.",
      "Strong expertise in AWS, Azure and GCP.",
      "Experience leading enterprise cloud programs.",
      "Excellent stakeholder management skills.",
      "Ability to define long-term cloud strategy."
    ],
    "perks": [
      "Leadership role in multi-cloud transformation initiatives.",
      "Long-term Contract engagement.",
      "High-impact strategic responsibility.",
      "Exposure to global clients.",
      "Collaborative culture."
    ]
  },
  {
    "id": 98,
    "slug": "it-risk-manager",
    "title": "IT Risk Manager",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Full Time",
    "location": "PAN India",
    "category": "Operations",
    "experience": "8 to 12 Years",
    "aboutRole": "We are looking for an experienced IT Risk Manager to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Identify and assess IT risks across programs.",
      "Develop risk mitigation strategies.",
      "Conduct compliance reviews and audits.",
      "Monitor governance frameworks and controls.",
      "Collaborate with leadership on risk reporting."
    ],
    "requirements": [
      "8+ years of IT risk management experience.",
      "Strong knowledge of governance frameworks.",
      "Experience in enterprise risk programs.",
      "Excellent analytical and documentation skills.",
      "Strong stakeholder communication abilities."
    ],
    "perks": [
      "Strategic leadership role in governance initiatives.",
      "Stable full-time engagement.",
      "High-visibility risk management responsibility.",
      "Exposure to global compliance standards.",
      "Collaborative culture."
    ]
  },
  {
    "id": 99,
    "slug": "enterprise-solutions-director",
    "title": "Enterprise Solutions Director",
    "description": "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    "type": "Contract",
    "location": "PAN India",
    "category": "Operations",
    "experience": "12+ Years",
    "aboutRole": "We are looking for an experienced Enterprise Solutions Director to join our growing team at Sanjivani Edge.",
    "lifeAt": "At Sanjivani Edge, people don't just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work – JOIN US!",
    "responsibilities": [
      "Define enterprise-wide technology strategy.",
      "Lead large-scale digital transformation programs.",
      "Drive solution architecture and governance standards.",
      "Engage executive stakeholders for business alignment.",
      "Oversee delivery excellence across portfolios."
    ],
    "requirements": [
      "12+ years of enterprise IT leadership experience.",
      "Strong background in architecture and digital transformation.",
      "Experience managing large cross-functional teams.",
      "Excellent executive communication skills.",
      "Ability to drive long-term strategic initiatives."
    ],
    "perks": [
      "Executive leadership role in transformation programs.",
      "Long-term Contract engagement.",
      "High-impact strategic responsibility.",
      "Exposure to global enterprise clients.",
      "Collaborative culture."
    ]
  }
];
