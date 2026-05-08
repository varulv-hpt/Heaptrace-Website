export type ServiceDetail = {
  title: string;
  subtitle: string;
  overview: string;
  capabilities: string[];
  outcomes: string[];
  detailedServices?: {
    title: string;
    description: string;
  }[];
  processSteps?: {
    title: string;
    description: string;
  }[];
  whyChooseUs?: {
    title: string;
    description: string;
  }[];
  technologies?: {
    category: string;
    tools: string;
  }[];
  closingCta?: {
    title: string;
    description: string;
    secondaryDescription?: string;
  };
  contactSection?: {
    heading: string;
    salesLabel: string;
    salesPhone: string;
    hrPhone: string;
    generalLabel: string;
    generalEmail: string;
  };
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "cloud-development": {
    title: "Cloud Development",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions.",
    overview:
      "At HeapTrace Technology, we provide comprehensive Cloud Development services designed to help businesses leverage the power of cloud computing to enhance scalability, flexibility, and efficiency. Whether you're looking to move to the cloud, optimize your existing infrastructure, or develop cloud-native applications, our expert team ensures that your cloud solutions are secure, cost-effective, and built for performance.",
    capabilities: [
      "Cloud architecture and migration strategy",
      "Containerization and orchestration readiness",
      "Infrastructure automation and CI/CD enablement",
      "Observability, security baselines, and cost optimization",
    ],
    outcomes: [
      "Scalable releases with lower operational overhead",
      "Faster environment setup and production readiness",
    ],
    detailedServices: [
      {
        title: "Cloud Migration",
        description:
          "We offer seamless cloud migration services, helping businesses move applications, data, and infrastructure to the cloud with minimal disruption.",
      },
      {
        title: "Cloud-Native Application Development",
        description:
          "Our team develops resilient cloud-native systems using microservices, containers, and serverless patterns with technologies like Docker, Kubernetes, and AWS Lambda.",
      },
      {
        title: "Multi-Cloud and Hybrid Cloud Solutions",
        description:
          "We design solutions that operate across AWS, Azure, and Google Cloud, or combine on-premise and cloud environments for flexibility and redundancy.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "We automate provisioning and management using Terraform, AWS CloudFormation, and Ansible to keep your environments scalable and consistent.",
      },
      {
        title: "Cloud Security and Compliance",
        description:
          "Security-first implementation with encryption, identity management, and monitoring aligned to standards such as GDPR, HIPAA, SOC 2, and ISO 27001.",
      },
      {
        title: "DevOps and CI/CD Automation",
        description:
          "We integrate DevOps workflows and CI/CD pipelines to streamline deployments, improve release quality, and accelerate time to market.",
      },
      {
        title: "Cloud Optimization and Cost Management",
        description:
          "We identify cost-saving opportunities and optimize cloud resources to maximize performance and investment efficiency.",
      },
      {
        title: "Disaster Recovery and Backup Solutions",
        description:
          "We implement cloud-based backup and failover strategies to ensure business continuity and minimize downtime.",
      },
    ],
    processSteps: [
      {
        title: "Cloud Strategy and Planning",
        description:
          "We begin by understanding your business goals, current infrastructure, and growth roadmap to define the right cloud strategy.",
      },
      {
        title: "Cloud Architecture Design",
        description:
          "We design a scalable, secure architecture across public, private, or hybrid environments based on your requirements.",
      },
      {
        title: "Cloud Implementation and Development",
        description:
          "We build and deploy cloud infrastructure and applications with modern engineering practices and performance-focused implementation.",
      },
      {
        title: "Security and Compliance Integration",
        description:
          "We apply access controls, encryption, and monitoring to keep your cloud environment protected and compliant.",
      },
      {
        title: "Testing and Optimization",
        description:
          "We rigorously test for reliability, scalability, and security while continuously optimizing for cost and performance.",
      },
      {
        title: "Ongoing Support and Improvement",
        description:
          "After deployment, we provide monitoring, updates, and troubleshooting support so your systems continue to perform at their best.",
      },
    ],
    whyChooseUs: [
      {
        title: "Tailored Cloud Solutions",
        description:
          "We create cloud solutions designed around your unique business needs, from startups to enterprise programs.",
      },
      {
        title: "Cloud Expertise Across Platforms",
        description:
          "Our team works across AWS, Google Cloud, and Microsoft Azure using proven cloud engineering practices.",
      },
      {
        title: "Scalability and Flexibility",
        description:
          "Our architectures scale with your business and adapt to changing product and infrastructure demands.",
      },
      {
        title: "Cost-Efficient Solutions",
        description:
          "We focus on reducing waste and maximizing return from your cloud investment with practical cost controls.",
      },
      {
        title: "Security and Compliance Focus",
        description:
          "Security and compliance are embedded into every implementation to protect your data and build trust.",
      },
    ],
    technologies: [
      { category: "Cloud Platforms", tools: "AWS, Google Cloud, Microsoft Azure" },
      { category: "Containerization", tools: "Docker, Kubernetes" },
      { category: "Serverless Technologies", tools: "AWS Lambda, Google Cloud Functions" },
      { category: "Infrastructure as Code (IaC)", tools: "Terraform, AWS CloudFormation, Ansible" },
      { category: "Cloud Security", tools: "Identity and Access Management (IAM), Encryption, Firewalls" },
      { category: "DevOps Tools", tools: "Jenkins, GitLab CI, CircleCI" },
    ],
    closingCta: {
      title: "Leverage the Power of the Cloud with HeapTrace Technology",
      description:
        "Whether you're migrating to the cloud, optimizing current infrastructure, or developing cloud-native applications, our cloud development services keep your business secure, scalable, and ready for growth.",
      secondaryDescription:
        "Contact us today to learn more about how our cloud solutions can transform your business.",
    },
    contactSection: {
      heading: "Let's Connect and Build, Collaborate, and Scale Together",
      salesLabel: "Customer sales enquiries",
      salesPhone: "+91 814-990-6449",
      hrPhone: "+91 909-671-5022",
      generalLabel: "General enquiries",
      generalEmail: "service@heaptrace.com",
    },
  },
  "generative-ai": {
    title: "Generative AI",
    subtitle:
      "Use practical AI systems to automate workflows and improve decisions.",
    overview:
      "We help teams adopt generative AI in production by identifying high-value use cases, designing safe solution patterns, and integrating models into existing products.",
    capabilities: [
      "Use-case discovery and AI solution architecture",
      "RAG, prompt workflows, and knowledge-grounded assistants",
      "Model integration, guardrails, and evaluation strategy",
      "Operationalization with monitoring and feedback loops",
    ],
    outcomes: [
      "Measurable automation for content and support workflows",
      "Higher-quality, faster decisions with domain context",
    ],
  },
  "web-development": {
    title: "Web Development",
    subtitle:
      "Modern web applications engineered for performance and long-term growth.",
    overview:
      "From architecture to legacy modernization, we deliver robust web platforms that support evolving product requirements and business scale.",
    capabilities: [
      "Frontend and backend architecture for modern web stacks",
      "Re-engineering and legacy migration planning",
      "Feature enhancement and performance optimization",
      "Stabilization, support, and maintainability improvements",
    ],
    outcomes: [
      "Better user experience with improved platform performance",
      "Future-ready codebase with lower change risk",
    ],
  },
  "mobile-development": {
    title: "Mobile Development",
    subtitle:
      "Native and cross-platform apps designed for reliability and delight.",
    overview:
      "We build Android and iOS applications that balance product speed with strong engineering quality and store-ready user experiences.",
    capabilities: [
      "Native and hybrid app development",
      "App architecture and API integration",
      "Mobile UX optimization and accessibility alignment",
      "Release management and app lifecycle support",
    ],
    outcomes: [
      "Faster app rollout with stable production behavior",
      "Higher engagement through intuitive mobile journeys",
    ],
  },
  "big-data-and-ml": {
    title: "Big Data and ML",
    subtitle:
      "Turn large-scale data into insights and predictive capabilities.",
    overview:
      "We design data and ML workflows that help teams uncover patterns, improve forecasting, and operationalize data-driven product decisions.",
    capabilities: [
      "Data processing pipelines and analytics foundations",
      "Machine learning model development and deployment",
      "Feature engineering and experiment workflows",
      "Monitoring for model quality and performance drift",
    ],
    outcomes: [
      "Reliable insights across growing data volumes",
      "Practical ML systems tied to business KPIs",
    ],
  },
  "data-engineering": {
    title: "Data Engineering",
    subtitle:
      "Create dependable data platforms for analytics and intelligence.",
    overview:
      "We build end-to-end data systems with strong governance so organizations can trust their metrics, reporting, and downstream data products.",
    capabilities: [
      "Data lake and warehouse architecture",
      "ETL/ELT design, orchestration, and quality checks",
      "Business intelligence pipeline support",
      "Data governance, lineage, and access controls",
    ],
    outcomes: [
      "Consistent reporting and faster analytics turnaround",
      "Reduced risk through trustworthy and traceable datasets",
    ],
  },
  "testing-services": {
    title: "Testing Services",
    subtitle:
      "Improve product quality through comprehensive test engineering.",
    overview:
      "Our QA teams embed quality across the software lifecycle with a balanced strategy of functional, integration, performance, and regression testing.",
    capabilities: [
      "Test strategy and quality process design",
      "Automated and manual test execution",
      "Performance, API, and compatibility validation",
      "Release gatekeeping and defect analytics",
    ],
    outcomes: [
      "Fewer production defects and more predictable releases",
      "Higher confidence in critical product changes",
    ],
  },
  "devops-services": {
    title: "DevOps Services",
    subtitle:
      "Accelerate delivery using automation, collaboration, and reliability.",
    overview:
      "We implement DevOps practices that connect development and operations, reduce release friction, and strengthen deployment confidence.",
    capabilities: [
      "CI/CD pipeline implementation and optimization",
      "Infrastructure as Code and environment standardization",
      "Monitoring, alerting, and incident readiness",
      "Security integration across delivery workflows",
    ],
    outcomes: [
      "Shorter lead time from code to production",
      "More resilient systems with faster recovery",
    ],
  },
  "ux-design": {
    title: "UX Design",
    subtitle: "Design intuitive digital experiences that improve engagement.",
    overview:
      "We translate business goals into user-centered journeys with thoughtful interaction design, visual systems, and scalable design practices.",
    capabilities: [
      "User research and journey mapping",
      "Information architecture and wireframing",
      "High-fidelity UI design and design system support",
      "Usability validation and iterative improvements",
    ],
    outcomes: [
      "Clearer user journeys and stronger conversion performance",
      "Consistent product experience across platforms",
    ],
  },
};

export function serviceFromSlug(slug: string) {
  return SERVICE_DETAILS[slug];
}
