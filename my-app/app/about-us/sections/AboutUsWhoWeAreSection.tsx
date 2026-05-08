import Image from "next/image";
import tikIcon from "@/app/assets/icons/tik icon.svg";
import teamImage from "@/app/assets/people/team.svg";
import cert18 from "@/app/assets/collaborations/asset 18.svg";
import cert19 from "@/app/assets/collaborations/asset 19.svg";
import cert20 from "@/app/assets/collaborations/asset 20.svg";
import cert21 from "@/app/assets/collaborations/asset 21.svg";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/app/_shared/sectionShell";

const SERVICES = [
  "IT Professional services",
  "Application Development services",
  "Managed IT services",
  "Maintenance and Support",
];

const CERTIFICATIONS = [
  { src: cert18.src, alt: "AWS Partner" },
  { src: cert19.src, alt: "ISO 9001:2015" },
  { src: cert20.src, alt: "ISO 27001:2013" },
  { src: cert21.src, alt: "Clutch" },
];

export default function AboutUsWhoWeAreSection() {
  return (
    <section
      className={`py-[5rem] ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="who-we-are-heading"
    >
      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            {/* Subtitle tag */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#4DAC8A]" />
              <span className="text-[#4DAC8A] text-sm font-semibold uppercase tracking-widest">
                Who we are?
              </span>
            </div>

            {/* Heading */}
            <h2
              id="who-we-are-heading"
              className="m-0 text-[#1c1c1c] text-[2rem] font-semibold leading-[2.6rem] tracking-[-0.04em]"
            >
              Delivering Innovative IT Solutions with{" "}
              <span className="text-[#4DAC8A]">Exclusive Technology</span>
            </h2>

            <p className="m-0 text-[#4c4c4e] text-[1rem] leading-[1.7rem]">
              We are dedicated to providing innovative IT solutions to businesses
              around the world.
            </p>

            <hr className="border-t border-[#e2e8f0] my-1" />

            {/* Service checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <Image
                    src={tikIcon}
                    alt=""
                    width={20}
                    height={20}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[#1c1c1c] text-[0.95rem] font-medium">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <p className="m-0 text-[#4c4c4e] text-[1rem] leading-[1.7rem]">
              Our team of over 175+ skilled professionals, including engineers,
              developers, analysts, and designers, works with cutting-edge
              technologies to meet your business needs.
            </p>

            <hr className="border-t border-[#e2e8f0] my-1" />

            {/* Certifications */}
            <div>
              <h4 className="m-0 mb-4 text-[#1c1c1c] text-[1rem] font-semibold">
                We are officially certified
              </h4>
              <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 w-full">
                {CERTIFICATIONS.map((cert) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={cert.alt}
                    src={cert.src}
                    alt={cert.alt}
                    className="cert-logo"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column — team illustration */}
          <div className="flex-1 min-w-0 flex items-center justify-center lg:justify-end">
            <Image
              src={teamImage}
              alt="Heaptrace team"
              width={520}
              height={480}
              loading="eager"
              style={{ width: "100%", maxWidth: "520px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
