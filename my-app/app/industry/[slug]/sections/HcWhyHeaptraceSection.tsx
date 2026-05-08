const CARDS = [
  {
    title: "Industry Expertise",
    body: "With years of experience in healthcare IT, we understand the unique challenges and regulations of the industry.",
  },
  {
    title: "Innovation Focus",
    body: "From AI to telemedicine, we stay on the cutting edge of healthcare technology to offer the most innovative solutions available.",
  },
  {
    title: "Custom Solutions",
    body: "We develop tailored solutions that address your specific needs and goals, ensuring you get the right tools to succeed.",
  },
  {
    title: "End-to-End Service",
    body: "From concept to deployment and ongoing support, we're with you every step of the way, ensuring your project is a success.",
  },
];

export default function HcWhyHeaptraceSection() {
  return (
    <section className="hc-section-white">
      <div className="hc-container">
        <div className="hc-split-layout">
          <div className="hc-split-text">
            <h2 className="hc-heading">Why HeapTrace for Healthcare IT?</h2>
            <p className="hc-desc" style={{ marginTop: "14px" }}>
              Your Trusted Partner in Healthcare Innovation
            </p>
            <p className="hc-desc" style={{ marginTop: "12px" }}>
              At HeapTrace Technology, we combine deep healthcare industry expertise with
              cutting-edge technology to deliver solutions that truly make a difference. Here's
              why clients trust us for healthcare IT:
            </p>
          </div>

          <div className="hc-split-cards">
            {/* Left col: IE (offset) + IF */}
            <div className="hc-why-col">
              <div className="hc-why-card hc-why-card-offset">
                <h3 className="hc-card-heading">{CARDS[0].title}</h3>
                <p className="hc-card-body" style={{ marginTop: "8px" }}>{CARDS[0].body}</p>
              </div>
              <div className="hc-why-card">
                <h3 className="hc-card-heading">{CARDS[1].title}</h3>
                <p className="hc-card-body" style={{ marginTop: "8px" }}>{CARDS[1].body}</p>
              </div>
            </div>
            {/* Right col: CS + EES */}
            <div className="hc-why-col">
              <div className="hc-why-card">
                <h3 className="hc-card-heading">{CARDS[2].title}</h3>
                <p className="hc-card-body" style={{ marginTop: "8px" }}>{CARDS[2].body}</p>
              </div>
              <div className="hc-why-card">
                <h3 className="hc-card-heading">{CARDS[3].title}</h3>
                <p className="hc-card-body" style={{ marginTop: "8px" }}>{CARDS[3].body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
