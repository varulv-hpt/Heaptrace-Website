export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-12'

const rawDataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const SANITY_PROJECT_ID_REGEX = /^[a-z0-9-]+$/
const SANITY_DATASET_REGEX = /^[a-z0-9_]+$/

export const dataset = SANITY_DATASET_REGEX.test(rawDataset || '')
  ? rawDataset
  : 'production'
export const projectId = SANITY_PROJECT_ID_REGEX.test(rawProjectId || '')
  ? rawProjectId
  : 'demo-project-id'
