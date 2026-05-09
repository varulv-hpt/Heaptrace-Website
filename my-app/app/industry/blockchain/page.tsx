import type { Metadata } from "next";
import BlockchainBannerSection from "../[slug]/sections/BlockchainBannerSection";
import BlockchainWhyChooseSection from "../[slug]/sections/BlockchainWhyChooseSection";
import BlockchainCapabilitiesSection from "../[slug]/sections/BlockchainCapabilitiesSection";
import BlockchainWhyHeaptraceSection from "../[slug]/sections/BlockchainWhyHeaptraceSection";
import BlockchainIndustriesSection from "../[slug]/sections/BlockchainIndustriesSection";
import BlockchainTechStackSection from "../[slug]/sections/BlockchainTechStackSection";
import BlockchainCtaSection from "../[slug]/sections/BlockchainCtaSection";
import "../[slug]/blockchain.css";

export const metadata: Metadata = {
  title: "Blockchain",
  description: "Blockchain solutions by Heaptrace Technology.",
};

export default function Page() {
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
