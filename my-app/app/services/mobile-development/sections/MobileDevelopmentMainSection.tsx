import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type MobileDevelopmentMainSectionProps = {
  service: ServiceDetail;
};

export default function MobileDevelopmentMainSection({ service }: MobileDevelopmentMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

