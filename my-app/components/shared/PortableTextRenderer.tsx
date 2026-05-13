import Image from "next/image";
import { PortableText, type PortableTextReactComponents } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";
import type { PortableTextBlock } from "@/lib/sanity/types";

export type PortableTextVariant = "blog" | "project";

type PortableTextRendererProps = {
  value: PortableTextBlock[];
  variant?: PortableTextVariant;
};

function buildComponents(variant: PortableTextVariant): Partial<PortableTextReactComponents> {
  const isProject = variant === "project";

  const paragraphClass = isProject ? "project-article-p" : "blog-post-paragraph";

  return {
    marks: {
      link: ({ children, value }) => {
        const href = typeof (value as { href?: string })?.href === "string" ? (value as { href: string }).href : "#";
        const external = href.startsWith("http");
        return (
          <a
            href={href}
            className={isProject ? "project-article-link" : "blog-post-inline-link"}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {children}
          </a>
        );
      },
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      code: ({ children }) =>
        isProject ? (
          <code className="project-article-inline-code">{children}</code>
        ) : (
          <code className="blog-post-inline-code">{children}</code>
        ),
      underline: ({ children }) => <u>{children}</u>,
      "strike-through": ({ children }) => <s>{children}</s>,
    },
    block: {
      h1: ({ children }) =>
        isProject ? (
          <h1 className="project-article-h2">{children}</h1>
        ) : (
          <h1 className="blog-post-h2">{children}</h1>
        ),
      h2: ({ children }) =>
        isProject ? (
          <h2 className="project-article-h2">{children}</h2>
        ) : (
          <h2 className="blog-post-h2">{children}</h2>
        ),
      h3: ({ children }) =>
        isProject ? (
          <h3 className="project-article-h3">{children}</h3>
        ) : (
          <h3 className="blog-post-h3">{children}</h3>
        ),
      h4: ({ children }) =>
        isProject ? (
          <h4 className="project-article-h3">{children}</h4>
        ) : (
          <h4 className="blog-post-h3">{children}</h4>
        ),
      h5: ({ children }) =>
        isProject ? (
          <h5 className="project-article-h3">{children}</h5>
        ) : (
          <h5 className="blog-post-h3">{children}</h5>
        ),
      h6: ({ children }) =>
        isProject ? (
          <h6 className="project-article-h3">{children}</h6>
        ) : (
          <h6 className="blog-post-h3">{children}</h6>
        ),
      blockquote: ({ children }) =>
        isProject ? (
          <blockquote className="project-article-quote">{children}</blockquote>
        ) : (
          <blockquote className="blog-post-quote">{children}</blockquote>
        ),
      normal: ({ children }) =>
        isProject ? (
          <p className="project-article-p">{children}</p>
        ) : (
          <p className="blog-post-paragraph">{children}</p>
        ),
      unknownBlockStyle: ({ children }) => <p className={paragraphClass}>{children}</p>,
    },
    list: {
      bullet: ({ children }) =>
        isProject ? (
          <ul className="project-article-ul">{children}</ul>
        ) : (
          <ul className="blog-post-list">{children}</ul>
        ),
      number: ({ children }) =>
        isProject ? (
          <ol className="project-article-ol">{children}</ol>
        ) : (
          <ol className="blog-post-list blog-post-list-number">{children}</ol>
        ),
    },
    listItem: {
      bullet: ({ children }) => <li className={isProject ? "project-article-li" : undefined}>{children}</li>,
      number: ({ children }) => <li className={isProject ? "project-article-li" : undefined}>{children}</li>,
    },
    types: {
      image: ({ value }) => {
        const imageUrl = urlForImage(value)?.width(1400).quality(90).url();

        if (!imageUrl) return null;

        return (
          <div className={isProject ? "project-article-image-wrap" : "blog-post-image-wrap"}>
            <Image
              src={imageUrl}
              alt=""
              width={1400}
              height={788}
              className={isProject ? "project-article-image" : "blog-post-image"}
              sizes="(max-width: 1174px) 100vw, 1174px"
            />
          </div>
        );
      },
      imageEmbed: ({ value }) => {
        const url = (value as { url?: string })?.url;
        const alt = (value as { alt?: string })?.alt ?? "";
        const caption = (value as { caption?: string })?.caption;
        if (!url) return null;

        return (
          <figure
            className={isProject ? "project-article-image-wrap" : "blog-post-image-wrap"}
          >
            <Image
              src={url}
              alt={alt}
              width={1400}
              height={788}
              className={isProject ? "project-article-image" : "blog-post-image"}
              sizes="(max-width: 1174px) 100vw, 1174px"
            />
            {caption ? (
              <figcaption
                className={
                  isProject ? "project-article-caption" : "blog-post-caption"
                }
              >
                {caption}
              </figcaption>
            ) : null}
          </figure>
        );
      },
      htmlEmbed: ({ value }) => {
        const html = (value as { html?: string })?.html;
        if (!html) return null;

        return (
          <div
            className={isProject ? "project-article-html-embed" : "blog-post-html-embed"}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      },
    },
    unknownType: ({ value }) => {
      const v = value as { _type?: string; html?: string };
      if (v.html && typeof v.html === "string") {
        return (
          <div
            className={isProject ? "project-article-html-embed" : "blog-post-html-embed"}
            dangerouslySetInnerHTML={{ __html: v.html }}
          />
        );
      }
      if (process.env.NODE_ENV === "development" && v._type) {
        console.warn(`[PortableText] Unhandled block type "${v._type}" — add a schema-aligned component or import rule.`);
      }
      return null;
    },
  };
}

export default function PortableTextRenderer({ value, variant = "blog" }: PortableTextRendererProps) {
  return <PortableText value={value} components={buildComponents(variant)} />;
}
