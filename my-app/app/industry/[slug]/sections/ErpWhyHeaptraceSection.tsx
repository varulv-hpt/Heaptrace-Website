const REASONS = [
  {
    title: "Industry-Specific Expertise",
    body: "We understand the unique challenges of each industry and design ERP solutions that address specific needs, ensuring seamless integration with your business processes.",
  },
  {
    title: "Tailored ERP Solutions",
    body: "At HeapTrace, we offer customized ERP systems that are built to meet the exact requirements of your business, providing the flexibility to grow and adapt as your business evolves.",
  },
  {
    title: "Real-Time Data Insights",
    body: "Our ERP systems provide real-time access to critical business data, allowing for better decision-making, improved forecasting, and increased operational efficiency.",
  },
  {
    title: "End-to-End ERP Services",
    body: "From consulting and strategy to development, implementation, and support, HeapTrace Technology offers complete ERP solutions that empower businesses to succeed.",
  },
  {
    title: "Cloud and On-Premise Solutions",
    body: "Whether you prefer a cloud-based or on-premise ERP system, our team provides scalable and secure solutions that fit your infrastructure and business needs.",
  },
];

export default function ErpWhyHeaptraceSection() {
  return (
    <section className="erp-section-linear">
      <div className="erp-container">
        <div className="erp-header">
          <h2 className="erp-heading erp-heading-white">Why HeapTrace for ERP Solutions?</h2>
          <p className="erp-desc erp-desc-white">
            At HeapTrace Technology, we combine deep industry expertise with cutting-edge technology
            to deliver solutions that truly make a difference. Here&apos;s why clients trust us for ERP.
          </p>
        </div>
        <div className="erp-why-all">
          {REASONS.map((r) => (
            <div key={r.title} className="erp-why-card">
              <h3 className="erp-card-heading">{r.title}</h3>
              <p className="erp-card-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
