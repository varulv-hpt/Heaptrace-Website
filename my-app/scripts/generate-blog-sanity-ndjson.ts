/**
 * Generates sanity/seed/blog-from-static.ndjson from app/blog/data/blogPosts.ts
 * Run from repo root: cd my-app && npx tsx scripts/generate-blog-sanity-ndjson.ts
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { blogPosts, blogCategories } from "../app/blog/data/blogPosts";

const cwd = process.cwd();

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function ensureExcerpt(text: string): string {
  const t = text.trim();
  if (t.length >= 20) return t;
  return `${t} More insights from Heaptrace on engineering, cloud, and AI.`.slice(0, 500);
}

function blockParagraph(_key: string, text: string) {
  return {
    _key,
    _type: "block" as const,
    style: "normal" as const,
    markDefs: [] as [],
    children: [
      {
        _key: `${_key}-c`,
        _type: "span" as const,
        marks: [] as [],
        text,
      },
    ],
  };
}

function uniqueStrings(items: string[]): string[] {
  return [...new Set(items.map((s) => s.trim()).filter(Boolean))];
}

const defaultAuthorId = "author-heaptrace-team";
const defaultAuthorName = "Heaptrace Team";
const defaultAuthorSlug = "heaptrace-team";

const categoryTitles = uniqueStrings([
  ...blogCategories.filter((c) => c !== "All"),
  ...blogPosts.map((p) => p.category),
]);

const categoryDocs = categoryTitles.map((title) => {
  const slug = toSlug(title);
  const id = `category-${slug}`;
  return {
    _id: id,
    _type: "category" as const,
    title,
    slug: { _type: "slug" as const, current: slug },
  };
});

const authorNames = uniqueStrings([
  ...blogPosts.map((p) => p.author).filter((a): a is string => Boolean(a)),
  defaultAuthorName,
]);

const authorDocs = authorNames.map((name) => {
  const slug = toSlug(name);
  const id = name === defaultAuthorName ? defaultAuthorId : `author-${slug}`;
  return {
    _id: id,
    _type: "author" as const,
    name,
    slug: { _type: "slug" as const, current: slug },
    bio: `${name} contributes insights on Heaptrace blog topics spanning cloud, AI, product, and engineering.`,
  };
});

const slugCounts = new Map<string, number>();

function uniquePostSlug(title: string): string {
  let base = toSlug(title).slice(0, 96) || "post";
  if (!base) base = "post";
  const n = slugCounts.get(base) ?? 0;
  slugCounts.set(base, n + 1);
  if (n === 0) return base;
  return `${base}-${n + 1}`;
}

const categoryIdByTitle = new Map(categoryDocs.map((c) => [c.title, c._id]));

const authorIdByName = new Map(authorDocs.map((a) => [a.name, a._id]));

const blogDocs = blogPosts.map((post, index) => {
  const slug = uniquePostSlug(post.title);
  const excerpt = ensureExcerpt(post.excerpt);
  const catId = categoryIdByTitle.get(post.category);
  if (!catId) {
    throw new Error(`Missing category document for: ${post.category}`);
  }
  const authorId = post.author
    ? authorIdByName.get(post.author)
    : authorIdByName.get(defaultAuthorName);
  if (!authorId) {
    throw new Error(`Missing author for post: ${post.title}`);
  }

  const published = new Date(Date.UTC(2024, 0, 1 + index, 12, 0, 0));

  return {
    _id: `blog-static-${slug}`,
    _type: "blogPost" as const,
    title: post.title,
    slug: { _type: "slug" as const, current: slug },
    excerpt,
    category: { _type: "reference" as const, _ref: catId },
    author: { _type: "reference" as const, _ref: authorId },
    publishedAt: published.toISOString(),
    seoTitle: post.title,
    seoDescription: excerpt.slice(0, 160),
    body: [
      blockParagraph(`body-${index}-a`, excerpt),
      blockParagraph(
        `body-${index}-b`,
        "This entry was generated from the Heaptrace marketing site blog listing. Replace this placeholder body in Sanity Studio with full article content, images, and formatting as you publish.",
      ),
    ],
  };
});

const lines: string[] = [];
for (const d of categoryDocs) lines.push(JSON.stringify(d));
for (const d of authorDocs) lines.push(JSON.stringify(d));
for (const d of blogDocs) lines.push(JSON.stringify(d));

const outFile = join(cwd, "sanity/seed/blog-from-static.ndjson");
writeFileSync(outFile, `${lines.join("\n")}\n`, "utf8");

console.log(
  `Wrote ${categoryDocs.length} categories, ${authorDocs.length} authors, ${blogDocs.length} posts → ${outFile}`,
);
