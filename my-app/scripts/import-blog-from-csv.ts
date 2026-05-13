/**
 * Generates sanity/seed/blog-from-csv.ndjson from
 *   app/blog/data/heaptrace - Blog Posts.csv (Webflow CMS export)
 *
 * Run from my-app:
 *   npm run generate:blog-csv
 *
 * Then import with:
 *   npx sanity dataset import sanity/seed/blog-from-csv.ndjson production --replace
 *
 * Or one-shot:
 *   npm run seed:blog-csv
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { parse as parseCsv } from "csv-parse/sync";
import * as cheerio from "cheerio";
import type { AnyNode, Element } from "domhandler";

// ---------- types -------------------------------------------------

type PortableSpan = {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
};

type MarkDef = {
  _key: string;
  _type: "link";
  href: string;
};

type PortableBlock = {
  _key: string;
  _type: "block";
  style: "normal" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  markDefs: MarkDef[];
  children: PortableSpan[];
  listItem?: "bullet" | "number";
  level?: number;
};

type HtmlEmbed = {
  _key: string;
  _type: "htmlEmbed";
  html: string;
};

type BodyNode = PortableBlock | HtmlEmbed;

const DEFAULT_CATEGORY_SLUG = "general";
const DEFAULT_CATEGORY_TITLE = "General";

type CsvRow = Record<string, string>;

// ---------- helpers -----------------------------------------------

const ROOT = process.cwd();
const CSV_PATH = join(ROOT, "app/blog/data/heaptrace - Blog Posts.csv");
const OUT_PATH = join(ROOT, "sanity/seed/blog-from-csv.ndjson");

let keyCounter = 0;
const nextKey = (prefix = "k") => `${prefix}${(keyCounter++).toString(36)}`;

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 96) || "post";
}

function titleCaseFromSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => {
      const upperSet = new Set([
        "ai",
        "api",
        "ar",
        "vr",
        "iot",
        "ui",
        "ux",
        "saas",
        "seo",
        "it",
        "ml",
        "ci",
        "cd",
        "qa",
        "kpi",
        "5g",
        "us",
        "uk",
      ]);
      if (upperSet.has(part)) return part.toUpperCase();
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&ldquo;/g, "\u201c")
    .replace(/&rdquo;/g, "\u201d")
    .replace(/&hellip;/g, "\u2026")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013");
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, " ");
}

function isElement(node: AnyNode): node is Element {
  return node.type === "tag";
}

// ---------- HTML → Portable Text conversion -----------------------

type InlineSpanRun = { text: string; marks: string[]; href?: string };

/**
 * Walk inline children (text, <strong>, <em>, <a>, <br>) and produce runs
 * of text with active marks. Block-level tags inside inline contexts are
 * treated as text to avoid losing content.
 */
function collectInlineRuns(
  $: cheerio.CheerioAPI,
  element: AnyNode,
  activeMarks: string[],
  activeHref: string | undefined,
  runs: InlineSpanRun[],
): void {
  if (element.type === "text") {
    const raw = element.data ?? "";
    const text = normalizeWhitespace(decodeHtmlEntities(raw));
    if (text) {
      runs.push({ text, marks: [...activeMarks], href: activeHref });
    }
    return;
  }

  if (!isElement(element)) return;

  const tag = element.tagName.toLowerCase();

  if (tag === "br") {
    runs.push({ text: "\n", marks: [...activeMarks], href: activeHref });
    return;
  }

  let nextMarks = activeMarks;
  let nextHref = activeHref;

  if (tag === "strong" || tag === "b") {
    if (!nextMarks.includes("strong")) nextMarks = [...nextMarks, "strong"];
  } else if (tag === "em" || tag === "i") {
    if (!nextMarks.includes("em")) nextMarks = [...nextMarks, "em"];
  } else if (tag === "u") {
    if (!nextMarks.includes("underline")) nextMarks = [...nextMarks, "underline"];
  } else if (tag === "code") {
    if (!nextMarks.includes("code")) nextMarks = [...nextMarks, "code"];
  } else if (tag === "a") {
    const href = ($(element).attr("href") ?? "").trim();
    if (href) nextHref = href;
  }

  for (const child of element.children ?? []) {
    collectInlineRuns($, child, nextMarks, nextHref, runs);
  }
}

function buildBlock(
  $: cheerio.CheerioAPI,
  element: Element,
  style: PortableBlock["style"],
  options: { listItem?: "bullet" | "number"; level?: number } = {},
): PortableBlock | null {
  const runs: InlineSpanRun[] = [];
  for (const child of element.children ?? []) {
    collectInlineRuns($, child, [], undefined, runs);
  }

  if (runs.length === 0) return null;

  const markDefs: MarkDef[] = [];
  const children: PortableSpan[] = [];

  for (const run of runs) {
    const finalMarks = [...run.marks];
    if (run.href) {
      const key = nextKey("m");
      markDefs.push({ _key: key, _type: "link", href: run.href });
      finalMarks.push(key);
    }
    children.push({
      _key: nextKey("s"),
      _type: "span",
      marks: finalMarks,
      text: run.text,
    });
  }

  // Trim leading/trailing whitespace-only spans
  while (children.length && !children[0].text.trim()) children.shift();
  while (children.length && !children[children.length - 1].text.trim()) children.pop();

  if (children.length === 0) return null;

  const block: PortableBlock = {
    _key: nextKey("b"),
    _type: "block",
    style,
    markDefs,
    children,
  };
  if (options.listItem) block.listItem = options.listItem;
  if (options.level !== undefined) block.level = options.level;
  return block;
}

function htmlStyleFor(tag: string): PortableBlock["style"] {
  switch (tag) {
    case "h1":
      return "h2"; // map h1 → h2 (page title is already h1)
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "blockquote":
      return "blockquote";
    default:
      return "normal";
  }
}

/** Strip inline media from HTML; cover image uses `coverImageUrl` only. Keeps figure text/captions. */
function stripInlineMediaFromHtml(html: string): string {
  if (!html || !html.trim()) return html;
  const $ = cheerio.load(`<div id="__mediaStrip">${html}</div>`, {
    xml: false,
  });
  const root = $("#__mediaStrip");
  root.find("picture, img, video, iframe, object, embed").remove();
  root.find("svg.w-richtext-figure-type-image").remove();
  root.find("figure").each((_, el) => {
    const $fig = $(el);
    const text = $fig
      .text()
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .trim();
    if (!text) $fig.remove();
  });
  return (root.html() ?? "").trim();
}

function processList(
  $: cheerio.CheerioAPI,
  listEl: Element,
  listType: "bullet" | "number",
  level: number,
  out: BodyNode[],
): void {
  for (const li of $(listEl).children("li").toArray()) {
    if (!isElement(li)) continue;

    // Pull text content (sans nested lists) into a list-item block
    const liClone = $(li).clone();
    liClone.find("ul, ol").remove();
    const tempLi = liClone[0] as Element;
    const block = buildBlock($, tempLi, "normal", { listItem: listType, level });
    if (block) out.push(block);

    // Recurse into nested lists
    for (const nested of $(li).children("ul, ol").toArray()) {
      if (!isElement(nested)) continue;
      const nestedType = nested.tagName.toLowerCase() === "ol" ? "number" : "bullet";
      processList($, nested, nestedType, level + 1, out);
    }
  }
}

function isRawHtmlEmbedContainer(el: Element): boolean {
  // Webflow exports raw HTML inside <div data-rt-embed-type='true'>…</div>
  if (el.tagName.toLowerCase() !== "div") return false;
  const attribs = el.attribs ?? {};
  return attribs["data-rt-embed-type"] === "true";
}

function htmlToPortable(html: string): BodyNode[] {
  if (!html || !html.trim()) return [];

  const cleanedHtml = stripInlineMediaFromHtml(html);
  if (!cleanedHtml) return [];

  const $ = cheerio.load(`<div id="__root">${cleanedHtml}</div>`, {
    xml: false,
  });
  const root = $("#__root")[0];
  if (!root || !isElement(root)) return [];

  const out: BodyNode[] = [];

  for (const node of root.children ?? []) {
    if (node.type === "text") {
      const text = normalizeWhitespace(decodeHtmlEntities(node.data ?? ""));
      if (!text.trim()) continue;
      out.push({
        _key: nextKey("b"),
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [{ _key: nextKey("s"), _type: "span", marks: [], text }],
      });
      continue;
    }

    if (!isElement(node)) continue;

    const tag = node.tagName.toLowerCase();

    // Raw HTML embed (Webflow inline HTML block)
    if (isRawHtmlEmbedContainer(node)) {
      const inner = $(node).html() ?? "";
      const trimmed = stripInlineMediaFromHtml(inner);
      if (trimmed) {
        out.push({
          _key: nextKey("h"),
          _type: "htmlEmbed",
          html: trimmed,
        });
      }
      continue;
    }

    if (tag === "p") {
      const block = buildBlock($, node, "normal");
      if (block) out.push(block);
      continue;
    }

    if (/^h[1-6]$/.test(tag)) {
      const block = buildBlock($, node, htmlStyleFor(tag));
      if (block) out.push(block);
      continue;
    }

    if (tag === "blockquote") {
      const block = buildBlock($, node, "blockquote");
      if (block) out.push(block);
      continue;
    }

    if (tag === "ul" || tag === "ol") {
      processList($, node, tag === "ol" ? "number" : "bullet", 1, out);
      continue;
    }

    if (tag === "figure") {
      // Images stripped upstream; keep caption text if any
      const captionEl = $(node).find("figcaption").first();
      const caption = decodeHtmlEntities(captionEl.text().trim());
      if (caption) {
        out.push({
          _key: nextKey("b"),
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            { _key: nextKey("s"), _type: "span", marks: [], text: caption },
          ],
        });
      }
      continue;
    }

    if (tag === "table") {
      const outer = $("<div></div>").append($(node).clone()).html() ?? "";
      const cleaned = stripInlineMediaFromHtml(outer);
      if (cleaned.trim()) {
        out.push({
          _key: nextKey("h"),
          _type: "htmlEmbed",
          html: cleaned,
        });
      }
      continue;
    }

    if (tag === "img") {
      continue;
    }

    if (tag === "div" || tag === "section" || tag === "article") {
      // Recurse into div wrappers — flatten children
      const inner = $(node).html() ?? "";
      if (inner.trim()) {
        const childNodes = htmlToPortable(inner);
        out.push(...childNodes);
      }
      continue;
    }

    if (tag === "hr") {
      // Skip horizontal rules (no native Portable Text equivalent in current schema)
      continue;
    }

    // Fallback: treat as inline content in a paragraph
    const block = buildBlock($, node, "normal");
    if (block) out.push(block);
  }

  return out;
}

// ---------- CSV parsing -------------------------------------------

function readCsvRows(): CsvRow[] {
  const raw = readFileSync(CSV_PATH, "utf8");
  // csv-parse handles RFC 4180 quoting + embedded newlines
  const rows: CsvRow[] = parseCsv(raw, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
    bom: true,
    trim: false,
  });
  return rows;
}

function parseDate(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const d = new Date(trimmed);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString();
}

function boolFrom(value: string | undefined): boolean {
  if (!value) return false;
  return value.trim().toLowerCase() === "true";
}

// ---------- main --------------------------------------------------

function main(): void {
  const rows = readCsvRows();

  console.log(`Read ${rows.length} CSV rows`);

  // 1. Categories — derived from the `Category` column (Webflow slug-style)
  const categorySlugs = new Set<string>([DEFAULT_CATEGORY_SLUG]);
  for (const row of rows) {
    const slug = (row["Category"] ?? "").trim();
    if (slug) categorySlugs.add(slug);
  }

  const categoryDocs = Array.from(categorySlugs).map((slug) => {
    const current = toSlug(slug);
    const title =
      current === DEFAULT_CATEGORY_SLUG
        ? DEFAULT_CATEGORY_TITLE
        : titleCaseFromSlug(slug);
    return {
      _id: `category-${current}`,
      _type: "category" as const,
      title,
      slug: { _type: "slug" as const, current },
    };
  });

  const categoryIdBySlug = new Map(
    categoryDocs.map((c) => [c.slug.current, c._id]),
  );

  // 2. Authors — derived from `Author Name` column. Default for missing.
  const defaultAuthor = { name: "Heaptrace Team", slug: "heaptrace-team" };

  type AuthorEntry = { name: string; slug: string; photoUrl?: string };
  const authorByName = new Map<string, AuthorEntry>();

  authorByName.set(defaultAuthor.name, {
    name: defaultAuthor.name,
    slug: defaultAuthor.slug,
  });

  for (const row of rows) {
    const name = (row["Author Name"] ?? "").trim();
    if (!name) continue;
    if (!authorByName.has(name)) {
      authorByName.set(name, {
        name,
        slug: toSlug(name),
        photoUrl: (row["Author Image"] ?? "").trim() || undefined,
      });
    } else {
      const existing = authorByName.get(name)!;
      if (!existing.photoUrl) {
        const photo = (row["Author Image"] ?? "").trim();
        if (photo) existing.photoUrl = photo;
      }
    }
  }

  const authorDocs = Array.from(authorByName.values()).map((a) => ({
    _id: `author-${a.slug}`,
    _type: "author" as const,
    name: a.name,
    slug: { _type: "slug" as const, current: a.slug },
    bio: `${a.name} contributes insights on Heaptrace blog topics spanning cloud, AI, product, and engineering.`,
    ...(a.photoUrl ? { photoUrl: a.photoUrl } : {}),
  }));

  const authorIdByName = new Map(
    authorDocs.map((a) => [a.name, a._id]),
  );

  // 3. Blog posts
  const usedSlugs = new Map<string, number>();
  function uniqueSlug(baseSlug: string): string {
    const base = toSlug(baseSlug) || "post";
    const n = usedSlugs.get(base) ?? 0;
    usedSlugs.set(base, n + 1);
    return n === 0 ? base : `${base}-${n + 1}`;
  }

  let skipped = 0;
  const blogDocs = rows
    .map((row) => {
      const title = (row["Name"] ?? "").trim();
      if (!title) {
        skipped++;
        return null;
      }
      if (boolFrom(row["Archived"])) {
        skipped++;
        return null;
      }

      const rawSlug = (row["Slug"] ?? "").trim();
      const slug = uniqueSlug(rawSlug || title);

      const summary = (row["Post Summary"] ?? "").trim();
      const excerpt =
        summary.length >= 20
          ? summary
          : `${summary} Read this article on the Heaptrace blog.`.trim();

      const categorySlugRaw = (row["Category"] ?? "").trim();
      const categoryRefId =
        categoryIdBySlug.get(
          categorySlugRaw
            ? toSlug(categorySlugRaw)
            : DEFAULT_CATEGORY_SLUG,
        ) ?? categoryIdBySlug.get(DEFAULT_CATEGORY_SLUG);

      const authorName = (row["Author Name"] ?? "").trim();
      const authorRefId =
        (authorName && authorIdByName.get(authorName)) ||
        authorIdByName.get(defaultAuthor.name);

      const bodyHtml = row["Post Body"] ?? "";
      // Reset key counter per-post so generated _keys are deterministic-ish
      // and don't grow without bound across posts; but globally unique within
      // the post which is what Sanity needs.
      const body = htmlToPortable(bodyHtml);
      if (body.length === 0) {
        // Fall back to a paragraph from the summary so `body` is never empty
        // (schema requires it).
        body.push({
          _key: nextKey("b"),
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: nextKey("s"),
              _type: "span",
              marks: [],
              text:
                excerpt ||
                "Read this article on the Heaptrace blog. Full content coming soon.",
            },
          ],
        });
      }

      const coverUrl =
        ((row["Main Image"] ?? "").trim() ||
          (row["Thumbnail image"] ?? "").trim()) ||
        undefined;

      return {
        _id: `blogPost-${slug}`,
        _type: "blogPost" as const,
        title,
        slug: { _type: "slug" as const, current: slug },
        excerpt,
        ...(coverUrl ? { coverImageUrl: coverUrl } : {}),
        featured: boolFrom(row["Featured?"]),
        ...(categoryRefId
          ? {
              category: {
                _type: "reference" as const,
                _ref: categoryRefId,
              },
            }
          : {}),
        ...(authorRefId
          ? {
              author: { _type: "reference" as const, _ref: authorRefId },
            }
          : {}),
        publishedAt:
          parseDate(row["Published On"]) ||
          parseDate(row["Updated On"]) ||
          parseDate(row["Created On"]) ||
          new Date().toISOString(),
        body,
        seoTitle: title,
        seoDescription: excerpt.slice(0, 160),
      };
    })
    .filter((d): d is NonNullable<typeof d> => d !== null);

  // 4. Write NDJSON
  const lines: string[] = [];
  for (const d of categoryDocs) lines.push(JSON.stringify(d));
  for (const d of authorDocs) lines.push(JSON.stringify(d));
  for (const d of blogDocs) lines.push(JSON.stringify(d));

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, `${lines.join("\n")}\n`, "utf8");

  console.log(
    `Wrote ${categoryDocs.length} categories, ${authorDocs.length} authors, ${blogDocs.length} posts (skipped ${skipped}) → ${OUT_PATH}`,
  );
}

main();
