import type { Metadata } from "next";
import "./firecrawl.css";
import ConnectSection from "@/components/shared/ConnectSection";
import ServicesFaqSection from "@/app/services/components/ServicesFaqSection";
import OfficeLocationsSection from "./OfficeLocationsSection";
import talkIcon from "@/app/assets/icons/contact-us/asset 5.svg";
import supportIcon from "@/app/assets/icons/contact-us/asset 7.svg";
import collaborateIcon from "@/app/assets/icons/contact-us/asset 8.svg";

const serviceCards = [
  {
    heading: "New projects",
    text: "Have a project in mind? Let's talk about how we can bring your ideas to life.",
    icon: talkIcon.src,
  },
  {
    heading: "Support",
    text: "Need support or have a question about our services? We're here to help!",
    icon: supportIcon.src,
  },
  {
    heading: "Solutions",
    text: "Interested in learning more about our solutions? Let's explore how we can work together.",
    icon: collaborateIcon.src,
  },
];

const faqs = [
  {
    question: "How long does it take to respond to inquiries?",
    answer:
      "We strive to respond to all inquiries within 1-2 business days. If your message requires more immediate attention, feel free to give us a call for faster assistance.",
  },
  {
    question: "Can you help with ongoing support after project completion?",
    answer:
      "Absolutely! We provide ongoing support and maintenance to ensure your project continues to perform at its best. From bug fixes to feature updates, we'll be there to assist you post-launch.",
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
      "Yes, we offer a free initial consultation to discuss your project, needs, and how we can help. During this session, we'll go over your objectives and provide insight into the best solutions for your business.",
  },
  {
    question: "How do we get started on a project?",
    answer:
      "Getting started is simple! Just reach out via our contact form or give us a call. We'll schedule a consultation to learn more about your needs and begin planning a tailored solution for your business.",
  },
  {
    question: "How do you handle time zone differences when working with clients?",
    answer:
      "We work across multiple time zones, including the US, Europe, and the UK. Our teams are flexible and ensure sufficient time zone overlap for meetings, updates, and collaboration. We prioritize clear communication and coordination to ensure smooth project progress, no matter where you're located.",
  },
];

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Heaptrace Technology for software development, cloud, and AI services.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function FirecrawlContactPage() {
  return (
    <div className="firecrawl-contact-page">
      <section className="firecrawl-hero">
        <div className="firecrawl-container">
          <p className="firecrawl-kicker">Get In Touch</p>
          <h1>We&apos;d Love to Hear From You!</h1>
          <p className="firecrawl-hero-copy">
            Whether you have a question, need help with a project, or just want to
            learn more about our services, we&apos;re here to help. Let&apos;s start a
            conversation!
          </p>
        </div>
      </section>

      <section className="firecrawl-section">
        <div className="firecrawl-container">
          <h2>How Can We Help?</h2>
          <p className="firecrawl-section-copy">
            At HeapTrace Technology, we&apos;re passionate about solving problems and
            delivering solutions that help your business grow. Fill out the form
            below, and one of our experts will get back to you as soon as possible.
            Let us know how we can help:
          </p>
          <div className="firecrawl-card-grid">
            {serviceCards.map((item) => (
              <article key={item.heading} className="firecrawl-card">
                <img src={item.icon} alt="" className="firecrawl-card-icon" />
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConnectSection variant="contacts" />

      <ServicesFaqSection faqs={faqs} />

      <OfficeLocationsSection />
    </div>
  );
}
