import Image from "next/image";
import bannerImage from "@/app/assets/banner/Blockchain.jpg";

export default function BlockchainBannerSection() {
  return (
    <section
      aria-label="Blockchain banner"
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
            Blockchain Industry Solutions
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
            Harness the power of blockchain to drive transparency, enhance
            security, and streamline business processes. Our custom blockchain
            solutions are built to support industries seeking innovation, trust,
            and operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
