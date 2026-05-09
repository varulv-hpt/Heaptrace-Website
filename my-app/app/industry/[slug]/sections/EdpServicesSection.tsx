import edpConsulting from "@/app/assets/icons/EDP Consulting and Strategy.svg";
import edpCustom from "@/app/assets/icons/Custom EDP Solutions Development.svg";
import edpIntegration from "@/app/assets/icons/EDP System Integration.svg";
import edpAnalytics from "@/app/assets/icons/Data Analytics and Reporting EDP.svg";
import edpMaintenance from "@/app/assets/icons/EDP Maintenance and Support.svg";

const SERVICES = [
  {
    icon: edpConsulting.src,
    title: "EDP Consulting and Strategy",
    body: "We work with businesses to assess their data processing needs and develop a tailored EDP strategy. Our team provides expert guidance on selecting the right EDP systems and workflows to optimize your data management processes.",
  },
  {
    icon: edpCustom.src,
    title: "Custom EDP Solutions Development",
    body: "We develop customized EDP systems that are designed to handle the unique data processing requirements of your business. Whether you need batch processing, real-time processing, or hybrid solutions, we build scalable EDP platforms that enhance operational efficiency.",
  },
  {
    icon: edpIntegration.src,
    title: "EDP System Integration",
    body: "Our EDP system integration services ensure seamless connectivity between your existing infrastructure and new EDP platforms. We integrate EDP solutions with your current databases, applications, and cloud systems, enabling smooth and efficient data flow across your business.",
  },
  {
    icon: edpAnalytics.src,
    title: "Data Analytics and Reporting",
    body: "Our EDP solutions include powerful data analytics tools that allow you to generate detailed reports, analyze trends, and make data-driven decisions. We help businesses turn raw data into valuable insights for strategic planning and operational improvements.",
  },
  {
    icon: edpMaintenance.src,
    title: "EDP Maintenance and Support",
    body: "We provide ongoing maintenance and support for EDP systems to ensure optimal performance. Our team offers regular updates, troubleshooting, and system monitoring to keep your data processing infrastructure running smoothly.",
  },
];

export default function EdpServicesSection() {
  return (
    <section className="edp-section-dark">
      <div className="edp-container">
        <div className="edp-header">
          <h2 className="edp-heading edp-heading-white">Our EDP Services</h2>
        </div>
        <div className="edp-services-all">
          {SERVICES.map((s) => (
            <div key={s.title} className="edp-service-card">
              <div className="edp-card-overlay" />
              <div className="edp-card-inner">
                <img src={s.icon} alt={s.title} className="edp-card-icon" width={40} height={40} />
                <h3 className="edp-card-heading">{s.title}</h3>
                <p className="edp-card-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
