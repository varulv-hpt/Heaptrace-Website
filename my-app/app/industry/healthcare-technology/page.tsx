import type { Metadata } from "next";
import HcBannerSection from "../[slug]/sections/HcBannerSection";
import HcWhyChooseUsSection from "../[slug]/sections/HcWhyChooseUsSection";
import HcServicesSection from "../[slug]/sections/HcServicesSection";
import HcApproachSection from "../[slug]/sections/HcApproachSection";
import HcComplianceSection from "../[slug]/sections/HcComplianceSection";
import HcWhyHeaptraceSection from "../[slug]/sections/HcWhyHeaptraceSection";
import ConnectSection from "@/components/shared/ConnectSection";
import "../[slug]/healthcare.css";

export const metadata: Metadata = {
  title: "Healthcare Technology",
  description: "Healthcare Technology solutions by Heaptrace Technology.",
};

export default function Page() {
  return (
    <div className="healthcare-page">
      <HcBannerSection />
      <HcWhyChooseUsSection />
      <HcServicesSection />
      <HcApproachSection />
      <HcComplianceSection />
      <HcWhyHeaptraceSection />
      <ConnectSection />
    </div>
  );
}
