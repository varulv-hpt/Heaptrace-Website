import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_PROJECT_ID_REGEX = /^[a-z0-9-]+$/;
const SANITY_DATASET_REGEX = /^[a-z0-9_]+$/;
const hasValidProjectId = Boolean(
  projectId && SANITY_PROJECT_ID_REGEX.test(projectId),
);
const hasValidDataset = Boolean(dataset && SANITY_DATASET_REGEX.test(dataset));

const builder =
  hasValidProjectId && hasValidDataset
    ? createImageUrlBuilder({
        projectId: projectId!,
        dataset: dataset!,
      })
    : null;

export function urlForImage(source: any) {
  return builder ? builder.image(source) : null;
}
