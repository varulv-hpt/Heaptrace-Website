import { defineCliConfig } from "sanity/cli";

const rawProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  process.env.SANITY_STUDIO_PROJECT_ID ??
  "";
const rawDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ??
  process.env.SANITY_STUDIO_DATASET ??
  "production";
const SANITY_PROJECT_ID_REGEX = /^[a-z0-9-]+$/;
const SANITY_DATASET_REGEX = /^[a-z0-9_]+$/;
const projectId = SANITY_PROJECT_ID_REGEX.test(rawProjectId)
  ? rawProjectId
  : "demo-project-id";
const dataset = SANITY_DATASET_REGEX.test(rawDataset) ? rawDataset : "production";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
});
