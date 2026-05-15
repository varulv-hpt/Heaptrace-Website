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

export const writeClient = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn: false, // Never use CDN for writing
      token: process.env.SANITY_API_TOKEN, // Write token
    })
  : null;