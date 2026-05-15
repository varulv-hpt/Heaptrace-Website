import Image from "next/image";
import Link from "next/link";
import type { BlogListItem, BlogPostDetail } from "@/lib/sanity/types";
import { urlForImage } from "@/lib/sanity/image";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";

type BlogPostDetailSectionProps = {
  post: BlogPostDetail;
  prevPost?: BlogListItem | null;
  nextPost?: BlogListItem | null;
};

function resolveCoverUrl(post: BlogPostDetail): string | undefined {
  const sanityUrl = post.coverImage
    ? urlForImage(post.coverImage)?.width(1600).height(900).fit("crop").auto("format").url()
    : undefined;
  return sanityUrl ?? post.coverImageUrl;
}

export default function BlogPostDetailSection({ post, prevPost, nextPost }: BlogPostDetailSectionProps) {
  const coverUrl = resolveCoverUrl(post);

  return (
    <article className="blog-post-page">
      <section className="blog-post-hero">
        <div className="mx-auto w-full max-w-[920px] px-6 py-16 md:py-20">
          <div className="blog-post-hero-nav">
            <Link href="/blog" className="blog-post-back-link">
              ← Back to blog
            </Link>
          </div>

          <p className="blog-post-category">{post.category}</p>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-excerpt">{post.excerpt}</p>
          {(post.author || post.publishedAt) && (
            <p className="blog-post-meta">
              {post.author ? `By ${post.author}` : ""}
              {post.author && post.publishedAt ? " • " : ""}
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US") : ""}
            </p>
          )}
        </div>
      </section>

      {coverUrl ? (
        <section className="blog-post-cover">
          <div className="mx-auto w-full max-w-[1100px] px-6">
            <div className="blog-post-image-wrap">
              <Image
                src={coverUrl}
                alt={post.title}
                width={1600}
                height={900}
                className="blog-post-image"
                sizes="(max-width: 1100px) 100vw, 1100px"
                priority
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="blog-post-body-section">
        <div className="mx-auto w-full max-w-[920px] px-6 py-12 md:py-16">
          {post.body.length > 0 ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            <p className="blog-post-paragraph">{post.excerpt}</p>
          )}
        </div>
      </section>

      {(prevPost || nextPost) && (
        <section className="blog-post-pager">
          <div className="mx-auto w-full max-w-[920px] px-6 py-10 md:py-12">
            <nav className="blog-post-pager-inner" aria-label="Blog post navigation">
              {prevPost ? (
                <Link href={prevPost.href} className="blog-post-pager-link blog-post-pager-link--prev">
                  <span className="blog-post-pager-label">Previous post</span>
                  <span className="blog-post-pager-title">{prevPost.title}</span>
                </Link>
              ) : null}
              {nextPost ? (
                <Link href={nextPost.href} className="blog-post-pager-link blog-post-pager-link--next">
                  <span className="blog-post-pager-label">Next post</span>
                  <span className="blog-post-pager-title">{nextPost.title}</span>
                </Link>
              ) : null}
            </nav>
          </div>
        </section>
      )}
    </article>
  );
}
