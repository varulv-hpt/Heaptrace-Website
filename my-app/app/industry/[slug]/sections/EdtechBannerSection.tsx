import bannerImage from "@/app/assets/banner/Edtech.webp";
import IndustryPageBanner from "../components/IndustryPageBanner";

export default function EdtechBannerSection() {
  return (
    <IndustryPageBanner
      title="EdTech"
      description="We specialize in creating innovative EdTech solutions that transform the learning experience. From custom e-learning platforms and AI-powered personalized learning to virtual classrooms and mobile-friendly solutions, we help educational institutions and training organizations deliver engaging, effective, and scalable education."
      backgroundImage={bannerImage}
    />
  );
}
