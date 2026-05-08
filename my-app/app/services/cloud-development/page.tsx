import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import CloudDevelopmentMainSection from "./sections/CloudDevelopmentMainSection";

const slug = "cloud-development";

export const metadata: Metadata = {
  title: "Cloud Development",
  description: "Heaptrace service details for cloud-development.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <CloudDevelopmentMainSection service={service} />;
}

