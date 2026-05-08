import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type GenerativeAiMainSectionProps = {
  service: ServiceDetail;
};

export default function GenerativeAiMainSection({ service }: GenerativeAiMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

