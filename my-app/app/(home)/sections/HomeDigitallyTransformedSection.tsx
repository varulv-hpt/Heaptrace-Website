import {
  SECTION_FULL_WIDTH_STACK_CLASS,
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/app/_shared/sectionShell";

export default function HomeDigitallyTransformedSection() {
  return (
    <section
      className={`home-digitally-transformed-section relative w-full overflow-hidden py-20 text-[#4c4c4e] ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="digitally-transformed-heading"
    >
      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        <div className={SECTION_FULL_WIDTH_STACK_CLASS}>
          <h2
            id="digitally-transformed-heading"
            className="m-0 w-full text-[2.5rem] font-semibold leading-[3.5rem] tracking-[-0.05em] text-[#4c4c4e] max-[767px]:text-[2rem] max-[767px]:leading-[2.625rem]"
          >
            Digitally{" "}
            <span className="text-[#4dac8a]">transformed</span>
          </h2>
          <p className="m-0 w-full text-[1.125rem] leading-[1.8rem] text-[#5e5e60] max-[767px]:text-base max-[767px]:leading-[25px]">
            We believe in building strong and long-lasting relationships with
            our clients. We work closely with them to gain a deep
            understanding of their goals, challenges, and aspirations. By
            aligning our expertise with their vision, we strive to become their
            trusted technology partner.
            <br />
            <br />
            Our team has a rich experience of working with big companies like
            Google and Walmart while also partnering with mid-sized, small, and
            startup organizations simultaneously.
          </p>
        </div>
      </div>
    </section>
  );
}
