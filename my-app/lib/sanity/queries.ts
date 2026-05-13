import { groq } from "next-sanity";
import { blogPosts as staticBlogPosts } from "@/app/blog/data/blogPosts";
import { workProjects as staticWorkProjects } from "@/app/portfolio/data/workProjects";
import { getSanityClient, isSanityConfigured } from "./client";
import { urlForImage } from "./image";
import { mapDetailItem, mapListItem, mapWorkDetailItem, mapWorkListItem } from "./mappers";
import type { BlogListItem, BlogPostDetail, WorkListItem, WorkProjectDetail } from "./types";

/** Exclude legacy `blog-static-*` seed stubs so slugs resolve to CSV-imported posts with full `body`. */
const blogPostsQuery = groq`
  *[_type == "blogPost" && !(_id match "blog-static-*")] | order(publishedAt desc){
    _id,
    title,
    excerpt,
    "slug": slug.current,
    "category": category->title,
    "author": author->name,
    coverImage,
    coverImageUrl,
    featured
  }
`;

const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug && !(_id match "blog-static-*")] | order(coalesce(publishedAt, _createdAt) desc)[0]{
    title,
    excerpt,
    "slug": slug.current,
    "category": category->title,
    "author": author->name,
    publishedAt,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    seoTitle,
    seoDescription,
    coverImage,
    coverImageUrl,
    featured
  }
`;

const pocFallbackDetail: BlogPostDetail = {
  title: "Enterprise AI is not about chatbots.",
  excerpt:
    "Enterprise AI is not about chatbots. It’s about automation, compliance, and decision intelligence. Many organizations associate AI only with conversational tools. But enterprise AI is actually about transforming entire business processes.",
  category: "Artificial Intelligence",
  slug: "enterprise-ai-is-not-about-chatbots",
  body: [
    {
      _key: "p1",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "p1-c1",
          _type: "span",
          text: "Companies that treat AI as just a chatbot are only scratching the surface of its true potential. The real transformation begins when AI is embedded into core operations.",
        },
      ],
    },
    {
      _key: "h1",
      _type: "block",
      style: "h2",
      children: [{ _key: "h1-c1", _type: "span", text: "The Real Enterprise AI Problem" }],
    },
    {
      _key: "p2",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "p2-c1",
          _type: "span",
          text: "Most companies are experimenting with AI, but very few are operationalizing it across systems. Without integration into core processes, AI becomes just another tool.",
        },
      ],
    },
    {
      _key: "h2",
      _type: "block",
      style: "h2",
      children: [{ _key: "h2-c1", _type: "span", text: "What Real Enterprise AI Looks Like" }],
    },
    {
      _key: "p3",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "p3-c1",
          _type: "span",
          text: "Successful organizations embed AI inside business workflows and decision systems. This is where AI moves from tool to infrastructure and drives measurable outcomes.",
        },
      ],
    },
  ],
  seoTitle: "Enterprise AI is not about chatbots.",
  seoDescription:
    "Enterprise AI drives automation, compliance, and decision intelligence by embedding AI into core business workflows.",
};

export async function getBlogPosts(): Promise<BlogListItem[]> {
  if (!isSanityConfigured) {
    return staticBlogPosts.map((post) =>
      mapListItem({
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        author: post.author,
        coverImageUrl: post.coverImageUrl,
      }),
    );
  }

  const sanityClient = getSanityClient();
  const posts = await sanityClient.fetch<
    Array<{
      _id: string;
      title: string;
      excerpt: string;
      slug?: string;
      category?: string;
      author?: string;
      coverImage?: BlogPostDetail["coverImage"];
      coverImageUrl?: string;
      featured?: boolean;
    }>
  >(blogPostsQuery);

  if (!posts?.length) {
    return [];
  }

  const mapped = posts.map((post) => {
    const base = mapListItem(post);
    const sanityCoverUrl = post.coverImage
      ? urlForImage(post.coverImage)?.width(820).height(640).fit("crop").auto("format").url()
      : undefined;
    return {
      ...base,
      coverImageUrl: sanityCoverUrl ?? post.coverImageUrl,
      featured: post.featured,
    };
  });

  const seenSlugs = new Set<string>();
  return mapped.filter((post) => {
    if (seenSlugs.has(post.slug)) {
      return false;
    }
    seenSlugs.add(post.slug);
    return true;
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  if (!isSanityConfigured) {
    if (slug === pocFallbackDetail.slug) {
      return pocFallbackDetail;
    }

    const matchedStatic = staticBlogPosts.find((post) => mapListItem(post).slug === slug);
    if (!matchedStatic) {
      return null;
    }

    return mapDetailItem({
      title: matchedStatic.title,
      excerpt: matchedStatic.excerpt,
      category: matchedStatic.category,
      author: matchedStatic.author,
      slug,
      body: [],
    });
  }

  const sanityClient = getSanityClient();
  const post = await sanityClient.fetch<{
    title: string;
    excerpt: string;
    slug?: string;
    category?: string;
    author?: string;
    publishedAt?: string;
    body?: BlogPostDetail["body"];
    seoTitle?: string;
    seoDescription?: string;
    coverImage?: BlogPostDetail["coverImage"];
    coverImageUrl?: string;
    featured?: boolean;
  } | null>(blogPostBySlugQuery, { slug });

  return post ? mapDetailItem(post) : null;
}

export async function getBlogCategories(): Promise<string[]> {
  const posts = await getBlogPosts();
  const categories = new Set<string>(["All"]);
  for (const post of posts) {
    categories.add(post.category);
  }
  return Array.from(categories);
}

const workProjectsQuery = groq`
  *[_type == "workProject"] | order(title asc){
    title,
    excerpt,
    "slug": slug.current,
    category,
    tags,
    coverImage
  }
`;

const workProjectBySlugQuery = groq`
  *[_type == "workProject" && slug.current == $slug][0]{
    title,
    excerpt,
    "slug": slug.current,
    category,
    tags,
    clientName,
    completedDate,
    body,
    seoTitle,
    seoDescription,
    coverImage,
    galleryImages
  }
`;

export async function getWorkProjects(): Promise<WorkListItem[]> {
  if (!isSanityConfigured) {
    return staticWorkProjects.map((project) => mapWorkListItem(project));
  }

  const sanityClient = getSanityClient();
  const rows = await sanityClient.fetch<
    Array<{
      title: string;
      excerpt: string;
      slug?: string;
      category?: string;
      tags?: string[];
      coverImage?: WorkProjectDetail["coverImage"];
    }>
  >(workProjectsQuery);

  // No published workProject docs yet — keep static portfolio so the page is not empty.
  if (!rows?.length) {
    return staticWorkProjects.map((project) => mapWorkListItem(project));
  }

  return rows.map((row) => {
    const base = mapWorkListItem({
      title: row.title,
      excerpt: row.excerpt,
      category: row.category,
      tags: row.tags,
      slug: row.slug,
    });
    const imageUrl =
      row.coverImage != null
        ? urlForImage(row.coverImage)?.width(900).height(675).fit("crop").crop("top").auto("format").url() ?? ""
        : "";
    return { ...base, imageUrl };
  });
}

export async function getWorkProjectBySlug(slug: string): Promise<WorkProjectDetail | null> {
  if (!isSanityConfigured) {
    const matched = staticWorkProjects.find(
      (p) => p.href.replace(/^\/projects\//, "") === slug,
    );
    if (!matched) {
      return null;
    }
    return mapWorkDetailItem({
      title: matched.title,
      excerpt: `${matched.title} — Heaptrace portfolio project (${matched.category}).`,
      category: matched.category,
      tags: matched.tags,
      slug,
      body: [],
      imageUrl: matched.image,
    });
  }

  const sanityClient = getSanityClient();
  const doc = await sanityClient.fetch<{
    title: string;
    excerpt: string;
    slug?: string;
    category?: string;
    tags?: string[];
    clientName?: string;
    completedDate?: string;
    body?: WorkProjectDetail["body"];
    seoTitle?: string;
    seoDescription?: string;
    coverImage?: WorkProjectDetail["coverImage"];
    galleryImages?: WorkProjectDetail["coverImage"][];
  } | null>(workProjectBySlugQuery, { slug });

  if (!doc) {
    const matched = staticWorkProjects.find(
      (p) => p.href.replace(/^\/projects\//, "") === slug,
    );
    if (!matched) {
      return null;
    }
    return mapWorkDetailItem({
      title: matched.title,
      excerpt: `${matched.title} — Heaptrace portfolio project (${matched.category}).`,
      category: matched.category,
      tags: matched.tags,
      slug,
      body: [],
      imageUrl: matched.image,
    });
  }

  const mapped = mapWorkDetailItem({
    ...doc,
    completedDate:
      typeof doc.completedDate === "string"
        ? doc.completedDate
        : doc.completedDate != null
          ? String(doc.completedDate)
          : undefined,
  });
  const imageUrl = doc.coverImage
    ? urlForImage(doc.coverImage)?.width(1200).height(750).fit("crop").auto("format").url()
    : undefined;

  const galleryImageUrls =
    Array.isArray(doc.galleryImages) && doc.galleryImages.length > 0
      ? doc.galleryImages
          .map((img) =>
            urlForImage(img)?.width(1000).height(1000).fit("max").auto("format").url(),
          )
          .filter((u): u is string => Boolean(u))
      : undefined;

  return { ...mapped, imageUrl, galleryImageUrls };
}

export async function getWorkCategories(): Promise<string[]> {
  const projects = await getWorkProjects();
  const categories = new Set<string>(["All"]);
  for (const project of projects) {
    categories.add(project.category);
  }
  return Array.from(categories);
}
