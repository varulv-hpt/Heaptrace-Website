"use client";

import Image from "next/image";
import LOGO_URL from "@/app/assets/ht/ht-logo.svg";
import linearBgTexture from "@/app/assets/banner/linear-bg.webp";
import HtLoaderLogoContainer from "@/components/preloader/HtLoaderLogoContainer";

const LOGO_WIDTH = 170;
const LOGO_HEIGHT = 42;

export type HtPreloaderLogoProps = {
  className?: string;
  /** Smaller mark above the wordmark; full size in `#page-logo` with clip animation */
  variant?: "band" | "loader";
  priority?: boolean;
};

/** Shared HeapTrace logo SVG for the preloader wordmark row and ht-loader strip. */
export function HtPreloaderLogo({
  className,
  variant = "loader",
  priority = true,
}: HtPreloaderLogoProps) {
  const isBand = variant === "band";
  return (
    <Image
      src={LOGO_URL}
      alt={isBand ? "" : "HeapTrace Logo"}
      width={isBand ? Math.round(LOGO_WIDTH * 0.72) : LOGO_WIDTH}
      height={isBand ? Math.round(LOGO_HEIGHT * 0.72) : LOGO_HEIGHT}
      priority={priority}
      className={className}
      aria-hidden={isBand}
    />
  );
}

export type HtPreloaderProps = {
  visibilityClass: string;
  shouldShow: boolean;
};

export default function HtPreloader({
  visibilityClass,
  shouldShow,
}: HtPreloaderProps) {
  return (
    <section
      id="ht-preloader"
      className={`ht-preloader ${visibilityClass}`}
      aria-hidden={!shouldShow}
      style={{
        backgroundColor: "#000",
        backgroundImage: `url(${linearBgTexture.src})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ht-preloader-stage">
        <HtLoaderLogoContainer />
      </div>
    </section>
  );
}
