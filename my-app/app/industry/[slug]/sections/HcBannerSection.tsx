import bannerImage from "@/app/assets/banner/industries/Healthcare.webp";
import IndustryPageBanner from "../components/IndustryPageBanner";

export default function HcBannerSection() {
  return (
    <IndustryPageBanner
      title="Healthcare Technology"
      description="Leverage cutting-edge technology to enhance patient care, streamline operations, and ensure compliance with healthcare regulations. Our tailored IT solutions are designed to meet the unique needs of healthcare organizations."
      backgroundImage={bannerImage}
    />
  );
}
