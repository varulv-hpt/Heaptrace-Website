"use client";

import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceShowcaseSection from "../../components/ServiceShowcaseSection";

type DataEngineeringMainSectionProps = {
  service: ServiceDetail;
};

export default function DataEngineeringMainSection({ service }: DataEngineeringMainSectionProps) {
  return (
    <ServiceShowcaseSection
      service={service}
      servicePath="/services/data-engineering"
      serviceBadge="Data Engineering"
      serviceHeading="Our Data Engineering Services"
      whyHeading="Why Choose HeapTrace Technology for Data Engineering?"
      overviewHeading="Data Engineering Services: Building Robust Data Pipelines for Seamless Data Flow"
      heroClassName="data-engineering"
    />
  );
}

