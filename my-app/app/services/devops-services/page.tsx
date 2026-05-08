import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "../[slug]/serviceDetails";
import DevopsServicesMainSection from "./sections/DevopsServicesMainSection";

const slug = "devops-services";

export const metadata: Metadata = {
  title: "Devops Services",
  description: "Heaptrace service details for devops-services.",
};

export default function Page() {
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <DevopsServicesMainSection service={service} />;
}

