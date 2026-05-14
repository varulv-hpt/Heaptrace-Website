import { defineField, defineType } from "sanity";

export const contactSubmissionType = defineType({
  name: "contactSubmission",
  title: "Contact Submission",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 6,
      validation: (rule) => rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "in_progress" },
          { title: "Responded", value: "responded" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    }),
    defineField({
      name: "internalNotes",
      title: "Internal Notes",
      type: "text",
      rows: 4,
      description: "Internal notes about this submission (not visible to the submitter).",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      date: "submittedAt",
      status: "status",
    },
    prepare({ title, subtitle, date, status }) {
      const statusEmoji =
        status === "new"
          ? "🆕"
          : status === "in_progress"
            ? "🔄"
            : status === "responded"
              ? "✅"
              : "📦";
      return {
        title: `${statusEmoji} ${title ?? "Unnamed"}`,
        subtitle: `${subtitle ?? ""}${date ? ` · ${new Date(date).toLocaleDateString()}` : ""}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest first",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
});
