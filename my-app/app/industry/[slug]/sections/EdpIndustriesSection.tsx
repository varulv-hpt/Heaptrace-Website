import numOne from "@/app/assets/icons/number-circle-one-light.png";
import numTwo from "@/app/assets/icons/number-circle-two-light.png";
import numThree from "@/app/assets/icons/number-circle-three-light.png";
import numFour from "@/app/assets/icons/number-circle-four-light.png";
import numFive from "@/app/assets/icons/number-circle-five-light.png";
import numSix from "@/app/assets/icons/number-circle-six-light.png";

const INDUSTRIES = [
  {
    icon: numOne.src,
    title: "Banking and Finance",
    body: "In the banking and finance sector, secure and efficient data processing is critical. Our EDP solutions help financial institutions manage transaction records, customer data, and regulatory reports with accuracy and speed. We offer robust security features to ensure data privacy and compliance with financial regulations.",
  },
  {
    icon: numTwo.src,
    title: "Healthcare",
    body: "Healthcare organizations rely on accurate data to manage patient records, treatment plans, and billing information. Our EDP solutions for healthcare streamline data processing tasks, ensuring that patient information is handled securely and efficiently, reducing the administrative burden on healthcare providers.",
  },
  {
    icon: numThree.src,
    title: "Retail",
    body: "Our EDP solutions for the retail industry help businesses manage large volumes of sales transactions, customer data, and inventory records. By automating these processes, retailers can reduce manual errors, improve inventory management, and gain valuable insights into customer behavior and purchasing trends.",
  },
  {
    icon: numFour.src,
    title: "Manufacturing",
    body: "Manufacturing companies handle vast amounts of production data, including inventory levels, supplier information, and quality control metrics. Our EDP solutions enable manufacturers to automate data collection and processing, improving production efficiency and supply chain management.",
  },
  {
    icon: numFive.src,
    title: "Government and Public Sector",
    body: "In the public sector, EDP solutions are essential for managing large databases of citizen information, tax records, and public services data. Our EDP systems help government agencies automate data processing tasks, ensuring accuracy and compliance with regulatory standards.",
  },
  {
    icon: numSix.src,
    title: "Education",
    body: "Educational institutions manage vast amounts of student data, including admissions, grades, and attendance records. Our EDP solutions streamline the processing and analysis of this data, helping schools and universities make informed decisions about student performance and resource allocation.",
  },
];

export default function EdpIndustriesSection() {
  return (
    <section className="edp-section-light">
      <div className="edp-container">
        <div className="edp-header">
          <h2 className="edp-heading">
            Industries We Serve with{" "}
            <span style={{ color: "#4dac8a" }}>EDP Solutions</span>
          </h2>
          <p className="edp-desc">
            At HeapTrace Technology, we follow a student-centered approach to develop and deliver
            high-quality EdTech solutions
          </p>
        </div>
        <div className="edp-industries-all">
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className="edp-industry-card">
              <img src={ind.icon} alt="" className="edp-num-icon" width={48} height={48} />
              <h3 className="edp-card-heading">{ind.title}</h3>
              <p className="edp-card-body">{ind.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
