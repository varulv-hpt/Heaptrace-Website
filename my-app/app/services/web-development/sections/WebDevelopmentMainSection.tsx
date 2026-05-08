import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type WebDevelopmentMainSectionProps = {
  service: ServiceDetail;
};

export default function WebDevelopmentMainSection({ service }: WebDevelopmentMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

