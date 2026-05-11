import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConnectSection from "@/components/shared/ConnectSection";
import IndustryShowcaseSection from "../[slug]/sections/IndustryShowcaseSection";
import { industryDetails } from "../[slug]/industryDetails";

const slug = "e-commerce";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce solutions by Heaptrace Technology.",
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
