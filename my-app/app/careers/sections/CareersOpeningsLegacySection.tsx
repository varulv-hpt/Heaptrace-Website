import Image from "next/image";
import Link from "next/link";
import { ICON, openings } from "../components/careersData";

export default function CareersOpeningsLegacySection() {
  return (
    <section className="careers-openings-section linear-bg py-100">
      <div className="careers-container">
        <h2 className="heading-24 text-left">Join our big family</h2>
        <p className="paragraph-14 _w-75 text-left mt-0">
          Join our expansive family and become part of a welcoming community
          where opportunities abound.
        </p>

        <div className="current-opening-list">
          {openings.map((opening) => {
            const jobPath = `/job-positions/${opening.slug}`;
            return (
              <article
                key={opening.slug}
                className="careers-list-item-wrapper"
              >
                <div className="career-heading-block">
                  <Link href={jobPath} className="careers-link-text">
                    {opening.title}
                  </Link>
                </div>

                <p className="careers-description-text">
                  {opening.description}
                </p>

                <div className="div-block-50">
                  <div className="careers-types-wrapper">
                    <div className="div-block-51">
                      <Image
                        src={ICON.locationMap}
                        alt=""
                        width={18}
                        height={18}
                        className="image-55"
                      />
                      <span className="careers-type">{opening.location}</span>
                    </div>
                    <div className="div-block-52">
                      <Image
                        src={ICON.jobType}
                        alt=""
                        width={18}
                        height={18}
                        className="image-56"
                      />
                      <span className="careers-time">{opening.hours}</span>
                    </div>
                  </div>
                  <Link href={jobPath} className="ht-secondary-btn-lg">
                    View Job
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
