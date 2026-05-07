import type { Metadata } from "next";
import ServiceDetailMainSection from "./sections/ServiceDetailMainSection";

type Params = {
  slug: string;
};

const SERVICE_TITLES: Record<string, string> = {
  "cloud-development": "Cloud Development",
  "generative-ai": "Generative AI",
  "web-development": "Web Development",
  "mobile-development": "Mobile Development",
  "big-data-and-ml": "Big Data and ML",
  "data-engineering": "Data Engineering",
  "testing-services": "Testing Services",
  "devops-services": "DevOps Services",
  "ux-design": "UX Design",
};

function titleFromSlug(slug: string) {
  return SERVICE_TITLES[slug] ?? slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return {
    title,
    description: `${title} services at Heaptrace Technology.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  return (
    <ServiceDetailMainSection title={title} />
  );
}
