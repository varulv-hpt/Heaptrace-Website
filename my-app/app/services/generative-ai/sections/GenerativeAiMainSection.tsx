"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Lightbulb,
  MessageSquareCode,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import servicesBanner from "@/app/assets/banner/services-banner.png";
import ConnectSection from "@/app/services/elements/ConnectSection";
import type { ServiceDetail } from "../../[slug]/serviceDetails";

type GenerativeAiMainSectionProps = {
  service: ServiceDetail;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type StepCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type WhyChooseCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const serviceCards: ServiceCard[] = [
  {
    title: "Agentic AI & RAG-Driven Intelligence",
    description:
      "Integrate retrieval-augmented generation with AI agents that decide what to fetch, when to fetch, and how to act for enterprise workflows.",
    icon: Bot,
  },
  {
    title: "AI-Powered Diagramming & Visualization",
    description:
      "Enable text-to-diagram conversion, collaborative flows, and auto-synced documentation with Generative and Agentic AI capabilities.",
    icon: LayoutDashboard,
  },
  {
    title: "AI for Data & Decision Support",
    description:
      "Use predictive insights, synthetic dataset generation, and advanced analytics to improve decision speed and confidence.",
    icon: BrainCircuit,
  },
  {
    title: "Custom AI Solutions",
    description:
      "Build secure, scalable AI solutions aligned to business outcomes, from recommendations to process automation.",
    icon: Wrench,
  },
  {
    title: "AI-Powered Content Creation",
    description:
      "Automate high-quality enterprise content generation for marketing, documentation, and product communication.",
    icon: FileText,
  },
  {
    title: "AI for Design & Media",
    description:
      "Accelerate design and media production while keeping assets consistent with your brand and multi-channel strategy.",
    icon: Sparkles,
  },
  {
    title: "Conversational AI & Chatbots",
    description:
      "Deploy always-on support assistants integrated with enterprise systems to reduce costs and improve customer satisfaction.",
    icon: MessageSquareCode,
  },
];

const approachSteps: StepCard[] = [
  {
    title: "Discovery & Consultation",
    description:
      "We align AI opportunities with your business goals, current systems, and operational priorities.",
    icon: ScanSearch,
  },
  {
    title: "Custom Solution Design",
    description:
      "Our team designs tailored AI architecture and interaction flows for your exact requirements.",
    icon: Lightbulb,
  },
  {
    title: "Model Training & Testing",
    description:
      "We train and validate models with quality controls to ensure reliable production-ready performance.",
    icon: ShieldCheck,
  },
  {
    title: "Implementation & Integration",
    description:
      "We integrate AI into your products and workflows with scalable, secure deployment practices.",
    icon: Workflow,
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Continuous monitoring and optimization keep your AI systems effective as business needs evolve.",
    icon: Rocket,
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    title: "Expert Team",
    description:
      "Our AI specialists bring deep implementation experience across industries and enterprise use cases.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Solutions",
    description: "Every engagement is tailored to your stack, goals, compliance constraints, and growth plan.",
    icon: Wrench,
  },
  {
    title: "Proven Track Record",
    description:
      "We help teams improve efficiency, creativity, and decision quality with practical AI solutions.",
    icon: CheckCircle2,
  },
  {
    title: "End-to-End Service",
    description:
      "From consulting to implementation and support, we cover the full lifecycle of your AI journey.",
    icon: Workflow,
  },
  {
    title: "Commitment to Innovation",
    description:
      "We continuously evaluate emerging AI capabilities to keep your business ahead of the curve.",
    icon: Sparkles,
  },
];

export default function GenerativeAiMainSection({ service }: GenerativeAiMainSectionProps) {
  const capabilityHighlights = [
    "Automate repetitive tasks",
    "Generate high-quality content and media",
    "Build intelligent, data-driven applications",
    "Enhance decision-making through AI-powered insights",
    "Improve customer experience through advanced conversational AI",
  ];

  return (
    <>
      <section className="section-18">
        <section
          className="section service-details-banner generative-ai"
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
              <Link href="/services/generative-ai" className="service-sidebar-post-category w-inline-block">
                <div className="text-block-24 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  Generative AI
                </div>
              </Link>
              <h1 className="text-white">{service.title}</h1>
              <p className="title-description-white-about">
                Unlock your company&apos;s potential with HeapTrace, your trusted partner for strategic
                business solutions. From expert consulting to tailored strategies, we&apos;re here to help
                you thrive in today&apos;s competitive landscape.
              </p>
              <Link href="/contact-us" className="secondary-button w-button">
                GET IN TOUCH
              </Link>
            </motion.div>
          </div>
        </section>
      </section>

      <section className="section-10 bg-[#f5f7fa] py-18">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 w-container">
            <h2 className="main-heading">
              About Our <span className="text-span-27 text-[#4dac8a]">Generative AI Services</span>
            </h2>
            <h3 className="subheading">Transform Your Business with AI-Powered Innovation</h3>
            <p className="description-text-dark max-w-[1300px] text-[19px] leading-[1.7] text-[#5e5e60]">
              At HeapTrace Technology, our Generative AI services empower businesses to harness AI for
              automation, creativity, and actionable insights. Whether you&apos;re looking to automate
              content generation, improve customer interactions, or build AI-driven applications, we
              deliver custom solutions that integrate seamlessly into your operations.
            </p>
          </div>

          <motion.div
            className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {capabilityHighlights.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-[0_8px_24px_rgba(20,25,45,0.06)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4dac8a]" />
                <p className="text-[16px] leading-[1.6] text-[#3f4247]">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-2 py-80 linear-bg">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container mb-sm-0 w-container">
            <h2 className="main-heading text-white">Our Generative AI Services</h2>
          </div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {serviceCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-[#ffffff21] bg-[#122733] p-6 transition-colors duration-200 hover:border-[#4dac8a66]"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#4dac8a1f] p-3">
                    <Icon className="h-6 w-6 text-[#7ce0c2]" />
                  </div>
                  <h3 className="text-[22px] font-semibold leading-[1.35] text-white">{card.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.72] text-[#d8e4e8]">{card.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-8 bg-white py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container mb-sm-0 w-container">
            <h2 className="main-heading">
              Our Approach to <span className="text-span-28 text-[#4dac8a]">Generative AI</span>
            </h2>
            <p className="description-text-dark max-w-[1200px] text-[18px] leading-[1.7] text-[#5e5e60]">
              At HeapTrace, we take a consultative, collaborative approach to AI implementation so your
              solution is aligned with business outcomes from day one.
            </p>
          </div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {approachSteps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[10px] border border-white bg-white p-6"
                >
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-[linear-gradient(135deg,#60d7ad,#213c3a)]"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "-6%" }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                  />

                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center">
                      <div className="mr-4 inline-flex h-[90px] w-[90px] items-center justify-center rounded-full bg-white p-4 transition-colors duration-300 group-hover:bg-[#4c4c4e]">
                        <Icon className="h-14 w-14 text-[#4dac8a] transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <h3 className="text-[18px] font-semibold leading-6 text-[#4c4c4e] transition-colors duration-300 group-hover:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[18px] leading-[1.6] text-[#5e5e60] transition-colors duration-300 group-hover:text-[rgba(255,255,255,0.88)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="linear-bg py-100 px-sm-0">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">Why Choose HeapTrace for Your Generative AI Needs?</h2>
          </div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {whyChooseCards.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-[#ffffff24] bg-[#173440] p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#4dac8a1f] p-2.5">
                      <Icon className="h-5 w-5 text-[#7ce0c2]" />
                    </div>
                    <h3 className="text-[22px] font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-[16px] leading-[1.72] text-[#d8e4e8]">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-10 bg-[#f6f7fa] py-20">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
            <h2 className="main-heading">
              Get Started with <span className="text-span-29 text-[#4dac8a]">Generative AI Today</span>
            </h2>
            <p className="description-text-dark max-w-[1200px] text-[19px] leading-[1.75] text-[#5e5e60]">
              Let&apos;s build the future together with Generative AI. Contact us today to learn how we can
              design, implement, and scale AI systems that drive measurable outcomes for your business.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#173440] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4dac8a]"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}

