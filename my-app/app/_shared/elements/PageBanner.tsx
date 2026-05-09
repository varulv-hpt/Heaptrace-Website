import type { StaticImageData } from "next/image";

type PageBannerProps = {
  title: string;
  description: string;
  ariaLabel?: string;
  backgroundImage?: StaticImageData | string;
};

const BASE_BANNER_GRADIENT =
  "linear-gradient(90deg, rgba(2, 11, 23, 0.92) 0%, rgba(3, 16, 30, 0.84) 45%, rgba(10, 82, 93, 0.42) 100%)";

export default function PageBanner({
  title,
  description,
  ariaLabel,
  backgroundImage,
}: PageBannerProps) {
  const resolvedImage =
    typeof backgroundImage === "string" ? backgroundImage : backgroundImage?.src;

  const backgroundStyle = resolvedImage
    ? { backgroundImage: `${BASE_BANNER_GRADIENT}, url(${resolvedImage})` }
    : { backgroundImage: BASE_BANNER_GRADIENT };

  return (
    <section
      aria-label={ariaLabel ?? `${title} banner`}
      className="section service-details-banner our-services"
      style={backgroundStyle}
    >
      <div className="mx-auto w-full max-w-[1350px] px-6 py-20 md:py-24">
        <div className="title-banner-wraper-flex">
          <h1 className="text-white">{title}</h1>
          <p className="title-description-white-about">{description}</p>
        </div>
      </div>
    </section>
  );
}
