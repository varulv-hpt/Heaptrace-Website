"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cloud,
  Database,
  FileSearch,
  GitBranch,
  Languages,
  LineChart,
  Lock,
  Network,
  RefreshCw,
  Rocket,
  Server,
  Settings2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import servicesBanner from "@/app/assets/banner/services-banner.png";
import ConnectSection from "@/app/services/components/ConnectSection";
import type { ServiceDetail } from "../../[slug]/serviceDetails";

type BigDataAndMlMainSectionProps = {
  service: ServiceDetail;
};

type CardItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type TechCard = {
  category: string;
  tools: string;
  icon: LucideIcon;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const iconByServiceTitle: Record<string, LucideIcon> = {
  "Big Data Analytics": BarChart3,
  "Data Engineering": Database,
  "Machine Learning Solutions": BrainCircuit,
  "AI-Powered Predictive Analytics": LineChart,
  "Natural Language Processing (NLP)": Languages,
  "Data Visualization and Reporting": FileSearch,
  "Big Data Infrastructure and Cloud Integration": Cloud,
  "AI and ML Model Deployment": Rocket,
  "Data Governance and Compliance": Lock,
};

const iconByProcessTitle: Record<string, LucideIcon> = {
  "Data Discovery and Strategy": FileSearch,
  "Data Collection and Preparation": Database,
  "Model Development and Training": BrainCircuit,
  "Data Analysis and Visualization": BarChart3,
  "Model Deployment and Integration": Server,
  "Continuous Improvement and Optimization": RefreshCw,
};

const iconByWhyTitle: Record<string, LucideIcon> = {
  "Tailored Solutions": Settings2,
  "Cutting-Edge Technologies": Rocket,
  "Data Security and Compliance": Lock,
  "Scalable and Flexible Infrastructure": Network,
  "Proven Expertise": GitBranch,
};

const iconByTechCategory: Record<string, LucideIcon> = {
  "Big Data Tools": Database,
  "Cloud Platforms": Cloud,
  "Machine Learning Frameworks": BrainCircuit,
  "Programming Languages": Languages,
  "Databases": Server,
};

export default function BigDataAndMlMainSection({ service }: BigDataAndMlMainSectionProps) {
  const detailedServices = (service.detailedServices ?? []).map((item) => ({
    ...item,
    icon: iconByServiceTitle[item.title] ?? Database,
  })) as CardItem[];
  const processSteps = (service.processSteps ?? []).map((item) => ({
    ...item,
    icon: iconByProcessTitle[item.title] ?? Settings2,
  })) as CardItem[];
  const whyChooseUs = (service.whyChooseUs ?? []).map((item) => ({
    ...item,
    icon: iconByWhyTitle[item.title] ?? GitBranch,
  })) as CardItem[];
  const technologies = (service.technologies ?? []).map((item) => ({
    ...item,
    icon: iconByTechCategory[item.category] ?? Server,
  })) as TechCard[];

  return (
    <>
      <section className="section-18">
        <section
          className="section service-details-banner big-data-and-ml"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2, 11, 23, 0.92) 0%, rgba(3, 16, 30, 0.84) 45%, rgba(10, 82, 93, 0.42) 100%), url(${servicesBanner.src})`,
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
              <Link href="/services/big-data-and-ml" className="service-sidebar-post-category w-inline-block">
                <div className="text-block-24 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  Big Data And ML
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
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
            <h2 className="main-heading">
              Big Data and Machine Learning Services:{" "}
              <span className="text-span-23 text-[#4dac8a]">Unlocking Insights and Driving Innovation</span>
            </h2>
            <p className="description-text-dark max-w-[1300px] text-[19px] leading-[1.7] text-[#5e5e60]">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="section-2 linear-bg py-16 md:py-20 xl:py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">Our Big Data and ML Services</h2>
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
            <h2 className="main-heading">Why Choose HeapTrace Technology for Big Data and Machine Learning?</h2>
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

      <section className="section-10 bg-[#f6f7fa] py-20">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
            <h2 className="main-heading">{service.closingCta?.title}</h2>
            <p className="description-text-dark max-w-[1200px] text-[19px] leading-[1.75] text-[#5e5e60]">
              {service.closingCta?.description}
              {service.closingCta?.secondaryDescription ? (
                <>
                  <br />
                  <br />
                  {service.closingCta.secondaryDescription}
                </>
              ) : null}
            </p>
            <Link
              href="/contact-us"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#173440] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4dac8a]"
            >
              GET IN TOUCH
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}

