import type { Metadata } from "next";
import ContactUsMainSection from "./sections/ContactUsMainSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Heaptrace for software, cloud, and AI consulting services.",
};

export default function ContactUsPage() {
  return <ContactUsMainSection />;
}
