export type PortableTextBlock = {
  _key: string;
  _type: string;
  children?: Array<{ _key: string; _type: string; text: string }>;
  markDefs?: Array<Record<string, unknown>>;
  style?: string;
};

export type SanityImageRef = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

export type BlogListItem = {
  title: string;
  excerpt: string;
  category: string;
  author?: string;
  slug: string;
  href: string;
  /** Resolved URL for list card cover (Sanity image CDN or static fallback). */
  coverImageUrl?: string;
};

export type BlogPostDetail = {
  title: string;
  excerpt: string;
  category: string;
  author?: string;
  slug: string;
  publishedAt?: string;
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: SanityImageRef;
};

export type WorkListItem = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  slug: string;
  href: string;
  /** Card / hero image (Sanity CDN or static remote URL). */
  imageUrl: string;
};

export type WorkProjectDetail = {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  slug: string;
  body: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: SanityImageRef;
  /** Resolved URL for hero when cover is set in Sanity or static `image`. */
  imageUrl?: string;
  /** Matches Webflow case study “Client” meta row. */
  clientName?: string;
  /** ISO date string for “Date” meta row. */
  completedDate?: string;
};
