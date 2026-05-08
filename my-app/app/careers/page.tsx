import type { Metadata } from "next";
import "./careers.css";
import CareersBannerSection from "./sections/CareersBannerSection";
import CareersJoinSection from "./sections/CareersJoinSection";
import CareersBenefitsSection from "./sections/CareersBenefitsSection";
import CareersValuedClientsSection from "./sections/CareersValuedClientsSection";
import CareersOpeningsLegacySection from "./sections/CareersOpeningsLegacySection";

export const metadata: Metadata = {
  title: "Careers - Heaptrace",
  description:
    "Join HeapTrace Technology and grow your career in a dynamic IT environment across software development, AI, and cloud services.",
};

export default function CareersPage() {
  return (
    <div className="careers-page">
      <CareersBannerSection />
      <CareersJoinSection />
      <CareersBenefitsSection />
      <CareersValuedClientsSection />
      <CareersOpeningsLegacySection />
    </div>
  );
}
