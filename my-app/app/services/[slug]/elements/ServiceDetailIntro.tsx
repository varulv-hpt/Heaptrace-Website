import type { ServiceDetail } from "../serviceDetails";
import servicesBanner from "@/app/assets/banner/services-banner.png";
import Link from "next/link";
import PageBanner from "@/app/_shared/elements/PageBanner";

type ServiceDetailIntroProps = {
  service: ServiceDetail;
};

export default function ServiceDetailIntro({ service }: ServiceDetailIntroProps) {
  return (
    <section className="bg-[#f5f7fa] text-[#4c4c4e]">
      <PageBanner title={service.title} description={service.subtitle} backgroundImage={servicesBanner} />

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
        <section className="pb-14">
          <div className="mx-auto w-full max-w-[1350px] px-6">
            <article className="rounded-xl bg-[#081420] p-8 text-white md:p-10">
              <h2 className="text-[1.8rem] font-semibold leading-tight">{service.closingCta.title}</h2>
              <p className="mt-4 max-w-[980px] leading-8 text-[#d6e3ec]">
                {service.closingCta.description}
              </p>
              {service.closingCta.secondaryDescription ? (
                <p className="mt-3 max-w-[980px] leading-8 text-[#d6e3ec]">
                  {service.closingCta.secondaryDescription}
                </p>
              ) : null}
              <Link
                href="/contact-us"
                className="mt-6 inline-flex rounded-full bg-[#18d2d4] px-6 py-3 text-sm font-semibold text-[#00121c] transition hover:bg-[#58e4e6]"
              >
                Get In Touch
              </Link>
            </article>
          </div>
        </section>
      ) : null}

      {service.contactSection ? (
        <section className="pb-24">
          <div className="mx-auto w-full max-w-[1350px] px-6">
            <article className="rounded-xl bg-white p-7 shadow-[0px_12px_32px_rgba(25,14,66,0.07)] md:p-8">
              <h2 className="text-[1.65rem] font-semibold leading-tight text-[#1f1f21]">
                {service.contactSection.heading}
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <section className="rounded-lg border border-[#ebeff5] p-5">
                  <h3 className="text-lg font-semibold text-[#1f1f21]">
                    {service.contactSection.salesLabel}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5e5e60]">
                    Sales:{" "}
                    <a className="text-[#2185d5] hover:underline" href={`tel:${service.contactSection.salesPhone}`}>
                      {service.contactSection.salesPhone}
                    </a>
                  </p>
                  <p className="leading-7 text-[#5e5e60]">
                    HR:{" "}
                    <a className="text-[#2185d5] hover:underline" href={`tel:${service.contactSection.hrPhone}`}>
                      {service.contactSection.hrPhone}
                    </a>
                  </p>
                </section>
                <section className="rounded-lg border border-[#ebeff5] p-5">
                  <h3 className="text-lg font-semibold text-[#1f1f21]">
                    {service.contactSection.generalLabel}
                  </h3>
                  <p className="mt-3 leading-7 text-[#5e5e60]">
                    <a
                      className="text-[#2185d5] hover:underline"
                      href={`mailto:${service.contactSection.generalEmail}`}
                    >
                      {service.contactSection.generalEmail}
                    </a>
                  </p>
                </section>
              </div>
            </article>
          </div>
        </section>
      ) : null}
    </section>
  );
}
