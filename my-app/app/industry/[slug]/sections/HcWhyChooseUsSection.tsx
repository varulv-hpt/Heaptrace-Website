const SPECIALTIES = [
  "HIPAA and GDPR compliance for secure patient data handling.",
  "Electronic Health Record (EHR) systems",
  "AI-driven healthcare applications for better diagnostics and predictive analysis.",
  "Telemedicine platforms that enable remote healthcare services.",
];

export default function HcWhyChooseUsSection() {
  return (
    <section className="hc-section-light">
      <div className="hc-container">
        <div className="hc-header">
          <h2 className="hc-heading">Why Choose Us for Healthcare IT?</h2>
          <h3 className="hc-subheading">Bridging Technology and Healthcare for Better Outcomes</h3>
          <p className="hc-desc">
            At HeapTrace Technology, we understand the unique challenges faced by the healthcare
            industry. From enhancing patient care and data management to meeting strict regulatory
            requirements, our healthcare IT solutions are designed to make a meaningful impact. We
            work with healthcare providers, hospitals, and healthcare startups to deliver custom
            technology solutions that improve patient outcomes and streamline healthcare delivery.
          </p>
          <p className="hc-desc" style={{ marginTop: "16px" }}>We specialize in:</p>
        </div>

        <div className="hc-specialty-grid">
          {SPECIALTIES.map((text) => (
            <div key={text} className="hc-specialty-card">
              <p className="hc-specialty-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
