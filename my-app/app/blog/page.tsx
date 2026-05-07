import type { Metadata } from "next";
import BlogMainSection from "./sections/BlogMainSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Heaptrace insights on software development, cloud architecture, and AI.",
};

export default function BlogPage() {
  return <BlogMainSection />;
}
