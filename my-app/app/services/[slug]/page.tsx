import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceFromSlug } from "./serviceDetails";
import ServiceDetailMainSection from "./sections/ServiceDetailMainSection";

type Params = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceFromSlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page does not exist.",
    };
  }

  return {
    title: service.title,
    description: service.subtitle,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = serviceFromSlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailMainSection service={service} />;
}
