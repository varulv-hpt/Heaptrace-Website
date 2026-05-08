import Image from "next/image";
import erpConsulting from "@/app/assets/icons/ERP Consulting and Strategy.svg";
import erpMaintenance from "@/app/assets/icons/ERP Maintenance and Support.svg";
import erpCustomize from "@/app/assets/icons/Erp customiize dev.png";
import erpCloud from "@/app/assets/icons/Cloud-Based ERP Solutions.svg";
import erpImplementation from "@/app/assets/icons/ERP Implementation and Integration.png";

const SERVICES = [
  {
    icon: erpConsulting.src,
    title: "ERP Consulting and Strategy",
    body: "We work closely with businesses to develop an ERP strategy that aligns with their specific objectives. Our team of experts provides in-depth analysis and recommendations on the right ERP platforms, helping you achieve seamless integration and optimized performance.",
  },
  {
    icon: erpMaintenance.src,
    title: "ERP Maintenance and Support",
    body: "Our ERP maintenance and support services ensure your system always runs smoothly. We provide ongoing support, updates, and troubleshooting to keep your ERP solution operating efficiently and effectively.",
  },
  {
    icon: erpCustomize.src,
    title: "Custom ERP Development",
    body: "Our custom ERP development services ensure that your solution is designed to meet the unique needs of your business. Whether you need a fully tailored ERP system or custom modules to enhance existing platforms, we build solutions that streamline processes and improve efficiency.",
  },
  {
    icon: erpCloud.src,
    title: "Cloud-Based ERP Solutions",
    body: "Cloud-based ERP offers businesses the flexibility to manage operations from anywhere. Our team implements scalable, cloud-based ERP systems that provide real-time data access, reduce IT overhead, and enhance collaboration across departments.",
    wide: true,
  },
  {
    icon: erpImplementation.src,
    title: "ERP Implementation and Integration",
    body: "We offer end-to-end ERP implementation services, ensuring a smooth transition to your new system. Our team integrates ERP platforms with your existing infrastructure, enabling seamless data flow and real-time access to critical business information.",
    wide: true,
  },
];

export default function ErpServicesSection() {
  return (
    <section className="erp-section-dark">
      <div className="erp-container">
        <div className="erp-header">
          <h2 className="erp-heading erp-heading-white">Our ERP Services</h2>
          <p className="erp-desc erp-desc-white">Comprehensive IT Solutions for Healthcare Providers</p>
        </div>
        <div className="erp-services-all">
          {SERVICES.map((s) => (
            <div key={s.title} className="erp-service-card">
              <div className="erp-card-overlay" />
              <div className="erp-card-inner">
                <img src={s.icon} alt={s.title} className="erp-card-icon" width={40} height={40} />
                <h3 className="erp-card-heading">{s.title}</h3>
                <p className="erp-card-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
