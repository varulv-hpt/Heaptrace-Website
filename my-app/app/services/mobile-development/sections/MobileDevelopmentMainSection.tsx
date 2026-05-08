"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Apple,
  ArrowRight,
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
import servicesBanner from "@/app/assets/banner/services-banner.png";
import ConnectSection from "@/app/services/elements/ConnectSection";
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
      "Custom iOS applications optimized for iPhone, iPad, and Apple Watch with Swift and Objective-C best practices.",
    icon: Apple,
  },
  {
    title: "Android App Development",
    description:
      "Feature-rich, responsive Android apps built with Kotlin and Java for consistent performance across devices.",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform App Development",
    description:
      "High-performance cross-platform apps using React Native, Flutter, and Xamarin for faster delivery with native-like UX.",
    icon: Layers,
  },
  {
    title: "Native App Development",
    description:
      "Platform-specific apps that fully leverage iOS and Android capabilities for top performance and user interaction quality.",
    icon: MonitorSmartphone,
  },
  {
    title: "Hybrid App Development",
    description:
      "Cost-effective hybrid solutions using Ionic and Cordova to reach broader audiences with a single maintainable codebase.",
    icon: Puzzle,
  },
  {
    title: "UI/UX Design for Mobile Apps",
    description:
      "Intuitive mobile-first interfaces crafted to improve usability, engagement, and conversion for your target users.",
    icon: LayoutTemplate,
  },
  {
    title: "App Testing and Quality Assurance",
    description:
      "Comprehensive functional, performance, security, usability, and compatibility testing before release.",
    icon: TestTubeDiagonal,
  },
  {
    title: "Mobile App Maintenance and Support",
    description:
      "Ongoing support for updates, bug fixes, and feature enhancements to keep your app secure and performant.",
    icon: Wrench,
  },
  {
    title: "Mobile App Integrations",
    description:
      "Seamless integrations with APIs, payment gateways, social sign-ins, and enterprise systems for unified workflows.",
    icon: Database,
  },
];

const processSteps: StepCard[] = [
  {
    title: "Discovery and Ideation",
    description:
      "We understand your goals, define app scope, and recommend the right architecture and technology stack.",
    icon: ScanLine,
  },
  {
    title: "UI/UX Design and Prototyping",
    description:
      "Our team designs wireframes and prototypes so you can validate structure, flows, and interactions early.",
    icon: LayoutTemplate,
  },
  {
    title: "Agile Development Process",
    description:
      "Iterative development with continuous feedback ensures flexibility, high code quality, and predictable delivery.",
    icon: Layers,
  },
  {
    title: "Quality Assurance and Testing",
    description:
      "Rigorous QA validates performance, security, and compatibility across devices before production rollout.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment and Launch",
    description:
      "We manage App Store and Play Store deployment processes and ensure compliance with release requirements.",
    icon: PlayCircle,
  },
  {
    title: "Post-Launch Support and Maintenance",
    description:
      "After launch, we support monitoring, improvements, and roadmap enhancements as your product grows.",
    icon: Rocket,
  },
];

const whyChooseCards: WhyChooseCard[] = [
  {
    title: "User-Centric Approach",
    description:
      "Every mobile experience is designed around real user behavior to maximize adoption and engagement.",
    icon: CheckCircle2,
  },
  {
    title: "Expertise Across Platforms",
    description:
      "We deliver robust iOS, Android, and cross-platform builds using modern frameworks and platform standards.",
    icon: Smartphone,
  },
  {
    title: "Performance and Scalability",
    description:
      "We optimize app speed, stability, and architecture so your product scales smoothly as usage grows.",
    icon: Gauge,
  },
  {
    title: "End-to-End Solutions",
    description:
      "From discovery to post-launch optimization, we support the full mobile delivery lifecycle.",
    icon: Workflow,
  },
  {
    title: "Agile and Transparent Process",
    description:
      "Frequent demos, feedback loops, and milestone clarity keep your team aligned at every stage.",
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
              <Link href="/services/mobile-development" className="service-sidebar-post-category w-inline-block">
                <div className="text-block-24 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  Mobile Development
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
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
            <h2 className="main-heading">
              Mobile Development Services: Creating Cutting-Edge, Scalable, and Engaging Mobile
              Experiences
            </h2>
            <p className="description-text-dark max-w-[1300px] text-[19px] leading-[1.7] text-[#5e5e60]">
              At HeapTrace Technology, we deliver high-quality mobile applications for iOS, Android, and
              cross-platform environments. Whether you need a consumer app, enterprise solution, or hybrid
              app, our team builds products that drive engagement and create exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="section-2 py-80 linear-bg">
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
            <h2 className="main-heading">Why Choose HeapTrace Technology for Mobile Development?</h2>
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
              We leverage modern technologies to deliver high-performance mobile solutions across platforms.
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
                  className="rounded-xl border border-[#ffffff2b] bg-[#142a32] p-6"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#4dac8a1f] p-3">
                    <Icon className="h-6 w-6 text-[#7ce0c2]" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-white">{tech.title}</h3>
                  <p className="mt-2 text-[16px] leading-[1.7] text-[#d8e4e8]">{tech.tools}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-10 bg-[#f6f7fa] py-20">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
            <h2 className="main-heading">Transform Your Mobile Presence with HeapTrace Technology</h2>
            <p className="description-text-dark max-w-[1200px] text-[19px] leading-[1.75] text-[#5e5e60]">
              Whether you&apos;re building a new mobile app or upgrading an existing one, our developers and
              designers partner with your team to deliver experiences that engage users and drive measurable
              outcomes.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#173440] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4dac8a]"
            >
              Start your mobile project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}

