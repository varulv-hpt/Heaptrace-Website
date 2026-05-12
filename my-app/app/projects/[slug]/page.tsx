import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getWorkProjectBySlug, getWorkProjects } from "@/lib/sanity/queries";
import ProjectDetailSection from "./ProjectDetailSection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getWorkProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getWorkProjectBySlug(slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.excerpt,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([getWorkProjectBySlug(slug), getWorkProjects()]);

  if (!project) {
    notFound();
  }

  const idx = allProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    idx > 0 ? { title: allProjects[idx - 1].title, href: allProjects[idx - 1].href } : null;
  const nextProject =
    idx >= 0 && idx < allProjects.length - 1
      ? { title: allProjects[idx + 1].title, href: allProjects[idx + 1].href }
      : null;

  return (
    <ProjectDetailSection project={project} prevProject={prevProject} nextProject={nextProject} />
  );
}
