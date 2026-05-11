import type { Metadata } from "next";
import EdtechBannerSection from "../[slug]/sections/EdtechBannerSection";
import EdtechIntroSection from "../[slug]/sections/EdtechIntroSection";
import EdtechServicesSection from "../[slug]/sections/EdtechServicesSection";
import EdtechHowWeWorkSection from "../[slug]/sections/EdtechHowWeWorkSection";
import EdtechWhyChooseSection from "../[slug]/sections/EdtechWhyChooseSection";
import ConnectSection from "@/components/shared/ConnectSection";
import "../[slug]/edtech.css";

export const metadata: Metadata = {
  title: "EdTech",
  description: "EdTech solutions by Heaptrace Technology.",
};

export default function Page() {
  return (
    <div className="edtech-page">
      <EdtechBannerSection />
      <EdtechIntroSection />
      <EdtechServicesSection />
      <EdtechHowWeWorkSection />
      <EdtechWhyChooseSection />
      <ConnectSection />
    </div>
  );
}
