import type { BlogListItem, BlogPostDetail, WorkListItem, WorkProjectDetail } from "./types";

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export function mapListItem(item: {
  _id?: string;
  title: string;
  excerpt: string;
  category?: string;
  author?: string;
  slug?: string;
  coverImageUrl?: string;
  featured?: boolean;
}): BlogListItem {
  const slug = item.slug || toSlug(item.title);
  return {
    ...(item._id ? { id: item._id } : {}),
    title: item.title,
    excerpt: item.excerpt,
    category: item.category || "Technology Trends",
    author: item.author,
    slug,
    href: `/blog-posts/${slug}`,
    coverImageUrl: item.coverImageUrl,
    featured: item.featured,
  };
}

export function mapDetailItem(item: {
  title: string;
  excerpt: string;
  category?: string;
  author?: string;
  slug?: string;
  publishedAt?: string;
  body?: BlogPostDetail["body"];
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: BlogPostDetail["coverImage"];
  coverImageUrl?: string;
  featured?: boolean;
}): BlogPostDetail {
  const slug = item.slug || toSlug(item.title);
  return {
    title: item.title,
    excerpt: item.excerpt,
    category: item.category || "Technology Trends",
    author: item.author,
    slug,
    publishedAt: item.publishedAt,
    body: item.body ?? [],
    seoTitle: item.seoTitle,
    seoDescription: item.seoDescription,
    coverImage: item.coverImage,
    coverImageUrl: item.coverImageUrl,
    featured: item.featured,
  };
}

export function mapWorkListItem(item: {
  title: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  slug?: string;
  href?: string;
  /** Static portfolio field */
  image?: string;
  imageUrl?: string;
}): WorkListItem {
  const slug =
    item.slug ||
    (item.href ? item.href.replace(/^\/projects\//, "").replace(/^\//, "") : toSlug(item.title));
  const imageUrl = item.imageUrl ?? item.image ?? "";
  return {
    title: item.title,
    excerpt: item.excerpt ?? "",
    category: item.category || "Generative AI",
    tags: item.tags?.length ? item.tags : ["All Projects"],
    slug,
    href: item.href ?? `/projects/${slug}`,
    imageUrl,
  };
}

export function mapWorkDetailItem(item: {
  title: string;
  excerpt: string;
  category?: string;
  tags?: string[];
  slug?: string;
  body?: WorkProjectDetail["body"];
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: WorkProjectDetail["coverImage"];
  imageUrl?: string;
  image?: string;
  galleryImageUrls?: string[];
  clientName?: string;
  completedDate?: string;
}): WorkProjectDetail {
  const slug = item.slug || toSlug(item.title);
  return {
    title: item.title,
    excerpt: item.excerpt,
    category: item.category || "Generative AI",
    tags: item.tags?.length ? item.tags : ["All Projects"],
    slug,
    body: item.body ?? [],
    seoTitle: item.seoTitle,
    seoDescription: item.seoDescription,
    coverImage: item.coverImage,
    imageUrl: item.imageUrl ?? item.image,
    galleryImageUrls: item.galleryImageUrls,
    clientName: item.clientName,
    completedDate: item.completedDate,
  };
}
