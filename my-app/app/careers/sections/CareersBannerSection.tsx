import { BANNER_IMAGE } from "../elements/careersData";
import PageBanner from "@/app/_shared/elements/PageBanner";

export default function CareersBannerSection() {
  return (
    <PageBanner
      title="Careers"
      description="Explore exciting career opportunities with us and join a dynamic team committed to driving innovation and making a meaningful impact in the world of business."
      backgroundImage={BANNER_IMAGE}
    />
  );
}
