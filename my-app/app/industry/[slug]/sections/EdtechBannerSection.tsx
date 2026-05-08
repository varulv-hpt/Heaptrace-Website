import Image from "next/image";
import bannerImage from "@/app/assets/banner/Edtech.webp";

export default function EdtechBannerSection() {
  return (
    <section
      aria-label="EdTech banner"
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
            EdTech
          </h1>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.90)",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28.8px",
            }}
          >
            We specialize in creating innovative EdTech solutions that transform the learning
            experience. From custom e-learning platforms and AI-powered personalized learning to
            virtual classrooms and mobile-friendly solutions, we help educational institutions and
            training organizations deliver engaging, effective, and scalable education. Let us help
            you revolutionize the future of education with cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
}
