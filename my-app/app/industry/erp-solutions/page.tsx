import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryShowcaseSection from "../[slug]/sections/IndustryShowcaseSection";
import { industryDetails } from "../[slug]/industryDetails";

const slug = "erp-solutions";

export const metadata: Metadata = {
  title: "ERP Solutions",
  description: "ERP Solutions by Heaptrace Technology.",
};

export default function Page() {
  const detail = industryDetails[slug];

  if (!detail) {
    notFound();
  }

  return <IndustryShowcaseSection slug={slug} detail={detail} />;
}
