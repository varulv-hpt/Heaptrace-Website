/**
 * Horizontal rhythm for marketing sections — matches `HomeHeroSection`.
 * Do not pair `base-container-wrapper` with `w-container` here (legacy shell uses narrower max-width).
 */
export const SECTION_OUTER_PAD_CLASS = "px-[0.9375rem]";

/** Main content width: max-width 84.375rem (1350px), gutter px-6 (24px). */
export const SECTION_PAGE_CONTAINER_CLASS =
  "base-container-wrapper relative mx-auto w-full max-w-[84.375rem] px-6";

/** Primary text column — aligns headings/body with the hero headline block. */
export const SECTION_TEXT_BLOCK_CLASS =
  "flex w-full max-w-[40.6875rem] flex-col items-start gap-4";

/** Full-width copy stack inside the page container (no hero column max-width). */
export const SECTION_FULL_WIDTH_STACK_CLASS =
  "flex w-full min-w-0 flex-col items-start gap-4";
