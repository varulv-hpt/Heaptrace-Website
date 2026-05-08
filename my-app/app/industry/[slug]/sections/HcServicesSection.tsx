import iconEHR from "@/app/assets/icons/EHR.svg";
import iconAI from "@/app/assets/icons/Healthcare AI Solutions.svg";
import iconTelemedicine from "@/app/assets/icons/Healthcare App Development.svg";
import iconPortal from "@/app/assets/icons/Patient Portal.svg";
import iconAppDev from "@/app/assets/icons/Healthcare App Development-indus.svg";
import iconCloud from "@/app/assets/icons/Cloud healthcare.png";

const SERVICES = [
  {
    icon: iconEHR.src,
    title: "EHR/EMR Development",
    body: "We develop robust, compliant Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems that simplify patient data management, improve accuracy, and ensure data security.",
  },
  {
    icon: iconAI.src,
    title: "Healthcare AI Solutions",
    body: "From predictive analytics for patient outcomes to AI-driven diagnostics, our healthcare AI solutions help providers make smarter, faster decisions and enhance patient care.",
  },
  {
    icon: iconTelemedicine.src,
    title: "Telemedicine Solutions",
    body: "Empower healthcare providers to offer remote services through our custom telemedicine platforms, enabling better accessibility and convenience for patients without compromising on care quality.",
  },
  {
    icon: iconPortal.src,
    title: "Patient Portal Development",
    body: "We design and develop patient portals that improve communication between healthcare providers and patients, offering easy access to medical records, appointment scheduling, and test results.",
  },
  {
    icon: iconAppDev.src,
    title: "Healthcare App Development",
    body: "Our mobile and web applications are designed to enhance patient engagement, enable better communication with healthcare professionals, and streamline appointment booking, reminders, and care plans.",
  },
  {
    icon: iconCloud.src,
    title: "Cloud Solutions for Healthcare",
    body: "Ensure scalability, security, and data access with our healthcare cloud solutions, built to handle patient records, imaging, and clinical workflows while meeting regulatory standards.",
  },
];

export default function HcServicesSection() {
  return (
    <section className="hc-section-dark">
      <div className="hc-container">
        <div className="hc-header">
          <h2 className="hc-heading hc-heading-white">Our Healthcare IT Services</h2>
          <p className="hc-desc hc-desc-white">Comprehensive IT Solutions for Healthcare Providers</p>
        </div>

        <div className="hc-cards-all">
          {SERVICES.map((s) => (
            <div key={s.title} className="hc-service-card">
              <div className="hc-card-overlay" />
              <div className="hc-card-inner">
                <img src={s.icon} alt={s.title} className="hc-card-icon" />
                <h3 className="hc-card-heading">{s.title}</h3>
                <p className="hc-card-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
