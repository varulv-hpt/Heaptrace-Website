import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkProject } from "../data/workProjects";

type WorkProjectCardProps = {
  project: WorkProject;
};

export default function WorkProjectCard({ project }: WorkProjectCardProps) {
  return (
    <article className="project-item-inner-block overflow-hidden rounded-2xl border border-[#dce3ea] bg-white shadow-[0_12px_28px_rgba(20,25,45,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(20,25,45,0.14)]">
      <Link href={project.href} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#4dac8a]">{project.category}</p>
        <Link href={project.href} className="group inline-flex items-start gap-2">
          <h3 className="text-[22px] font-semibold leading-[1.35] text-[#1f2937] transition-colors group-hover:text-[#4dac8a]">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#4dac8a] opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </div>
    </article>
  );
}
