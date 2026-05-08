import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import WebDevelopmentMainSection from "./sections/WebDevelopmentMainSection";

const slug = "web-development";

export const metadata: Metadata = {
  title: "Web Development",
  description: "Heaptrace service details for web-development.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <WebDevelopmentMainSection service={service} />;
}

