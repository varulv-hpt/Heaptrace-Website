import PageBanner from "./PageBanner";

type RoutePlaceholderProps = {
  title: string;
  description: string;
};

export default function RoutePlaceholder({
  title,
  description,
}: RoutePlaceholderProps) {
  return (
    <PageBanner title={title} description={description} />
  );
}
