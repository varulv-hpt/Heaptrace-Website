import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PreConnectCtaSectionProps = {
  title: string;
  description: string;
  secondaryDescription?: string;
  buttonLabel?: string;
  buttonHref?: string;
  sectionClassName?: string;
};

export default function PreConnectCtaSection({
  title,
  description,
  secondaryDescription,
  buttonLabel = "GET IN TOUCH",
  buttonHref = "/contact-us",
  sectionClassName = "section-10 bg-[#f6f7fa] py-20",
}: PreConnectCtaSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
        <div className="w-layout-blockcontainer header-container _w-100 gap-6 w-container">
          <h2 className="main-heading">{title}</h2>
          <p className="description-text-dark max-w-[1200px] text-[19px] leading-[1.75] text-[#5e5e60]">
            {description}
            {secondaryDescription ? (
              <>
                <br />
                <br />
                {secondaryDescription}
              </>
            ) : null}
          </p>
          <Link
            href={buttonHref}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#173440] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4dac8a]"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
