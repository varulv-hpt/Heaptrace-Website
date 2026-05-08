import Image from "next/image";
import bgImage from "@/app/assets/banner/blockchain-sec.png";
import num1 from "@/app/assets/icons/number-circle-one-light.png";
import num2 from "@/app/assets/icons/number-circle-two-light.png";
import num3 from "@/app/assets/icons/number-circle-three-light.png";
import num4 from "@/app/assets/icons/number-circle-four-light.png";
import num5 from "@/app/assets/icons/number-circle-five-light.png";

const STEPS = [
  {
    icon: num1.src,
    title: "Understanding Your Needs",
    body: "We start by learning about your organization, challenges, and goals. Whether you're a hospital or a healthcare startup, we tailor our solutions to fit your unique requirements.",
  },
  {
    icon: num2.src,
    title: "Compliance and Security First",
    body: "Our healthcare solutions are built with strict adherence to compliance standards like HIPAA, GDPR, and SOC2, ensuring that sensitive patient data is protected.",
  },
  {
    icon: num3.src,
    title: "Custom Solutions",
    body: "We don't believe in one-size-fits-all. We develop custom healthcare platforms, software, and apps that are designed to improve operational efficiency and patient care.",
  },
  {
    icon: num4.src,
    title: "Data-Driven Decisions",
    body: "With advanced data analytics and AI integration, we help healthcare providers leverage insights from patient data to enhance decision-making, treatment plans, and care delivery.",
  },
  {
    icon: num5.src,
    title: "Seamless Integration",
    body: "Our solutions are built to integrate seamlessly with your existing systems, whether it's EHR platforms, third-party healthcare applications, or telemedicine tools.",
  },
];

export default function HcApproachSection() {
  return (
    <section className="hc-section-light" style={{ position: "relative", overflow: "hidden" }}>
      <Image
        src={bgImage}
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        aria-hidden="true"
      />
      <div className="hc-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hc-header">
          <h2 className="hc-heading">Our Approach to Healthcare IT</h2>
          <h3 className="hc-subheading">Putting Patients and Providers First</h3>
          <p className="hc-desc">
            At HeapTrace, we believe in building solutions that focus on both patient needs and
            provider efficiency. Our approach to healthcare IT involves:
          </p>
        </div>

        <div className="hc-steps-all">
          {STEPS.map((s) => (
            <div key={s.title} className="hc-why-box">
              <img src={s.icon} alt="" className="hc-why-num-img" />
              <h3 className="hc-card-heading" style={{ marginBottom: "8px" }}>{s.title}</h3>
              <p className="hc-card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
