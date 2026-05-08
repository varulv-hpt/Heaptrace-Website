"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  Building2,
  HeartPulse,
  ShoppingBag,
  Truck,
  Tv,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const INDUSTRIES = [
  {
    icon: Banknote,
    title: "Financial Services",
    description: "Crypto banking, DeFi platforms, and tokenized assets.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "HIPAA-compliant data sharing, patient record immutability.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description: "Product provenance, digital ownership, loyalty tokens.",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description:
      "End-to-end visibility, traceability, and anti-counterfeiting.",
  },
  {
    icon: Tv,
    title: "Media & Entertainment",
    description: "NFT platforms, royalty management, fan engagement.",
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    description: "Digital identity, voting systems, land registries.",
  },
].map((item) => item as { icon: LucideIcon; title: string; description: string });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BlockchainIndustriesSection() {
  return (
    <section className="bc-section-dark">
      <div className="mx-auto w-full max-w-[1350px] px-6">
        <div className="bc-header">
          <h2 className="bc-heading bc-heading-white">
            Industries We Serve with Blockchain
          </h2>
        </div>

        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;

            return (
              <motion.article
                key={ind.title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/70 bg-white p-6 shadow-[0px_10px_28px_rgba(25,14,66,0.08)] transition-all duration-200 hover:border-[#4dac8a66] hover:shadow-[0px_16px_34px_rgba(25,14,66,0.14)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#4dac8a1f] p-3">
                  <Icon className="h-6 w-6 text-[#4dac8a]" />
                </div>
                <h3 className="text-[22px] font-semibold leading-[1.35] text-[#4c4c4e]">
                  {ind.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.72] text-[#5e5e60]">
                  {ind.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
