import type { BlogPostDetail } from "@/lib/sanity/types";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";

type BlogPostDetailSectionProps = {
  post: BlogPostDetail;
};

export default function BlogPostDetailSection({ post }: BlogPostDetailSectionProps) {
  return (
    <article className="blog-post-page">
      <section className="blog-post-hero">
        <div className="mx-auto w-full max-w-[920px] px-6 py-16 md:py-20">
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

      <section className="blog-post-body-section">
        <div className="mx-auto w-full max-w-[920px] px-6 py-12 md:py-16">
          {post.body.length > 0 ? (
            <PortableTextRenderer value={post.body} />
          ) : (
            <p className="blog-post-paragraph">{post.excerpt}</p>
          )}
        </div>
      </section>
    </article>
  );
}
