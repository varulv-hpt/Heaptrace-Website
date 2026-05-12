"use client";

import Image from "next/image";
import LOGO_URL from "@/app/assets/ht/ht-logo.svg";

/**
 * Webflow-captured loader logo frame (`ht-loader-container` + `#page-logo`).
 * Sizing uses rem equivalents of the reference layout (178×116 outer, 178×33 logo row)
 * — not hardcoded runtime px from DevTools.
 */
export type HtLoaderLogoContainerProps = {
  className?: string;
  pageLogoClassName?: string;
  priority?: boolean;
};

export default function HtLoaderLogoContainer({
  className = "",
  pageLogoClassName = "",
  priority = true,
}: HtLoaderLogoContainerProps) {
  return (
    <div
      className={[
        "ht-loader-container ai-style-change-2 relative box-border",
        "flex justify-center font-sans text-base font-normal leading-none",
        "text-[rgb(76,76,78)]",
        /* Reference footprint: 178×116 → 11.125rem × 7.25rem; fluid cap on narrow viewports */
        "h-[7.25rem] w-[min(100%,11.125rem)] max-w-full shrink-0",
        /* Captured responsive: only cursor changed at ≤1440/1280/991/768 — equivalent to default auto */
        "cursor-auto",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        id="page-logo"
        className={[
          "div-block-62 relative box-border",
          "flex h-full w-full items-center justify-center",
          pageLogoClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={LOGO_URL}
          alt=""
          width={178}
          height={33}
          priority={priority}
          sizes="(max-width: 768px) 90vw, 11.125rem"
          className={[
            "inline-block max-w-full overflow-hidden object-fill",
            "h-auto w-full [transform:matrix(1,0,0,1,0,0)]",
            "aspect-[178/33]",
          ].join(" ")}
        />
      </div>
    </div>
  );
}
