"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  BrainCircuit,
  Bug,
  CheckCircle2,
  Cloud,
  Container,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Languages,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  Monitor,
  Network,
  PenTool,
  RefreshCw,
  Rocket,
  ScanSearch,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import bigDataMlBanner from "@/app/assets/banner/services/Big data ML.webp";
import cloudServicesBanner from "@/app/assets/banner/services/Cloud services.webp";
import dataEngineeringBanner from "@/app/assets/banner/services/Data Engineering.webp";
import devopsServicesBanner from "@/app/assets/banner/services/Devops Services.webp";
import testingServicesBanner from "@/app/assets/banner/services/Testing services.webp";
import uiUxDesignBanner from "@/app/assets/banner/services/UI UX design.webp";
import ConnectSection from "@/components/shared/ConnectSection";
import PreConnectCtaSection from "@/components/shared/PreConnectCtaSection";
import type { ServiceDetail } from "../[slug]/serviceDetails";

type MappedCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type MappedTech = {
  category: string;
  tools: string;
  icon: LucideIcon;
};

type ServiceShowcaseSectionProps = {
  service: ServiceDetail;
  servicePath: string;
  serviceBadge: string;
  serviceHeading: string;
  whyHeading: string;
  overviewHeading: string;
  heroClassName: string;
};

const ICON_CONFIG: Record<
  string,
  {
    serviceIcons: Record<string, LucideIcon>;
    processIcons: Record<string, LucideIcon>;
    whyIcons: Record<string, LucideIcon>;
    techIcons: Record<string, LucideIcon>;
    fallbackIcon: LucideIcon;
  }
> = {
  "data-engineering": {
    serviceIcons: {
      "Data Pipeline Development": Workflow,
      "Data Warehousing": Database,
      "Data Lake Architecture": Cloud,
      "Real-Time Data Processing": BarChart3,
      "Cloud Data Engineering": Cloud,
      "Big Data Engineering": Server,
      "Data Integration": Network,
      "Data Governance and Security": Lock,
      "Data Quality Management": FileSearch,
    },
    processIcons: {
      "Data Strategy and Architecture Design": Settings2,
      "Data Collection and Integration": Network,
      "Data Pipeline Development": Workflow,
      "Real-Time and Batch Processing": BarChart3,
      "Data Governance and Security Implementation": Lock,
      "Continuous Monitoring and Optimization": RefreshCw,
    },
    whyIcons: {
      "Expertise Across Data Platforms": GitBranch,
      "Scalable Solutions": Rocket,
      "Data Security and Compliance": Lock,
      "End-to-End Data Engineering Services": Workflow,
      "Data-Driven Business Outcomes": BarChart3,
    },
    techIcons: {
      "Big Data Tools": Server,
      "Cloud Platforms": Cloud,
      "Databases": Database,
      "ETL Tools": Workflow,
      "Data Warehousing": BarChart3,
      "Security": Lock,
    },
    fallbackIcon: Database,
  },
  "testing-services": {
    serviceIcons: {
      "Manual Testing": ScanSearch,
      "Automated Testing": GitBranch,
      "Performance Testing": Gauge,
      "Security Testing": ShieldCheck,
      "Mobile App Testing": Smartphone,
      "Regression Testing": RefreshCw,
      "API Testing": Network,
      "Usability Testing": CheckCircle2,
      "Compliance Testing": Lock,
    },
    processIcons: {
      "Test Strategy and Planning": ScanSearch,
      "Test Case Development": Bug,
      "Test Execution": Activity,
      "Continuous Testing and Integration": GitBranch,
      "Defect Reporting and Resolution": Bug,
      "Post-Release Testing": Rocket,
    },
    whyIcons: {
      "Comprehensive Test Coverage": CheckCircle2,
      "Manual and Automated Testing Expertise": GitBranch,
      "Quality and Speed": Gauge,
      "Security and Compliance Focus": ShieldCheck,
      "End-to-End Test Engineering Services": Rocket,
    },
    techIcons: {
      "Automation Tools": GitBranch,
      "Performance Testing": Gauge,
      "Mobile Testing": Smartphone,
      "Security Testing": ShieldCheck,
      "CI/CD Integration": Network,
      "API Testing": Activity,
    },
    fallbackIcon: CheckCircle2,
  },
  "devops-services": {
    serviceIcons: {
      "CI/CD Pipeline Automation": GitBranch,
      "Infrastructure as Code (IaC)": Settings2,
      "Cloud DevOps": Cloud,
      "Containerization and Orchestration": Container,
      "Automated Testing and Monitoring": Monitor,
      "Security and Compliance Automation": ShieldCheck,
      "Microservices Architecture": Network,
      "Configuration Management": Server,
      "DevOps Consulting": Workflow,
    },
    processIcons: {
      "DevOps Assessment and Strategy": Settings2,
      "CI/CD Pipeline Implementation": GitBranch,
      "Infrastructure Automation": Server,
      "Containerization and Microservices": Container,
      "Continuous Monitoring and Optimization": RefreshCw,
      "Ongoing Support and Improvement": Rocket,
    },
    whyIcons: {
      "Tailored DevOps Solutions": Workflow,
      "Automation and Efficiency": Settings2,
      "Faster Time to Market": Rocket,
      "Automation, Scalable and Secure Infrastructure Efficiency": ShieldCheck,
      "End-to-End DevOps Expertise": Network,
    },
    techIcons: {
      "CI/CD": GitBranch,
      "Containerization": Container,
      "Infrastructure as Code": Server,
      "Cloud Platforms": Cloud,
      "Monitoring and Logging": Monitor,
      "Security Tools": Lock,
    },
    fallbackIcon: Workflow,
  },
  "ux-design": {
    serviceIcons: {
      "User Research & Analysis": FileSearch,
      "Wireframing & Prototyping": Layers,
      "User Testing & Validation": CheckCircle2,
      "UI Design": PenTool,
      "Interaction Design & Animation": Sparkles,
    },
    processIcons: {
      "Discovery & Research": FileSearch,
      "User Personas & Journeys": Users,
      "Wireframing & Prototyping": Layers,
      "Design & Iterate": Workflow,
      "Development Support": Settings2,
    },
    whyIcons: {
      "User-Centered Approach": Users,
      "Data-Driven Decisions": BarChart3,
      "Collaboration": Workflow,
      "Attention to Detail": Activity,
      "Proven Expertise": Rocket,
    },
    techIcons: {
      "Research Tools": FileSearch,
      "Design Tools": PenTool,
      "Prototyping": Layers,
      "Analytics": BarChart3,
      "Interaction Design": Sparkles,
    },
    fallbackIcon: Lightbulb,
  },
  "big-data-and-ml": {
    serviceIcons: {
      "Big Data Analytics": BarChart3,
      "Data Engineering": Database,
      "Machine Learning Solutions": BrainCircuit,
      "AI-Powered Predictive Analytics": LineChart,
      "Natural Language Processing (NLP)": Languages,
      "Data Visualization and Reporting": FileSearch,
      "Big Data Infrastructure and Cloud Integration": Cloud,
      "AI and ML Model Deployment": Rocket,
      "Data Governance and Compliance": Lock,
    },
    processIcons: {
      "Data Discovery and Strategy": FileSearch,
      "Data Collection and Preparation": Database,
      "Model Development and Training": BrainCircuit,
      "Data Analysis and Visualization": BarChart3,
      "Model Deployment and Integration": Server,
      "Continuous Improvement and Optimization": RefreshCw,
    },
    whyIcons: {
      "Tailored Solutions": Settings2,
      "Cutting-Edge Technologies": Rocket,
      "Data Security and Compliance": Lock,
      "Scalable and Flexible Infrastructure": Network,
      "Proven Expertise": GitBranch,
    },
    techIcons: {
      "Big Data Tools": Database,
      "Cloud Platforms": Cloud,
      "Machine Learning Frameworks": BrainCircuit,
      "Programming Languages": Languages,
      "Databases": Server,
    },
    fallbackIcon: Database,
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceShowcaseSection({
  service,
  servicePath,
  serviceBadge,
  serviceHeading,
  whyHeading,
  overviewHeading,
  heroClassName,
}: ServiceShowcaseSectionProps) {
  const serviceBannerBySlug: Record<string, StaticImageData> = {
    "big-data-and-ml": bigDataMlBanner,
    "cloud-development": cloudServicesBanner,
    "data-engineering": dataEngineeringBanner,
    "devops-services": devopsServicesBanner,
    "testing-services": testingServicesBanner,
    "ux-design": uiUxDesignBanner,
  };
  const selectedBanner = serviceBannerBySlug[heroClassName] ?? cloudServicesBanner;
  const iconConfig = ICON_CONFIG[heroClassName] ?? {
    serviceIcons: {},
    processIcons: {},
    whyIcons: {},
    techIcons: {},
    fallbackIcon: Database,
  };
  const { serviceIcons, processIcons, whyIcons, techIcons, fallbackIcon } = iconConfig;
  const detailedServices = (service.detailedServices ?? []).map((item) => ({
    ...item,
    icon: serviceIcons[item.title] ?? fallbackIcon,
  })) as MappedCard[];

  const processSteps = (service.processSteps ?? []).map((item) => ({
    ...item,
    icon: processIcons[item.title] ?? fallbackIcon,
  })) as MappedCard[];

  const whyChooseUs = (service.whyChooseUs ?? []).map((item) => ({
    ...item,
    icon: whyIcons[item.title] ?? fallbackIcon,
  })) as MappedCard[];

  const technologies = (service.technologies ?? []).map((item) => ({
    ...item,
    icon: techIcons[item.category] ?? fallbackIcon,
  })) as MappedTech[];

  return (
    <>
      <section className="section-18">
        <section
          className={`section service-details-banner ${heroClassName}`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2, 11, 23, 0.92) 0%, rgba(3, 16, 30, 0.84) 45%, rgba(10, 82, 93, 0.42) 100%), url("${encodeURI(selectedBanner.src)}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "130px 0 92px",
          }}
        >
          <div className="w-layout-blockcontainer service-baner mx-auto w-full max-w-[1350px] px-6">
            <motion.div
              className="title-banner-wraper-flex"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Link href={servicePath} className="service-sidebar-post-category w-inline-block">
                <div className="text-block-24 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  {serviceBadge}
                </div>
              </Link>
              <h1 className="text-white">{service.title}</h1>
              <p className="title-description-white-about">{service.subtitle}</p>
              <Link href="/contact-us" className="site-cta service-banner-cta">
                GET IN TOUCH
              </Link>
            </motion.div>
          </div>
        </section>
      </section>

      <section className="section-10 bg-[#f5f7fa] py-18">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-6 w-container">
            <h2 className="main-heading">{overviewHeading}</h2>
            <p className="description-text-dark max-w-[1300px] text-[19px] leading-[1.7] text-[#5e5e60]">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="section-2 linear-bg py-16 md:py-20 xl:py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">{serviceHeading}</h2>
          </div>
          <motion.div
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {detailedServices.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-xl border border-[#dce3ea] bg-white p-6 shadow-[0_12px_28px_rgba(20,25,45,0.06)]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#4dac8a1f] p-3">
                    <Icon className="h-6 w-6 text-[#4dac8a]" />
                  </div>
                  <h3 className="text-[22px] font-semibold leading-[1.35] text-[#1f2937]">{card.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.72] text-[#4b5563]">{card.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-8 bg-white py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading">How We Work</h2>
          </div>
          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-xl border border-[#edf1f5] bg-white p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4dac8a14]">
                      <Icon className="h-5 w-5 text-[#4dac8a]" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-[#4dac8a]">STEP {index + 1}</span>
                  </div>
                  <h3 className="text-[22px] font-semibold leading-[1.3] text-[#303338]">{step.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.72] text-[#5e5e60]">{step.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-12 bg-[#f8f9fb] py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading">{whyHeading}</h2>
          </div>
          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-xl border border-[#dce3ea] bg-white p-6 shadow-[0_12px_28px_rgba(20,25,45,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#eef7f2] p-2.5">
                      <Icon className="h-5 w-5 text-[#4dac8a]" />
                    </div>
                    <h3 className="text-[22px] font-semibold text-[#303338]">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-[16px] leading-[1.72] text-[#5e5e60]">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-9 linear-bg py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">Technologies We Use</h2>
          </div>
          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.article
                  key={tech.category}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-xl border border-[#dce3ea] bg-white p-6"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#4dac8a1f] p-3">
                    <Icon className="h-6 w-6 text-[#4dac8a]" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#1f2937]">{tech.category}</h3>
                  <p className="mt-2 text-[16px] leading-[1.7] text-[#4b5563]">{tech.tools}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {service.closingCta ? (
        <PreConnectCtaSection
          title={service.closingCta.title}
          description={service.closingCta.description}
          secondaryDescription={service.closingCta.secondaryDescription}
        />
      ) : null}

      <ConnectSection />
    </>
  );
}
