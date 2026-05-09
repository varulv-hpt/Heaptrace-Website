"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import WorkProjectCard from "../elements/WorkProjectCard";
import { workFilterCategories, workProjects } from "../data/workProjects";
import PageBanner from "@/app/_shared/elements/PageBanner";

export default function PortfolioMainSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What areas of business do you provide consulting services for?",
      a: "We offer comprehensive consulting services covering a wide range of business areas, including but not limited to strategic planning, market analysis, operational efficiency, financial management, human resources, and marketing strategy.",
    },
    {
      q: "What is your process for conducting a business consultation?",
      a: "Our consultation process typically begins with an in-depth assessment of your business objectives, challenges, and opportunities. We then work closely with you to analyze data, identify key areas for improvement, and develop actionable strategies and recommendations to address your specific needs.",
    },
    {
      q: "What sets your business consulting firm apart from others?",
      a: "Our business consulting firm distinguishes itself through our deep expertise, proven methodologies, and commitment to client success. We prioritize building strong relationships based on trust, transparency, and results. Our team of seasoned professionals brings a wealth of experience and a track record of delivering tangible value to our clients.",
    },
    {
      q: "How can I get started with your business consulting services?",
      a: "To get started, simply reach out to us via our website or contact information provided. We'll schedule an initial consultation to discuss your business needs and objectives in more detail and determine how our consulting services can help you achieve your goals.",
    },
    {
      q: "How can business consulting benefit my company?",
      a: "Business consulting can provide valuable insights, expertise, and strategic guidance to help your company overcome challenges, capitalize on opportunities, improve performance, increase profitability, and achieve sustainable growth.",
    },
    {
      q: "How long does a consulting engagement typically last?",
      a: "The duration of a consulting engagement can vary depending on the scope and complexity of the project, as well as the needs and objectives of your business. We offer both short-term and long-term consulting arrangements tailored to meet your timeline and requirements.",
    },
  ];

  const filteredProjects = useMemo(() => {
    return workProjects.filter((project) => {
      return activeCategory === "All" || project.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <div className="portfolio-page">
      <PageBanner
        title="Our Work"
        description="Explore our diverse portfolio showcasing successful collaborations across industries, demonstrating our expertise in delivering tailored solutions that drive business growth."
      />

      <section className="section work-section-container py-14 md:py-16">
        <div className="base-container w-container mx-auto w-full max-w-[1350px] px-6">
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`portfolio-chip rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === "All" ? "portfolio-chip-active" : ""
              }`}
            >
              All
            </button>
            {workFilterCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`portfolio-chip rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === category ? "portfolio-chip-active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <WorkProjectCard key={`${project.href}-${project.title}`} project={project} />
              ))}
            </div>

            {filteredProjects.length === 0 ? (
              <div className="rounded-2xl border border-[#dce3ea] bg-white p-8 text-center text-[#5e5e60]">
                No work items in this filter yet.
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff] py-20">
        <div className="mx-auto w-full max-w-[980px] px-6 text-center">
          <h2 className="text-[32px] font-semibold leading-[1.35] text-[#303338] md:text-[40px]">
            Improve your business with the right solutions
          </h2>
          <p className="mx-auto mt-5 max-w-[850px] text-[18px] leading-[1.75] text-[#5e5e60]">
            "It is really refreshing to create the best solutions for clients who are truly interested in their
            client&apos;s needs and preferences. We offer one of the most comprehensive sets of laboratory services and
            quality result."
          </p>
          <p className="mt-6 text-[18px] font-semibold text-[#303338]">Mul Sahu</p>
          <p className="mt-1 text-[15px] text-[#5e5e60]">CEO, HeapTrace Technology</p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center rounded-full bg-[#173440] px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4dac8a]"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-20">
        <div className="mx-auto w-full max-w-[980px] px-6">
          <h2 className="text-center text-[32px] font-semibold leading-[1.35] text-[#303338] md:text-[40px]">
            Customers frequently ask
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => {
              const open = openFaq === index;
              return (
                <article key={item.q} className="rounded-2xl border border-[#dce3ea] bg-white px-5 py-4 sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <h3 className="text-[18px] font-semibold leading-[1.45] text-[#303338]">{item.q}</h3>
                    <span className="text-xl font-medium text-[#4dac8a]">{open ? "−" : "+"}</span>
                  </button>
                  {open ? <p className="mt-3 text-[16px] leading-[1.72] text-[#5e5e60]">{item.a}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
