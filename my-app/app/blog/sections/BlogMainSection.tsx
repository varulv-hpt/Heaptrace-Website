"use client";

import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";
import type { BlogListItem } from "@/lib/sanity/types";
import PageBanner from "@/components/shared/PageBanner";
import blogBannerImage from "@/app/assets/banner/blog-image.webp";

type BlogMainSectionProps = {
  initialPosts: BlogListItem[];
  categories: string[];
};

export default function BlogMainSection({ initialPosts, categories }: BlogMainSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => activeCategory === "All" || post.category === activeCategory);
  }, [activeCategory, initialPosts]);

  return (
    <div className="blog-page">
      <PageBanner
        title="Explore Our Blog"
        description="Explore our latest insights and updates on technology trends, AI, UX design, healthcare IT, cloud computing, and more. Stay informed with expert articles from HeapTrace Technology."
        backgroundImage={blogBannerImage}
      />

      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1350px] px-6">
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`blog-chip rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeCategory === category ? "blog-chip-active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
            role="list"
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.id ?? post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
