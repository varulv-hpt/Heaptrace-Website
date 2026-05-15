import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/sanity/queries";
import type { BlogListItem } from "@/lib/sanity/types";
import BlogPostDetailSection from "./BlogPostDetailSection";
import "./blog-post.css";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const index = posts.findIndex((item) => item.slug === slug);
  const nextPost = index > 0 ? posts[index - 1] : null;
  const prevPost = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null;

  return <BlogPostDetailSection post={post} prevPost={prevPost} nextPost={nextPost} />;
}
