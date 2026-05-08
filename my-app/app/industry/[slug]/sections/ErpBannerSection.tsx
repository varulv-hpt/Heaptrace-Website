import Image from "next/image";
import bannerBg from "@/app/assets/banner/Erp-industry.webp";

export default function ErpBannerSection() {
  return (
    <section
      aria-label="ERP Solutions banner"
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
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "700px" }}>
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
            ERP Solutions
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
            ERP Solutions: Streamlining Operations Across Industries
          </p>
        </div>
      </div>
    </section>
  );
}
