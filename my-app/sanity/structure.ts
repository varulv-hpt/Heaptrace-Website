import type { StructureResolver } from "sanity/structure";

/**
 * Flat list so “Work / Portfolio” is always visible at the top level of Studio.
 * (Nested `documentTypeList` can fail to resolve in some embedded-studio setups.)
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Heaptrace CMS")
    .items([
      S.documentTypeListItem("workProject").title("Portfolio — Work projects"),
      S.divider(),
      S.documentTypeListItem("blogPost").title("Blog — Posts"),
      S.documentTypeListItem("category").title("Blog — Categories"),
      S.documentTypeListItem("author").title("Blog — Authors"),
      S.divider(),
      S.documentTypeListItem("contactSubmission").title("Contact Submissions"),
    ]);
