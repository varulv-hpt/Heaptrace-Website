import bannerImage from "@/app/assets/banner/Edtech.webp";
import PageBanner from "@/app/_shared/elements/PageBanner";

export default function EdtechBannerSection() {
  return (
    <PageBanner
      title="EdTech"
      description="We specialize in creating innovative EdTech solutions that transform the learning experience. From custom e-learning platforms and AI-powered personalized learning to virtual classrooms and mobile-friendly solutions, we help educational institutions and training organizations deliver engaging, effective, and scalable education."
      backgroundImage={bannerImage}
    />
  );
}
