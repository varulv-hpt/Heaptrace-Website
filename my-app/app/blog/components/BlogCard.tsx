import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "../data/blogPosts";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="flex h-full min-w-0 w-full flex-col rounded-2xl border border-[#dce3ea] bg-white p-6 shadow-[0_12px_28px_rgba(20,25,45,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(20,25,45,0.12)]">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#4dac8a]">{post.category}</p>
      <Link href={post.href} className="group mt-3 inline-flex items-start gap-2">
        <h3 className="text-[24px] font-semibold leading-[1.33] text-[#1f2937] transition-colors group-hover:text-[#4dac8a]">
          {post.title}
        </h3>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#4dac8a] opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
      <p className="mt-3 flex-1 text-[16px] leading-[1.72] text-[#5e5e60]">{post.excerpt}</p>
      <p className="mt-4 text-[14px] font-medium text-[#8a8f98]">By {post.author ?? "HeapTrace Team"}</p>
    </article>
  );
}
