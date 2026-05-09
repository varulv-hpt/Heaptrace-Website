import bannerBg from "@/app/assets/banner/Erp-industry.webp";
import IndustryPageBanner from "../components/IndustryPageBanner";

export default function ErpBannerSection() {
  return (
    <IndustryPageBanner
      title="ERP Solutions"
      description="ERP Solutions: Streamlining Operations Across Industries"
      backgroundImage={bannerBg}
    />
  );
}
