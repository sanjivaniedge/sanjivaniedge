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
 
];
