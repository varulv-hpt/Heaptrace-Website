import bannerBg from "@/app/assets/banner/Edp-industry.webp";
import IndustryPageBanner from "../components/IndustryPageBanner";

export default function EdpBannerSection() {
  return (
    <IndustryPageBanner
      title="EDP Solutions"
      description="We specialize in Electronic Data Processing (EDP) solutions that empower businesses to efficiently manage, process, and analyze large volumes of data. EDP systems automate the collection, storage, and processing of data, helping businesses streamline operations, reduce errors, and make data-driven decisions."
      backgroundImage={bannerBg}
    />
  );
}
