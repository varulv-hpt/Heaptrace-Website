export type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  author?: string;
  href: string;
};

export const blogCategories = [
  "All",
  "Cloud",
  "Product Management",
  "Generative AI",
  "Data Privacy and Security",
  "DevOps",
  "Health IT",
  "Technology Trends",
  "Healthcare",
  "UX Design",
  "Artificial Intelligence",
  "Entrepreneurship",
  "Marketing",
  "Finance",
] as const;

export const blogPosts: BlogPost[] = [
  {
    title: "Enterprise AI is not about chatbots.",
    excerpt:
      "Enterprise AI is not about chatbots. It is about automation, compliance, and decision intelligence.",
    category: "Artificial Intelligence",
    href: "/blog",
  },
  {
    title: "From 200 Engineers to an AI- First Company",
    excerpt:
      "Most engineering organizations are experimenting with AI, but very few are operationalizing AI.",
    category: "Artificial Intelligence",
    href: "/blog",
  },
  {
    title: "Adding AI Isn’t Transformation",
    excerpt:
      "The companies winning in 2026 are not adding AI features, they are redesigning systems around AI.",
    category: "Artificial Intelligence",
    href: "/blog",
  },
  {
    title: "AI is Replacing 30% of Software Development, But Not Developers",
    excerpt: "AI is eliminating repetitive work and enabling developers to focus on high-leverage output.",
    category: "Artificial Intelligence",
    href: "/blog",
  },
  {
    title: "Branching Strategies Simplified",
    excerpt: "Master the workflow that powers world-class engineering teams with fewer merge conflicts.",
    category: "Technology Trends",
    href: "/blog",
  },
  {
    title: "07 Rules of Design",
    excerpt:
      "Design is not decoration. It is clarity, usability, and impact driven by strong principles.",
    category: "UX Design",
    href: "/blog",
  },
  {
    title: "How DevOps Automation Reduces TTM",
    excerpt:
      "DevOps automation helps SaaS teams release faster with stable deployments and better reliability.",
    category: "DevOps",
    href: "/blog",
  },
  {
    title: "Streamlining EMR/EHR Integrations for Multi-Facility Healthcare Networks",
    excerpt:
      "Integrated EMR/EHR systems improve interoperability, care quality, and operational efficiency.",
    category: "Health IT",
    href: "/blog",
  },
  {
    title: "Building Decision Intelligence Platforms with RAG",
    excerpt: "RAG enables enterprises to convert distributed data into timely and trustworthy decisions.",
    category: "Generative AI",
    href: "/blog",
  },
  {
    title: "The Power of Kubernetes Ingress: Secure, Scalable Traffic Routing Made Simple",
    excerpt:
      "Kubernetes Ingress helps microservices applications route traffic securely and efficiently.",
    category: "DevOps",
    href: "/blog",
  },
  {
    title: "Top Blockchain Trends in FinTech to Watch in 2025",
    excerpt:
      "Explore the blockchain trends accelerating innovation, trust, and speed in financial services.",
    category: "Finance",
    href: "/blog",
  },
  {
    title: "How Healthcare is Using Generative AI in 2025",
    excerpt:
      "Generative AI is reshaping healthcare delivery with meaningful insights and better patient outcomes.",
    category: "Healthcare",
    href: "/blog",
  },
  {
    title: "The Rise of AI-Powered Coding Assistants- Cursor vs Windsurf vs GitHub Copilot",
    excerpt:
      "A comparative view of top AI coding assistants and their impact on developer productivity.",
    category: "Technology Trends",
    href: "/blog",
  },
  {
    title: "Why Flutter Is the Smartest Choice for Your Next Business App in 2025",
    excerpt:
      "Flutter offers cross-platform speed and maintainability for startups and enterprise teams.",
    category: "Technology Trends",
    href: "/blog",
  },
  {
    title: "Django vs Flask vs FastAPI: A Deep Dive into Python Web Frameworks",
    excerpt:
      "A practical comparison of Python backend frameworks for APIs and scalable web applications.",
    category: "Technology Trends",
    href: "/blog",
  },
  {
    title: "React vs Next.js: A Comprehensive Guide for Developers",
    excerpt:
      "Understand where React and Next.js fit best for performance, SEO, and developer experience.",
    category: "Technology Trends",
    href: "/blog",
  },
  {
    title: "Data Engineering: The Backbone of Modern Data-Driven Businesses",
    excerpt:
      "Data engineering enables reliable collection, processing, and analytics for strategic growth.",
    category: "Technology Trends",
    href: "/blog",
  },
  {
    title: "Top UX Tools Every Designer and Developer Should Know in 2025",
    excerpt:
      "Discover modern UX tools that improve collaboration, speed, and interface quality.",
    category: "UX Design",
    href: "/blog",
  },
  {
    title: "Open Source Generative AI Solutions: Revolutionizing Innovation and Accessibility",
    excerpt:
      "Open source generative AI broadens accessibility while accelerating practical innovation.",
    category: "Generative AI",
    href: "/blog",
  },
  {
    title: "SOC 2 Checklist Guide for IT Software in AWS",
    excerpt:
      "A SOC 2 checklist for AWS-focused teams to improve security, availability, and compliance outcomes.",
    category: "Data Privacy and Security",
    href: "/blog",
  },
  {
    title: "How Hybrid Cloud Solutions are Shaping Enterprise IT",
    excerpt: "How hybrid cloud balances on-prem and cloud capabilities for enterprise reliability.",
    category: "Cloud",
    author: "Vijay Singh",
    href: "/blog",
  },
  {
    title: "Serverless Architecture: A New Era in Cloud Computing",
    excerpt: "A deep dive into serverless architecture and why it is changing cloud operating models.",
    category: "Cloud",
    author: "Aditya Jain",
    href: "/blog",
  },
  {
    title: "Building a Product Roadmap: Strategies for Long-Term Success",
    excerpt: "A practical guide to product roadmaps that align teams around durable outcomes.",
    category: "Product Management",
    author: "Neha Sharma",
    href: "/blog",
  },
  {
    title: "How to Prioritize Features for a Successful Product Launch",
    excerpt: "Prioritization frameworks to maximize launch impact while reducing delivery risk.",
    category: "Product Management",
    author: "Vijay Singh",
    href: "/blog",
  },
  {
    title: "How Generative AI is Shaping the Future of Marketing",
    excerpt: "Generative AI is transforming marketing through personalization and faster content cycles.",
    category: "Marketing",
    author: "Neha Sharma",
    href: "/blog",
  },
  {
    title: "Best Practices for Protecting Data in the Cloud",
    excerpt: "Cloud data protection fundamentals for secure, compliant, and scalable infrastructure.",
    category: "Data Privacy and Security",
    author: "Anurag Takhur",
    href: "/blog",
  },
  {
    title: "The Future of Cybersecurity: Trends to Watch in 2024",
    excerpt: "Emerging cybersecurity trends and actionable strategies for modern digital organizations.",
    category: "Data Privacy and Security",
    author: "Aditya Jain",
    href: "/blog",
  },
  {
    title: "How AI is Enhancing Health IT Solutions",
    excerpt: "How AI-powered systems improve health IT workflows, quality, and operational efficiency.",
    category: "Health IT",
    author: "Vijay Singh",
    href: "/blog",
  },
  {
    title: "Monitoring and Logging in DevOps: Why It Matters",
    excerpt: "Monitoring and logging are core DevOps practices for reliability and faster issue resolution.",
    category: "DevOps",
    author: "Sneha Nager",
    href: "/blog",
  },
  {
    title: "The Role of IoT in Shaping Smart Cities",
    excerpt: "IoT is powering real-time, connected, and data-driven urban systems globally.",
    category: "Technology Trends",
    author: "Anurag Takhur",
    href: "/blog",
  },
  {
    title: "How UX Design is Evolving in the Age of AI",
    excerpt: "AI is reshaping user experiences, design systems, and interaction patterns.",
    category: "UX Design",
    author: "Sneha Nager",
    href: "/blog",
  },
];
