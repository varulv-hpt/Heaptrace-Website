import Link from "next/link";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/lib/layout/sectionShell";
import HeroBackground from "../components/HeroBackground";

export default function HomeHeroSection() {
  return (
    <section
      className={`home-hero-banner-box relative z-[5] flex w-full items-end justify-start overflow-hidden ${SECTION_OUTER_PAD_CLASS} text-[#4c4c4e] min-h-[38.4rem] max-[1440px]:cursor-auto max-[1280px]:cursor-auto max-[991px]:cursor-auto max-[768px]:cursor-auto`}
      aria-label="Hero section"
    >
      <HeroBackground />

      <div
        className={`${SECTION_PAGE_CONTAINER_CLASS} z-[5] flex h-full min-h-[38.4rem] flex-col items-center justify-between`}
      >
        <div className="banner-flex-wrap _w-50 mr-auto flex h-full min-h-[38.4rem] w-full max-w-[40.6875rem] items-end justify-between">
          <div className="banner-text-content-wrapper pb-150 relative flex h-full min-h-[38.4rem] w-full max-w-[40.6875rem] flex-col items-start justify-start gap-4 pt-[13.75rem] pb-[6.25rem]">
            <h1 className="h1-white-text w-full text-[2.5rem] font-semibold leading-[3.5rem] tracking-[-0.05em] text-white">
              Build the Future with Smart Technology Solutions
            </h1>

            <p className="description-text _w-100 mb-4 w-full text-[1.125rem] leading-[1.8rem] text-white">
              Whether you&apos;re looking to develop cutting-edge software,
              optimize your cloud infrastructure, or harness the power of AI,
              we&apos;re here to make it happen. Trusted by businesses
              worldwide, we turn your ideas into reality.
            </p>

            <Link
              className="secondary-button inline-flex h-12 items-center justify-center rounded-lg bg-[#4DAC8A] px-6 text-base font-medium leading-6 text-white transition-colors duration-200 hover:bg-[#3f9c7d]"
              href="/contact-us"
            >
              Lets Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
