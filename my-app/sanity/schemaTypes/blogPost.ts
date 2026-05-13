import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPostType = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(10),
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
      validation: (rule) => rule.required().min(20),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "coverImageUrl",
      title: "Cover Image URL (external)",
      description:
        "External image URL (e.g. CDN). Used as a fallback when no Sanity Cover Image is uploaded.",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
        defineArrayMember({
          type: "object",
          name: "imageEmbed",
          title: "External Image",
          fields: [
            { name: "url", title: "Image URL", type: "url" },
            { name: "alt", title: "Alt Text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
          preview: {
            select: { title: "alt", subtitle: "url", media: "url" },
          },
        }),
        defineArrayMember({
          type: "object",
          name: "htmlEmbed",
          title: "Raw HTML Embed",
          description:
            "Raw HTML block (e.g. comparison tables from imported content). Rendered via dangerouslySetInnerHTML.",
          fields: [
            { name: "html", title: "HTML", type: "text", rows: 8 },
          ],
          preview: {
            select: { title: "html" },
            prepare: ({ title }: { title?: string }) => ({
              title: "HTML Embed",
              subtitle: title ? `${title.slice(0, 80)}…` : undefined,
            }),
          },
        }),
      ],
      validation: (rule) => rule.required(),
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
      subtitle: "category.title",
      media: "coverImage",
    },
  },
});
