import IndustryDetailIntro from "../elements/IndustryDetailIntro";

type IndustryDetailMainSectionProps = {
  title: string;
};

export default function IndustryDetailMainSection({
  title,
}: IndustryDetailMainSectionProps) {
  return <IndustryDetailIntro title={title} />;
}
