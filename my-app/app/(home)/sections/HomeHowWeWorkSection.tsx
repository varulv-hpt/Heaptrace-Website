import type { StaticImageData } from "next/image";
import step01 from "@/app/assets/icons/01.png";
import step02 from "@/app/assets/icons/02.png";
import step03 from "@/app/assets/icons/03.png";
import step04 from "../../../../Assets/04.png";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
  SECTION_TEXT_BLOCK_CLASS,
} from "@/app/_shared/sectionShell";

type WorkStep = {
  title: string;
  description: string;
  image: StaticImageData;
};

const WORK_STEPS: WorkStep[] = [
  {
    title: "Planning",
    description:
      "Our team meticulously plans each stage of the process, crafting a detailed roadmap.",
    image: step01,
  },
  {
    title: "Execution",
    description:
      "With precision and expertise, we execute the plan, utilizing the latest tools and techniques.",
    image: step02,
  },
  {
    title: "Monitoring",
    description:
      "We continuously monitor progress and make adjustments as needed to maintain quality.",
    image: step03,
  },
  {
    title: "Feedback",
    description:
      "We actively seek feedback from you to ensure alignment with your expectations.",
    image: step04,
  },
];

export default function HomeHowWeWorkSection() {
  return (
    <section
      className={`linear-bg py-100 ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="how-we-work-heading"
    >
      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        <div className={`${SECTION_TEXT_BLOCK_CLASS} mb-0 gap-14`}>
          <h2
            id="how-we-work-heading"
            className="main-heading text-white"
          >
            How We Work to Achieve Your Success
          </h2>
          <p className="description-text-white">
            Unlocking efficiency and reliability, our streamlined process
            stands as the pinnacle of excellence,
            <br />
            ensuring optimal outcomes with every endeavor.
          </p>
        </div>

        <div className="w-layout-blockcontainer container-90 how-we-work mt-32 w-container">
          {WORK_STEPS.map((step) => (
            <div
              key={step.title}
              className="w-layout-blockcontainer success-blocks w-container"
            >
              <div className="w-layout-blockcontainer container-91 w-container">
                <div className="div-block-27" />
                <div className="div-block-28" />
                <div className="div-block-29" />
              </div>
              <div className="w-layout-blockcontainer container-93 w-container">
                <div className="w-layout-blockcontainer container-92 gap-12 w-container">
                  <h3 className="heading-26">{step.title}</h3>
                  <div className="text-block-15">{step.description}</div>
                </div>
                <div className="w-layout-blockcontainer container-92 w-container">
                  <img
                    src={step.image.src}
                    width={step.image.width}
                    height={step.image.height}
                    loading="lazy"
                    alt=""
                    className="image-16"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
