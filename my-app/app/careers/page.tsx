import type { Metadata } from "next";
import CareersMainSection from "./sections/CareersMainSection";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Heaptrace and build meaningful software, cloud, and AI solutions.",
};

export default function CareersPage() {
  return <CareersMainSection />;
}
