import type { StaticImageData } from "next/image";
import type { CSSProperties } from "react";

/** Hero overlay used on `/portfolio` (PageBanner) and project case studies — keep in sync everywhere. */
export const OUR_WORK_BANNER_GRADIENT =
  "linear-gradient(90deg, rgba(2, 11, 23, 0.92) 0%, rgba(3, 16, 30, 0.84) 45%, rgba(10, 82, 93, 0.42) 100%)";

export function ourWorkBannerBackgroundStyle(
  backgroundImage?: StaticImageData | string,
): CSSProperties {
  const resolved =
    typeof backgroundImage === "string"
      ? encodeURI(backgroundImage)
      : backgroundImage?.src;

  if (!resolved) {
    return { backgroundImage: OUR_WORK_BANNER_GRADIENT };
  }

  return { backgroundImage: `${OUR_WORK_BANNER_GRADIENT}, url("${resolved}")` };
}
