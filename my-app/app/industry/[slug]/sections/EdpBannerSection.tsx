import Image from "next/image";
import bannerBg from "@/app/assets/banner/Edp-industry.webp";

export default function EdpBannerSection() {
  return (
    <section
      aria-label="EDP Solutions banner"
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
        src={bannerBg}
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
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
            EDP Solutions
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
            We specialize in Electronic Data Processing (EDP) solutions that empower businesses to
            efficiently manage, process, and analyze large volumes of data. EDP systems automate the
            collection, storage, and processing of data, helping businesses streamline operations,
            reduce errors, and make data-driven decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
