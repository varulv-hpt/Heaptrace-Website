import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConnectSection from "@/components/shared/ConnectSection";
import IndustryShowcaseSection from "../[slug]/sections/IndustryShowcaseSection";
import { industryDetails } from "../[slug]/industryDetails";

const slug = "adtech-innovations";

export const metadata: Metadata = {
  title: "AdTech Innovations",
  description: "AdTech Innovations by Heaptrace Technology.",
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
