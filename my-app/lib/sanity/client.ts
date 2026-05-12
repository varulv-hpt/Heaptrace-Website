import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2026-05-12";

const SANITY_PROJECT_ID_REGEX = /^[a-z0-9-]+$/;
const SANITY_DATASET_REGEX = /^[a-z0-9_]+$/;

const hasValidProjectId = Boolean(
  projectId && SANITY_PROJECT_ID_REGEX.test(projectId),
);
const hasValidDataset = Boolean(dataset && SANITY_DATASET_REGEX.test(dataset));

export const isSanityConfigured = hasValidProjectId && hasValidDataset;

export function getSanityClient() {
  if (!isSanityConfigured) {
    throw new Error(
      "Sanity is not configured. Set valid NEXT_PUBLIC_SANITY_PROJECT_ID (lowercase letters, numbers, dashes) and NEXT_PUBLIC_SANITY_DATASET.",
    );
  }

  return createClient({
    projectId: projectId!,
    dataset: dataset!,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_READ_TOKEN,
    perspective: "published",
  });
}
