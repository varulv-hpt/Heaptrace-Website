import type { StaticImageData } from "next/image";
import { ourWorkBannerBackgroundStyle } from "./ourWorkBannerStyle";

type PageBannerProps = {
  title: string;
  description: string;
  ariaLabel?: string;
  backgroundImage?: StaticImageData | string;
};

export default function PageBanner({
  title,
  description,
  ariaLabel,
  backgroundImage,
}: PageBannerProps) {
  const backgroundStyle = ourWorkBannerBackgroundStyle(backgroundImage);

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
