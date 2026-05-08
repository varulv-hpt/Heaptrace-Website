import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import UxDesignMainSection from "./sections/UxDesignMainSection";

const slug = "ux-design";

export const metadata: Metadata = {
  title: "Ux Design",
  description: "Heaptrace service details for ux-design.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <UxDesignMainSection service={service} />;
}

