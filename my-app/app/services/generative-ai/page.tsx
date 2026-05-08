import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import GenerativeAiMainSection from "./sections/GenerativeAiMainSection";

const slug = "generative-ai";

export const metadata: Metadata = {
  title: "Generative Ai",
  description: "Heaptrace service details for generative-ai.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <GenerativeAiMainSection service={service} />;
}

