import { defineArrayMember, defineField, defineType } from "sanity";

/** Mirrors portfolio filter chips in the Next.js app */
const WORK_CATEGORIES = [
  "Ecommerce",
  "Insurance",
  "Internet",
  "Transportation & Shipping",
  "Security & Laws",
  "FinTech & Blockchain",
  "Internet of Things (IoT)",
  "AdTech & Marketing",
  "Legal",
  "E-Learning",
  "Data Engineering",
  "CRM",
  "Generative AI",
  "Healthcare",
] as const;

/** Portable text block — headings, lists, bold/italic, links (same capabilities as blog body). */
const caseStudyBlock = defineArrayMember({
  type: "block",
  styles: [
    { title: "Normal", value: "normal" },
    { title: "Heading 2", value: "h2" },
    { title: "Heading 3", value: "h3" },
  ],
  lists: [
    { title: "Bullet", value: "bullet" },
    { title: "Numbered", value: "number" },
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
    ],
    annotations: [
      {
        name: "link",
        type: "object",
        title: "Link",
        fields: [
          {
            name: "href",
            type: "url",
            title: "URL",
            validation: (rule: import("sanity").Rule) =>
              rule.uri({
                allowRelative: true,
                scheme: ["http", "https", "mailto", "tel"],
              }),
          },
        ],
      },
    ],
  },
});

export const workProjectType = defineType({
  name: "workProject",
  title: "Work / Portfolio Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(5),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 120 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary for portfolio cards and SEO.",
      validation: (rule) => rule.required().min(20),
    }),
    defineField({
      name: "body",
      title: "Case study body",
      type: "array",
      description:
        "Full case study copy (optional). Add headings, lists, inline images, and links. Leave empty until content is ready — the site still lists the project.",
      of: [
        caseStudyBlock,
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Optional until asset is ready — grid cards use a placeholder when empty. Add before publishing to production.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: WORK_CATEGORIES.map((title) => ({ title, value: title })),
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      initialValue: ["All Projects"],
    }),
    defineField({
      name: "clientName",
      title: "Client",
      type: "string",
      description: "Optional — used for SEO or future meta displays.",
    }),
    defineField({
      name: "completedDate",
      title: "Project date",
      type: "date",
      description: "Optional.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
