import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import MobileDevelopmentMainSection from "./sections/MobileDevelopmentMainSection";

const slug = "mobile-development";

export const metadata: Metadata = {
  title: "Mobile Development",
  description: "Heaptrace service details for mobile-development.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <MobileDevelopmentMainSection service={service} />;
}

