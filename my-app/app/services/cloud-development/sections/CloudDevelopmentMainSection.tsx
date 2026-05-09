import Link from "next/link";
import type { ServiceDetail } from "../../[slug]/serviceDetails";
import servicesBanner from "@/app/assets/banner/services-banner.png";
import ConnectSection from "@/app/services/components/ConnectSection";

type CloudDevelopmentMainSectionProps = {
  service: ServiceDetail;
};

export default function CloudDevelopmentMainSection({ service }: CloudDevelopmentMainSectionProps) {
  const detailedServices = service.detailedServices ?? [];
  const processSteps = service.processSteps ?? [];
  const whyChooseUs = service.whyChooseUs ?? [];
  const technologies = service.technologies ?? [];
  const closingCta = service.closingCta;

  const serviceIconUrls = [
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ec8ed9ac3e900ff4c0d83_Cloud%20migration.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ec9233b841a85674df73f_Cloud%20native.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ec97d2b32d0bf6c139939_Hybrid%20colud%20solutions.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ec9b22f257b9d0494a094_Infrastructure%20as%20code.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674eca0bf11883ae47dbba35_security%20n%20compliance-cld.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674fef75a04815b79090ac0a_CICD%20Pipeline%20Automation.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ecab0968c7c6223a5238f_cost%20efficient%20solutions.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ff7ec84a10b36d2a0188e_Disaster%20Recovery%20and%20Backup%20Solutions.svg",
  ];
  const whyChooseIconUrls = [
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ecc3047dda37eb9fe5dc8_Tailored%20cloud%20solutions.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ecc67968c7c6223a73de8_Cloud%20experties.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674eb9c41e847fe6a1697d48_Scalable%20and%20secure.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ecab0968c7c6223a5238f_cost%20efficient%20solutions.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674eca0bf11883ae47dbba35_security%20n%20compliance-cld.svg",
  ];
  const techIconUrls = [
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/6746fb41829349829923b380_Cloud%20platforms.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/67375a7ff42ce92f0c798954_Containerization.png",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ecd84832f7ff50426bf50_Serverless%20tech.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ec9b22f257b9d0494a094_Infrastructure%20as%20code.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674ecdf5b259108aa9f8d4ba_Cloud%20security.svg",
    "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674eceb044ad9fde09dbc82b_Devops%20tools.svg",
  ];

  return (
    <>
      <section className="section-18">
        <section
          className="section service-details-banner cloud-development"
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
              <Link href="/services/cloud-development" className="service-sidebar-post-category w-inline-block">
                <div className="text-block-23 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  Cloud Development
                </div>
              </Link>
              <h1 className="text-white">Cloud Development</h1>
              <p className="title-description-white-about">
                {service.subtitle}
              </p>
              <Link href="/contact-us" className="site-cta service-banner-cta">
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
              Cloud Development Services: Scalable, Secure, and Flexible{" "}
              <span className="text-span-23 text-[#4dac8a]">Cloud Solutions</span>
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
            <h2 className="main-heading text-white">Our Cloud Development Services</h2>
          </div>
          <div className="w-layout-blockcontainer grid-conatiner pb-0 w-container mt-8 cloud-services-grid">
            {detailedServices.map((item, index) => (
              <div
                key={item.title}
                className="w-layout-blockcontainer cloud-service-card"
              >
                <div className="w-layout-blockcontainer container-4 w-container cloud-service-card-header">
                  <div className="div-block-13 cloud-service-icon-wrap">
                    <img
                      width="42"
                      loading="lazy"
                      alt={item.title}
                      src={serviceIconUrls[index] ?? serviceIconUrls[0]}
                      className="image-7 cloud-service-icon"
                    />
                  </div>
                  <div className="text-block-3 text-dark hover-text">
                    <strong className="bold-text-20 cloud-service-title">
                      {item.title}
                    </strong>
                  </div>
                </div>
                <div className="w-layout-blockcontainer container-82 w-container mt-4">
                  <div className="block-description cloud-service-desc">
                    {item.description}
                  </div>
                </div>
                <div className="left-hover-block cloud-service-hover-block" />
              </div>
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
              At HeapTrace Technology, our cloud development process is centered around creating robust,
              scalable, and secure solutions that align with your business goals. Here&apos;s how we work:
            </p>
          </div>
          <div className="w-layout-blockcontainer container-59 w-container mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="w-layout-blockcontainer container-61 gap-0 gap-xl-8 w-container rounded-xl border border-[#edf1f5] p-6">
                <img
                  src={`https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/${
                    [
                      "672e0b0d60deb2b3d1e6c82b_number-circle-one-light.png",
                      "672e0b0d4ca86864816b5201_number-circle-two-light.png",
                      "672e0b0dbfa0abd4432d419c_number-circle-three-light.png",
                      "672e0b0da48f200753f7aa00_number-circle-four-light.png",
                      "672e0b0d080e2f04e728513b_number-circle-five-light.png",
                      "672e0b0d5ceef3e22aaa28a0_number-circle-six-light.png",
                    ][index] ?? "672e0b0d60deb2b3d1e6c82b_number-circle-one-light.png"
                  }`}
                  loading="lazy"
                  alt=""
                  className="image-13 h-10 w-10"
                />
                <h3 className="heading-13 mt-4 text-[24px] font-semibold leading-[1.25] text-[#303338]">
                  {step.title}
                </h3>
                <p className="card-body-description mt-3 text-[16px] leading-[1.75] text-[#5e5e60]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-12 bg-[#f8f9fb] py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 w-container">
            <h2 className="main-heading">
              Why Choose HeapTrace Technology for{" "}
              <span className="text-span-25 text-[#4dac8a]">Cloud Development?</span>
            </h2>
          </div>
          <div className="div-block-12 mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((reason, index) => (
              <div key={reason.title} className="w-layout-blockcontainer container-71 w-container rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(20,25,45,0.06)]">
                <div className="div-block-17 flex items-center gap-4">
                  <div className="div-block-18 rounded-lg bg-[#eef7f2] p-3">
                    <img
                      src={whyChooseIconUrls[index] ?? whyChooseIconUrls[0]}
                      loading="lazy"
                      alt={reason.title}
                      className="image-14 h-8 w-8"
                    />
                  </div>
                  <h3 className="bold-text-14 text-[22px] font-semibold text-[#303338]">{reason.title}</h3>
                </div>
                <div className="w-layout-blockcontainer container-73 w-container mt-4">
                  <p className="card-body-description text-[16px] leading-[1.75] text-[#5e5e60]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-9 linear-bg py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">Technologies We Use</h2>
            <p className="description-text-white">
              We leverage a wide range of modern cloud technologies and tools to deliver scalable, secure,
              and high-performance solutions, including:
            </p>
          </div>
          <div className="w-layout-blockcontainer container-63 w-container mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div
                key={tech.category}
                className="w-layout-blockcontainer container-w-32 w-container rounded-xl border border-[#dce3ea] bg-white p-6"
              >
                <div className="div-block-13">
                  <img
                    width="Auto"
                    loading="lazy"
                    alt={tech.category}
                    src={techIconUrls[index] ?? techIconUrls[0]}
                    className="image-7 h-8 w-8"
                  />
                </div>
                <div className="div-block-10 mt-4">
                  <h3 className="cardheading text-[22px] font-semibold text-[#1f2937]">
                    {tech.category}
                  </h3>
                  <p className="card-description mt-2 text-[16px] leading-[1.7] text-[#4b5563]">
                    {tech.tools}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-11 bg-[#f6f7fa] py-20">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          {closingCta ? (
            <>
              <h4 className="heading-21 text-[38px] font-semibold leading-[1.3] text-[#35383c]">
                Leverage the Power of the Cloud with{" "}
                <span className="text-span-26 text-[#4dac8a]">HeapTrace Technology</span>
              </h4>
              <div className="w-layout-blockcontainer container-69 w-container mt-6">
                <p className="paragraph-12 max-w-[1180px] text-[19px] leading-[1.8] text-[#5e5e60]">
                  {closingCta.description}
                  {closingCta.secondaryDescription ? (
                    <>
                      <br />
                      <br />
                      {closingCta.secondaryDescription}
                    </>
                  ) : null}
                </p>
              </div>
            </>
          ) : null}
        </div>
      </section>

      <ConnectSection />
    </>
  );
}

