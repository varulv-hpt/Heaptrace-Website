import Link from "next/link";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/app/_shared/sectionShell";

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    title: "Testing Services",
    description:
      "Test Engineering Services: Ensuring Quality and Reliability Across Your Software Lifecycle",
    href: "/services/testing-services",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/673f3651a4cb337d72922a0a_bug.svg",
  },
  {
    title: "UX Design",
    description:
      "Empower your business with intuitive, user-centered designs that enhance engagement and create seamless digital experiences. Let's transform your ideas into beautifully designed, functional products.",
    href: "/services/ux-design",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/673f3651868d9585d0bb1f2d_pen.svg",
  },
  {
    title: "DevOps Services",
    description:
      "DevOps Solutions: Accelerating Your Software Delivery with Automation and Collaboration",
    href: "/services/devops-services",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674594e92a8532a3c4f771fa_devops%20(2).svg",
  },
  {
    title: "Data Engineering",
    description:
      "Unlock the Power of Data with 360-Degree Insights and Advanced Analytics, Leveraging Data Lakes, Business Intelligence Solutions, and Effective Risk Mitigation Strategies.",
    href: "/services/data-engineering",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/673f3650129f5e37a50c04cf_data%20engineer.svg",
  },
  {
    title: "Big Data and ML",
    description:
      "Big Data and Machine Learning Services: Unlocking Insights and Driving Innovation",
    href: "/services/big-data-and-ml",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/673f365046af5bae38883448_big%20data.svg",
  },
  {
    title: "Mobile Development",
    description:
      "Exceptional Hybrid and Native Android and iOS Apps that Exceed Google and Apple Guidelines",
    href: "/services/mobile-development",
    icon: "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/673f365071313c1d7978aa0c_mobile.svg",
  },
];

export default function HomeInnovationExpertiseSection() {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#f5f7fa] py-20 text-[#4c4c4e] ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="innovation-expertise-heading"
    >
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
                className="group relative flex min-h-[272px] flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-[0px_12px_32px_rgba(25,14,66,0.07)]"
              >
                <div
                  className="wc-animation-box pointer-events-none absolute inset-0 z-0 translate-y-full bg-[#286f58] transition-transform duration-300 ease-out group-hover:translate-y-0"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col gap-4">
                  <img src={card.icon} alt={card.title} className="h-10 w-10" loading="lazy" />
                  <h3 className="m-0 text-[1.25rem] font-semibold leading-6 tracking-[-0.02em] text-[#4c4c4e] transition-colors duration-300 group-hover:text-white">
                    {card.title}
                  </h3>
                  <p className="m-0 text-base leading-6 text-[#5e5e60] transition-colors duration-300 group-hover:text-white/90">
                    {card.description}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="relative z-10 mt-6 inline-flex w-fit text-[1.125rem] font-medium leading-6 text-[#4c4c4e] transition-colors duration-300 group-hover:text-white"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
