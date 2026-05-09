import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Bug,
  Cloud,
  CodeXml,
  Database,
  Globe,
  PenTool,
  Sparkles,
  TabletSmartphone,
} from "lucide-react";
import HomeHowWeWorkSection from "@/app/(home)/sections/HomeHowWeWorkSection";
import servicesBanner from "@/app/assets/banner/services-banner.png";
import ServicesFaqSection from "./ServicesFaqSection";
import ConnectSection from "./ConnectSection";
import PageBanner from "@/app/_shared/elements/PageBanner";

type ServiceCard = {
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

const SERVICE_DETAILS: ServiceCard[] = [
  {
    slug: "testing-services",
    title: "Testing Services",
    subtitle:
      "Test Engineering Services: Ensuring Quality and Reliability Across Your Software Lifecycle",
    icon: Bug,
  },
  {
    slug: "ux-design",
    title: "UX Design",
    subtitle:
      "Empower your business with intuitive, user-centered designs that enhance engagement and create seamless digital experiences.",
    icon: PenTool,
  },
  {
    slug: "devops-services",
    title: "DevOps Services",
    subtitle:
      "DevOps Solutions: Accelerating Your Software Delivery with Automation and Collaboration",
    icon: CodeXml,
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    subtitle:
      "Unlock the Power of Data with 360-Degree Insights and Advanced Analytics, Leveraging Data Lakes and Business Intelligence Solutions.",
    icon: Database,
  },
  {
    slug: "big-data-and-ml",
    title: "Big Data and ML",
    subtitle:
      "Big Data and Machine Learning Services: Unlocking Insights and Driving Innovation",
    icon: BrainCircuit,
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    subtitle:
      "Exceptional Hybrid and Native Android and iOS Apps that Exceed Google and Apple Guidelines",
    icon: TabletSmartphone,
  },
  {
    slug: "web-development",
    title: "Web Development",
    subtitle:
      "Transform Your Software Landscape with Expertise in Architecture, Re-engineering, Legacy Migration, Enhancements, and Reliable Support.",
    icon: Globe,
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    subtitle:
      "Leverage the power of generative AI to automate content creation, enhance decision-making, and build intelligent applications.",
    icon: Sparkles,
  },
  {
    slug: "cloud-development",
    title: "Cloud Development",
    subtitle:
      "Cloud development expert driving innovation, scalability, and efficiency.",
    icon: Cloud,
  },
];

const SERVICE_ICON_GRADIENT_ID = "services-page-icon-gradient";

const FAQ_PREVIEW = [
  {
    question: "What areas of business do you provide consulting services for?",
    answer:
      "We offer comprehensive consulting services covering a wide range of business areas, including but not limited to strategic planning, market analysis, operational efficiency, financial management, human resources, and marketing strategy.",
  },
  {
    question: "What is your process for conducting a business consultation?",
    answer:
      "Our consultation process typically begins with an in-depth assessment of your business objectives, challenges, and opportunities. We then work closely with you to analyze data, identify key areas for improvement, and develop actionable strategies and recommendations to address your specific needs.",
  },
  {
    question: "What sets your business consulting firm apart from others?",
    answer:
      "Our business consulting firm distinguishes itself through our deep expertise, proven methodologies, and commitment to client success. We prioritize building strong relationships based on trust, transparency, and results.",
  },
  {
    question: "How can business consulting benefit my company?",
    answer:
      "Business consulting can provide valuable insights, expertise, and strategic guidance to help your company overcome challenges, capitalize on opportunities, improve performance, increase profitability, and achieve sustainable growth.",
  },
  {
    question: "How long does a consulting engagement typically last?",
    answer:
      "The duration of a consulting engagement can vary depending on the scope and complexity of the project, as well as the needs and objectives of your business. We offer both short-term and long-term consulting arrangements tailored to meet your timeline and requirements.",
  },
  {
    question: "How do you measure the success of your consulting engagements?",
    answer:
      "Many people have the notion that enlightenment is one state. Many also believe that when it is attained, a person is forever in that state.For your necessary discernment. Thank you for reading.",
  },
];

export default function ServicesIntro() {
  return (
    <section className="bg-[#f5f7fa] text-[#4c4c4e]">
      <PageBanner
        title="Our Services"
        description="We pride ourselves on offering a diverse range of services meticulously crafted to meet the unique needs of your business."
        backgroundImage={servicesBanner}
      />

      <div className="mx-auto w-full max-w-[1350px] px-6 py-20 md:py-24">
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <defs>
            <linearGradient id={SERVICE_ICON_GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(77, 172, 138)" />
              <stop offset="100%" stopColor="rgb(30, 40, 40)" />
            </linearGradient>
          </defs>
        </svg>

        <header className="max-w-[58rem]">
          <h2 className="mt-10 text-[1.85rem] font-semibold leading-[1.25] tracking-[-0.02em] text-[#1f1f21] md:text-[2.2rem]">
            Where Innovation Meets Expertise
          </h2>
          <p className="mt-3 text-[1.05rem] leading-8 text-[#5e5e60]">
            Empowering you with cutting-edge solutions.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_DETAILS.map((service) => (
            <article
              key={service.slug}
              className="group relative flex min-h-[272px] flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-[0px_12px_32px_rgba(25,14,66,0.07)]"
            >
              <div
                className="wc-animation-box pointer-events-none absolute inset-0 z-0 translate-y-full bg-[#286f58] transition-transform duration-300 ease-out group-hover:translate-y-0"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col gap-4">
                <service.icon
                  className="h-10 w-10 transition-[stroke] duration-300 group-hover:stroke-white"
                  strokeWidth={1.75}
                  stroke={`url(#${SERVICE_ICON_GRADIENT_ID})`}
                  aria-hidden="true"
                />
                <h3 className="m-0 text-[1.25rem] font-semibold leading-6 tracking-[-0.02em] text-[#4c4c4e] transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="m-0 text-base leading-6 text-[#5e5e60] transition-colors duration-300 group-hover:text-white/90">
                  {service.subtitle}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="relative z-10 mt-6 inline-flex w-fit text-[1.125rem] font-medium leading-6 text-[#4c4c4e] transition-colors duration-300 group-hover:text-white"
              >
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>

      <HomeHowWeWorkSection />

      <ServicesFaqSection faqs={FAQ_PREVIEW} />

      <ConnectSection />
    </section>
  );
}
