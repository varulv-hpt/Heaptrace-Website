/**
 * Pretty-prints one blogPost doc from the generated NDJSON for verification.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const target = process.argv[2] ?? "5g-the-next-big-step-in-global-connectivity";
const lines = readFileSync(
  join(ROOT, "sanity/seed/blog-from-csv.ndjson"),
  "utf8",
)
  .split("\n")
  .filter(Boolean);

for (const line of lines) {
  const doc = JSON.parse(line);
  if (doc._type !== "blogPost") continue;
  if (doc.slug?.current !== target) continue;
  console.log("Title:", doc.title);
  console.log("Slug:", doc.slug.current);
  console.log("Category ref:", doc.category?._ref);
  console.log("Author ref:", doc.author?._ref);
  console.log("Cover URL:", doc.coverImageUrl);
  console.log("Featured:", doc.featured);
  console.log("Published:", doc.publishedAt);
  console.log("Body blocks:", doc.body?.length);
  console.log("---");
  for (const block of doc.body ?? []) {
    if (block._type === "block") {
      const text = (block.children ?? [])
        .map((c: { text?: string; marks?: string[] }) => {
          const m = (c.marks ?? []).filter((mark: string) => ["strong", "em"].includes(mark)).join(",");
          return m ? `[${m}]${c.text}[/${m}]` : c.text;
        })
        .join("");
      const list = block.listItem ? `list:${block.listItem}(L${block.level ?? 1}) ` : "";
      console.log(`  ${block.style.padEnd(10)} ${list}${text}`);
    } else if (block._type === "imageEmbed") {
      console.log(`  IMG        ${block.url}`);
    } else if (block._type === "htmlEmbed") {
      console.log(`  HTML       ${block.html.slice(0, 60)}…`);
    }
  }
  process.exit(0);
}

console.error("Not found:", target);
process.exit(1);
