import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { WorkProjectDetail } from "@/lib/sanity/types";
import PortableTextRenderer from "@/components/shared/PortableTextRenderer";
import ConnectSection from "@/components/shared/ConnectSection";
import "./project-detail.css";

type NavProject = { title: string; href: string };

type ProjectDetailSectionProps = {
  project: WorkProjectDetail;
  prevProject: NavProject | null;
  nextProject: NavProject | null;
};

export default function ProjectDetailSection({
  project,
  prevProject,
  nextProject,
}: ProjectDetailSectionProps) {
  const heroSrc = project.imageUrl;

  return (
    <article className="project-case-study">
      {/* Same banner treatment as service detail pages (globals: .service-details-banner.our-services) */}
      <section
        className="section service-details-banner our-services project-case-study__banner"
        aria-label="Project overview"
      >
        <div className="project-case-study__shell project-case-study__banner-inner">
          <nav className="project-case-study__breadcrumb" aria-label="Breadcrumb">
            <Link href="/portfolio">← Back to Work</Link>
          </nav>
          <div className="title-banner-wraper-flex">
            <h1 className="text-white">{project.title}</h1>
            <p className="title-description-white-about">{project.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Gallery — primary cover + inline images come from Portable Text */}
      {heroSrc ? (
        <section className="project-case-study__gallery-section" aria-label="Project gallery">
          <div className="project-case-study__shell">
            <figure className="project-case-study__gallery-figure">
              <Image
                src={heroSrc}
                alt=""
                width={1174}
                height={734}
                className="project-case-study__gallery-img"
                sizes="(max-width: 1174px) 100vw, 1174px"
                priority
              />
            </figure>
          </div>
        </section>
      ) : null}

      {project.body.length > 0 ? (
        <section className="project-case-study__article-section" aria-label="Case study content">
          <div className="project-case-study__shell project-case-study__shell--article">
            <div className="project-case-study__body project-detail-body">
              <PortableTextRenderer value={project.body} variant="project" />
            </div>
          </div>
        </section>
      ) : null}

      <nav className="project-case-study__pager" aria-label="Adjacent projects">
        <div className="project-case-study__shell">
          <div className="project-case-study__pager-inner">
            {prevProject ? (
              <Link href={prevProject.href} className="project-case-study__pager-link">
                <ChevronLeft className="project-case-study__pager-arrow" aria-hidden />
                <span className="project-case-study__pager-text">
                  <span className="project-case-study__pager-sub">Prev Project</span>
                  <span className="project-case-study__pager-title">{prevProject.title}</span>
                </span>
              </Link>
            ) : (
              <span className="project-case-study__pager-empty" />
            )}
            {nextProject ? (
              <Link
                href={nextProject.href}
                className="project-case-study__pager-link project-case-study__pager-link--next"
              >
                <span className="project-case-study__pager-text">
                  <span className="project-case-study__pager-sub">Next Project</span>
                  <span className="project-case-study__pager-title">{nextProject.title}</span>
                </span>
                <ChevronRight className="project-case-study__pager-arrow" aria-hidden />
              </Link>
            ) : (
              <span className="project-case-study__pager-empty" />
            )}
          </div>
        </div>
      </nav>

      <section
        className="project-case-study__transform"
        aria-labelledby="project-transform-heading"
      >
        <div className="project-case-study__shell project-case-study__shell--narrow-center">
          <h2 id="project-transform-heading" className="project-case-study__transform-title">
            Transform your business with expert guidance. Schedule a consultation today!
          </h2>
          <Link href="/contact-us" className="project-case-study__transform-btn">
            Contact Us
          </Link>
        </div>
      </section>

      <div className="project-case-study__connect">
        <ConnectSection variant="default" />
      </div>
    </article>
  );
}
