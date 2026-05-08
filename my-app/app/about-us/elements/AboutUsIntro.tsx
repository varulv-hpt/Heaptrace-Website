import Link from "next/link";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
  SECTION_TEXT_BLOCK_CLASS,
} from "@/app/_shared/sectionShell";

export default function AboutUsIntro() {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#f5f7fa] ${SECTION_OUTER_PAD_CLASS} py-20 text-[#4c4c4e]`}
      aria-label="About us intro"
    >
      <div
        className={`${SECTION_PAGE_CONTAINER_CLASS} relative z-10 flex w-full flex-col items-start`}
      >
        <div className={`${SECTION_TEXT_BLOCK_CLASS} max-w-[59.9375rem]`}>
          <h1 className="w-full text-[2.25rem] font-semibold leading-[2.75rem] tracking-[-0.03em] text-[#1f1f21] sm:text-[2.75rem] sm:leading-[3.25rem]">
            About Heaptrace Technology
          </h1>
          <p className="w-full max-w-[52rem] text-[1.0625rem] leading-[1.9rem] text-[#5e5e60]">
            We are a product-focused engineering team helping startups and
            enterprises build scalable digital solutions. From AI-powered
            systems to cloud-native platforms, we combine strong technical
            depth with a collaborative delivery approach.
          </p>
          <p className="w-full max-w-[52rem] text-[1.0625rem] leading-[1.9rem] text-[#5e5e60]">
            Our mission is simple: ship meaningful software that drives growth,
            improves customer experiences, and creates long-term business value.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          <Link
            href="/contact-us"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-[#4dac8a] px-6 text-base font-medium leading-6 text-white transition-colors duration-200 hover:bg-[#3f9c7d]"
          >
            Work with us
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-[#286f58] px-6 text-base font-medium leading-6 text-[#286f58] transition-colors duration-200 hover:bg-[#286f58] hover:text-white"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
