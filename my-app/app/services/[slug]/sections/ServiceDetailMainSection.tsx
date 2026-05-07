import ServiceDetailIntro from "../elements/ServiceDetailIntro";

type ServiceDetailMainSectionProps = {
  title: string;
};

export default function ServiceDetailMainSection({
  title,
}: ServiceDetailMainSectionProps) {
  return <ServiceDetailIntro title={title} />;
}
