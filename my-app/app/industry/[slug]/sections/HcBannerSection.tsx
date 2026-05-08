import Image from "next/image";
import bannerImage from "@/app/assets/banner/Healthcare.webp";

export default function HcBannerSection() {
  return (
    <section
      aria-label="Healthcare Technology banner"
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
        src={bannerImage}
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "700px" }}>
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
            Healthcare Technology
          </h1>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.90)",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Leverage cutting-edge technology to enhance patient care, streamline operations, and
            ensure compliance with healthcare regulations. Our tailored IT solutions are designed
            to meet the unique needs of healthcare organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
