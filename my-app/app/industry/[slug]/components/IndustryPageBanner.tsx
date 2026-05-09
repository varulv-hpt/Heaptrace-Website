import type { StaticImageData } from "next/image";
import PageBanner from "@/components/shared/PageBanner";

type IndustryPageBannerProps = {
  title: string;
  description: string;
  backgroundImage: StaticImageData | string;
};

export default function IndustryPageBanner({
  title,
  description,
  backgroundImage,
}: IndustryPageBannerProps) {
  return (
    <PageBanner
      title={title}
      description={description}
      backgroundImage={backgroundImage}
    />
  );
}
