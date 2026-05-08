import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type TestingServicesMainSectionProps = {
  service: ServiceDetail;
};

export default function TestingServicesMainSection({ service }: TestingServicesMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

