"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
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
import servicesBanner from "@/app/assets/banner/services-banner.png";
import type { IndustryItem, IndustryPageDetail } from "../industryDetails";

type IndustryShowcaseSectionProps = {
  slug: string;
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

export default function IndustryShowcaseSection({ slug, detail }: IndustryShowcaseSectionProps) {
  return (
    <>
      <section className="section-18">
        <section
          className={`section service-details-banner ${slug}`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(2, 11, 23, 0.92) 0%, rgba(3, 16, 30, 0.84) 45%, rgba(10, 82, 93, 0.42) 100%), url(${servicesBanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "130px 0 92px",
          }}
        >
          <div className="w-layout-blockcontainer service-baner mx-auto w-full max-w-[1350px] px-6">
            <motion.div
              className="title-banner-wraper-flex"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <Link href={`/industry/${slug}`} className="service-sidebar-post-category w-inline-block">
                <div className="text-block-24 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#4c4c4e]">
                  {detail.title}
                </div>
              </Link>
              <h1 className="text-white">{detail.title}</h1>
              <p className="title-description-white-about">{detail.subtitle}</p>
              <Link href="/contact-us" className="secondary-button w-button">
                GET IN TOUCH
              </Link>
            </motion.div>
          </div>
        </section>
      </section>

      <section className="section-10 bg-[#f5f7fa] py-18">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
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

      <section className="section-10 bg-[#f6f7fa] py-20">
        <div className="w-layout-blockcontainer mx-auto w-full max-w-[1350px] px-6">
          <div className="w-layout-blockcontainer header-container _w-100 gap-32 w-container">
            <h2 className="main-heading">{detail.closingHeading}</h2>
            <p className="description-text-dark max-w-[1200px] text-[19px] leading-[1.75] text-[#5e5e60]">
              {detail.closingDescription}
            </p>
            <Link
              href="/contact-us"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#173440] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4dac8a]"
            >
              GET IN TOUCH
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
