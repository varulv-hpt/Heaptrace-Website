"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  Blocks,
  BrainCircuit,
  Building2,
  Cloud,
  Cog,
  Database,
  Factory,
  Globe,
  GraduationCap,
  HandCoins,
  HeartPulse,
  Landmark,
  LayoutGrid,
  Megaphone,
  MonitorCog,
  Package,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Truck,
  Users,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import adTechIndustryBanner from "@/app/assets/banner/industries/AdTech-Innovations-industry.webp";
import ecommerceIndustryBanner from "@/app/assets/banner/industries/Ecommerce-industry.webp";
import edpIndustryBanner from "@/app/assets/banner/industries/Edp-industry.webp";
import erpIndustryBanner from "@/app/assets/banner/industries/Erp-industry.webp";
import iotIndustryBanner from "@/app/assets/banner/industries/IoT-industry.webp";
import realEstateIndustryBanner from "@/app/assets/banner/industries/Real-estate-industry.webp";
import PageBanner from "@/components/shared/PageBanner";
import PreConnectCtaSection from "@/components/shared/PreConnectCtaSection";
import type { IndustryItem, IndustryPageDetail } from "../industryDetails";

type IndustryShowcaseSectionProps = {
  detail: IndustryPageDetail;
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function iconForTitle(title: string): LucideIcon {
  const key = title.toLowerCase();

  if (key.includes("cloud")) return Cloud;
  if (key.includes("security") || key.includes("compliance")) return ShieldCheck;
  if (key.includes("data") || key.includes("analytics")) return Database;
  if (key.includes("integration") || key.includes("platform")) return LayoutGrid;
  if (key.includes("mobile") || key.includes("smartphone")) return Smartphone;
  if (key.includes("consulting") || key.includes("strategy")) return Cog;
  if (key.includes("development") || key.includes("custom")) return Blocks;
  if (key.includes("marketing") || key.includes("ad") || key.includes("campaign")) return Megaphone;
  if (key.includes("ai") || key.includes("machine")) return BrainCircuit;
  if (key.includes("real estate") || key.includes("property")) return Building2;
  if (key.includes("crm")) return Users;
  if (key.includes("retail") || key.includes("e-commerce")) return ShoppingBag;
  if (key.includes("banking") || key.includes("finance")) return Landmark;
  if (key.includes("logistics") || key.includes("transport")) return Truck;
  if (key.includes("manufacturing")) return Factory;
  if (key.includes("healthcare")) return HeartPulse;
  if (key.includes("education")) return GraduationCap;
  if (key.includes("maintenance") || key.includes("support")) return MonitorCog;
  if (key.includes("payment")) return HandCoins;
  if (key.includes("grocery") || key.includes("food")) return Package;
  if (key.includes("iot")) return Wifi;
  if (key.includes("scale") || key.includes("growth")) return Rocket;

  return Globe;
}

function CardGrid({
  items,
  columns = "xl:grid-cols-3",
}: {
  items: IndustryItem[];
  columns?: string;
}) {
  return (
    <motion.div
      className={`mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 ${columns}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {items.map((item) => {
        const Icon = iconForTitle(item.title);
        return (
          <motion.article
            key={item.title}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-xl border border-[#dce3ea] bg-white p-6 shadow-[0_10px_26px_rgba(20,25,45,0.06)]"
          >
            <div className="mb-4 inline-flex rounded-xl bg-[#4dac8a1f] p-3">
              <Icon className="h-6 w-6 text-[#4dac8a]" />
            </div>
            <h3 className="text-[22px] font-semibold leading-[1.35] text-[#1f2937]">{item.title}</h3>
            <p className="mt-3 text-[16px] leading-[1.72] text-[#4b5563]">{item.description}</p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

export default function IndustryShowcaseSection({ detail }: IndustryShowcaseSectionProps) {
  const industryBannerByTitle: Record<string, StaticImageData> = {
    "AdTech Innovations": adTechIndustryBanner,
    "E-commerce": ecommerceIndustryBanner,
    "EDP Solutions": edpIndustryBanner,
    "ERP Solutions": erpIndustryBanner,
    IoT: iotIndustryBanner,
    "Real Estate Technology": realEstateIndustryBanner,
  };
  const bannerImage = industryBannerByTitle[detail.title] ?? erpIndustryBanner;

  return (
    <>
      <PageBanner title={detail.title} description={detail.subtitle} backgroundImage={bannerImage} />

      <section className="section-10 bg-[#f5f7fa] py-18">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-6 w-container">
            <h2 className="main-heading">{detail.overviewHeading}</h2>
            <p className="description-text-dark max-w-[1300px] text-[19px] leading-[1.7] text-[#5e5e60]">
              {detail.overview}
            </p>
          </div>
        </div>
      </section>

      <section className="section-2 linear-bg py-16 md:py-20 xl:py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading text-white">{detail.servicesHeading}</h2>
            {detail.servicesSubheading ? (
              <p className="mt-2 max-w-[900px] text-[18px] leading-[1.65] text-white/85">
                {detail.servicesSubheading}
              </p>
            ) : null}
          </div>
          <CardGrid items={detail.services} />
        </div>
      </section>

      <section className="section-8 bg-white py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading">{detail.industriesHeading}</h2>
            {detail.industriesIntro ? (
              <p className="mt-2 max-w-[900px] text-[18px] leading-[1.65] text-[#5e5e60]">
                {detail.industriesIntro}
              </p>
            ) : null}
          </div>
          <CardGrid items={detail.industries} />
        </div>
      </section>

      <section className="section-12 bg-[#f8f9fb] py-24">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container w-container">
            <h2 className="main-heading">{detail.whyHeading}</h2>
          </div>
          <CardGrid items={detail.why} />
        </div>
      </section>

      {detail.extras && detail.extras.length > 0 ? (
        <section className="section-9 linear-bg py-24">
          <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
            <div className="w-layout-blockcontainer header-container w-container">
              <h2 className="main-heading text-white">{detail.extraHeading}</h2>
              {detail.extraIntro ? (
                <p className="mt-2 max-w-[900px] text-[18px] leading-[1.65] text-white/85">
                  {detail.extraIntro}
                </p>
              ) : null}
            </div>
            <CardGrid items={detail.extras} columns="xl:grid-cols-4" />
          </div>
        </section>
      ) : null}

      <PreConnectCtaSection
        title={detail.closingHeading}
        description={detail.closingDescription}
      />
    </>
  );
}
