import bannerImage from "@/app/assets/banner/industries/Blockchain.jpg";
import IndustryPageBanner from "../components/IndustryPageBanner";

export default function BlockchainBannerSection() {
  return (
    <IndustryPageBanner
      title="Blockchain Industry Solutions"
      description="Harness the power of blockchain to drive transparency, enhance security, and streamline business processes. Our custom blockchain solutions are built to support industries seeking innovation, trust, and operational efficiency."
      backgroundImage={bannerImage}
    />
  );
}
