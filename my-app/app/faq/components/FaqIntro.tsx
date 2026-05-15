import PageBanner from "@/components/shared/PageBanner";
import aboutUsBannerImage from "@/app/assets/banner/about-us.webp";
import FaqAccordionSection from "./FaqAccordionSection";

export default function FaqIntro() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        description="Delve into a comprehensive array of inquiries, from the scope of our expertise to the intricacies of our consultation process."
        backgroundImage={aboutUsBannerImage}
      />
      <FaqAccordionSection />
    </>
  );
}
