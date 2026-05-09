"use client";

import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceShowcaseSection from "../../elements/ServiceShowcaseSection";

type DevopsServicesMainSectionProps = {
  service: ServiceDetail;
};

export default function DevopsServicesMainSection({ service }: DevopsServicesMainSectionProps) {
  return (
    <ServiceShowcaseSection
      service={service}
      servicePath="/services/devops-services"
      serviceBadge="DevOps Services"
      serviceHeading="Our DevOps Solutions"
      whyHeading="Why Choose HeapTrace Technology for DevOps Solutions?"
      overviewHeading="DevOps Solutions: Accelerating Your Software Delivery with Automation and Collaboration"
      heroClassName="devops-services"
    />
  );
}

