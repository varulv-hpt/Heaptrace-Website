"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to respond to inquiries?",
    answer:
      "We strive to respond to all inquiries within 1-2 business days. If your message requires more immediate attention, feel free to give us a call for faster assistance.",
  },
  {
    question: "Can you help with ongoing support after project completion?",
    answer:
      "Absolutely! We provide ongoing support and maintenance to ensure your project continues to perform at its best. From bug fixes to feature updates, we’ll be there to assist you post-launch.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We offer a range of services, including software development, UX/UI design, cloud solutions, AI integration, and DevOps. Our goal is to provide end-to-end solutions that drive innovation and efficiency for your business.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in providing IT solutions for industries like healthcare, finance, ADtech, EDUTech, EDP, ERP, real estate, and e-commerce. However, our expertise extends across various fields, and we tailor our services to meet the unique needs of each client.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer a free initial consultation to discuss your project, needs, and how we can help. During this session, we’ll go over your objectives and provide insight into the best solutions for your business.",
  },
  {
    question: "How do we get started on a project?",
    answer:
      "Getting started is simple! Just reach out via our contact form or give us a call. We’ll schedule a consultation to learn more about your needs and begin planning a tailored solution for your business.",
  },
  {
    question: "How do you handle time zone differences when working with clients?",
    answer:
      "We work across multiple time zones, including the US, Europe, and the UK. Our teams are flexible and ensure sufficient time zone overlap for meetings, updates, and collaboration. We prioritize clear communication and coordination to ensure smooth project progress, no matter where you’re located.",
  },
];

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const renderFaq = (faq: FaqItem, index: number) => {
    const isOpen = openIndex === index;

    return (
      <div key={faq.question} className={`accordion-item w-dropdown ${isOpen ? "is-open" : ""}`}>
        <button
          type="button"
          className="accordion-toggle w-dropdown-toggle"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          onClick={() => setOpenIndex(isOpen ? null : index)}
        >
          <h5 className="accordion-title">{faq.question}</h5>
          <ChevronDown aria-hidden="true" className="accordian-arrow" />
        </button>
        <nav id={`faq-panel-${index}`} className="accordion-list w-dropdown-list">
          <p className="accordion-list-content">{faq.answer}</p>
        </nav>
      </div>
    );
  };

  return (
    <section className="section light-bg">
      <div className="mx-auto w-full max-w-[1350px] px-6">
        <div className="section-title-wrapper">
          <h4 className="section-title">Customers frequently ask</h4>
        </div>
        <div className="accordion-wrapper">
          <div className="accordion-wrap">
            {FAQ_ITEMS.slice(0, 4).map((faq, index) => renderFaq(faq, index))}
          </div>
          <div className="accordion-wrap last-child">
            {FAQ_ITEMS.slice(4).map((faq, index) => renderFaq(faq, index + 4))}
          </div>
        </div>
      </div>
    </section>
  );
}
