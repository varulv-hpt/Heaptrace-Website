import bannerImage from "@/app/assets/banner/Blockchain.jpg";
import PageBanner from "@/app/_shared/elements/PageBanner";

export default function BlockchainBannerSection() {
  return (
    <PageBanner
      title="Blockchain Industry Solutions"
      description="Harness the power of blockchain to drive transparency, enhance security, and streamline business processes. Our custom blockchain solutions are built to support industries seeking innovation, trust, and operational efficiency."
      backgroundImage={bannerImage}
    />
  );
}
