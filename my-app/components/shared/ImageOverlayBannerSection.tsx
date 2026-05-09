import Image, { type StaticImageData } from "next/image";

type ImageOverlayBannerSectionProps = {
  ariaLabel: string;
  title: string;
  description: string;
  backgroundImage: StaticImageData | string;
  textGap?: string;
  textMaxWidth?: string;
};

export default function ImageOverlayBannerSection({
  ariaLabel,
  title,
  description,
  backgroundImage,
  textGap = "12px",
  textMaxWidth = "700px",
}: ImageOverlayBannerSectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      style={{
        position: "relative",
        overflow: "hidden",
        height: "450px",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "72px",
      }}
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 60px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: textGap, maxWidth: textMaxWidth }}>
          <h1
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "56px",
              letterSpacing: "-0.8px",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.90)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "28px",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
