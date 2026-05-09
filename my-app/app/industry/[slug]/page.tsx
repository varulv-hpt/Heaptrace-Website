import type { Metadata } from "next";
import IndustryDetailMainSection from "./sections/IndustryDetailMainSection";
import "./blockchain.css";
import "./edtech.css";
import "./healthcare.css";
import HcBannerSection from "./sections/HcBannerSection";
import HcWhyChooseUsSection from "./sections/HcWhyChooseUsSection";
import HcServicesSection from "./sections/HcServicesSection";
import HcApproachSection from "./sections/HcApproachSection";
import HcComplianceSection from "./sections/HcComplianceSection";
import HcWhyHeaptraceSection from "./sections/HcWhyHeaptraceSection";
import HcCtaSection from "./sections/HcCtaSection";
import BlockchainBannerSection from "./sections/BlockchainBannerSection";
import BlockchainWhyChooseSection from "./sections/BlockchainWhyChooseSection";
import BlockchainCapabilitiesSection from "./sections/BlockchainCapabilitiesSection";
import BlockchainWhyHeaptraceSection from "./sections/BlockchainWhyHeaptraceSection";
import BlockchainIndustriesSection from "./sections/BlockchainIndustriesSection";
import BlockchainTechStackSection from "./sections/BlockchainTechStackSection";
import BlockchainCtaSection from "./sections/BlockchainCtaSection";
import EdtechBannerSection from "./sections/EdtechBannerSection";
import EdtechIntroSection from "./sections/EdtechIntroSection";
import EdtechServicesSection from "./sections/EdtechServicesSection";
import EdtechHowWeWorkSection from "./sections/EdtechHowWeWorkSection";
import EdtechWhyChooseSection from "./sections/EdtechWhyChooseSection";
import EdtechCtaSection from "./sections/EdtechCtaSection";
import { industryDetails } from "./industryDetails";
import IndustryShowcaseSection from "./sections/IndustryShowcaseSection";

type Params = {
  slug: string;
};

const INDUSTRY_TITLES: Record<string, string> = {
  blockchain: "Blockchain",
  edtech: "EdTech",
  "healthcare-technology": "Healthcare Technology",
  "erp-solutions": "ERP Solutions",
  "edp-solutions": "EDP Solutions",
  iot: "IoT",
  "adtech-innovations": "AdTech Innovations",
  "real-estate-tech": "Real Estate Technology",
  "e-commerce": "E-Commerce",
};

function titleFromSlug(slug: string) {
  return INDUSTRY_TITLES[slug] ?? slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
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
    description: `${title} solutions by Heaptrace Technology.`,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const title = titleFromSlug(slug);

  if (slug === "healthcare-technology") {
    return (
      <div className="healthcare-page">
        <HcBannerSection />
        <HcWhyChooseUsSection />
        <HcServicesSection />
        <HcApproachSection />
        <HcComplianceSection />
        <HcWhyHeaptraceSection />
        <HcCtaSection />
      </div>
    );
  }

  if (slug === "edtech") {
    return (
      <div className="edtech-page">
        <EdtechBannerSection />
        <EdtechIntroSection />
        <EdtechServicesSection />
        <EdtechHowWeWorkSection />
        <EdtechWhyChooseSection />
        <EdtechCtaSection />
      </div>
    );
  }

  if (slug === "blockchain") {
    return (
      <div className="blockchain-page">
        <BlockchainBannerSection />
        <BlockchainWhyChooseSection />
        <BlockchainCapabilitiesSection />
        <BlockchainWhyHeaptraceSection />
        <BlockchainIndustriesSection />
        <BlockchainTechStackSection />
        <BlockchainCtaSection />
      </div>
    );
  }

  const industryDetail = industryDetails[slug];
  if (industryDetail) {
    return <IndustryShowcaseSection slug={slug} detail={industryDetail} />;
  }

  return <IndustryDetailMainSection title={title} />;
}
