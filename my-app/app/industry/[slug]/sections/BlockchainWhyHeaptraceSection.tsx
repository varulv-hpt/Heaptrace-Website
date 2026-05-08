import Image from "next/image";
import bgImage from "@/app/assets/banner/blockchain-sec.png";
import numOne from "@/app/assets/icons/number-circle-one-light.png";
import numTwo from "@/app/assets/icons/number-circle-two-light.png";
import numThree from "@/app/assets/icons/number-circle-three-light.png";
import numFour from "@/app/assets/icons/number-circle-four-light.png";

const WHY_ITEMS = [
  {
    num: numOne,
    title: "Deep Tech Expertise",
    description:
      "Proficient in Ethereum, Hyperledger, Cosmos, Polkadot, Avalanche, and more.",
  },
  {
    num: numTwo,
    title: "Security-First Development",
    description:
      "Smart contract audits, secure identity, and data protection best practices.",
  },
  {
    num: numThree,
    title: "Enterprise-Grade Solutions",
    description:
      "We understand the needs of regulated industries like finance, healthcare, and supply chain.",
  },
  {
    num: numFour,
    title: "Interoperability & Scalability",
    description:
      "Build cross-chain and Layer 2 solutions for real-world adoption.",
  },
];

export default function BlockchainWhyHeaptraceSection() {
  return (
    <section className="bc-section-why" style={{ position: "relative" }}>
      <Image
        src={bgImage}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="bc-container">
          <div className="bc-header">
            <h2 className="bc-heading">Why Blockchain with HeapTrace?</h2>
          </div>

          <div className="bc-why-grid">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="bc-why-box">
                <Image
                  src={item.num}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                  className="bc-why-num-img"
                />
                <h3 className="bc-card-heading">{item.title}</h3>
                <p className="bc-card-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
