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
    },
    block: {
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
      normal: ({ children }) =>
        isProject ? (
          <p className="project-article-p">{children}</p>
        ) : (
          <p className="blog-post-paragraph">{children}</p>
        ),
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
    },
  };
}

export default function PortableTextRenderer({ value, variant = "blog" }: PortableTextRendererProps) {
  return <PortableText value={value} components={buildComponents(variant)} />;
}
