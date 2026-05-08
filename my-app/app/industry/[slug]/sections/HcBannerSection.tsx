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
        backgroundColor: "#1e2828",
        backgroundImage:
          "url('https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/674826e5d6f401d348fef653_linear-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
              fontSize: "20px",
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
