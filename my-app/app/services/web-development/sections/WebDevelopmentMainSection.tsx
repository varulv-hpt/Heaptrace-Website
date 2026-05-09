import type { ServiceDetail } from "../../[slug]/serviceDetails";
import Link from "next/link";
import servicesBanner from "@/app/assets/banner/services-banner.png";
import ConnectSection from "@/app/services/elements/ConnectSection";

type WebDevelopmentMainSectionProps = {
  service: ServiceDetail;
};

export default function WebDevelopmentMainSection({ service }: WebDevelopmentMainSectionProps) {
  const detailedServices = service.detailedServices ?? [];
  const processSteps = service.processSteps ?? [];
  const whyChooseUs = service.whyChooseUs ?? [];

  return (
    <>
      <section className="section-18">
        <section
          className="section service-details-banner web-development"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2, 11, 23, 0.92) 0%, rgba(3, 16, 30, 0.84) 45%, rgba(10, 82, 93, 0.42) 100%), url(${servicesBanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "130px 0 92px",
          }}
        >
          <div className="w-layout-blockcontainer service-baner mx-auto w-full max-w-[1350px] px-6">
            <div className="title-banner-wraper-flex">
              <Link href="/services/web-development" className="service-sidebar-post-category w-inline-block">
                <div className="text-block-24 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  Web Development
                </div>
              </Link>
              <h1 className="text-white">Web Development</h1>
              <p className="title-description-white-about">{service.subtitle}</p>
              <Link href="/contact-us" className="secondary-button w-button">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="section-10 bg-[#f5f7fa] py-18">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
            <h2 className="main-heading">
              Web Development Services: Crafting Dynamic, Scalable, and{" "}
              <span className="text-span-23 text-[#4dac8a]">Responsive Web Solutions</span>
            </h2>
            <p className="description-text-dark max-w-[1300px] text-[19px] leading-[1.7] text-[#5e5e60]">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="linear-bg py-100">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">Our Web Development Services</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {detailedServices.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#dce3ea] bg-white p-6 shadow-[0_12px_28px_rgba(20,25,45,0.06)]"
              >
                <h3 className="text-[22px] font-semibold leading-[1.35] text-[#1f2937]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.72] text-[#4b5563]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-8 bg-white py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading">
              How We <span className="text-span-24 text-[#4dac8a]">Work</span>
            </h2>
            <p className="description-text-dark max-w-[1200px] text-[18px] leading-[1.7] text-[#5e5e60]">
              At HeapTrace Technology, we follow a streamlined process to ensure every web development
              project is executed with precision, quality, and a customer-focused approach.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-xl border border-[#edf1f5] bg-white p-6 shadow-[0_10px_22px_rgba(20,25,45,0.05)]"
              >
                <h3 className="text-[24px] font-semibold leading-[1.25] text-[#303338]">{step.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-[#5e5e60]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-12 bg-[#f8f9fb] py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 w-container">
            <h2 className="main-heading">
              Why Choose HeapTrace Technology for{" "}
              <span className="text-span-25 text-[#4dac8a]">Web Development?</span>
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((reason) => (
              <article
                key={reason.title}
                className="rounded-xl border border-[#dce3ea] bg-white p-6 shadow-[0_12px_28px_rgba(20,25,45,0.06)]"
              >
                <h3 className="text-[22px] font-semibold text-[#303338]">{reason.title}</h3>
                <p className="mt-3 text-[16px] leading-[1.75] text-[#5e5e60]">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConnectSection />
    </>
  );
}

