import HomeHeroSection from "./sections/HomeHeroSection";
import HomeLogoCarouselSection from "./sections/HomeLogoCarouselSection";
import HomeInnovationExpertiseSection from "./sections/HomeInnovationExpertiseSection";
import HomeWhyChooseUsSection from "./sections/HomeWhyChooseUsSection";
import HomeHowWeWorkSection from "./sections/HomeHowWeWorkSection";
import HomeTestimonialsSection from "./sections/HomeTestimonialsSection";
import HomeDigitallyTransformedSection from "./sections/HomeDigitallyTransformedSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeLogoCarouselSection />
      <HomeDigitallyTransformedSection />
      <HomeWhyChooseUsSection />
      <HomeInnovationExpertiseSection />
      
      <HomeHowWeWorkSection />
      <HomeTestimonialsSection />
    </>
  );
}
