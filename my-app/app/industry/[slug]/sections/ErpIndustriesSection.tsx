import Image from "next/image";
import bgImage from "@/app/assets/banner/blockchain-sec.png";
import numOne from "@/app/assets/icons/number-circle-one-light.png";
import numTwo from "@/app/assets/icons/number-circle-two-light.png";
import numThree from "@/app/assets/icons/number-circle-three-light.png";
import numFour from "@/app/assets/icons/number-circle-four-light.png";
import numFive from "@/app/assets/icons/number-circle-five-light.png";
import numSix from "@/app/assets/icons/number-circle-six-light.png";
import numSeven from "@/app/assets/icons/number-7.png";

const INDUSTRIES = [
  {
    icon: numOne.src,
    title: "Manufacturing",
    body: "Our ERP solutions for manufacturing enable businesses to manage the full production lifecycle, from inventory management to supply chain optimization. With real-time insights into production processes, manufacturers can streamline operations, reduce costs, and improve overall efficiency.",
  },
  {
    icon: numTwo.src,
    title: "Healthcare",
    body: "In the healthcare industry, ERP systems improve operational efficiency, enhance patient care, and ensure regulatory compliance. Our ERP solutions help healthcare providers manage patient records, supply chain logistics, and financial operations with ease.",
  },
  {
    icon: numThree.src,
    title: "Retail",
    body: "We provide ERP solutions for the retail industry that integrate inventory management, point-of-sale systems, customer relationship management, and supply chain processes. Our ERP systems help retailers optimize inventory levels, enhance customer service, and increase sales.",
  },
  {
    icon: numFour.src,
    title: "Construction",
    body: "Our ERP solutions for construction companies provide end-to-end project management capabilities, from budgeting and resource allocation to real-time tracking of project timelines. We help construction firms improve collaboration, reduce costs, and meet project deadlines.",
  },
  {
    icon: numFive.src,
    title: "Education",
    body: "Educational institutions benefit from ERP systems that manage student records, human resources, financial aid, and campus operations. Our ERP solutions help schools and universities streamline processes, improve communication, and make data-driven decisions.",
  },
  {
    icon: numSix.src,
    title: "Finance and Banking",
    body: "For financial institutions, our ERP solutions provide the tools needed to manage core financial processes, from budgeting and accounting to compliance and reporting. We deliver secure, scalable ERP systems that help financial organizations maintain regulatory compliance and optimize operations.",
  },
  {
    icon: numSeven.src,
    title: "Logistics and Transportation",
    body: "Our ERP solutions for logistics and transportation help businesses manage fleets, optimize routes, track shipments, and reduce operational costs. By integrating all logistics processes into a single system, businesses can improve efficiency and customer satisfaction.",
  },
];

export default function ErpIndustriesSection() {
  return (
    <section className="erp-section-industries">
      <Image
        src={bgImage}
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
        aria-hidden="true"
      />
      <div className="erp-container" style={{ position: "relative", zIndex: 1 }}>
        <div className="erp-header">
          <h2 className="erp-heading">Industries We Serve with ERP Solutions</h2>
        </div>
        <div className="erp-industries-all">
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className="erp-industry-card">
              <img src={ind.icon} alt="" className="erp-num-icon" width={48} height={48} />
              <h3 className="erp-card-heading">{ind.title}</h3>
              <p className="erp-card-body">{ind.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
