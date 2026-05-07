import type { Metadata } from "next";
import PortfolioMainSection from "./sections/PortfolioMainSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore selected Heaptrace projects and product engineering success stories.",
};

export default function PortfolioPage() {
  return <PortfolioMainSection />;
}
