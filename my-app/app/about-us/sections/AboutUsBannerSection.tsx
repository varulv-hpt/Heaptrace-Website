import Image from "next/image";
import bannerImage from "@/app/assets/banner/about-us.webp";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/app/_shared/sectionShell";

export default function AboutUsBannerSection() {
  return (
    <section
      className={`relative overflow-hidden pt-[10rem] pb-[5rem] ${SECTION_OUTER_PAD_CLASS}`}
      aria-label="About Us banner"
    >
      <Image
        src={bannerImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden="true" />

      <div className={`${SECTION_PAGE_CONTAINER_CLASS} relative z-[2]`}>
        <div className="flex flex-col items-start gap-5 max-w-[700px]">
          <h1 className="text-white text-[2.5rem] font-semibold leading-[3.5rem] tracking-[-0.05em] m-0">
            About Us
          </h1>
          <p className="description-text-white">
            We believe in the power of clean code. Our focus is converting
            real-world problems into efficient solutions through quality coding.
            Regardless of domains or technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
