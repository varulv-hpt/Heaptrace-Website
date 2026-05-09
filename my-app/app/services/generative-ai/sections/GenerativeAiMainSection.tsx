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
import ConnectSection from "@/app/services/components/ConnectSection";
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
      "Integrate retrieval-augmented generation (RAG) with AI agents that decide what to fetch, when to fetch, and how to act for enterprise workflows.",
    icon: Bot,
  },
  {
    title: "AI-Powered Diagramming & Visualization",
    description:
      "Develop enterprise-ready diagramming and visualization platforms with text-to-diagram conversion, collaboration, proactive workflow suggestions, and auto-synced documentation.",
    icon: LayoutDashboard,
  },
  {
    title: "AI For Data & Decision Support",
    description:
      "Strengthen decision-making with synthetic data generation, advanced analytics, and predictive insights for faster, more reliable strategic decisions.",
    icon: BrainCircuit,
  },
  {
    title: "Custom AI Solutions",
    description:
      "Design and implement enterprise-grade AI models tailored to business goals, from intelligent recommendations to workflow automation.",
    icon: Wrench,
  },
  {
    title: "AI-Powered Content Creation",
    description:
      "Automate enterprise content production for marketing, product copy, and training materials with better consistency and delivery speed.",
    icon: FileText,
  },
  {
    title: "AI For Design & Media",
    description:
      "Accelerate creative workflows with AI-powered design and media generation aligned with brand standards and multi-channel delivery.",
    icon: Sparkles,
  },
  {
    title: "Conversational AI & Chatbots",
    description:
      "Build conversational platforms that deliver 24/7 support and integrate securely with enterprise systems to improve engagement and satisfaction.",
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
      "Our team of AI experts designs custom solutions tailored to your requirements and existing systems.",
    icon: Lightbulb,
  },
  {
    title: "Model Training & Testing",
    description:
      "We use state-of-the-art tools to train and test your models with rigorous quality control.",
    icon: ShieldCheck,
  },
  {
    title: "Implementation & Integration",
    description:
      "Once approved, we handle full implementation and integration into business processes with scalable architecture.",
    icon: Workflow,
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "We provide continuous support, maintenance, and optimization so your AI systems stay effective and up to date.",
    icon: Rocket,
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    title: "Expert Team",
    description:
      "Our AI specialists have years of experience building and deploying AI solutions across industries.",
    icon: BrainCircuit,
  },
  {
    title: "Custom Solutions",
    description: "Every business is different, which is why we deliver AI solutions tailored to your needs.",
    icon: Wrench,
  },
  {
    title: "Proven Track Record",
    description:
      "We've successfully helped businesses improve efficiency, enhance creativity, and make smarter decisions with AI.",
    icon: CheckCircle2,
  },
  {
    title: "End-to-End Service",
    description:
      "From consultation to ongoing support, we provide comprehensive AI services to ensure success.",
    icon: Workflow,
  },
  {
    title: "Commitment to Innovation",
    description:
      "We stay on the cutting edge of AI technology to ensure clients benefit from the latest advancements.",
    icon: Sparkles,
  },
];

export default function GenerativeAiMainSection({ service }: GenerativeAiMainSectionProps) {
  const capabilityHighlights = [
    "Automate repetitive tasks",
    "Generate high-quality content and media",
    "Build intelligent, data-driven applications",
    "Enhance decision-making through AI-powered insights",
    "Improve customer experiences through advanced conversational AI",
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
          <div className="w-layout-blockcontainer header-container _w-100 w-container">
            <h2 className="main-heading">
              About Our <span className="text-span-27 text-[#4dac8a]">Generative AI Services</span>
            </h2>
            <h3 className="subheading">Transform Your Business with AI-Powered Innovation</h3>
            <p className="description-text-dark max-w-[1300px] text-[19px] leading-[1.7] text-[#5e5e60]">
              {service.overview}
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

      <section className="section-2 bg-[#f5f7fa] py-16 md:py-20 xl:py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container mb-sm-0 w-container">
            <h2 className="main-heading text-[#303338]">Our Generative AI Services</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="flex h-full flex-col rounded-2xl border border-[#dce3ea] bg-white p-5 transition-colors duration-200 hover:border-[#9ed8c4] sm:p-6"
                >
                  <div className="mb-4 inline-flex h-fit w-fit shrink-0 self-start items-center justify-center rounded-xl bg-[#4dac8a1f] p-3">
                    <Icon className="h-6 w-6 text-[#4dac8a]" />
                  </div>
                  <h3 className="text-[20px] font-semibold leading-[1.35] text-[#1f2937] sm:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.72] text-[#4b5563] sm:text-[16px]">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
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
                  className="group relative overflow-hidden rounded-[10px] border border-[#dce3ea] bg-white p-6"
                >
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-center">
                      <div className="mr-4 inline-flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#eef7f2] p-4 transition-colors duration-300 group-hover:bg-[#e2f3eb]">
                        <Icon className="h-14 w-14 text-[#4dac8a]" />
                      </div>
                      <h3 className="text-[18px] font-semibold leading-6 text-[#4c4c4e]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[18px] leading-[1.6] text-[#5e5e60]">
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
                  className="rounded-xl border border-[#dce3ea] bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#4dac8a1f] p-2.5">
                      <Icon className="h-5 w-5 text-[#4dac8a]" />
                    </div>
                    <h3 className="text-[22px] font-semibold text-[#1f2937]">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-[16px] leading-[1.72] text-[#4b5563]">{item.description}</p>
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
              Let&apos;s Build the Future Together with Generative AI. Contact us today to learn more about
              how Generative AI can revolutionize your business. Our team is ready to help you design,
              implement, and scale AI solutions that drive real results.
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

