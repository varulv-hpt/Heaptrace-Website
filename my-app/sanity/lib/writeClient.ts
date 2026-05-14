import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/**
 * Server-only write client.
 * NEVER import this in client components — it uses the secret SANITY_API_TOKEN.
 */
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
