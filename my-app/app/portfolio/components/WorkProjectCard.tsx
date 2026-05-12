import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkListItem } from "@/lib/sanity/types";

type WorkProjectCardProps = {
  project: WorkListItem;
};

export default function WorkProjectCard({ project }: WorkProjectCardProps) {
  return (
    <article className="project-item-inner-block flex h-full min-w-0 w-full flex-col overflow-hidden rounded-2xl border border-[#dce3ea] bg-white shadow-[0_12px_28px_rgba(20,25,45,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(20,25,45,0.14)]">
      <Link href={project.href} className="block w-full shrink-0">
        <div className="relative aspect-[4/3] w-full max-w-full overflow-hidden bg-[#f1f4f8]">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt=""
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 origin-top hover:scale-[1.03]"
            />
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#213c3a] via-[#2d4a47] to-[#60d7ad]"
              aria-hidden
            />
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#4dac8a]">{project.category}</p>
        <Link href={project.href} className="group inline-flex items-start gap-2">
          <h3 className="text-[22px] font-semibold leading-[1.35] text-[#1f2937] transition-colors group-hover:text-[#4dac8a]">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#4dac8a] opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
        {project.excerpt ? (
          <p className="mt-3 line-clamp-4 text-sm leading-[22.656px] text-[#5e5e60]">{project.excerpt}</p>
        ) : null}
      </div>
    </article>
  );
}
