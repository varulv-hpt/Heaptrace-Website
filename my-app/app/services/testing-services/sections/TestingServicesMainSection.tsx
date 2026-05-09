"use client";

import type { ServiceDetail } from "../../[slug]/serviceDetails";
import ServiceShowcaseSection from "../../elements/ServiceShowcaseSection";

type TestingServicesMainSectionProps = {
  service: ServiceDetail;
};

export default function TestingServicesMainSection({ service }: TestingServicesMainSectionProps) {
  return (
    <ServiceShowcaseSection
      service={service}
      servicePath="/services/testing-services"
      serviceBadge="Testing Services"
      serviceHeading="Our Test Engineering Services"
      whyHeading="Why Choose HeapTrace Technology for Test Engineering?"
      overviewHeading="Test Engineering Services: Ensuring Quality and Reliability Across Your Software Lifecycle"
      heroClassName="testing-services"
    />
  );
}

