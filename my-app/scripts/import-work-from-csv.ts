/**
 * Generates sanity/seed/work-from-csv.ndjson from
 *   app/portfolio/data/heaptrace - Projects.csv (Webflow CMS export)
 *
 * Run from my-app:
 *   npm run generate:work-csv
 *
 * Then import with:
 *   npm run seed:work-csv
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { parse as parseCsv } from "csv-parse/sync";

type CsvRow = Record<string, string>;

const ROOT = process.cwd();
const CSV_PATH = join(ROOT, "app/portfolio/data/heaptrace - Projects.csv");
const OUT_PATH = join(ROOT, "sanity/seed/work-from-csv.ndjson");

const CATEGORY_SLUG_TO_TITLE: Record<string, string> = {
  ecommerce: "Ecommerce",
  insurance: "Insurance",
  internet: "Internet",
  "transportation-shipping": "Transportation & Shipping",
  "security-laws": "Security & Laws",
  fintech: "FinTech & Blockchain",
  "internet-of-things-iot": "Internet of Things (IoT)",
  "adtech-marketing": "AdTech & Marketing",
  legal: "Legal",
  "e-learning": "E-Learning",
  "data-engineering": "Data Engineering",
  crm: "CRM",
  "generative-ai": "Generative AI",
  healthcare: "Healthcare",
};

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 120);
}

function splitList(value: string | undefined, separators: RegExp): string[] {
  if (!value) return [];
  return value
    .split(separators)
    .map((v) => v.trim())
    .filter(Boolean);
}

function parseDateOnly(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const date = new Date(value.trim());
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString().slice(0, 10);
}

function boolFrom(value: string | undefined): boolean {
  return (value ?? "").trim().toLowerCase() === "true";
}

function normalizeExcerpt(value: string | undefined, title: string): string {
  const raw = (value ?? "").trim();
  const singleLine = raw.replace(/\s+/g, " ");
  if (singleLine.length >= 20) return singleLine;
  if (singleLine.length > 0) return `${singleLine} Read more in this project case study.`;
  return `${title} — Heaptrace portfolio case study.`;
}

function chooseCategory(row: CsvRow): string {
  const fromCategories = splitList(row["Categories"], /;/g).map((v) => v.toLowerCase());
  const fallback = (row["Category (Don't Use This)"] ?? "").trim().toLowerCase();
  const ordered = [...fromCategories, fallback].filter(Boolean);

  for (const slug of ordered) {
    const mapped = CATEGORY_SLUG_TO_TITLE[slug];
    if (mapped) return mapped;
  }
  return "Generative AI";
}

function collectTags(row: CsvRow, categoryTitle: string): string[] {
  const categoryTags = splitList(row["Categories"], /;/g)
    .map((slug) => CATEGORY_SLUG_TO_TITLE[slug.trim().toLowerCase()] ?? "")
    .filter(Boolean);

  const serviceTags = splitList(row["Services"], /,/g);
  const tags = ["All Projects", categoryTitle, ...categoryTags, ...serviceTags];
  return Array.from(new Set(tags));
}

function main(): void {
  const rawCsv = readFileSync(CSV_PATH, "utf8");
  const rows = parseCsv(rawCsv, {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
    bom: true,
    trim: false,
  }) as CsvRow[];

  console.log(`Read ${rows.length} CSV rows`);

  const usedSlugs = new Map<string, number>();
  const nextUniqueSlug = (base: string): string => {
    const normalized = toSlug(base) || "project";
    const count = usedSlugs.get(normalized) ?? 0;
    usedSlugs.set(normalized, count + 1);
    return count === 0 ? normalized : `${normalized}-${count + 1}`;
  };

  let skipped = 0;
  const docs = rows
    .map((row) => {
      if (boolFrom(row["Archived"]) || boolFrom(row["Draft"])) {
        skipped++;
        return null;
      }

      const title = (row["Name"] ?? "").trim();
      if (!title) {
        skipped++;
        return null;
      }

      const slug = nextUniqueSlug((row["Slug"] ?? "").trim() || title);
      const category = chooseCategory(row);
      const excerpt = normalizeExcerpt(row["Post Summary"], title);
      const completedDate =
        parseDateOnly(row["Published On"]) ||
        parseDateOnly(row["Updated On"]) ||
        parseDateOnly(row["Created On"]);

      return {
        _id: `workProject-${slug}`,
        _type: "workProject" as const,
        title,
        slug: { _type: "slug" as const, current: slug },
        excerpt,
        category,
        tags: collectTags(row, category),
        ...(row["Client"]?.trim() ? { clientName: row["Client"].trim() } : {}),
        ...(completedDate ? { completedDate } : {}),
        seoTitle: title,
        seoDescription: excerpt.slice(0, 160),
      };
    })
    .filter((doc): doc is NonNullable<typeof doc> => doc !== null);

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, `${docs.map((d) => JSON.stringify(d)).join("\n")}\n`, "utf8");
  console.log(`Wrote ${docs.length} workProject docs (skipped ${skipped}) -> ${OUT_PATH}`);
}

main();
