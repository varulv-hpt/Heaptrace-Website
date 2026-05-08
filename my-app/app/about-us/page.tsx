import type { Metadata } from "next";
import AboutUsBannerSection from "./sections/AboutUsBannerSection";
import AboutUsWhoWeAreSection from "./sections/AboutUsWhoWeAreSection";
import HomeHowWeWorkSection from "@/app/(home)/sections/HomeHowWeWorkSection";
import AboutUsTeamSection from "./sections/AboutUsTeamSection";
import AboutUsMissionSection from "./sections/AboutUsMissionSection";

export const metadata: Metadata = {
  title: "About Us - Heaptrace",
  description:
    "Learn more about HeapTrace Technology, a leading IT service provider specializing in software development, AI solutions, cloud services, and more.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutUsBannerSection />
      <AboutUsWhoWeAreSection />
      <HomeHowWeWorkSection />
      <AboutUsTeamSection />
      <AboutUsMissionSection />
    </>
  );
}
