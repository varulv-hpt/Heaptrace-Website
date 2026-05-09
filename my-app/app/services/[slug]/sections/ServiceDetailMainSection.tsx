import ServiceDetailIntro from "../components/ServiceDetailIntro";
import type { ServiceDetail } from "../serviceDetails";

type ServiceDetailMainSectionProps = {
  service: ServiceDetail;
};

export default function ServiceDetailMainSection({
  service,
}: ServiceDetailMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}
