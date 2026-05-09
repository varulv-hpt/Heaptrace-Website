import bannerImage from "@/app/assets/banner/about-us.webp";
import PageBanner from "@/components/shared/PageBanner";

export default function AboutUsBannerSection() {
  return (
    <PageBanner
      title="About Us"
      description="We believe in the power of clean code. Our focus is converting real-world problems into efficient solutions through quality coding. Regardless of domains or technologies."
      backgroundImage={bannerImage}
    />
  );
}
