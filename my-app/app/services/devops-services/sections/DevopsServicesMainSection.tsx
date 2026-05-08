import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type DevopsServicesMainSectionProps = {
  service: ServiceDetail;
};

export default function DevopsServicesMainSection({ service }: DevopsServicesMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

