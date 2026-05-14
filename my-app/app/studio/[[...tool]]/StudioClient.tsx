"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { useEffect, useState } from "react";

const SANITY_PROJECT_ID_REGEX = /^[a-z0-9-]+$/;
const SANITY_DATASET_REGEX = /^[a-z0-9_]+$/;

export default function StudioClient() {
  const [mounted, setMounted] = useState(false);
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const hasValidProjectId = Boolean(
    projectId && SANITY_PROJECT_ID_REGEX.test(projectId),
  );
  const hasValidDataset = Boolean(dataset && SANITY_DATASET_REGEX.test(dataset));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasValidProjectId || !hasValidDataset) {
    return (
      <main style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
        <h1 style={{ marginBottom: "0.75rem" }}>Sanity Studio is not configured</h1>
        <p style={{ marginBottom: "0.5rem" }}>
          Set valid environment variables and restart the Next.js server:
        </p>
        <pre
          style={{
            background: "#111",
            color: "#f5f5f5",
            padding: "1rem",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
          NEXT_PUBLIC_SANITY_PROJECT_ID=ups3wse4
          {"\n"}
          NEXT_PUBLIC_SANITY_DATASET=production
        </pre>
        <p style={{ marginTop: "0.75rem" }}>
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> must use only lowercase letters,
          numbers, and dashes.
        </p>
      </main>
    );
  }

  if (!mounted) {
    return null;
  }

  return <NextStudio config={config} />;
}
