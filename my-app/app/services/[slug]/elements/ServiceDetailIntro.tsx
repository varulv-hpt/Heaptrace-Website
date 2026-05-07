import RoutePlaceholder from "@/app/_shared/elements/RoutePlaceholder";

type ServiceDetailIntroProps = {
  title: string;
};

export default function ServiceDetailIntro({ title }: ServiceDetailIntroProps) {
  return (
    <RoutePlaceholder
      title={title}
      description="This service detail route is scaffolded for migration. We will now migrate the real Webflow content into this page."
    />
  );
}
