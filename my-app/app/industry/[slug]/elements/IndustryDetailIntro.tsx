import RoutePlaceholder from "@/app/_shared/elements/RoutePlaceholder";

type IndustryDetailIntroProps = {
  title: string;
};

export default function IndustryDetailIntro({
  title,
}: IndustryDetailIntroProps) {
  return (
    <RoutePlaceholder
      title={title}
      description="This industry route is scaffolded for migration. We will migrate full page content from Webflow in upcoming steps."
    />
  );
}
