import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import TestingServicesMainSection from "./sections/TestingServicesMainSection";

const slug = "testing-services";

export const metadata: Metadata = {
  title: "Testing Services",
  description: "Heaptrace service details for testing-services.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <TestingServicesMainSection service={service} />;
}

