import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import BigDataAndMlMainSection from "./sections/BigDataAndMlMainSection";

const slug = "big-data-and-ml";

export const metadata: Metadata = {
  title: "Big Data And Ml",
  description: "Heaptrace service details for big-data-and-ml.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <BigDataAndMlMainSection service={service} />;
}

