import type { Metadata } from "next";
import FaqMainSection from "./sections/FaqMainSection";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Find answers to frequently asked questions about Heaptrace services and processes.",
};

export default function FaqPage() {
  return <FaqMainSection />;
}
