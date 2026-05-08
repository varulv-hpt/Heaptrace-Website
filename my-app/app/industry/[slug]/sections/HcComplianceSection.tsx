import iconHIPPA from "@/app/assets/icons/HIPPA compliance.svg";
import iconGDPR from "@/app/assets/icons/GDPR compliance.svg";
import iconSOC2 from "@/app/assets/icons/SOC2 certificate.svg";

const ITEMS = [
  {
    icon: iconHIPPA.src,
    title: "HIPAA Compliance",
    body: "We ensure that all systems handling patient data meet HIPAA requirements, safeguarding patient privacy and preventing data breaches.",
  },
  {
    icon: iconGDPR.src,
    title: "GDPR Compliance",
    body: "For our European clients, we ensure compliance with GDPR, ensuring that personal data is processed securely and transparently.",
  },
  {
    icon: iconSOC2.src,
    title: "SOC2 Certification",
    body: "Our systems and processes adhere to SOC2 standards, ensuring that your healthcare data is handled with the highest level of security.",
  },
];

export default function HcComplianceSection() {
  return (
    <section className="hc-section-compliance">
      <div className="hc-container">
        <div className="hc-header">
          <h2 className="hc-heading hc-heading-white">Compliance and Security</h2>
          <h3 className="hc-subheading hc-subheading-white">
            Ensuring Regulatory Compliance and Data Security
          </h3>
          <p className="hc-desc hc-desc-white">
            When it comes to healthcare IT, compliance and security are non-negotiable. At
            HeapTrace Technology, we prioritize data protection and regulatory adherence in every
            solution we deliver.
          </p>
        </div>

        <div className="hc-compliance-grid">
          {ITEMS.map((item) => (
            <div key={item.title} className="hc-compliance-card">
              <div className="hc-compliance-card-inner">
                <div className="hc-compliance-icon-wrap">
                  <img src={item.icon} alt={item.title} className="hc-compliance-icon" />
                </div>
                <h3 className="hc-compliance-title" style={{ marginTop: "16px" }}>{item.title}</h3>
                <p className="hc-compliance-body" style={{ marginTop: "8px" }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
