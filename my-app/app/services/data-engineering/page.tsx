import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import DataEngineeringMainSection from "./sections/DataEngineeringMainSection";

const slug = "data-engineering";

export const metadata: Metadata = {
  title: "Data Engineering",
  description: "Heaptrace service details for data-engineering.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <DataEngineeringMainSection service={service} />;
}

