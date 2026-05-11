import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConnectSection from "@/components/shared/ConnectSection";
import IndustryShowcaseSection from "../[slug]/sections/IndustryShowcaseSection";
import { industryDetails } from "../[slug]/industryDetails";

const slug = "real-estate-tech";

export const metadata: Metadata = {
  title: "Real Estate Technology",
  description: "Real Estate Technology solutions by Heaptrace Technology.",
};

export default function Page() {
  const detail = industryDetails[slug];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <IndustryShowcaseSection detail={detail} />
      <ConnectSection />
    </>
  );
}
