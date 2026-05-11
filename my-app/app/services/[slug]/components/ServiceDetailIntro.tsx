import type { ServiceDetail } from "../serviceDetails";
import type { StaticImageData } from "next/image";
import bigDataMlBanner from "@/app/assets/banner/services/Big data ML.webp";
import cloudServicesBanner from "@/app/assets/banner/services/Cloud services.webp";
import dataEngineeringBanner from "@/app/assets/banner/services/Data Engineering.webp";
import devopsServicesBanner from "@/app/assets/banner/services/Devops Services.webp";
import generativeAiBanner from "@/app/assets/banner/services/Generative AI.webp";
import mobileDevelopmentBanner from "@/app/assets/banner/services/Mobile devlopment.webp";
import testingServicesBanner from "@/app/assets/banner/services/Testing services.webp";
import uiUxDesignBanner from "@/app/assets/banner/services/UI UX design.webp";
import webDevelopmentBanner from "@/app/assets/banner/services/Web development.webp";
import PageBanner from "@/components/shared/PageBanner";
import ConnectSection from "@/components/shared/ConnectSection";
import PreConnectCtaSection from "@/components/shared/PreConnectCtaSection";

type ServiceDetailIntroProps = {
  service: ServiceDetail;
};

export default function ServiceDetailIntro({ service }: ServiceDetailIntroProps) {
  const serviceBannerByTitle: Record<string, StaticImageData> = {
    "Big Data and ML": bigDataMlBanner,
    "Cloud Development": cloudServicesBanner,
    "Data Engineering": dataEngineeringBanner,
    "DevOps Services": devopsServicesBanner,
    "Generative AI": generativeAiBanner,
    "Mobile Development": mobileDevelopmentBanner,
    "Testing Services": testingServicesBanner,
    "UX Design": uiUxDesignBanner,
    "Web Development": webDevelopmentBanner,
  };
  const selectedBanner = serviceBannerByTitle[service.title] ?? cloudServicesBanner;
  return (
    <section className="bg-[#f5f7fa] text-[#4c4c4e]">
      <PageBanner title={service.title} description={service.subtitle} backgroundImage={selectedBanner} />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1350px] gap-8 px-6 lg:grid-cols-[1.45fr_1fr]">
          <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
            <h2 className="mb-4 text-[1.65rem] font-semibold leading-tight text-[#1f1f21]">
              Overview
            </h2>
            <p className="text-base leading-8 text-[#5e5e60]">{service.overview}</p>
          </article>

          <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
            <h2 className="mb-4 text-[1.55rem] font-semibold leading-tight text-[#1f1f21]">
              Business Outcomes
            </h2>
            <ul className="space-y-3">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-[#5e5e60]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#4dac8a]" aria-hidden="true" />
                  <span className="leading-7">{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1350px] px-6">
          <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
            <h2 className="mb-5 text-[1.65rem] font-semibold leading-tight text-[#1f1f21]">
              What We Deliver
            </h2>
            <ul className="grid gap-4 md:grid-cols-2">
              {service.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3 text-[#5e5e60]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#4dac8a]" aria-hidden="true" />
                  <span className="leading-7">{capability}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {service.detailedServices?.length ? (
        <section className="pb-20">
          <div className="mx-auto w-full max-w-[1350px] px-6">
            <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
              <h2 className="mb-5 text-[1.65rem] font-semibold leading-tight text-[#1f1f21]">
                Our Cloud Development Services
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {service.detailedServices.map((item) => (
                  <section
                    key={item.title}
                    className="rounded-lg border border-[#ebeff5] bg-[#fbfcfd] p-5"
                  >
                    <h3 className="text-xl font-semibold text-[#1f1f21]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#5e5e60]">{item.description}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {service.processSteps?.length ? (
        <section className="pb-20">
          <div className="mx-auto w-full max-w-[1350px] px-6">
            <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
              <h2 className="mb-5 text-[1.65rem] font-semibold leading-tight text-[#1f1f21]">
                How We Work
              </h2>
              <div className="space-y-5">
                {service.processSteps.map((step, index) => (
                  <section key={step.title} className="rounded-lg border border-[#ebeff5] p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#4dac8a]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[#1f1f21]">{step.title}</h3>
                    <p className="mt-3 leading-7 text-[#5e5e60]">{step.description}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {service.whyChooseUs?.length ? (
        <section className="pb-20">
          <div className="mx-auto w-full max-w-[1350px] px-6">
            <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
              <h2 className="mb-5 text-[1.65rem] font-semibold leading-tight text-[#1f1f21]">
                Why Choose HeapTrace Technology for Cloud Development?
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {service.whyChooseUs.map((reason) => (
                  <section key={reason.title} className="rounded-lg border border-[#ebeff5] p-5">
                    <h3 className="text-xl font-semibold text-[#1f1f21]">{reason.title}</h3>
                    <p className="mt-3 leading-7 text-[#5e5e60]">{reason.description}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      ) : null}

      {service.technologies?.length ? (
        <section className="pb-20">
          <div className="mx-auto w-full max-w-[1350px] px-6">
            <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
              <h2 className="mb-5 text-[1.65rem] font-semibold leading-tight text-[#1f1f21]">
                Technologies We Use
              </h2>
              <ul className="grid gap-4 md:grid-cols-2">
                {service.technologies.map((tech) => (
                  <li key={tech.category} className="rounded-lg border border-[#ebeff5] p-5">
                    <p className="text-lg font-semibold text-[#1f1f21]">{tech.category}</p>
                    <p className="mt-2 leading-7 text-[#5e5e60]">{tech.tools}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ) : null}

      {service.closingCta ? (
        <PreConnectCtaSection
          title={service.closingCta.title}
          description={service.closingCta.description}
          secondaryDescription={service.closingCta.secondaryDescription}
          buttonLabel="Get In Touch"
        />
      ) : null}

      <ConnectSection />
    </section>
  );
}
