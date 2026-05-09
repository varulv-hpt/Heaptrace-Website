import Image from "next/image";
import missionCircle from "@/app/assets/banner/mission.png";
import missionMobile from "@/app/assets/banner/mission-mobile.png";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
} from "@/lib/layout/sectionShell";

function MissionCard({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "8px",
        height: "144px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        padding: "0 24px",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "#4c4c4e",
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "-0.36px",
          lineHeight: "21.6px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: "#5e5e60",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "24px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function AboutUsMissionSection() {
  return (
    <section
      className={`linear-bg py-[5rem] ${SECTION_OUTER_PAD_CLASS}`}
      aria-labelledby="mission-heading"
    >
      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            id="mission-heading"
            style={{
              margin: "0 0 16px 0",
              color: "#ffffff",
              fontSize: "40px",
              fontWeight: 600,
              letterSpacing: "-0.8px",
              lineHeight: "1.15",
              maxWidth: "660px",
            }}
          >
            Unveiling Our Mission to Transform and Innovate
          </h2>
          <p
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              maxWidth: "660px",
            }}
          >
            Empowering progress and creativity, our mission drives transformative
            solutions, fostering innovation and delivering impactful results in
            every pursuit.
          </p>
        </div>

        {/* Desktop: 3-column layout */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1fr 520px 1fr",
            columnGap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <MissionCard
              title="Discover Consultation"
              description="Our team meticulously plans each stage of the process, crafting a detailed roadmap"
            />
            <MissionCard
              title="Customized IT Strategy"
              description="We tailor every strategy to your unique business goals and technology landscape."
            />
          </div>

          {/* Center image */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src={missionCircle}
              alt="Our mission"
              width={520}
              height={520}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Right cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <MissionCard
              title="Quality Assurance"
              description="Rigorous testing and review processes ensure every solution meets the highest standards."
            />
            <MissionCard
              title="24/7 Support"
              description="Resources designed to help navigate best the dynamic technology landscape."
            />
          </div>
        </div>

        {/* Mobile layout: cards → image → cards */}
        <div className="flex flex-col gap-6 lg:hidden">
          <MissionCard
            title="Discover Consultation"
            description="Our team meticulously plans each stage of the process, crafting a detailed roadmap"
          />
          <MissionCard
            title="Customized IT Strategy"
            description="We tailor every strategy to your unique business goals and technology landscape."
          />

          <div className="flex justify-center my-2">
            <Image
              src={missionMobile}
              alt="Our mission"
              width={320}
              height={320}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <MissionCard
            title="Quality Assurance"
            description="Rigorous testing and review processes ensure every solution meets the highest standards."
          />
          <MissionCard
            title="24/7 Support"
            description="Resources designed to help navigate best the dynamic technology landscape."
          />
        </div>
      </div>
    </section>
  );
}
