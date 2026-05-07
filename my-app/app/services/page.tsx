import type { Metadata } from "next";
import ServicesMainSection from "./sections/ServicesMainSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Heaptrace services in cloud, web, mobile, data, QA, DevOps, and AI.",
};

export default function ServicesPage() {
  return <ServicesMainSection />;
}
