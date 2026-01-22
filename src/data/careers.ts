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
}

export const JOBS: Job[] = [
  {
    id: 1,
    slug: "java-angular-developer",
    title: "Java + Angular Developer",
    description: "Build enterprise applications using Java 17, Angular 17, and modern CI/CD tools in a collaborative, growth-focused environment.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "5 to 10 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Developing and maintaining applications using Java SE (preferably Java 17) and Java MSB",
      "Building intuitive front-end interfaces using Angular (preferably Angular 17), JavaScript/TypeScript, HTML and CSS",
      "Working with CI/CD pipelines using Docker, Bitbucket and Jenkins",
      "Handling and optimizing databases such as Oracle, MySQL and SQL Server",
      "Deploying and managing applications on servers like WebSphere, WebLogic or JBoss",
      "Collaborating with cross-functional teams to deliver clean, scalable and secure code"
    ],
    requirements: [
      "5–10 years of strong hands-on experience in Java and Angular-based development",
      "A solid understanding of enterprise application architecture",
      "Someone who writes clean code, loves solving problems and enjoys working in team-driven environments",
      "Good communication and collaboration skills",
      "Ability to take ownership, solve problems and work independently when needed"
    ],
    perks: [
      "Exposure to modern enterprise and cloud technologies",
      "Work with global clients across industries",
      "Real opportunities to grow, learn and move into leadership roles",
      "A collaborative, transparent and people-first culture",
      "Teams that value clean work, accountability and innovation"
    ]
  },
  {
    id: 2,
    slug: "java-microservices-developer",
    title: "Java Microservices & Spring Boot Developer",
    description: "Design and deploy scalable microservices using Java 17, Spring Boot, and enterprise CI/CD tools with global clients.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "5 to 10 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Designing and developing applications using Java SE (preferably Java 17) and Java MSB",
      "Building and managing Microservices using Spring Boot",
      "Creating robust CI/CD pipelines with Docker, Bitbucket and Jenkins",
      "Working on enterprise-grade databases like Oracle, MySQL and SQL Server",
      "Deploying and maintaining applications on WebSphere, WebLogic or JBoss",
      "Ensuring performance, security and scalability across all solutions"
    ],
    requirements: [
      "5–10 years of experience in Java Microservices & Spring Boot",
      "Strong backend development and architecture understanding",
      "Passion for building scalable, reliable systems that businesses depend on",
      "Good communication and collaboration skills",
      "Ability to take ownership, solve problems and work independently when needed"
    ],
    perks: [
      "Exposure to modern enterprise and cloud technologies",
      "Work with global clients across industries",
      "Real opportunities to grow, learn and move into leadership roles",
      "A collaborative, transparent and people-first culture",
      "Teams that value clean work, accountability and innovation"
    ]
  },
  {
    id: 3,
    slug: "angular-developer",
    title: "Angular Developer",
    description: "Build enterprise-grade web applications using Angular 17+, TypeScript, and modern testing frameworks in a user-first environment.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "6 to 10 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Developing and maintaining applications using Angular 17+",
      "Writing clean, reusable code using TypeScript, HTML and CSS",
      "Implementing unit and automation testing using Cypress, Jest, Jasmine or Karma",
      "Optimizing UI performance, accessibility and responsiveness",
      "Working closely with backend teams to integrate APIs",
      "Maintaining scalable component-based frontend architectures"
    ],
    requirements: [
      "6–10 years of strong hands-on experience in Angular development",
      "Solid understanding of frontend architecture and best practices",
      "Experience with modern testing frameworks",
      "Someone who writes clean code and enjoys building user-first interfaces",
      "Good communication and collaboration skills",
      "Ability to take ownership and work independently when needed"
    ],
    perks: [
      "Exposure to modern enterprise and cloud technologies",
      "Work with global clients across industries",
      "Real opportunities to grow, learn and move into leadership roles",
      "A collaborative, transparent and people-first culture",
      "Teams that value clean work, accountability and innovation"
    ]
  },
  {
    id: 4,
    slug: "cpp-developer",
    title: "C++ Developer",
    description: "Build high-performance, real-time systems using modern C++ (11/14/17), multithreading, and Linux/Unix environments.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "6 to 10 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Developing high-performance applications using C++ (11/14/17)",
      "Writing efficient, scalable and maintainable object-oriented code",
      "Working with multithreading, memory optimization and performance tuning",
      "Building and enhancing network and socket-based systems",
      "Applying STL, Boost and industry design patterns",
      "Working in Linux/Unix environments and supporting shell scripting needs",
      "Exposure to network programming, socket programming and real-time systems"
    ],
    requirements: [
      "6–10 years of strong hands-on experience in C++ development",
      "Deep understanding of object-oriented programming concepts",
      "Experience working on performance-critical and real-time systems",
      "Comfortable with Linux/Unix environments",
      "Someone who enjoys writing optimized, scalable and reliable code",
      "Good communication and problem-solving skills"
    ],
    perks: [
      "Work on core engineering and system-level projects",
      "Exposure to advanced architecture and performance optimization",
      "Long-term career growth opportunities",
      "Transparent, collaborative and people-first culture",
      "Teams that value clean work, accountability and innovation"
    ]
  },
  {
    id: 5,
    slug: "csharp-selenium-automation",
    title: "C# Selenium Automation Engineer",
    description: "Build scalable automation frameworks using C#, Selenium WebDriver, and CI/CD tools for enterprise-grade testing.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "6 to 10 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Developing and maintaining automation frameworks using C# and Selenium WebDriver for web application testing",
      "Integrating automation with CI/CD pipelines using Jenkins and Azure DevOps",
      "Managing version control using Git",
      "Performing cross-browser and cross-platform testing to ensure consistent user experience",
      "Conducting API testing using Postman and RestAssured for backend service validation",
      "Designing reusable automation scripts and implementing best practices to optimize test coverage and execution",
      "Collaborating closely with QA, development and DevOps teams to align testing strategies with release cycles",
      "Troubleshooting and resolving automation issues to ensure reliability and scalability of test suites",
      "Documenting processes and maintaining test reports for transparency and continuous improvement"
    ],
    requirements: [
      "6–10 years of strong hands-on experience in C# Selenium automation",
      "Proven experience building and maintaining automation frameworks",
      "Hands-on CI/CD and API testing exposure",
      "Strong problem-solving mindset and attention to detail",
      "Good communication and collaboration skills",
      "Ability to take ownership and work independently when needed"
    ],
    perks: [
      "Work on enterprise-grade automation and QA platforms",
      "Exposure to modern DevOps and testing practices",
      "Long-term growth and leadership opportunities",
      "Transparent, collaborative and people-first culture",
      "Teams that value clean work, accountability and innovation"
    ]
  },
  {
    id: 6,
    slug: "technical-recruiter",
    title: "Technical (IT) Recruiter",
    description: "Drive full-cycle recruitment for technical roles using Naukri, LinkedIn, and Boolean search strategies in a fast-paced hiring environment.",
    type: "Full Time",
    location: "Noida (Work From Office)",
    category: "Operations",
    experience: "2 to 3 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Handling the full-cycle recruitment process for IT, sales, product, technical and other roles",
      "Sourcing candidates using Naukri (Resdex), LinkedIn and niche portals through advanced Boolean search strategies",
      "Partnering with Hiring Managers to understand role requirements and share market insights on salary benchmarks",
      "Building and maintaining a steady candidate pipeline to reduce Time-to-Hire",
      "Ensuring a seamless and professional interview experience for candidates",
      "Tracking and reporting recruitment metrics such as Lead-to-Hire ratio and Source effectiveness using ATS tools",
      "Contributing to employer branding and recruitment process improvements"
    ],
    requirements: [
      "Graduate/Post-Graduate (MBA in HR is a plus)",
      "2–3 years of core IT recruitment experience (Agency or Corporate)",
      "Proven track record in high-impact sourcing and closing difficult roles",
      "Excellent verbal and written English communication skills",
      "Strong ownership and relationship-building skills",
      "Candidates who can join within 30 days or immediately will be preferred"
    ],
    perks: [
      "Direct impact on building high-performance technical teams",
      "Transparent hiring culture and leadership exposure",
      "Long-term growth opportunities in HR and Talent Acquisition",
      "Collaborative and people-first work environment",
      "Teams that value clean work, accountability and innovation"
    ]
  },
  {
    id: 7,
    slug: "it-administrator",
    title: "IT Administrator & Web Coordinator",
    description: "Manage IT infrastructure (networks, devices, security) and maintain websites using WordPress/Shopify with basic HTML/CSS skills.",
    type: "Full Time",
    location: "Noida",
    category: "Operations",
    experience: "3 to 5 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Setting up, configuring and troubleshooting Windows/Mac laptops, printers, routers and servers",
      "Managing office Wi-Fi, LAN, Firewalls and VPNs to ensure 100% connectivity",
      "Managing company emails (Google Workspace/Microsoft 365), antivirus systems and software licenses",
      "Implementing data backup protocols and ensuring network security",
      "Handling regular website updates, backups and security patches",
      "Uploading new blogs, updating banners, product pages and fixing broken links",
      "Monitoring website speed, hosting (AWS/GoDaddy/HostGator) and domain renewals",
      "Supporting basic SEO meta-tag updates and minor HTML/CSS design changes"
    ],
    requirements: [
      "Degree in BCA, MCA, B.Tech or equivalent experience",
      "Proven experience with WordPress, Shopify or similar CMS platforms",
      "Strong understanding of TCP/IP, DNS and DHCP",
      "Basic working knowledge of HTML, CSS and PHP",
      "A problem-solver with a “get-it-done” mindset",
      "Someone who enjoys helping colleagues with tech challenges"
    ],
    perks: [
      "A hands-on role with visible daily impact",
      "Supportive teams and transparent work culture",
      "Real growth opportunities across IT and web operations",
      "Work on both infrastructure and digital platforms",
      "Teams that value clean work, accountability and innovation"
    ]
  },
  {
    id: 8,
    slug: "csharp-dotnet-sql-developer",
    title: "C# .NET & SQL Developer",
    description: "Design, develop and maintain robust backend applications using .NET Core and C#, focusing on performance, scalability and long-term maintainability.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "5 to 10 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and maintain robust backend applications using .NET Core and C#, focusing on performance, scalability and long-term maintainability",
      "Build, expose and consume RESTful APIs that support enterprise-grade workflows and integrations",
      "Write clean, modular and well-documented code that follows industry best practices and internal coding standards",
      "Develop and execute unit test cases using NUnit to ensure application stability and reduce regression issues",
      "Work extensively with SQL / PL-SQL for database design, complex queries, performance tuning and data integrity",
      "Debug and resolve production issues through structured root-cause analysis and preventive fixes",
      "Collaborate closely with architects, QA engineers, DevOps teams and business stakeholders throughout the development lifecycle",
      "Participate in code reviews, sprint planning and technical discussions to continuously improve solution quality"
    ],
    requirements: [
      "5–10 years of hands-on experience in C#, .NET Core and SQL / PL-SQL development",
      "Strong understanding of backend architecture, API-first design and service-oriented systems",
      "Practical experience with unit testing frameworks, preferably NUnit, and test-driven development practices",
      "Ability to design efficient database structures and write optimized SQL queries",
      "Strong analytical skills with the ability to break down complex technical problems into workable solutions",
      "Good communication skills and the ability to work effectively in cross-functional teams",
      "A sense of ownership, accountability and commitment to delivering quality work"
    ],
    perks: [
      "Opportunity to work on enterprise-scale applications used by global clients",
      "Exposure to modern backend technologies and real-world system architectures",
      "Clear role ownership with trust and autonomy in decision-making",
      "Long-term, stable projects that focus on quality rather than quick fixes",
      "A collaborative and people-first culture that values clean work, responsibility and continuous improvement"
    ]
  },
  {
    id: 9,
    slug: "csharp-angular-developer",
    title: "C# Angular Developer",
    description: "Work as part of cross-functional development teams to build and enhance enterprise-grade applications.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "5 to 10 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Work as part of cross-functional development teams to build and enhance enterprise-grade applications",
      "Develop and maintain backend services using Java SE (preferably Java 17) and Java MSB, ensuring performance, scalability and reliability",
      "Build and manage application components that integrate seamlessly with front-end systems and third-party services",
      "Support application development across different layers, including business logic, integration and service orchestration",
      "Collaborate closely with frontend, QA and DevOps teams to ensure smooth end-to-end delivery of features",
      "Participate in design discussions, code reviews and sprint planning activities",
      "Debug production issues, analyze root causes and implement sustainable fixes"
    ],
    requirements: [
      "5–10 years of hands-on experience working with Java SE, preferably Java 17, and Java MSB",
      "Strong understanding of enterprise application development and middleware-based architectures",
      "Experience working in large-scale, distributed application environments",
      "Ability to write clean, structured and maintainable backend code",
      "Strong analytical skills and attention to detail",
      "Good communication skills and the ability to collaborate with multiple teams",
      "A strong sense of ownership and accountability for delivered work"
    ],
    perks: [
      "Opportunity to work on complex enterprise systems used by global clients",
      "Exposure to modern Java versions and middleware-based architectures",
      "Stable, long-term projects with clear technical ownership",
      "A culture that encourages learning, responsibility and continuous improvement",
      "Supportive teams that value clarity, execution and problem-solving"
    ]
  },
  {
    id: 10,
    slug: "sap-datasphere-architect",
    title: "SAP Datasphere Architect",
    description: "Design and optimize SAP HANA-based data models with a strong focus on performance and scalability.",
    type: "Full Time",
    location: "Pune / Bangalore",
    category: "Development",
    experience: "Total Experience: 7 Years | Relevant Experience: 5 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design and optimize SAP HANA-based data models with a strong focus on performance and scalability",
      "Develop ABAP CDS Views and AMDPs using the code-to-data paradigm to deliver high-performance solutions",
      "Implement modern applications using the ABAP RAP model, including creation and consumption of OData V4 services",
      "Work confidently across hybrid SAP landscapes, using SE80 for ECC support and ADT (Eclipse) for S/4HANA development",
      "Design, build and support integrations using IDocs, BAPIs, REST and SOAP APIs",
      "Collaborate with functional teams and architects to translate business requirements into effective technical designs"
    ],
    requirements: [
      "Total 7+ years of SAP experience with at least 5 years of relevant experience in SAP Datasphere, HANA or S/4HANA environments",
      "Strong hands-on expertise in ABAP CDS Views and AMDP, with proven performance optimization experience",
      "Solid practical knowledge of the ABAP RAP model and OData V4 services",
      "Proven ability to work across both SE80 and ABAP Development Tools (ADT) in Eclipse",
      "Hands-on experience with SAP integrations using IDocs, BAPIs, REST and SOAP APIs",
      "Strong analytical, problem-solving and communication skills",
      "High sense of ownership and accountability for technical delivery"
    ],
    perks: [
      "Opportunity to work on advanced SAP Datasphere and HANA projects for global clients",
      "Exposure to modern SAP development frameworks and best practices",
      "Clear technical ownership with meaningful responsibility",
      "Long-term, stable SAP programs with defined roadmaps",
      "A collaborative, people-first work culture that values expertise and execution"
    ]
  },
  {
    id: 11,
    slug: "mulesoft-developer",
    title: "MuleSoft Developer",
    description: "Design, develop and maintain integrations using MuleSoft 3.x and 4.x, with Java as a core development skill.",
    type: "Full Time",
    location: "Pune / Bangalore / Remote / PAN",
    category: "Development",
    experience: "4 to 7 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and maintain integrations using MuleSoft 3.x and 4.x, with Java as a core development skill",
      "Build API-led and pub-sub integration solutions using Mule to support enterprise data flows",
      "Design scalable, high-performance schemas and data models aligned with functional and technical requirements",
      "Work on complex integrations across domains such as Master Data Management, Supply Chain and CRM",
      "Troubleshoot production issues and resolve development-time challenges through structured problem-solving",
      "Collaborate closely with functional and technical stakeholders to explain integration designs and ensure alignment across source and target systems"
    ],
    requirements: [
      "4–7 years of hands-on experience working with MuleSoft (3.x and 4.x) and Java (mandatory)",
      "Proven experience building API-led and event-driven integrations using Mule",
      "Strong expertise in schema design, data transformation and integration performance optimization",
      "Domain awareness in Master Data, Supply Chain or CRM environments is a strong advantage",
      "Solid analytical and problem-solving skills with the ability to handle production issues independently",
      "Excellent communication skills to effectively bridge technical designs with business and functional teams",
      "A strong sense of ownership and accountability for integration delivery"
    ],
    perks: [
      "Opportunity to work on large-scale enterprise integration programs",
      "Exposure to multiple business domains and modern integration architectures",
      "Clear ownership of integrations from design to production support",
      "Long-term, stable projects with real business impact",
      "A collaborative, people-first culture that values clarity, execution and expertise"
    ]
  },
  {
    id: 12,
    slug: "java-integration-engineer",
    title: "Java Integration Engineer",
    description: "Design, develop and support enterprise integration solutions using Core Java as the primary programming language.",
    type: "Full Time",
    location: "Pune / Bangalore / PAN / Remote",
    category: "Development",
    experience: "4 to 7 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and support enterprise integration solutions using Core Java as the primary programming language",
      "Work with enterprise integration platforms such as MuleSoft, TIBCO, Oracle SOA/OSB, Dell Boomi, Workato or other ESB/iPaaS tools",
      "Contribute to migration projects, supporting upgrades from legacy integration platforms to modern, scalable architectures",
      "Build, consume and maintain integrations using REST and SOAP APIs, along with XML and JSON data formats",
      "Integrate CI/CD pipelines using GitHub and Jenkins to support automated builds and deployments, with exposure to AWS environments where applicable",
      "Analyze, debug and resolve complex integration and production issues in collaboration with cross-functional teams"
    ],
    requirements: [
      "4–7 years of strong hands-on experience in Core Java development (mandatory)",
      "Experience working with at least one enterprise integration platform or ESB/iPaaS tool",
      "Prior exposure to integration migration projects, preferably legacy-to-modern transformations",
      "Solid understanding of REST/SOAP APIs, integration patterns and data formats such as XML and JSON",
      "Experience with CI/CD tools including GitHub and Jenkins; AWS exposure is preferred",
      "Strong analytical and debugging skills with the ability to resolve complex technical issues",
      "Excellent communication and collaboration skills to work effectively across teams",
      "Added Advantage: Domain knowledge in Master Data, Supply Chain or CRM environments",
      "Added Advantage: Basic understanding of Mule 4 or a strong willingness to upskill on MuleSoft technologies"
    ],
    perks: [
      "Opportunity to work on large-scale integration and modernization programs",
      "Exposure to multiple integration platforms and enterprise architectures",
      "Clear ownership of integration solutions from design through production support",
      "Long-term projects with real business impact and technical depth",
      "A collaborative, people-first culture that values problem-solving and execution"
    ]
  },
  {
    id: 13,
    slug: "sap-sd-consultant",
    title: "SAP SD Consultant",
    description: "Configure, support and enhance SAP SD (Sales and Distribution) modules across enterprise environments.",
    type: "Full Time",
    location: "Hyderabad",
    category: "Development",
    experience: "6 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Configure, support and enhance SAP SD (Sales and Distribution) modules across enterprise environments",
      "Work on SD–PS integration, ensuring seamless alignment between sales processes and project systems",
      "Support and implement S/4HANA-based SAP solutions, including system upgrades and enhancements",
      "Manage and maintain billing plans and complex pricing scenarios as part of the order-to-cash process",
      "Collaborate with functional, technical and business teams to gather requirements and deliver effective solutions",
      "Support issue resolution, system testing and user acceptance activities"
    ],
    requirements: [
      "6 years of hands-on experience working as an SAP SD Consultant",
      "Strong functional expertise in SAP SD, including pricing, billing and order-to-cash processes",
      "Proven experience with SD–PS integration (mandatory)",
      "Hands-on exposure to S/4HANA environments",
      "Billing plan experience is mandatory",
      "Experience with SD–PS integration in public cloud is an added advantage",
      "Strong communication skills and the ability to work with cross-functional teams"
    ],
    perks: [
      "Opportunity to work on modern SAP S/4HANA implementations",
      "Long-term functional roles with clear responsibilities",
      "Exposure to complex business processes and integrations",
      "Stable projects with defined delivery structures",
      "A collaborative, people-first work culture that values clarity and ownership"
    ]
  },
  {
    id: 14,
    slug: "oracle-fusion-technical-consultant",
    title: "Oracle Fusion Cloud Technical Consultant (GL & FA)",
    description: "Work as a technical consultant on Oracle Fusion Cloud implementations and support engagements, with a primary focus on General Ledger (GL) and Fixed Assets (FA).",
    type: "Full Time",
    location: "Pune / Bangalore / Chennai / Hyderabad / Kolkata",
    category: "Development",
    experience: "7+ Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Work as a technical consultant on Oracle Fusion Cloud implementations and support engagements, with a primary focus on General Ledger (GL) and Fixed Assets (FA)",
      "Configure, customize and support Oracle Fusion modules including GL, Accounts Payables, Accounts Receivables, Cash Management, Fixed Assets, HCM and Procurement (future PO needs)",
      "Develop and maintain integrations using Oracle Integration Cloud (OIC) to support end-to-end business processes",
      "Design and develop reports using BI Publisher (BIP) to meet statutory, operational and management reporting needs",
      "Build and support analytics using OTBI, Business Intelligence Cloud Connector (BICC) and Fusion Analytics Warehouse",
      "Collaborate with functional teams, finance stakeholders and technical teams to translate business requirements into scalable Oracle Fusion solutions"
    ],
    requirements: [
      "7+ years of overall experience with strong hands-on exposure to Oracle Fusion Cloud",
      "Mandatory experience in General Ledger (GL) and Fixed Assets (FA) modules",
      "Proven experience working with Oracle Integration Cloud (OIC)",
      "Functional and technical understanding of additional modules including AP, AR, CM, HCM and Procurement",
      "Strong experience in BIP report development, OTBI, BICC and Fusion Analytics Warehouse",
      "Ability to handle technical configurations, integrations and reporting requirements independently",
      "Strong analytical, communication and stakeholder management skills"
    ],
    perks: [
      "Opportunity to work on enterprise-scale Oracle Fusion Cloud programs",
      "Exposure to both technical and functional aspects of Oracle Finance ecosystems",
      "Long-term, stable projects with clear ownership and accountability",
      "Collaborative teams that value precision, clarity and execution",
      "A people-first culture that supports growth and continuous learning"
    ]
  },
  {
    id: 15,
    slug: "sr-workday-specialist",
    title: "Sr Workday Specialist – HR Technology",
    description: "Act as Systems Administrator for Workday and HR Technology platforms, supporting Core HCM, Time Tracking, Payroll, Time Off, Absence and related modules.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "6+ Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Act as Systems Administrator for Workday and HR Technology platforms, supporting Core HCM, Time Tracking, Payroll, Time Off, Absence and related modules",
      "Configure, maintain and enhance Workday business processes, data structures and integrations, ensuring data accuracy and system reliability",
      "Partner with stakeholders across HR, Payroll, Finance, Audit, Legal and IT to gather requirements, troubleshoot issues and implement system improvements",
      "Design, build and manage complex Workday reports and integration touchpoints, ensuring alignment across end-to-end business processes",
      "Support data optimization initiatives including legacy data cleansing, conversion planning and validation",
      "Lead audit and compliance activities related to associate master data, ensuring consistency, integrity and adherence to company policies"
    ],
    requirements: [
      "6+ years of progressively responsible experience in HRIS / Workday ecosystems, with strong hands-on exposure",
      "Functional experience in Workday Core HCM, Time Tracking, Time Off, Absence, Recruiting and Compensation / Advanced Compensation",
      "Proven experience working as a Workday Systems Administrator supporting enterprise HR technology environments",
      "Strong understanding of end-to-end HR business processes and data governance",
      "Experience working with integrated vendors such as ADP (Payroll) and Fidelity (Benefits)",
      "Strong analytical, problem-solving and stakeholder management skills",
      "Excellent written and verbal communication skills with the ability to work across technical and non-technical teams"
    ],
    perks: [
      "Opportunity to own and shape enterprise-wide Workday HR technology platforms",
      "Exposure to complex reporting, integrations and compliance-driven HR environments",
      "High-visibility role with direct interaction with business and leadership stakeholders",
      "Long-term, stable HR technology programs with real organizational impact",
      "A collaborative, people-first culture that values trust, ownership and continuous improvement"
    ]
  },
  {
    id: 16,
    slug: "senior-workday-hcm-reporting-consultant",
    title: "Senior Workday HCM & Reporting Consultant (Functional)",
    description: "Design, configure and support Workday Core HCM modules, including Staffing, Compensation and Benefits, ensuring alignment with business needs.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "4+ Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, configure and support Workday Core HCM modules, including Staffing, Compensation and Benefits, ensuring alignment with business needs",
      "Analyze existing HR workflows to identify gaps and bottlenecks, and configure Business Process (BP) frameworks for improved efficiency",
      "Build and maintain complex Workday reports such as Matrix, Composite and Trending reports using Report Writer and Calculated Fields",
      "Develop dashboards and reporting views to support HR and leadership decision-making",
      "Partner with HR and Finance stakeholders to gather requirements and translate them into functional system solutions",
      "Support testing, validation and deployment of configuration and reporting changes"
    ],
    requirements: [
      "4+ years of functional HRIS experience, with strong hands-on exposure to Workday",
      "Deep functional expertise in Workday Core HCM",
      "Good understanding of Workday Report Writer and Calculated Fields (added advantage)",
      "Experience working directly with business stakeholders to deliver functional solutions",
      "Strong analytical and documentation skills",
      "Ability to manage multiple priorities in a fast-paced environment",
      "Clear communication skills and a collaborative working style"
    ],
    perks: [
      "Opportunity to work on enterprise Workday HCM implementations",
      "High-visibility functional role with direct stakeholder interaction",
      "Exposure to complex reporting and business process optimization initiatives",
      "Long-term projects with clearly defined responsibilities",
      "A collaborative, people-first work culture that values ownership and expertise"
    ]
  },
  {
    id: 17,
    slug: "senior-workday-integration-developer",
    title: "Senior Workday Integration Developer",
    description: "Design and develop end-to-end Workday integrations, including inbound and outbound interfaces using EIBs, Core Connectors and Workday Studio.",
    type: "Full Time",
    location: "PAN India",
    category: "Development",
    experience: "4+ Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design and develop end-to-end Workday integrations, including inbound and outbound interfaces using EIBs, Core Connectors and Workday Studio",
      "Implement custom data transformations using XSLT and XML, and manage API interactions through SOAP and REST web services",
      "Evaluate integration requirements and recommend the most effective technical architecture based on business and system needs",
      "Monitor scheduled integrations, troubleshoot failures and perform root-cause analysis to ensure system stability",
      "Manage weekly Workday service updates, including regression testing and post-release validation",
      "Collaborate with functional Workday teams and business stakeholders to ensure seamless integration delivery"
    ],
    requirements: [
      "4+ years of hands-on experience in Workday Integration development",
      "Expert-level proficiency in Workday Studio, EIB, Cloud Connect, XSLT and XML",
      "Strong understanding of Workday Web Services (WWS) and SOAP/REST APIs",
      "Proven experience designing and maintaining complex Workday integrations",
      "Strong analytical and debugging skills with the ability to resolve integration issues independently",
      "Good communication skills and the ability to collaborate with cross-functional teams"
    ],
    perks: [
      "Opportunity to work on complex Workday integration landscapes for enterprise clients",
      "Exposure to advanced integration architectures and real-world HR technology ecosystems",
      "High-ownership role with visibility across functional and technical teams",
      "Long-term, stable programs with continuous enhancement opportunities",
      "A collaborative, people-first culture that values expertise, ownership and execution"
    ]
  },
  {
    id: 18,
    slug: "angular-dotnet-senior-developer",
    title: "Angular / .NET Senior Developer",
    description: "Design, develop and maintain scalable web applications using Angular (latest versions) and .NET Core / .NET Framework.",
    type: "Full Time",
    location: "Hyderabad / Remote",
    category: "Development",
    experience: "6 to 9 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and maintain scalable web applications using Angular (latest versions) and .NET Core / .NET Framework",
      "Build responsive, high-performance user interfaces while ensuring accessibility and usability best practices",
      "Develop, consume and maintain RESTful APIs and microservices to support enterprise applications",
      "Contribute to system architecture and design decisions, ensuring performance, security and maintainability",
      "Collaborate closely with product managers, QA engineers, UX/UI designers and developers within agile teams",
      "Conduct code reviews, mentor junior developers and uphold coding standards across the team"
    ],
    requirements: [
      "Bachelor’s or Master’s degree in Computer Science, Engineering, or related field",
      "6–9 years of professional development experience with strong expertise in Angular and .NET",
      "Hands-on experience with Angular (v17+), .NET Core / .NET Framework, and microservices-based architectures",
      "Solid experience working with REST APIs, Web Services and relational databases such as SQL Server",
      "Experience with Git, CI/CD pipelines and cloud platforms (Azure preferred)",
      "Strong understanding of software design patterns, SOLID principles and Agile methodologies",
      "Experience in gaming, digital entertainment or regulated industries is an added advantage"
    ],
    perks: [
      "Opportunity to work on modern, customer-facing applications with real business impact",
      "Exposure to the latest Angular and .NET technologies and cloud platforms",
      "A senior role with technical ownership and leadership responsibility",
      "Flexible work options with remote opportunities",
      "A collaborative, people-first culture that values quality, innovation and accountability"
    ]
  },
  {
    id: 19,
    slug: "sdet-ii-software-development-engineer-in-test-ii",
    title: "SDET II (Software Development Engineer in Test II)",
    description: "Design, develop and maintain scalable automation frameworks using Playwright with TypeScript.",
    type: "Full Time",
    location: "Hyderabad / Remote",
    category: "Development",
    experience: "3+ Years (70% Automation + 30% Manual Testing)",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and maintain scalable automation frameworks using Playwright with TypeScript",
      "Automate UI, API (REST) and backend test scenarios, focusing on reliability, performance and stability",
      "Integrate automated test suites into CI/CD pipelines using tools such as Git and Jenkins",
      "Optimize automation suites for execution speed, maintainability and test coverage",
      "Design and execute manual test cases for complex features where automation is not feasible, including exploratory testing",
      "Verify bug fixes, perform regression testing, and document defects clearly using tools like JIRA"
    ],
    requirements: [
      "3+ years of experience in SDET or test automation roles, with a strong balance of automation (70%) and manual testing (30%)",
      "Strong automation skills using JavaScript / TypeScript with Playwright or Cypress",
      "Hands-on experience with API testing (REST) and CI/CD tools such as Git and Jenkins",
      "Strong manual testing expertise, including test case design, execution, exploratory testing and regression testing",
      "Experience working in Agile environments with tools like JIRA and Confluence",
      "Strong analytical, debugging and problem-solving skills",
      "Good communication skills and the ability to collaborate effectively with developers and QA teams"
    ],
    perks: [
      "A balanced role combining automation engineering and hands-on testing",
      "Exposure to modern testing frameworks and CI/CD-driven delivery environments",
      "Opportunity to collaborate closely with developers in a shift-left testing culture",
      "Ownership of test quality across features and releases",
      "A supportive, people-first culture that values learning, clarity and execution"
    ]
  },
  {
    id: 20,
    slug: "ux-designer",
    title: "UX Designer",
    description: "Design end-to-end user journeys that deliver intuitive, engaging and user-centric digital experiences.",
    type: "Full Time",
    location: "Bangalore",
    category: "Development",
    experience: "3 to 6 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design end-to-end user journeys that deliver intuitive, engaging and user-centric digital experiences",
      "Conduct user research, interviews and usability studies to understand user needs, behaviours and pain points",
      "Create personas, user flows, wireframes and information architecture based on research insights",
      "Develop high-fidelity prototypes and interactive designs using Figma",
      "Collaborate closely with product managers, developers and business stakeholders to translate requirements into effective UX solutions",
      "Work within Agile / SAFe environments, participating in sprint planning, reviews and continuous improvement discussions"
    ],
    requirements: [
      "3–6 years of hands-on experience as a UX / UI Designer",
      "Strong expertise in UX design principles, usability and human-centred design",
      "Proven experience creating user journeys, personas, wireframes and high-fidelity prototypes",
      "Hands-on proficiency with Figma for design and prototyping",
      "Experience working in Agile or SAFe frameworks",
      "Strong communication skills and the ability to present design concepts clearly to stakeholders",
      "A problem-solving mindset with strong attention to detail",
      "Bachelor’s degree in Design, HCI, Computer Science, or related field"
    ],
    perks: [
      "Opportunity to work on user-centric products for global clients",
      "Ownership of UX decisions from concept to delivery",
      "Collaboration with cross-functional product and engineering teams",
      "Exposure to modern design practices and enterprise-scale platforms",
      "A people-first culture that values creativity, clarity and impact"
    ]
  },
  {
    id: 21,
    slug: "senior-ux-designer",
    title: "Senior UX Designer",
    description: "Design end-to-end user journeys that deliver intuitive, engaging and user-centric digital experiences.",
    type: "Full Time",
    location: "Bangalore",
    category: "Development",
    experience: "6 to 9 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design end-to-end user journeys that deliver intuitive, engaging and user-centric digital experiences",
      "Conduct user research, interviews and usability studies to understand user needs, behaviours and pain points",
      "Create personas, user flows, wireframes and information architecture based on research insights",
      "Develop high-fidelity prototypes and interactive designs using Figma",
      "Collaborate closely with product managers, developers and business stakeholders to translate requirements into effective UX solutions",
      "Work within Agile / SAFe environments, participating in sprint planning, reviews and continuous improvement discussions"
    ],
    requirements: [
      "6–9 years of hands-on experience as a UX / UI Designer",
      "Strong expertise in UX design principles, usability and human-centred design",
      "Proven experience creating user journeys, personas, wireframes and high-fidelity prototypes",
      "Hands-on proficiency with Figma for design and prototyping",
      "Experience working in Agile or SAFe frameworks",
      "Strong communication skills and the ability to present design concepts clearly to stakeholders",
      "A problem-solving mindset with strong attention to detail",
      "Bachelor’s degree in Design, HCI, Computer Science, or related field"
    ],
    perks: [
      "Opportunity to work on user-centric products for global clients",
      "Ownership of UX decisions from concept to delivery",
      "Collaboration with cross-functional product and engineering teams",
      "Exposure to modern design practices and enterprise-scale platforms",
      "A people-first culture that values creativity, clarity and impact"
    ]
  },
  {
    id: 22,
    slug: "lead-developer-architect-backend",
    title: "Lead Developer / Architect | Back-End Technologies",
    description: "Lead the design and development of Java EE–based backend applications, ensuring scalability, performance and security.",
    type: "Full Time",
    location: "Bangalore",
    category: "Development",
    experience: "6 to 9 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Lead the design and development of Java EE–based backend applications, ensuring scalability, performance and security",
      "Analyze and translate user and business requirements into robust technical solutions and system architectures",
      "Plan, prioritize, assign and track development tasks across the software development life cycle (SDLC)",
      "Write well-designed, efficient and maintainable code, while reviewing, testing and debugging team members’ code",
      "Design and manage database structures, write optimized SQL queries, and ensure data integrity",
      "Coordinate with internal teams to plan releases, document development phases and ensure applications remain secure and up to date"
    ],
    requirements: [
      "6–9 years of experience working as a Senior Java Developer, Lead Developer or Architect",
      "Strong foundation in data structures, algorithms and problem-solving",
      "Hands-on experience designing, building and testing Java EE applications",
      "In-depth knowledge of Java frameworks and technologies including Spring Boot, Microservices, GitHub Actions and Jenkins",
      "Strong understanding of Object-Oriented Design (OOD) principles",
      "Experience with database design and SQL",
      "Excellent communication skills with the ability to collaborate across teams",
      "Strong delegation, planning and time management capabilities",
      "Bachelor’s or Master’s degree in Computer Science, Engineering, or related field"
    ],
    perks: [
      "A leadership role with technical ownership and architectural influence",
      "Opportunity to mentor developers and shape backend engineering standards",
      "Exposure to modern backend architectures and DevOps-driven delivery",
      "Stable, long-term projects with real business impact",
      "A collaborative, people-first culture that values expertise, clarity and execution"
    ]
  },
  {
    id: 23,
    slug: "java-spark-devops-engineer",
    title: "Java + Spark + DevOps Engineer",
    description: "Design, develop and manage distributed and streaming applications using Java, Apache Spark and Spark Streaming.",
    type: "Full Time",
    location: "Bangalore",
    category: "Development",
    experience: "6 to 9 Years",
    aboutRole: "Sanjivani Edge is a global IT and digital transformation partner delivering technology-driven solutions across software development, cloud services, cybersecurity, IT infrastructure, ERP, emerging technologies, consulting and BPO services. We help businesses build smarter systems, secure operations and future-ready digital platforms, while creating long-term value for both clients and teams.",
    lifeAt: "At Sanjivani Edge, people don’t just work on projects, they build products, relationships and careers. Choosing Sanjivani Edge means choosing a place where your work actually matters. Here, you are trusted with real responsibility, encouraged to grow faster, and supported by teams that believe in building solutions. You will work with modern technologies, global clients and people who value clarity, ownership and smart execution. If you are someone who wants to build, learn and see real impact from your work - JOIN US!",
    responsibilities: [
      "Design, develop and manage distributed and streaming applications using Java, Apache Spark and Spark Streaming",
      "Build and maintain event-driven and microservices-based architectures using Spring Boot and Spring Framework",
      "Design, configure and manage Kafka-based messaging systems, including topics, partitions, consumer groups and redundancy clusters",
      "Work extensively with the Confluent platform, including Kafka brokers, ZooKeeper, KSQL/KStreams and Kafka Control Centre",
      "Develop and manage Kafka connectors, converters (Avro / JSON), custom connectors and REST proxy integrations",
      "Ensure high availability, performance and stability of solutions by implementing monitoring, alerts and best practices"
    ],
    requirements: [
      "6–9 years of hands-on experience developing and managing distributed and streaming applications",
      "Strong expertise in Apache Spark (RDD API, Spark Streaming) and Kafka ecosystem",
      "In-depth understanding of Kafka configuration properties such as timeouts, buffering and partitioning",
      "Experience with Spring Boot, Spring Framework and event-based architecture patterns",
      "Hands-on experience with Kubernetes and containerized deployments",
      "Strong exposure to DevOps pipelines, including Azure DevOps and Jenkins",
      "Ability to design scalable, fault-tolerant systems with strong troubleshooting skills",
      "Bachelor’s or Master’s degree in Computer Science, Engineering, or related field"
    ],
    perks: [
      "Opportunity to work on high-scale, real-time data streaming platforms",
      "Exposure to modern big data, event-driven and cloud-native architectures",
      "High ownership role with impact on system performance and reliability",
      "Long-term, technically challenging projects for global clients",
      "A collaborative, people-first culture that values expertise, innovation and execution"
    ]
  }
];
