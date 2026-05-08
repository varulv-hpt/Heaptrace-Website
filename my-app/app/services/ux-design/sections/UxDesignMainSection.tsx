import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type UxDesignMainSectionProps = {
  service: ServiceDetail;
};

export default function UxDesignMainSection({ service }: UxDesignMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

