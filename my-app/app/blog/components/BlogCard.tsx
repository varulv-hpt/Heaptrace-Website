import Image from "next/image";
import Link from "next/link";
import type { BlogListItem } from "@/lib/sanity/types";

type BlogCardProps = {
  post: BlogListItem;
};

const IMAGE_GRADIENT =
  "linear-gradient(113deg, rgb(96, 215, 173) 11%, rgb(33, 60, 58) 76%)";

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div
      className="relative flex h-full min-h-0 w-full flex-col rounded-[12px] rounded-b-[4px] bg-white text-base font-normal leading-4 text-[#4c4c4e] shadow-[0_12px_32px_rgba(25,41,66,0.07)]"
      role="listitem"
    >
      <article className="blog-grid-post-wrapper flex min-h-0 flex-1 flex-col overflow-hidden rounded-[12px] rounded-b-[4px]">
        <Link
          href={post.href}
          aria-label={`Read article: ${post.title}`}
          className="blog-grid-image-link blog-card-image-area min-h-[200px] w-full min-w-0 max-w-full cursor-pointer sm:min-h-0"
        >
          {post.coverImageUrl ? (
            <Image
              src={post.coverImageUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#213c3a] via-[#2d4a47] to-[#60d7ad]"
              aria-hidden
            />
          )}
          <span
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-1 rounded-b-[4px]"
            style={{ background: IMAGE_GRADIENT }}
            aria-hidden
          />
        </Link>

        <div className="blog-grid-content-wrapper flex min-h-0 flex-1 flex-col bg-white px-5 py-[15px]">
          <Link
            href={post.href}
            className="blog-card-heading mb-[15px] mt-[10px] block decoration-transparent transition-colors hover:underline hover:underline-offset-2"
          >
            {post.title}
          </Link>
          <p className="blog-grid-item-description mb-[15px] line-clamp-4 text-sm leading-[22.656px] text-[#5e5e60]">
            {post.excerpt}
          </p>
        </div>
      </article>
    </div>
  );
}
