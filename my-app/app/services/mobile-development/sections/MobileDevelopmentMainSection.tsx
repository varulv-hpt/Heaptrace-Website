"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Apple,
  CheckCircle2,
  Database,
  Gauge,
  Layers,
  LayoutTemplate,
  MonitorSmartphone,
  PlayCircle,
  Puzzle,
  Rocket,
  ScanLine,
  ShieldCheck,
  Smartphone,
  TestTubeDiagonal,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import mobileDevelopmentBanner from "@/app/assets/banner/services/Mobile devlopment.webp";
import ConnectSection from "@/components/shared/ConnectSection";
import PreConnectCtaSection from "@/components/shared/PreConnectCtaSection";
import type { ServiceDetail } from "../../[slug]/serviceDetails";

type MobileDevelopmentMainSectionProps = {
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

type TechCard = {
  title: string;
  tools: string;
  icon: LucideIcon;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const mobileServiceCards: ServiceCard[] = [
  {
    title: "iOS App Development",
    description:
      "We develop custom iOS applications that are optimized for Apple devices, ensuring a seamless experience for iPhone, iPad, and Apple Watch users.",
    icon: Apple,
  },
  {
    title: "Android App Development",
    description:
      "Our Android app development services deliver feature-rich, responsive, and scalable apps for the world's most widely used mobile platform.",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "We create high-performance cross-platform apps that run seamlessly on both iOS and Android using technologies like React Native, Flutter, and Xamarin.",
    icon: Layers,
  },
  {
    title: "Native App Development",
    description:
      "For businesses looking for native mobile apps, we provide custom solutions optimized for the specific platform, whether it's iOS or Android.",
    icon: MonitorSmartphone,
  },
  {
    title: "Hybrid App Development",
    description:
      "Our hybrid app development services combine the best of both web and mobile apps using frameworks like Ionic and Cordova.",
    icon: Puzzle,
  },
  {
    title: "UI/UX Design for Mobile Apps",
    description:
      "We prioritize user experience by designing visually stunning and intuitive UI/UX for mobile apps.",
    icon: LayoutTemplate,
  },
  {
    title: "App Testing and Quality Assurance",
    description:
      "We provide comprehensive app testing and quality assurance services to ensure your mobile application works seamlessly across devices and platforms.",
    icon: TestTubeDiagonal,
  },
  {
    title: "Mobile App Maintenance and Support",
    description:
      "We provide ongoing maintenance and support to ensure your app remains up-to-date, secure, and optimized for performance.",
    icon: Wrench,
  },
  {
    title: "Mobile App Integrations",
    description:
      "We offer mobile app integration services to connect your app with third-party services, APIs, and backend systems for seamless functionality.",
    icon: Database,
  },
];

const processSteps: StepCard[] = [
  {
    title: "Discovery and Ideation",
    description:
      "We begin with a thorough understanding of your business goals, app objectives, and user needs through workshops and discussions.",
    icon: ScanLine,
  },
  {
    title: "UI/UX Design and Prototyping",
    description:
      "Our design team creates engaging UI/UX designs, wireframes, and interactive prototypes to validate structure and functionality.",
    icon: LayoutTemplate,
  },
  {
    title: "Agile Development Process",
    description:
      "Our agile methodology allows iterative progress, continuous feedback, and flexibility while ensuring high performance and scalability.",
    icon: Layers,
  },
  {
    title: "Quality Assurance and Testing",
    description:
      "Before launching, we rigorously test the app for functionality, performance, and security across different devices and platforms.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment and Launch",
    description:
      "We handle the deployment process to Google Play Store, Apple App Store, or any other platform of your choice.",
    icon: PlayCircle,
  },
  {
    title: "Post-Launch Support and Maintenance",
    description:
      "After launch, we continue to provide support for bug fixes, performance monitoring, and feature enhancements.",
    icon: Rocket,
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    title: "User-Centric Approach",
    description:
      "At HeapTrace, we build mobile apps that are not only functional but also centered around the user.",
    icon: CheckCircle2,
  },
  {
    title: "Expertise Across Platforms",
    description:
      "We offer expertise in both iOS and Android development, as well as cross-platform solutions.",
    icon: Smartphone,
  },
  {
    title: "Performance and Scalability",
    description:
      "We build mobile apps that are optimized for performance, with fast load times and smooth user interactions.",
    icon: Gauge,
  },
  {
    title: "End-to-End Solutions",
    description:
      "From concept and design to development, testing, and post-launch support, we provide end-to-end mobile app development services.",
    icon: Workflow,
  },
  {
    title: "Agile and Transparent Process",
    description:
      "We follow an agile development process with transparent communication to keep you informed at all stages.",
    icon: Layers,
  },
];

const technologies: TechCard[] = [
  { title: "iOS", tools: "Swift, Objective-C", icon: Apple },
  { title: "Android", tools: "Kotlin, Java", icon: Smartphone },
  { title: "Cross-Platform", tools: "React Native, Flutter, Xamarin", icon: Layers },
  { title: "Hybrid App Frameworks", tools: "Ionic, Cordova", icon: Puzzle },
  { title: "Backend", tools: "Node.js, Firebase, Django", icon: Database },
  { title: "Databases", tools: "MongoDB, MySQL, PostgreSQL", icon: Database },
];

export default function MobileDevelopmentMainSection({ service }: MobileDevelopmentMainSectionProps) {
  return (
    <>
      <section className="section-18">
        <section
          className="section service-details-banner mobile-development"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2, 11, 23, 0.92) 0%, rgba(3, 16, 30, 0.84) 45%, rgba(10, 82, 93, 0.42) 100%), url("${encodeURI(mobileDevelopmentBanner.src)}")`,
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
              <Link href="/services/mobile-development" className="service-sidebar-post-category w-inline-block">
                <div className="text-block-24 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  Mobile Development
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
            <h2 className="main-heading">
              Mobile Development Services: Creating Cutting-Edge, Scalable, and Engaging Mobile
              Experiences
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
            <h2 className="main-heading text-white">Our Mobile Development Services</h2>
          </div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {mobileServiceCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-[#dce3ea] bg-white p-6 transition-colors duration-200 hover:border-[#4dac8a66]"
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
            <p className="description-text-dark max-w-[1200px] text-[18px] leading-[1.7] text-[#5e5e60]">
              Our mobile delivery process is designed to align with business outcomes while ensuring
              smooth, user-friendly product experiences.
            </p>
          </div>

          <motion.div
            className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-xl border border-[#edf1f5] p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4dac8a14]">
                      <Icon className="h-5 w-5 text-[#4dac8a]" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-[#4dac8a]">
                      STEP {index + 1}
                    </span>
                  </div>
                  <h3 className="text-[22px] font-semibold leading-[1.3] text-[#303338]">{step.title}</h3>
                  <p className="mt-3 text-[16px] leading-[1.72] text-[#5e5e60]">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-12 bg-[#f8f9fb] py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading">Why Choose HeapTrace Technology for DevOps Solutions?</h2>
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
                  className="rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(20,25,45,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#eef7f2] p-2.5">
                      <Icon className="h-5 w-5 text-[#4dac8a]" />
                    </div>
                    <h3 className="text-[22px] font-semibold text-[#303338]">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-[16px] leading-[1.72] text-[#5e5e60]">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-9 linear-bg py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">Technologies We Use</h2>
            <p className="description-text-white">
              We leverage a wide range of modern technologies to deliver cutting-edge mobile app
              development solutions, including:
            </p>
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
                <motion.div
                  key={tech.title}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-xl border border-[#dce3ea] bg-white p-6"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#4dac8a1f] p-3">
                    <Icon className="h-6 w-6 text-[#4dac8a]" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#1f2937]">{tech.title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.7] text-[#4b5563]">{tech.tools}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {service.closingCta ? (
        <PreConnectCtaSection
          title="Transform Your Mobile Presence with HeapTrace Technology"
          description={service.closingCta.description}
          secondaryDescription={service.closingCta.secondaryDescription}
          buttonLabel="Start your mobile project"
        />
      ) : null}

      <ConnectSection />
    </>
  );
}

