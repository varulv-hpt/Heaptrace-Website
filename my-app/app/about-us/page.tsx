import type { Metadata } from "next";
import AboutUsMainSection from "./sections/AboutUsMainSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Heaptrace Technology, our mission, and the team behind our solutions.",
};

export default function AboutUsPage() {
  return <AboutUsMainSection />;
}
