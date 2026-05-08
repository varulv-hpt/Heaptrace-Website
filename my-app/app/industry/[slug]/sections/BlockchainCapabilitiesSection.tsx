import blockchainIcon from "@/app/assets/icons/blockchain-icon.svg";
import customDev from "@/app/assets/icons/Custom Blockchain Development.svg";
import smartContracts from "@/app/assets/icons/Smart Contracts Development & Audit.svg";
import dapps from "@/app/assets/icons/blockchain-app 1.svg";
import nftPlatforms from "@/app/assets/icons/NFT Platforms & Token Development.svg";
import cryptoWallet from "@/app/assets/icons/crypto wallet.svg";
import integrationServices from "@/app/assets/icons/Blockchain Integration Services.svg";

const CAPABILITIES = [
  {
    icon: blockchainIcon,
    title: "Blockchain Consulting",
    description:
      "We help you identify where blockchain fits in your business. From tokenization strategy to platform selection (Ethereum, Hyperledger, Polygon, Solana), we guide your journey.",
  },
  {
    icon: customDev,
    title: "Custom Blockchain Development",
    description:
      "Tailored solutions for your use cases, including public, private, or consortium blockchain architectures.",
  },
  {
    icon: smartContracts,
    title: "Smart Contracts Development & Audit",
    description:
      "Develop and deploy secure smart contracts using Solidity, Rust, or Vyper. We also perform rigorous audits to ensure integrity.",
  },
  {
    icon: dapps,
    title: "dApps Development",
    description:
      "We build scalable decentralized applications with intuitive UX, seamless Web3 wallet integrations, and robust backend infrastructure.",
  },
  {
    icon: nftPlatforms,
    title: "NFT Platforms & Token Development",
    description:
      "Launch your NFT marketplace or create ERC-20, ERC-721, or ERC-1155 tokens with complete lifecycle management.",
  },
  {
    icon: cryptoWallet,
    title: "Crypto Wallet & Exchange Development",
    description:
      "Design and deploy secure wallets, DeFi apps, and both centralized and decentralized exchanges (CEX/DEX).",
  },
  {
    icon: integrationServices,
    title: "Blockchain Integration Services",
    description:
      "We integrate blockchain with your existing enterprise systems (ERP, CRM, Supply Chain) to enhance transparency and efficiency.",
  },
];

export default function BlockchainCapabilitiesSection() {
  return (
    <section className="bc-section-capabilities">
      <div className="bc-container">
        <div className="bc-header">
          <h2 className="bc-heading bc-heading-white">
            Our Blockchain Capabilities
          </h2>
          <p className="bc-desc bc-desc-white">
            We deliver full-cycle blockchain development services—from ideation
            to deployment and beyond.
          </p>
        </div>

        <div className="bc-capabilities-grid">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="bc-capability-card">
              <div className="bc-card-overlay" aria-hidden="true" />
              <div className="bc-card-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cap.icon.src}
                  alt=""
                  aria-hidden="true"
                  className="bc-card-icon"
                />
                <h3 className="bc-card-heading">{cap.title}</h3>
                <p className="bc-card-body">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
