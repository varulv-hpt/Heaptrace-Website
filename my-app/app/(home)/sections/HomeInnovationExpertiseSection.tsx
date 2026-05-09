import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Bug, CodeXml, Database, PenTool, Server, TabletSmartphone } from "lucide-react";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/lib/layout/sectionShell";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Testing Services",
    description:
      "Test Engineering Services: Ensuring Quality and Reliability Across Your Software Lifecycle",
    href: "/services/testing-services",
    icon: Bug,
  },
  {
    title: "UX Design",
    description:
      "Empower your business with intuitive, user-centered designs that enhance engagement and create seamless digital experiences. Let's transform your ideas into beautifully designed, functional products.",
    href: "/services/ux-design",
    icon: PenTool,
  },
  {
    title: "DevOps Services",
    description:
      "DevOps Solutions: Accelerating Your Software Delivery with Automation and Collaboration",
    href: "/services/devops-services",
    icon: CodeXml,
  },
  {
    title: "Data Engineering",
    description:
      "Unlock the Power of Data with 360-Degree Insights and Advanced Analytics, Leveraging Data Lakes, Business Intelligence Solutions, and Effective Risk Mitigation Strategies.",
    href: "/services/data-engineering",
    icon: Database,
  },
  {
    title: "Big Data and ML",
    description:
      "Big Data and Machine Learning Services: Unlocking Insights and Driving Innovation",
    href: "/services/big-data-and-ml",
    icon: Server,
  },
  {
    title: "Mobile Development",
    description:
      "Exceptional Hybrid and Native Android and iOS Apps that Exceed Google and Apple Guidelines",
    href: "/services/mobile-development",
    icon: TabletSmartphone,
  },
];

const SERVICE_ICON_GRADIENT_ID = "service-icon-gradient";

export default function HomeInnovationExpertiseSection() {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#f5f7fa] py-20 text-[#4c4c4e] ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="innovation-expertise-heading"
    >
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <defs>
          <linearGradient id={SERVICE_ICON_GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(77, 172, 138)" />
            <stop offset="100%" stopColor="rgb(30, 40, 40)" />
          </linearGradient>
        </defs>
      </svg>

      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        <div className="flex flex-col gap-8">
          <div className="flex max-w-[610px] flex-col gap-[14px]">
            <h2
              id="innovation-expertise-heading"
              className="m-0 text-[2.5rem] font-semibold leading-[3.5rem] tracking-[-0.05em] text-[#4c4c4e] max-[767px]:text-[2rem] max-[767px]:leading-[2.625rem]"
            >
              Where Innovation Meets <span className="text-[#4dac8a]">Expertise</span>
            </h2>
            <p className="m-0 text-[1.125rem] leading-6 text-[#5e5e60]">
              Empowering you with cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICE_CARDS.map((card) => (
              <article
                key={card.title}
                className="group relative flex min-h-[284px] flex-col justify-between overflow-hidden rounded-xl border border-[#ecf0f4] bg-white p-6 shadow-[0px_10px_28px_rgba(25,14,66,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_18px_36px_rgba(25,14,66,0.12)]"
              >
                <div
                  className="wc-animation-box pointer-events-none absolute inset-0 z-0 translate-y-full bg-[linear-gradient(135deg,#60d7ad,#213c3a)] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f8f5] transition-colors duration-300 group-hover:bg-[#4c4c4e]">
                    <card.icon
                      className="h-6 w-6 transition-[stroke] duration-300 group-hover:stroke-white"
                      strokeWidth={1.85}
                      stroke={`url(#${SERVICE_ICON_GRADIENT_ID})`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="m-0 text-[1.25rem] font-semibold leading-6 tracking-[-0.02em] text-[#4c4c4e] transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="m-0 text-[1.02rem] leading-6 text-[#5e5e60] transition-colors duration-300 group-hover:text-white/90">
                    {card.description}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="relative z-10 mt-6 inline-flex w-fit items-center gap-2 text-[1.03rem] font-semibold leading-6 text-[#4c4c4e] transition-colors duration-300 group-hover:text-white"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
