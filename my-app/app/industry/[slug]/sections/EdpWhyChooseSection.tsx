const REASONS = [
  {
    title: "Custom-Tailored Solutions",
    body: "We design and implement EDP solutions that are tailored to meet the specific data processing needs of your industry, ensuring seamless integration with your business operations.",
  },
  {
    title: "Secure Data Management",
    body: "Our EDP systems include advanced security features to protect sensitive data from breaches and ensure compliance with industry regulations, such as GDPR, HIPAA, and financial reporting standards.",
  },
  {
    title: "Scalable EDP Platforms",
    body: "Our EDP solutions are built to scale with your business, allowing you to handle increasing volumes of data without compromising performance or accuracy.",
  },
  {
    title: "Comprehensive Support and Maintenance",
    body: "We provide continuous support and maintenance for your EDP systems, ensuring that your data processing infrastructure remains reliable and up-to-date.",
  },
  {
    title: "Real-Time Data Processing",
    body: "Whether you need batch processing or real-time data analysis, our EDP solutions offer the flexibility and power to meet your specific requirements, providing actionable insights when you need them.",
  },
];

export default function EdpWhyChooseSection() {
  return (
    <section className="edp-section-linear">
      <div className="edp-container">
        <div className="edp-header">
          <h2 className="edp-heading edp-heading-white">
            Why Choose HeapTrace Technology for EDP Solutions?
          </h2>
        </div>
        <div className="edp-why-all">
          {REASONS.map((r) => (
            <div key={r.title} className="edp-why-card">
              <h3 className="edp-card-heading">{r.title}</h3>
              <p className="edp-card-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
