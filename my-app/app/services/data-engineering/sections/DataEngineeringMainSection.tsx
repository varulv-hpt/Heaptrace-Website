import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type DataEngineeringMainSectionProps = {
  service: ServiceDetail;
};

export default function DataEngineeringMainSection({ service }: DataEngineeringMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

