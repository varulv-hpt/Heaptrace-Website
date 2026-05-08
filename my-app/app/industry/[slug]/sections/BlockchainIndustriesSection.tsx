import financeIcon from "@/app/assets/icons/Finance.svg";
import healthcareIcon from "@/app/assets/icons/Healthcare.svg";
import ecommerceIcon from "@/app/assets/icons/E-commerce.svg";
import supplyChainIcon from "@/app/assets/icons/supply-chain.svg";
import mediaIcon from "@/app/assets/icons/Media n entertainment.svg";
import governmentIcon from "@/app/assets/icons/Government and public sector.svg";

const INDUSTRIES = [
  {
    icon: financeIcon,
    title: "Financial Services",
    description: "Crypto banking, DeFi platforms, and tokenized assets.",
  },
  {
    icon: healthcareIcon,
    title: "Healthcare",
    description: "HIPAA-compliant data sharing, patient record immutability.",
  },
  {
    icon: ecommerceIcon,
    title: "Retail & E-Commerce",
    description: "Product provenance, digital ownership, loyalty tokens.",
  },
  {
    icon: supplyChainIcon,
    title: "Supply Chain",
    description:
      "End-to-end visibility, traceability, and anti-counterfeiting.",
  },
  {
    icon: mediaIcon,
    title: "Media & Entertainment",
    description: "NFT platforms, royalty management, fan engagement.",
  },
  {
    icon: governmentIcon,
    title: "Government & Public Sector",
    description: "Digital identity, voting systems, land registries.",
  },
];

export default function BlockchainIndustriesSection() {
  return (
    <section className="bc-section-dark">
      <div className="bc-container">
        <div className="bc-header">
          <h2 className="bc-heading bc-heading-white">
            Industries We Serve with Blockchain
          </h2>
        </div>

        <div className="bc-industries-grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} className="bc-industry-card">
              <div className="bc-industry-card-header">
                <div className="bc-industry-icon-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ind.icon.src}
                    alt=""
                    aria-hidden="true"
                    className="bc-industry-icon"
                  />
                </div>
                <h3 className="bc-industry-title">{ind.title}</h3>
              </div>
              <p className="bc-industry-desc">{ind.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
