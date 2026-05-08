import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceDetailIntro from "../../[slug]/elements/ServiceDetailIntro";

type BigDataAndMlMainSectionProps = {
  service: ServiceDetail;
};

export default function BigDataAndMlMainSection({ service }: BigDataAndMlMainSectionProps) {
  return <ServiceDetailIntro service={service} />;
}

