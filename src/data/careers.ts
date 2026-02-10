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
    id: 5,
    slug: "csharp-selenium-automation",
    title: "C# Selenium Automation Engineer",
    description:
      "Build scalable automation frameworks using C#, Selenium WebDriver, and CI/CD tools for enterprise-grade testing.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "6 to 10 Years",
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
    id: 6,
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
    id: 11,
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
    id: 14,
    slug: "oracle-fusion-technical-consultant",
    title: "Oracle Fusion Cloud Technical Consultant (GL & FA)",
    description:
      "Work as a technical consultant on Oracle Fusion Cloud implementations and support engagements, with a primary focus on General Ledger (GL) and Fixed Assets (FA).",
    type: "Full Time",
    location: "Pune / Bangalore / Chennai / Hyderabad / Kolkata",
    category: "Development",
    experience: "7+ Years",
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
    id: 15,
    slug: "sr-workday-specialist",
    title: "Sr Workday Specialist – HR Technology",
    description:
      "Act as Systems Administrator for Workday and HR Technology platforms, supporting Core HCM, Time Tracking, Payroll, Time Off, Absence and related modules.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "6+ Years",
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
    id: 16,
    slug: "senior-workday-hcm-reporting-consultant",
    title: "Senior Workday HCM & Reporting Consultant (Functional)",
    description:
      "Design, configure and support Workday Core HCM modules, including Staffing, Compensation and Benefits, ensuring alignment with business needs.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "4+ Years",
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
    id: 17,
    slug: "senior-workday-integration-developer",
    title: "Senior Workday Integration Developer",
    description:
      "Design and develop end-to-end Workday integrations, including inbound and outbound interfaces using EIBs, Core Connectors and Workday Studio.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "4+ Years",
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
    id: 26,
    slug: "oracle-functional-ebs-crm-consultant-wms",
    title: "Oracle – Functional – EBS CRM Consultant (WMS Implementation)",
    description:
      "Act as a functional SME for Oracle EBS Warehouse Management (WMS), owning end-to-end configuration, implementation and support.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "8 to 12 Years",
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
    id: 27,
    slug: "oracle-cloud-technical-developer-oic-vbcs-apex",
    title: "Oracle Cloud Technical Developer (OIC & VBCS – APEX)",
    description:
      "Design, develop and implement integrations using Oracle Integration Cloud (OIC), including connections, orchestrations, mappings and REST/SOAP APIs.",
    type: "Full-time / Subcontractor",
    location: "Remote / Hybrid",
    category: "Development",
    experience: "5 to 15 Years",
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
    id: 28,
    slug: "oracle-apex-developer-api-rest-api",
    title: "Oracle APEX Developer – API, REST API",
    description:
      "Design, develop and maintain enterprise-grade Oracle APEX applications, including interactive reports, forms, pages and dashboards.",
    type: "Contract-to-Hire (C2H)",
    location: "Remote / Hybrid / PAN India",
    category: "Development",
    experience: "6 Years",
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
    id: 38,
    slug: "workday-advanced-reporting-consultant",
    title: "Workday Advanced Reporting Consultant",
    description:
      "Design and develop advanced Workday reports including Matrix, Composite, Trending and Dashboards.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
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
    id: 39,
    slug: "workday-us-payroll-consultant",
    title: "Workday US Payroll Consultant",
    description:
      "Configure, implement and support Workday US Payroll end-to-end, ensuring accurate and compliant payroll processing.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
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
    id: 40,
    slug: "workday-hcm-reporting-consultant",
    title: "Workday HCM & Reporting Consultant",
    description:
      "Configure and support Workday Core HCM modules and deliver end-to-end reporting solutions for business stakeholders.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
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
    id: 41,
    slug: "workday-time-absence-reporting-consultant",
    title: "Workday Time & Absence + Reporting Consultant",
    description:
      "Configure, implement and support Workday Time Tracking, Time Off and Absence modules with reporting.",
    type: "Contract-to-Hire (C2H)",
    location: "PAN India",
    category: "Development",
    experience: "5+ Years",
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
];
