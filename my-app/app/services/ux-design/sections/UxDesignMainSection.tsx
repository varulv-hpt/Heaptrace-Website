"use client";

import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceShowcaseSection from "../../elements/ServiceShowcaseSection";

type UxDesignMainSectionProps = {
  service: ServiceDetail;
};

export default function UxDesignMainSection({ service }: UxDesignMainSectionProps) {
  return (
    <ServiceShowcaseSection
      service={service}
      servicePath="/services/ux-design"
      serviceBadge="UX Design"
      serviceHeading="Our UX Design Services"
      whyHeading="Why Choose HeapTrace for UX Design?"
      overviewHeading="Why UX Design Matters"
      heroClassName="ux-design"
    />
  );
}

