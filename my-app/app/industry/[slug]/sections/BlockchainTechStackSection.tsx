import protocolsIcon from "@/app/assets/icons/protocols.svg";
import languagesIcon from "@/app/assets/icons/languages.svg";
import toolsIcon from "@/app/assets/icons/tools-icon.svg";
import walletsIcon from "@/app/assets/icons/wallets-icon.svg";
import infrastructureIcon from "@/app/assets/icons/infrastructure.svg";

const TECH_STACKS = [
  {
    icon: protocolsIcon,
    heading: "Protocols",
    items: ["Ethereum", "Polygon", "Binance Smart Chain", "Solana", "Hyperledger Fabric"],
  },
  {
    icon: languagesIcon,
    heading: "Languages",
    items: ["Solidity", "Rust", "Go", "JavaScript", "Vyper"],
  },
  {
    icon: toolsIcon,
    heading: "Tools",
    items: ["Truffle", "Hardhat", "Web3.js", "Ethers.js", "IPFS", "Chainlink", "The Graph"],
  },
  {
    icon: walletsIcon,
    heading: "Wallets",
    items: ["MetaMask", "WalletConnect", "Ledger", "TrustWallet"],
  },
  {
    icon: infrastructureIcon,
    heading: "Infrastructure",
    items: ["Infura", "Alchemy", "Pinata", "Moralis"],
  },
];

export default function BlockchainTechStackSection() {
  return (
    <section className="bc-section-dark">
      <div className="bc-container">
        <div className="bc-header">
          <h2 className="bc-heading bc-heading-white">
            Our Blockchain Tech Stack
          </h2>
          <p className="bc-desc bc-desc-white">
            We leverage a wide range of modern blockchain tools and technologies
            to deliver high-performance, scalable, and secure solutions,
            including:
          </p>
        </div>

        <div className="bc-techstack-grid">
          {TECH_STACKS.map((stack) => (
            <div key={stack.heading} className="bc-techstack-col">
              <div className="bc-techstack-col-header">
                <div className="bc-techstack-icon-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stack.icon.src}
                    alt=""
                    aria-hidden="true"
                    className="bc-techstack-icon"
                  />
                </div>
                <h3 className="bc-techstack-head">{stack.heading}</h3>
              </div>
              <ul className="bc-stack-list">
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
