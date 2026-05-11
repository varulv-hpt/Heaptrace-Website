"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type ServicesFaqSectionProps = {
  faqs: FaqItem[];
};

export default function ServicesFaqSection({ faqs }: ServicesFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const leftColumn = faqs.slice(0, 3);
  const rightColumn = faqs.slice(3);

  const renderFaq = (faq: FaqItem, index: number) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={faq.question}
        className={`accordion-item w-dropdown ${isOpen ? "is-open" : ""}`}
      >
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
        <div className="title-flex margin-bottom-title-gap faq-section-services">
          <div className="title-wrapper">
            <h2 className="main-heading">
              Frequently Asked <span className="text-span-4">Questions?</span>
            </h2>
          </div>
          <Link href="/faq" className="secondary-button border-1 w-button">
            VIEW MORE
          </Link>
        </div>

        <div className="accordion-wrapper">
          <div className="accordion-wrap">
            {leftColumn.map((faq, idx) => renderFaq(faq, idx))}
          </div>
          <div className="accordion-wrap last-child">
            {rightColumn.map((faq, idx) => renderFaq(faq, idx + 3))}
          </div>
        </div>
      </div>
    </section>
  );
}
