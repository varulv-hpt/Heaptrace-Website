type RoutePlaceholderProps = {
  title: string;
  description: string;
};

export default function RoutePlaceholder({
  title,
  description,
}: RoutePlaceholderProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-20 md:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-[#1e6b52] md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4c4c4e]">
          {description}
        </p>
      </div>
    </section>
  );
}
