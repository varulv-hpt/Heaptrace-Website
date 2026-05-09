import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/lib/layout/sectionShell";
import HomeTestimonialsCarousel from "./HomeTestimonialsCarousel";

const QUOTE_SHAPE_SRC =
  "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/673d856fa6ddb538e63e1bc3_645b786d68dc174cdbe34ea6_Testimonial%20Shape%2005%20%281%29%201.png";

export default function HomeTestimonialsSection() {
  return (
    <section
      className={`testimonials relative w-full overflow-hidden bg-[#f5f7fa] py-20 text-[#4c4c4e] ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative left quote */}
      <img
        src={QUOTE_SHAPE_SRC}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="left-quote pointer-events-none absolute left-4 top-10 z-0 h-12 w-12 select-none opacity-40 sm:left-10 sm:top-14 sm:h-20 sm:w-20 lg:left-16 lg:top-16 lg:h-28 lg:w-28"
      />
      {/* Decorative right quote (mirrored) */}
      <img
        src={QUOTE_SHAPE_SRC}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="right-quote pointer-events-none absolute bottom-10 right-4 z-0 h-12 w-12 -scale-x-100 select-none opacity-40 sm:bottom-14 sm:right-10 sm:h-20 sm:w-20 lg:bottom-16 lg:right-16 lg:h-28 lg:w-28"
      />

      <div className={`${SECTION_PAGE_CONTAINER_CLASS} relative z-10`}>
        <div className="container-87 text-center mx-auto flex w-full max-w-[820px] flex-col items-center justify-center gap-3">
          <h2
            id="testimonials-heading"
            className="h2-heading dark-text m-0 text-[2.25rem] font-semibold leading-[3rem] tracking-[-0.04em] text-[#2b2b2d] sm:text-[2.5rem] sm:leading-[3.5rem]"
          >
            What Customers Saying{" "}
            <span className="text-span-9 text-[#4dac8a]">About Us</span>
          </h2>
          <p className="card-body-description feedback-txt m-0 text-base leading-6 text-[#7a7a7c]">
            Feedback that fuels our passion.
          </p>
        </div>

        <div className="_w-100 testimonial-slider mt-12 w-full lg:mt-20">
          <HomeTestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}
