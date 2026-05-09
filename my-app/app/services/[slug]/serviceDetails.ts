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
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, we provide comprehensive Cloud Development services designed to help businesses leverage the power of cloud computing to enhance scalability, flexibility, and efficiency. Whether you're looking to move to the cloud, optimize your existing infrastructure, or develop cloud-native applications, our expert team ensures that your cloud solutions are secure, cost-effective, and built for performance. We specialize in designing and building cloud architectures tailored to your business needs, empowering you to innovate faster and scale seamlessly.",
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
          "We offer seamless cloud migration services, helping businesses move their applications, data, and infrastructure to the cloud with minimal disruption. Whether transitioning from on-premise systems or between cloud platforms, we ensure a smooth, secure, and efficient migration process.",
      },
      {
        title: "Cloud-Native Application Development",
        description:
          "Our team specializes in cloud-native application development, leveraging microservices, containers, and serverless architecture to build scalable and resilient applications. We use modern cloud technologies like Docker, Kubernetes, and AWS Lambda to develop apps that perform efficiently in the cloud.",
      },
      {
        title: "Multi-Cloud and Hybrid Cloud Solutions",
        description:
          "We provide multi-cloud and hybrid cloud solutions, allowing businesses to operate across multiple cloud platforms (e.g., AWS, Azure, Google Cloud) or combine on-premise and cloud environments. Our solutions offer the flexibility and redundancy needed to optimize performance and minimize risks.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Our Infrastructure as Code (IaC) services automate the provisioning and management of your cloud infrastructure. Using tools like Terraform, AWS CloudFormation, and Ansible, we ensure your cloud environment is scalable, consistent, and easy to manage.",
      },
      {
        title: "Cloud Security and Compliance",
        description:
          "Security is a top priority in our cloud solutions. We implement robust cloud security measures, including encryption, identity management, and monitoring, to safeguard your data and applications. Our team also ensures compliance with industry standards such as GDPR, HIPAA, SOC 2, and ISO 27001.",
      },
      {
        title: "DevOps and CI/CD Automation",
        description:
          "We integrate DevOps practices into cloud development by automating continuous integration and delivery (CI/CD) pipelines. Our DevOps services help you streamline deployments, monitor performance, and ensure faster time to market while maintaining high-quality standards.",
      },
      {
        title: "Cloud Optimization and Cost Management",
        description:
          "We help businesses optimize their cloud infrastructure to reduce costs and improve efficiency. Our cloud cost management services identify areas for cost savings, resource optimization, and performance improvements, ensuring you get the most out of your cloud investment.",
      },
      {
        title: "Disaster Recovery and Backup Solutions",
        description:
          "Our cloud-based disaster recovery and backup solutions ensure that your critical data and applications are protected in the event of a disaster. We design and implement failover strategies and backup systems that ensure business continuity and minimize downtime.",
      },
    ],
    processSteps: [
      {
        title: "Cloud Strategy and Planning",
        description:
          "We begin by understanding your business needs, current infrastructure, and future growth plans. Our team develops a custom cloud strategy tailored to your unique requirements, helping you choose the right cloud platforms and services.",
      },
      {
        title: "Cloud Architecture Design",
        description:
          "Once the strategy is in place, we design the cloud architecture that best fits your needs, whether it's a public, private, or hybrid cloud environment. Our architecture is built for scalability, performance, and security, ensuring your cloud infrastructure can grow with your business.",
      },
      {
        title: "Cloud Implementation and Development",
        description:
          "We integrate robust cloud security measures to protect your applications and data. From encryption to access control, we ensure your cloud infrastructure is secure and compliant with industry regulations.",
      },
      {
        title: "Security and Compliance Integration",
        description:
          "We integrate robust cloud security measures to protect your applications and data. From encryption to access control, we ensure your cloud infrastructure is secure and compliant with industry regulations.",
      },
      {
        title: "Testing and Optimization",
        description:
          "We rigorously test your cloud environment and applications for performance, scalability, and security. Our team continuously optimizes your cloud infrastructure to ensure it runs efficiently and cost-effectively.",
      },
      {
        title: "Ongoing Support and Improvement",
        description:
          "After deployment, we provide ongoing support and monitoring to ensure your cloud infrastructure continues to perform at its best. We offer regular updates, performance monitoring, and troubleshooting to keep your systems running smoothly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Tailored Cloud Solutions",
        description:
          "At HeapTrace, we don't believe in one-size-fits-all. We create custom cloud solutions designed to meet the specific needs of your business, whether you're a startup or an enterprise.",
      },
      {
        title: "Cloud Expertise Across Platforms",
        description:
          "We work with leading cloud platforms, including AWS, Google Cloud, and Microsoft Azure, ensuring you have access to the latest technologies and best practices.",
      },
      {
        title: "Scalability and Flexibility",
        description:
          "Our cloud solutions are built for scalability, allowing your business to grow without limitations. Whether you need to scale up quickly or manage fluctuating demands, we design solutions that adapt to your needs.",
      },
      {
        title: "Cost-Efficient Solutions",
        description:
          "We focus on cost optimization, ensuring your cloud infrastructure delivers value without unnecessary overhead. Our cost management services help you reduce expenses and maximize cloud efficiency.",
      },
      {
        title: "Security and Compliance Focus",
        description:
          "Security is embedded in every solution we develop. We ensure that your cloud environment is fully secure and compliant with industry regulations, protecting your data and maintaining trust.",
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
        "Whether you're migrating to the cloud, optimizing your current infrastructure, or developing cloud-native applications, HeapTrace Technology is here to help. Our cloud development services ensure your business is always secure, scalable, and ready for growth.",
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
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, our Generative AI services empower businesses to harness the power of artificial intelligence to automate processes, enhance creativity, and drive meaningful insights. Whether you're looking to automate content generation, optimize customer interactions, or build AI-driven applications, we provide custom solutions that integrate seamlessly into your operations.",
    capabilities: [
      "Automate repetitive tasks",
      "Generate high-quality content and media",
      "Build intelligent, data-driven applications",
      "Enhance decision-making through AI-powered insights",
      "Improve customer experiences through advanced conversational AI",
    ],
    outcomes: [
      "Faster delivery and stronger consistency across content and workflows",
      "More reliable decisions with AI-driven enterprise insights",
    ],
  },
  "web-development": {
    title: "Web Development",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "We specialize in delivering top-tier web development services that meet the unique needs of businesses across industries. Our web solutions are designed to be scalable, secure, and user-friendly, helping you build a strong online presence that drives engagement and growth. Whether you're looking to develop a simple website or a complex web application, our team of expert developers will bring your vision to life with cutting-edge technologies and best practices.",
    capabilities: [
      "Custom web applications aligned to business goals",
      "Responsive and user-centric experience design",
      "Scalable frontend and backend architecture",
      "E-commerce, CMS, API, and platform integrations",
      "Ongoing maintenance and long-term optimization",
    ],
    outcomes: [
      "Scalable and secure web platforms ready for growth",
      "Higher engagement and conversion through better UX",
    ],
    detailedServices: [
      {
        title: "Custom Web Development",
        description:
          "We offer fully customized web development solutions tailored to your business needs. Our team creates dynamic, feature-rich websites that are designed to engage users and convert visitors into customers. Whether you need a corporate website, e-commerce platform, or custom web application, we provide solutions that deliver seamless performance and user experience.",
      },
      {
        title: "E-commerce Web Development",
        description:
          "Our e-commerce web development services help businesses create secure, scalable, and intuitive online stores. We design and develop e-commerce websites with easy navigation, fast loading times, and integrated payment gateways. Our solutions are built to maximize sales, enhance user experiences, and simplify the management of your online store.",
      },
      {
        title: "CMS Development",
        description:
          "We provide content management system (CMS) development services that empower businesses to manage their website content effortlessly. Whether you need a CMS based on WordPress, Drupal, Joomla, or a custom solution, we help you streamline content management, simplify updates, and improve website functionality.",
      },
      {
        title: "Responsive Web Design",
        description:
          "We ensure that every website we build is fully responsive, providing an optimal viewing experience across devices, including desktops, tablets, and smartphones. Our responsive web design services ensure that your website adapts to various screen sizes, offering seamless navigation and usability on any device.",
      },
      {
        title: "Web Application Development",
        description:
          "We develop powerful, scalable web applications that can handle complex business operations and provide exceptional user experiences. Our team specializes in building web-based apps that are secure, fast, and easy to integrate with other systems, ensuring smooth workflows and enhanced functionality.",
      },
      {
        title: "Front-End Development",
        description:
          "Our front-end development services focus on creating visually stunning, interactive, and user-friendly interfaces. Using the latest technologies like React.js, Angular, Vue.js, and HTML5/CSS3, we deliver fast, responsive, and accessible front-end solutions that delight users and enhance engagement.",
      },
      {
        title: "Back-End Development",
        description:
          "We build robust and scalable back-end systems that support your website or web application. Our back-end development services include database management, API integrations, and server-side logic, ensuring that your web solution is fast, secure, and capable of handling high traffic and complex operations.",
      },
      {
        title: "Progressive Web Apps (PWA) Development",
        description:
          "We develop progressive web apps (PWAs) that combine the best features of mobile apps and websites. PWAs provide an app-like experience on the web, offering offline access, push notifications, and improved performance. With our PWA development services, you can deliver a fast, engaging, and reliable user experience.",
      },
      {
        title: "API Integration",
        description:
          "We provide seamless API integration services to enhance your website or web application with third-party tools and services. Whether it's payment gateways, social media integrations, or business tools, our team ensures that your web solution connects with external platforms smoothly and securely.",
      },
      {
        title: "Website Maintenance and Support",
        description:
          "Our services don't end with development. We offer ongoing website maintenance and support to keep your site running smoothly. From regular updates to performance monitoring and bug fixes, we ensure your website stays secure, optimized, and up-to-date.",
      },
    ],
    processSteps: [
      {
        title: "Discovery and Planning",
        description:
          "We start by understanding your business goals, target audience, and specific project requirements. Through a collaborative discovery phase, we work with you to define the project's scope, goals, and key features. Our team provides recommendations on technologies and frameworks best suited to your needs.",
      },
      {
        title: "Design and Prototyping",
        description:
          "In the design phase, we focus on creating user-centric, visually appealing designs that align with your brand. Our design team develops wireframes and interactive prototypes to visualize the user experience and site architecture. We ensure the design is intuitive, responsive, and built to engage your audience.",
      },
      {
        title: "Development",
        description:
          "Once the design is finalized, our development team takes over. Using the latest technologies, we bring your website or web application to life. We follow an agile development process, which allows for flexibility, iterative improvements, and regular feedback to ensure the final product meets your expectations.",
      },
      {
        title: "Testing and Quality Assurance",
        description:
          "Before launching, we conduct comprehensive testing to ensure your website or application functions flawlessly across all browsers and devices. Our quality assurance process includes functional testing, performance testing, security assessments, and user acceptance testing to ensure everything works as intended.",
      },
      {
        title: "Launch and Deployment",
        description:
          "After testing and final approval, we deploy your website or web application to the live environment. Our team ensures a smooth and secure launch, handling everything from server configuration to domain setup, ensuring minimal downtime.",
      },
      {
        title: "Ongoing Support and Optimization",
        description:
          "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your site remains up-to-date, secure, and optimized for performance. We also offer continuous improvements and feature enhancements based on your evolving business needs.",
      },
    ],
    whyChooseUs: [
      {
        title: "Tailored Solutions",
        description:
          "At HeapTrace, we understand that every business is unique. Our web development services are fully customized to meet the specific needs of your industry, ensuring your website aligns with your goals and audience.",
      },
      {
        title: "Scalable and Secure",
        description:
          "We build web solutions that are designed for growth. Whether you're a startup or an enterprise, our websites and web applications are built to scale with your business, providing security, reliability, and long-term performance.",
      },
      {
        title: "Latest Technologies",
        description:
          "Our developers stay ahead of the curve by leveraging the latest web technologies and frameworks, including React.js, Node.js, Laravel, Python Django, and more. We ensure your web solution is future-proof and meets modern standards.",
      },
      {
        title: "Responsive and User-Centric Design",
        description:
          "We prioritize the user experience, delivering responsive, intuitive, and visually appealing websites that work flawlessly on all devices. Our goal is to create user-centric designs that engage visitors and drive conversions.",
      },
      {
        title: "End-to-End Development",
        description:
          "From initial consultation and strategy to design, development, testing, and launch, we provide comprehensive web development services that cover every stage of the project lifecycle. Our team works closely with you to deliver solutions on time and within budget.",
      },
      {
        title: "Proven Track Record",
        description:
          "With years of experience and a portfolio of successful projects, HeapTrace Technology has a proven track record of delivering high-quality web solutions across industries. We take pride in our commitment to excellence and customer satisfaction.",
      },
    ],
  },
  "mobile-development": {
    title: "Mobile Development",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, we offer mobile app development services that deliver high-quality, user-friendly, and scalable mobile applications for iOS, Android, and cross-platform environments. Whether you need a consumer app, a robust enterprise mobile solution, or a hybrid app that works seamlessly across devices, our expert developers create mobile apps that drive engagement and provide exceptional user experiences.",
    capabilities: [
      "iOS, Android, and cross-platform development",
      "Native and hybrid architecture choices",
      "UI/UX, QA, and store deployment support",
      "Third-party integrations and maintenance",
    ],
    outcomes: [
      "High-quality apps with better user engagement",
      "Scalable mobile products aligned to business growth",
    ],
    detailedServices: [
      {
        title: "iOS App Development",
        description:
          "We develop custom iOS applications that are optimized for Apple devices, ensuring a seamless experience for iPhone, iPad, and Apple Watch users. Our team follows the latest guidelines from Apple's Human Interface Design and leverages technologies like Swift and Objective-C to create apps that are intuitive, secure, and high-performing.",
      },
      {
        title: "Android App Development",
        description:
          "Our Android app development services deliver feature-rich, responsive, and scalable apps for the world's most widely used mobile platform. Using Kotlin and Java, we build Android applications that provide smooth performance across different devices and screen sizes, ensuring a consistent and engaging user experience.",
      },
      {
        title: "Cross-Platform App Development",
        description:
          "We create high-performance cross-platform apps that run seamlessly on both iOS and Android using technologies like React Native, Flutter, and Xamarin. Cross-platform development helps reduce development time and costs while delivering native-like performance and functionality on both platforms.",
      },
      {
        title: "Native App Development",
        description:
          "For businesses looking for native mobile apps, we provide custom solutions optimized for the specific platform, whether it's iOS or Android. Our native apps leverage the full potential of each platform, ensuring top performance, smooth user interactions, and access to the latest hardware features.",
      },
      {
        title: "Hybrid App Development",
        description:
          "Our hybrid app development services combine the best of both web and mobile apps. We develop hybrid applications using frameworks like Ionic and Cordova that deliver native-like experiences while being faster and more cost-effective to develop. Hybrid apps allow you to reach a broader audience with one codebase.",
      },
      {
        title: "UI/UX Design for Mobile Apps",
        description:
          "We prioritize user experience by designing visually stunning and intuitive UI/UX for mobile apps. Our design team works closely with you to create mobile interfaces that are not only aesthetically pleasing but also easy to navigate, keeping the user at the center of the design process.",
      },
      {
        title: "App Testing and Quality Assurance",
        description:
          "We provide comprehensive app testing and quality assurance services to ensure that your mobile application works seamlessly across devices and platforms. Our testing includes performance, security, usability, and compatibility testing, ensuring your app delivers a flawless experience from launch.",
      },
      {
        title: "Mobile App Maintenance and Support",
        description:
          "Our services extend beyond development. We provide ongoing maintenance and support to ensure your app remains up-to-date, secure, and optimized for performance. From bug fixes to feature enhancements, we ensure your app evolves with your business needs.",
      },
      {
        title: "Mobile App Integrations",
        description:
          "We offer mobile app integration services to connect your app with third-party services, APIs, and backend systems, ensuring seamless data synchronization and enhancing functionality. Whether it's payment gateway integration, social media logins, or CRM systems, we ensure smooth connectivity across platforms.",
      },
    ],
    processSteps: [
      {
        title: "Discovery and Ideation",
        description:
          "We begin with a thorough understanding of your business goals, app objectives, and user needs. Through workshops and discussions, we define the app's scope, key features, and the best approach for its development. Our team also recommends the most suitable technology stack for your project.",
      },
      {
        title: "UI/UX Design and Prototyping",
        description:
          "Once the strategy is set, our design team creates engaging UI/UX designs that reflect your brand and resonate with your users. We develop wireframes and interactive prototypes, allowing you to visualize the app's structure and functionality before moving on to development.",
      },
      {
        title: "Agile Development Process",
        description:
          "Our development process follows an agile methodology, allowing for iterative progress, continuous feedback, and flexibility to accommodate changes. Whether it's native or cross-platform, we write clean, efficient code that meets your app's requirements while ensuring high performance and scalability.",
      },
      {
        title: "Quality Assurance and Testing",
        description:
          "Before launching, we rigorously test the app for functionality, performance, and security across different devices and platforms. We ensure the app is free from bugs, compatible across devices, and delivers a seamless user experience.",
      },
      {
        title: "Deployment and Launch",
        description:
          "Once the app has passed all testing and quality checks, we handle the deployment process to Google Play Store, Apple App Store, or any other platform of your choice. We ensure that your app meets all the necessary guidelines and is launched successfully.",
      },
      {
        title: "Post-Launch Support and Maintenance",
        description:
          "After launch, we continue to provide support for bug fixes, performance monitoring, and feature enhancements. We also offer ongoing maintenance services to ensure your app remains optimized and aligned with your evolving business goals.",
      },
    ],
    whyChooseUs: [
      {
        title: "User-Centric Approach",
        description:
          "At HeapTrace, we build mobile apps that are not only functional but also centered around the user. Our design and development processes ensure that your app provides an engaging, intuitive, and seamless experience for your users.",
      },
      {
        title: "Expertise Across Platforms",
        description:
          "We offer expertise in both iOS and Android development, as well as cross-platform solutions. Our team is proficient in the latest technologies and frameworks, ensuring your app is built to the highest standards and future-proofed for upcoming updates.",
      },
      {
        title: "Performance and Scalability",
        description:
          "We build mobile apps that are optimized for performance, ensuring fast load times and smooth user interactions. Our solutions are designed to scale as your business grows, ensuring that your app can handle increased traffic and feature expansions.",
      },
      {
        title: "End-to-End Solutions",
        description:
          "From concept and design to development, testing, and post-launch support, we provide end-to-end mobile app development services. Our team works closely with you at every step to ensure that the final product aligns with your vision and goals.",
      },
      {
        title: "Agile and Transparent Process",
        description:
          "We follow an agile development process, which allows for flexibility, iterative improvements, and continuous feedback. Our transparent communication ensures you stay informed of progress at all stages of the project.",
      },
    ],
    technologies: [
      { category: "iOS", tools: "Swift, Objective-C" },
      { category: "Android", tools: "Kotlin, Java" },
      { category: "Cross-Platform", tools: "React Native, Flutter, Xamarin" },
      { category: "Hybrid App Frameworks", tools: "Ionic, Cordova" },
      { category: "Backend", tools: "Node.js, Firebase, Django" },
      { category: "Databases", tools: "MongoDB, MySQL, PostgreSQL" },
    ],
    closingCta: {
      title: "Transform Your Mobile Presence with HeapTrace Technology",
      description:
        "Whether you're looking to build a new mobile app or enhance an existing one, HeapTrace Technology is here to help. Our team of expert developers and designers will work with you to create powerful mobile experiences that engage users and drive results.",
      secondaryDescription:
        "Contact us today to learn more about our mobile app development services and how we can help your business succeed in the mobile world.",
    },
  },
  "big-data-and-ml": {
    title: "Big Data and ML",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, we specialize in delivering advanced Big Data and Machine Learning (ML) solutions that help businesses harness the power of data to drive innovation, improve decision-making, and gain a competitive edge. By leveraging big data analytics, machine learning algorithms, and cutting-edge technologies, we empower organizations to transform raw data into actionable insights. Whether you need predictive analytics, data visualization, or AI-driven automation, our Big Data and ML services are designed to meet your unique business needs.",
    capabilities: [
      "Big data analytics and machine learning strategy",
      "Data engineering pipelines and architecture",
      "Predictive analytics and NLP solutions",
      "Model deployment, governance, and compliance",
    ],
    outcomes: [
      "Actionable business insights from large datasets",
      "Scalable AI and ML systems aligned to growth goals",
    ],
    detailedServices: [
      {
        title: "Big Data Analytics",
        description:
          "Our Big Data analytics solutions help businesses collect, process, and analyze large volumes of structured and unstructured data. Using powerful tools like Hadoop, Apache Spark, and NoSQL databases, we provide real-time insights that enable data-driven decision-making and uncover hidden opportunities in your data.",
      },
      {
        title: "Data Engineering",
        description:
          "We offer comprehensive data engineering services to help you build scalable data pipelines and architectures that support data collection, storage, and analysis. Our team designs data infrastructure that ensures data accuracy, accessibility, and security, enabling you to efficiently manage and leverage your data.",
      },
      {
        title: "Machine Learning Solutions",
        description:
          "We develop and deploy machine learning models that help businesses automate tasks, predict trends, and optimize operations. From supervised and unsupervised learning to deep learning and reinforcement learning, our ML solutions are tailored to your business needs, providing intelligent insights that drive growth and efficiency.",
      },
      {
        title: "AI-Powered Predictive Analytics",
        description:
          "Our predictive analytics services leverage AI and ML algorithms to analyze historical data and predict future outcomes. Whether you need to forecast sales, identify market trends, or predict customer behavior, our solutions enable you to make proactive decisions that enhance business performance.",
      },
      {
        title: "Natural Language Processing (NLP)",
        description:
          "Our NLP solutions help businesses process and analyze vast amounts of text data to extract insights, understand customer sentiment, and automate language-based tasks. From chatbots to sentiment analysis and automated text classification, our NLP services transform the way businesses interact with language data.",
      },
      {
        title: "Data Visualization and Reporting",
        description:
          "We provide data visualization services that help businesses make sense of complex data through interactive dashboards and real-time reporting. By presenting data in intuitive and easy-to-understand visuals, we enable decision-makers to gain insights quickly and effectively.",
      },
      {
        title: "Big Data Infrastructure and Cloud Integration",
        description:
          "Our team builds robust Big Data infrastructure and integrates it with cloud platforms like AWS, Google Cloud, and Microsoft Azure. By leveraging cloud computing, we ensure scalability, flexibility, and cost-efficiency in managing and processing large datasets.",
      },
      {
        title: "AI and ML Model Deployment",
        description:
          "We provide end-to-end services for AI and ML model deployment, ensuring your models are effectively integrated into production environments. Our deployment process ensures scalability, security, and real-time performance, allowing you to gain value from your AI investments.",
      },
      {
        title: "Data Governance and Compliance",
        description:
          "We help businesses implement robust data governance practices to ensure the security, privacy, and compliance of their data assets. Whether you need to comply with regulations like GDPR, HIPAA, or CCPA, our solutions ensure your data is managed ethically and legally.",
      },
    ],
    processSteps: [
      {
        title: "Data Discovery and Strategy",
        description:
          "We begin by understanding your business goals and identifying the data sources and use cases that are most valuable to you. Our team works closely with you to develop a data strategy that aligns with your objectives, ensuring that your data initiatives are focused and impactful.",
      },
      {
        title: "Data Collection and Preparation",
        description:
          "Our data engineers design and implement data pipelines to collect, clean, and prepare your data for analysis. Whether you're dealing with structured, unstructured, or semi-structured data, we ensure your data is ready for modeling and analytics.",
      },
      {
        title: "Model Development and Training",
        description:
          "Our machine learning experts build and train custom models based on your specific use cases. We use cutting-edge algorithms and frameworks to develop predictive models, recommendation systems, and classification algorithms that provide valuable insights and automation.",
      },
      {
        title: "Data Analysis and Visualization",
        description:
          "Once the models are developed, we analyze the data and present the results through interactive dashboards and reports. Our data visualization tools help you understand key metrics, trends, and patterns, enabling you to make data-driven decisions with confidence.",
      },
      {
        title: "Model Deployment and Integration",
        description:
          "After testing and validating the models, we deploy them into your production environment. Our team ensures seamless integration with your existing systems, whether on-premises or in the cloud, providing real-time insights and automation.",
      },
      {
        title: "Continuous Improvement and Optimization",
        description:
          "Data and machine learning models need to evolve as your business grows. We provide ongoing support, monitoring, and optimization services to ensure your models continue to perform effectively, adapting to new data and changing business needs.",
      },
    ],
    whyChooseUs: [
      {
        title: "Tailored Solutions",
        description:
          "We understand that every business is different, which is why we offer fully customized Big Data and Machine Learning solutions. Our services are designed to meet the unique needs of your organization, ensuring you get maximum value from your data.",
      },
      {
        title: "Cutting-Edge Technologies",
        description:
          "Our team is skilled in the latest tools and technologies, including Python, R, TensorFlow, PyTorch, Hadoop, Spark, and more. We ensure your solutions are built using the most advanced and reliable technologies available.",
      },
      {
        title: "Data Security and Compliance",
        description:
          "We prioritize data security and privacy, ensuring your Big Data and ML solutions comply with relevant regulations and industry standards. From encryption to access controls, we implement best practices for safeguarding your data assets.",
      },
      {
        title: "Scalable and Flexible Infrastructure",
        description:
          "Our Big Data solutions are designed to scale with your business. Whether you're dealing with terabytes or petabytes of data, we provide scalable architectures and cloud solutions that allow your business to grow without limits.",
      },
      {
        title: "Proven Expertise",
        description:
          "With years of experience and a track record of successful Big Data and Machine Learning projects, HeapTrace Technology is your trusted partner for driving innovation and growth through data.",
      },
    ],
    technologies: [
      { category: "Big Data Tools", tools: "Hadoop, Apache Spark, Kafka, Flink" },
      { category: "Cloud Platforms", tools: "AWS, Google Cloud, Microsoft Azure" },
      { category: "Machine Learning Frameworks", tools: "TensorFlow, PyTorch, Scikit-learn, Keras" },
      { category: "Programming Languages", tools: "Python, R, Scala, Java" },
      { category: "Databases", tools: "NoSQL (MongoDB, Cassandra), SQL (MySQL, PostgreSQL)" },
    ],
    closingCta: {
      title: "Transform Your Data into Actionable Insights with HeapTrace Technology",
      description:
        "Whether you're looking to implement Big Data analytics or deploy advanced machine learning models, HeapTrace Technology is here to help. Our team of data scientists, engineers, and AI experts will work with you to unlock the full potential of your data and drive meaningful outcomes for your business.",
      secondaryDescription:
        "Contact us today to learn more about our Big Data and Machine Learning services and how we can help your business thrive in the data-driven world.",
    },
  },
  "data-engineering": {
    title: "Data Engineering",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, we provide comprehensive Data Engineering services designed to help businesses harness the full potential of their data. From collecting and storing data to building scalable pipelines and integrating advanced analytics, we ensure your data infrastructure is optimized for performance, security, and efficiency. Our team of expert data engineers helps you transform raw data into valuable assets that drive business growth and innovation.",
    capabilities: [
      "Data pipelines, warehousing, and lake architecture",
      "Real-time and batch processing foundations",
      "Cloud and big data engineering at scale",
      "Data governance, security, and quality workflows",
    ],
    outcomes: [
      "Reliable, scalable data infrastructure for growth",
      "Higher-quality insights from trusted data assets",
    ],
    detailedServices: [
      {
        title: "Data Pipeline Development",
        description:
          "We design and implement efficient data pipelines that handle the extraction, transformation, and loading (ETL) of data from various sources. Our data pipelines ensure real-time data flow, enabling your business to collect, process, and analyze data seamlessly across multiple platforms and environments.",
      },
      {
        title: "Data Warehousing",
        description:
          "Our data warehousing solutions help businesses centralize their data for better access and analysis. We build scalable and secure data warehouses, integrating data from multiple sources into a single repository for faster query performance and enhanced reporting.",
      },
      {
        title: "Data Lake Architecture",
        description:
          "We provide modern data lake architecture solutions that store massive volumes of structured, unstructured, and semi-structured data in a cost-effective and scalable environment. This ensures long-term access for analytics, machine learning, and business intelligence.",
      },
      {
        title: "Real-Time Data Processing",
        description:
          "Our team specializes in real-time data processing solutions using technologies like Apache Kafka and Apache Flink. We help businesses analyze data as it's generated to enable real-time decision-making and proactive business actions.",
      },
      {
        title: "Cloud Data Engineering",
        description:
          "We offer cloud-based data engineering services, leveraging platforms like AWS, Google Cloud, and Microsoft Azure to build scalable, cost-effective, and secure data environments.",
      },
      {
        title: "Big Data Engineering",
        description:
          "We help businesses manage and process big data by designing scalable solutions using technologies such as Hadoop, Apache Spark, and NoSQL databases.",
      },
      {
        title: "Data Integration",
        description:
          "Our data integration services help businesses unify data from multiple sources, ensuring seamless access and usability across cloud, on-premise, and hybrid infrastructures.",
      },
      {
        title: "Data Governance and Security",
        description:
          "We implement robust data governance practices to ensure the integrity, security, and compliance of your data through encryption, role-based access control, and regulatory alignment.",
      },
      {
        title: "Data Quality Management",
        description:
          "Our data quality management services ensure that your data is accurate, consistent, and reliable. We implement automated validation, error detection, and correction processes.",
      },
    ],
    processSteps: [
      {
        title: "Data Strategy and Architecture Design",
        description:
          "We begin by understanding your business goals and assessing your existing data infrastructure. Our team designs a data architecture aligned with your objectives, whether it's a data warehouse, data lake, or real-time pipeline.",
      },
      {
        title: "Data Collection and Integration",
        description:
          "We collect and integrate data from databases, cloud platforms, APIs, and third-party applications. Our engineers consolidate your data into an accessible platform for analysis and reporting.",
      },
      {
        title: "Data Pipeline Development",
        description:
          "We design and implement ETL pipelines that extract, transform, and load data into analytics platforms with scalability and performance in mind.",
      },
      {
        title: "Real-Time and Batch Processing",
        description:
          "Whether you need instant insights or periodic analysis, we build processing systems using tools like Apache Kafka, Flink, and Hadoop to meet your needs.",
      },
      {
        title: "Data Governance and Security Implementation",
        description:
          "We implement robust governance frameworks including encryption, access controls, and audit trails to ensure secure, compliant data operations.",
      },
      {
        title: "Continuous Monitoring and Optimization",
        description:
          "We provide ongoing support to optimize pipelines, resolve bottlenecks, and ensure your systems scale effectively with growing business demands.",
      },
    ],
    whyChooseUs: [
      {
        title: "Expertise Across Data Platforms",
        description:
          "We work with a wide range of data platforms and technologies, including Hadoop, Spark, Kafka, AWS, Google Cloud, and more.",
      },
      {
        title: "Scalable Solutions",
        description:
          "Our data engineering solutions are designed to scale with your business, handling increasing data volumes and complexity without compromising performance.",
      },
      {
        title: "Data Security and Compliance",
        description:
          "We prioritize data security in every project and ensure compliance with industry regulations and standards.",
      },
      {
        title: "End-to-End Data Engineering Services",
        description:
          "From strategy and design to implementation, integration, and ongoing support, we provide complete data engineering services.",
      },
      {
        title: "Data-Driven Business Outcomes",
        description:
          "We help you unlock the full value of your data by building systems that deliver actionable insights and smarter business decisions.",
      },
    ],
    technologies: [
      { category: "Big Data Tools", tools: "Hadoop, Apache Spark, Apache Flink, Kafka" },
      { category: "Cloud Platforms", tools: "AWS, Google Cloud, Microsoft Azure" },
      { category: "Databases", tools: "MongoDB, Cassandra, PostgreSQL, MySQL" },
      { category: "ETL Tools", tools: "Apache NiFi, Talend, Airflow" },
      { category: "Data Warehousing", tools: "Snowflake, Redshift, Google BigQuery" },
      { category: "Security", tools: "Data encryption, access control, GDPR, HIPAA, CCPA compliance" },
    ],
    closingCta: {
      title: "Unlock the Power of Your Data with HeapTrace Technology",
      description:
        "Ready to build a scalable, secure, and efficient data infrastructure? HeapTrace Technology is here to help. Our team of expert data engineers will work with you to design and implement data solutions that drive your business forward.",
      secondaryDescription:
        "Contact us today to learn more about our Data Engineering services and how we can help you transform your data into a competitive advantage.",
    },
  },
  "testing-services": {
    title: "Testing Services",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, we offer comprehensive Test Engineering services designed to ensure the quality, functionality, and reliability of your software products. With a focus on both manual and automated testing, we help businesses deliver robust applications that meet performance standards and exceed customer expectations. From functional testing to performance validation and compliance assurance, our test engineering services provide end-to-end quality assurance for your entire software lifecycle.",
    capabilities: [
      "Manual and automated validation across platforms",
      "Performance, security, and compliance testing",
      "API, regression, usability, and mobile testing",
      "CI/CD-aligned quality engineering delivery",
    ],
    outcomes: [
      "Higher release confidence with lower defect risk",
      "Faster delivery through continuous quality workflows",
    ],
    detailedServices: [
      {
        title: "Manual Testing",
        description:
          "Our manual testing services validate functionality through real-world scenarios and human-centric evaluations across devices, browsers, and operating systems.",
      },
      {
        title: "Automated Testing",
        description:
          "We implement automated testing strategies using tools like Selenium, JUnit, and Cypress to accelerate execution and improve accuracy.",
      },
      {
        title: "Performance Testing",
        description:
          "Our performance testing services validate application behavior under varying load conditions to identify bottlenecks and assess scalability.",
      },
      {
        title: "Security Testing",
        description:
          "We conduct penetration testing, vulnerability assessments, and threat modeling to ensure your software is secure and compliant.",
      },
      {
        title: "Mobile App Testing",
        description:
          "We test iOS and Android applications for functionality, usability, compatibility, and security across devices and operating systems.",
      },
      {
        title: "Regression Testing",
        description:
          "Our regression testing ensures new features and updates do not introduce defects or impact existing functionality.",
      },
      {
        title: "API Testing",
        description:
          "We validate API performance, security, and functionality to ensure back-end components are integrated and operating correctly.",
      },
      {
        title: "Usability Testing",
        description:
          "Our usability testing evaluates user interface quality and overall experience to identify friction points and improve usability.",
      },
      {
        title: "Compliance Testing",
        description:
          "We help ensure software compliance with standards such as HIPAA, GDPR, ISO 9001, and SOC 2.",
      },
    ],
    processSteps: [
      {
        title: "Test Strategy and Planning",
        description:
          "We begin by understanding business objectives and defining a comprehensive strategy that targets key functionality, risk areas, and critical paths.",
      },
      {
        title: "Test Case Development",
        description:
          "Our engineers design detailed manual and automated test cases that replicate both normal usage and edge-case scenarios.",
      },
      {
        title: "Test Execution",
        description:
          "Using modern tools and methodologies, we execute functional, performance, security, and usability tests across environments.",
      },
      {
        title: "Continuous Testing and Integration",
        description:
          "We integrate testing into your CI/CD pipeline to identify issues early, reduce bug-fix costs, and accelerate release cycles.",
      },
      {
        title: "Defect Reporting and Resolution",
        description:
          "We provide detailed defect reports with severity and reproducible steps, enabling fast and effective issue resolution.",
      },
      {
        title: "Post-Release Testing",
        description:
          "After go-live, we continue testing updates and patches in real-world environments to preserve product quality.",
      },
    ],
    whyChooseUs: [
      {
        title: "Comprehensive Test Coverage",
        description:
          "Our test engineering services cover functionality, performance, security, usability, and compliance across the full product lifecycle.",
      },
      {
        title: "Manual and Automated Testing Expertise",
        description:
          "We provide a balanced mix of manual and automated testing using the latest tools for speed, precision, and reliability.",
      },
      {
        title: "Quality and Speed",
        description:
          "Our agile testing approach and continuous integration help detect bugs early while maintaining delivery velocity.",
      },
      {
        title: "Security and Compliance Focus",
        description:
          "Security and compliance are core to our quality process, ensuring software meets data protection and regulatory expectations.",
      },
      {
        title: "End-to-End Test Engineering Services",
        description:
          "From planning and execution to post-launch validation, we deliver complete quality engineering support.",
      },
    ],
    technologies: [
      { category: "Automation Tools", tools: "Selenium, JUnit, TestNG, Cypress" },
      { category: "Performance Testing", tools: "Apache JMeter, LoadRunner, Gatling" },
      { category: "Mobile Testing", tools: "Appium, Espresso, XCUITest" },
      { category: "Security Testing", tools: "OWASP ZAP, Burp Suite, Metasploit" },
      { category: "CI/CD Integration", tools: "Jenkins, GitLab CI, CircleCI" },
      { category: "API Testing", tools: "Postman, SoapUI, RestAssured" },
    ],
    closingCta: {
      title: "Deliver High-Quality Software with HeapTrace Technology",
      description:
        "Whether you're launching a new application or updating an existing one, HeapTrace Technology is here to ensure your software delivers a reliable and high-quality experience to your users.",
      secondaryDescription:
        "Contact us today to learn more about our Test Engineering services and how we can help you achieve flawless software performance.",
    },
  },
  "devops-services": {
    title: "DevOps Services",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, we offer comprehensive DevOps solutions designed to streamline your software development and delivery processes. Our DevOps services focus on fostering a culture of collaboration between development and operations teams, ensuring faster, more reliable, and scalable software releases. By leveraging automation, continuous integration, and continuous deployment (CI/CD), we help businesses achieve operational excellence, enhance productivity, and reduce time to market.",
    capabilities: [
      "CI/CD and release automation",
      "Cloud, container, and infrastructure orchestration",
      "Testing, monitoring, and security automation",
      "Consulting and end-to-end DevOps enablement",
    ],
    outcomes: [
      "Faster delivery with reduced operational friction",
      "Scalable and secure software delivery pipelines",
    ],
    detailedServices: [
      {
        title: "CI/CD Pipeline Automation",
        description:
          "We implement continuous integration and continuous delivery pipelines that automate the lifecycle from code integration and testing to deployment.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Our IaC services help businesses manage and provision infrastructure through code using Terraform, CloudFormation, and Ansible.",
      },
      {
        title: "Cloud DevOps",
        description:
          "We optimize infrastructure on AWS, Google Cloud, and Microsoft Azure for scalability, resilience, and performance.",
      },
      {
        title: "Containerization and Orchestration",
        description:
          "We help businesses adopt Docker and Kubernetes to improve portability, flexibility, and runtime consistency across environments.",
      },
      {
        title: "Automated Testing and Monitoring",
        description:
          "Our DevOps solutions integrate automated testing and robust monitoring/logging with tools like Prometheus, ELK, and Grafana.",
      },
      {
        title: "Security and Compliance Automation",
        description:
          "We bring DevSecOps practices into the pipeline with security testing, vulnerability scans, and automated compliance checks.",
      },
      {
        title: "Microservices Architecture",
        description:
          "We support transition to microservices architecture for better agility, independent deployments, and scalable system design.",
      },
      {
        title: "Configuration Management",
        description:
          "We implement tools like Chef, Puppet, and Ansible to automate and standardize system configuration across environments.",
      },
      {
        title: "DevOps Consulting",
        description:
          "Our consulting helps assess current workflows, remove bottlenecks, and align DevOps practices with your business goals.",
      },
    ],
    processSteps: [
      {
        title: "DevOps Assessment and Strategy",
        description:
          "We start by assessing your current development processes, infrastructure, and workflows, then define a tailored DevOps strategy.",
      },
      {
        title: "CI/CD Pipeline Implementation",
        description:
          "We design and implement custom CI/CD pipelines for continuous feedback, early issue detection, and release quality.",
      },
      {
        title: "Infrastructure Automation",
        description:
          "Using Infrastructure as Code, we automate provisioning and management for scalable, consistent, and efficient environments.",
      },
      {
        title: "Containerization and Microservices",
        description:
          "We help adopt containerization and microservices to increase portability, scalability, and deployment independence.",
      },
      {
        title: "Continuous Monitoring and Optimization",
        description:
          "We implement monitoring and logging to track health, performance, and security while continuously optimizing operations.",
      },
      {
        title: "Ongoing Support and Improvement",
        description:
          "DevOps is continuous; we provide long-term support and optimization to keep pipelines and infrastructure efficient.",
      },
    ],
    whyChooseUs: [
      {
        title: "Tailored DevOps Solutions",
        description:
          "We deliver custom DevOps solutions aligned with your unique development and operations requirements.",
      },
      {
        title: "Automation and Efficiency",
        description:
          "We prioritize automation across CI/CD, testing, and infrastructure to reduce errors and improve team productivity.",
      },
      {
        title: "Faster Time to Market",
        description:
          "By automating critical workflows, we help teams deliver software faster with stronger release confidence.",
      },
      {
        title: "Automation, Scalable and Secure Infrastructure Efficiency",
        description:
          "Our services ensure infrastructure is scalable, secure, and resilient across cloud and on-premise environments.",
      },
      {
        title: "End-to-End DevOps Expertise",
        description:
          "From planning and implementation to optimization, we provide complete DevOps lifecycle support.",
      },
    ],
    technologies: [
      { category: "CI/CD", tools: "Jenkins, GitLab CI, CircleCI, TravisCI" },
      { category: "Containerization", tools: "Docker, Kubernetes" },
      { category: "Infrastructure as Code", tools: "Terraform, AWS CloudFormation, Ansible, Chef, Puppet" },
      { category: "Cloud Platforms", tools: "AWS, Google Cloud, Microsoft Azure" },
      { category: "Monitoring and Logging", tools: "Prometheus, Grafana, ELK Stack, Nagios" },
      { category: "Security Tools", tools: "OWASP ZAP, Snyk, Aqua Security" },
    ],
    closingCta: {
      title: "Accelerate Your Software Delivery with HeapTrace Technology",
      description:
        "Ready to streamline your development and operations processes? At HeapTrace Technology, our DevOps solutions help businesses automate, collaborate, and deliver software faster and more reliably.",
      secondaryDescription:
        "Contact us today to learn more about how our DevOps services can transform your software delivery pipeline and accelerate your business success.",
    },
  },
  "ux-design": {
    title: "UX Design",
    subtitle:
      "Unlock your company's potential with HeapTrace, your trusted partner for strategic business solutions. From expert consulting to tailored strategies, we're here to help you thrive in today's competitive landscape.",
    overview:
      "At HeapTrace Technology, we understand that great design isn't just about how a product looks, it's about how it works. Our UX design services are focused on delivering intuitive, engaging experiences that drive user satisfaction and business success. Whether you're launching a new product or improving an existing one, we're here to make sure every interaction feels seamless and effortless.",
    capabilities: [
      "User research and behavior-driven design strategy",
      "Wireframes, prototypes, and journey mapping",
      "UI, interaction design, and micro-animations",
      "Data-backed validation and iterative optimization",
    ],
    outcomes: [
      "Higher customer satisfaction and engagement",
      "Improved usability, accessibility, and brand perception",
    ],
    detailedServices: [
      {
        title: "User Research & Analysis",
        description:
          "We start with understanding your users, their needs, behaviors, and pain points. Through research and analysis, we gather insights that shape every design decision.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Before full design, we create wireframes and prototypes to map flows, interactions, and layouts so ideas can be validated early.",
      },
      {
        title: "User Testing & Validation",
        description:
          "Our user testing ensures the product resonates with target users and that usability issues are identified and resolved early.",
      },
      {
        title: "UI Design",
        description:
          "We blend UX with compelling UI design, focusing on branding, colors, typography, and micro-interactions to create cohesive experiences.",
      },
      {
        title: "Interaction Design & Animation",
        description:
          "We design meaningful interactions and animations that guide users intuitively and add personality to your product experience.",
      },
    ],
    processSteps: [
      {
        title: "Discovery & Research",
        description:
          "We begin by understanding your business goals, users, and competitive landscape through interviews, surveys, and analysis.",
      },
      {
        title: "User Personas & Journeys",
        description:
          "We develop detailed personas and journey maps to understand user expectations and optimize interaction pathways.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "We create interactive prototypes to test design possibilities and refine key workflows before implementation.",
      },
      {
        title: "Design & Iterate",
        description:
          "Based on feedback and testing, we continuously refine interfaces and interactions to improve usability and experience quality.",
      },
      {
        title: "Development Support",
        description:
          "We collaborate closely with development teams to ensure designs are implemented accurately with clear specs and handoff assets.",
      },
    ],
    whyChooseUs: [
      {
        title: "User-Centered Approach",
        description: "We put your users at the heart of every design decision.",
      },
      {
        title: "Data-Driven Decisions",
        description: "Our design choices are backed by research and real user insights, not assumptions.",
      },
      {
        title: "Collaboration",
        description: "We work closely with your team, ensuring transparency and alignment at every step.",
      },
      {
        title: "Attention to Detail",
        description: "From layout to micro-interactions, we sweat the small details to deliver better user experiences.",
      },
      {
        title: "Proven Expertise",
        description: "With experience across industries, we understand what works in UX and how to ship impactful design.",
      },
    ],
    technologies: [
      { category: "Research Tools", tools: "User interviews, surveys, analytics, heatmaps" },
      { category: "Design Tools", tools: "Figma, Adobe XD, Sketch" },
      { category: "Prototyping", tools: "Figma Prototypes, InVision, Framer" },
      { category: "Analytics", tools: "Google Analytics, Mixpanel, Hotjar" },
      { category: "Interaction Design", tools: "Framer Motion, GSAP, Principle" },
    ],
    closingCta: {
      title: "Let's Create Amazing Experiences Together",
      description:
        "We're passionate about creating digital experiences that make an impact. Whether you're launching a new product or improving an existing one, our UX design services will ensure your users love every interaction.",
      secondaryDescription:
        "Let's work together to create something truly remarkable.",
    },
  },
};

export function serviceFromSlug(slug: string) {
  return SERVICE_DETAILS[slug];
}
