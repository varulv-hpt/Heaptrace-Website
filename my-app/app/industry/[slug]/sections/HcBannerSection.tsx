import bannerImage from "@/app/assets/banner/services-banner.png";
import PageBanner from "@/app/_shared/elements/PageBanner";

export default function HcBannerSection() {
  return (
    <PageBanner
      title="Healthcare Technology"
      description="Leverage cutting-edge technology to enhance patient care, streamline operations, and ensure compliance with healthcare regulations. Our tailored IT solutions are designed to meet the unique needs of healthcare organizations."
      backgroundImage={bannerImage}
    />
  );
}
