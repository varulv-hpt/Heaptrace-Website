import Image from "next/image";
import { BANNER_IMAGE } from "../elements/careersData";

export default function CareersBannerSection() {
  return (
    <section className="careers-banner-section">
      <Image
        src={BANNER_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="careers-banner-background"
        aria-hidden="true"
      />
      <div className="careers-banner-overlay" aria-hidden="true" />
      <div className="careers-container">
        <div className="careers-banner-content title-banner-wraper-flex">
          <h1 className="text-white">Careers</h1>
          <p className="title-description-white-about">
            Explore exciting career opportunities with us and join a dynamic
            team committed to driving innovation and making a meaningful
            impact in the world of business.
          </p>
        </div>
      </div>
    </section>
  );
}
