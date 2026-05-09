import IndustryDetailIntro from "../components/IndustryDetailIntro";

type IndustryDetailMainSectionProps = {
  title: string;
};

export default function IndustryDetailMainSection({
  title,
}: IndustryDetailMainSectionProps) {
  return <IndustryDetailIntro title={title} />;
}
