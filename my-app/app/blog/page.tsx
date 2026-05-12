import type { Metadata } from "next";
import BlogMainSection from "./sections/BlogMainSection";
import { getBlogCategories, getBlogPosts } from "@/lib/sanity/queries";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Heaptrace insights on software development, cloud architecture, and AI.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getBlogPosts(), getBlogCategories()]);
  return <BlogMainSection initialPosts={posts} categories={categories} />;
}
