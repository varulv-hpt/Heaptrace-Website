import type { Metadata } from "next";
import PortfolioMainSection from "./sections/PortfolioMainSection";
import { getWorkCategories, getWorkProjects } from "@/lib/sanity/queries";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore selected Heaptrace projects and product engineering success stories.",
};

export default async function PortfolioPage() {
  const [projects, categories] = await Promise.all([getWorkProjects(), getWorkCategories()]);
  return <PortfolioMainSection initialProjects={projects} categories={categories} />;
}
