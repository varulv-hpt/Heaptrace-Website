import { Globe, MonitorCheck, Rocket, Users } from "lucide-react";
import {
  SECTION_OUTER_PAD_CLASS,
  SECTION_PAGE_CONTAINER_CLASS,
  SECTION_TEXT_BLOCK_CLASS,
} from "@/app/_shared/sectionShell";

export default function HomeWhyChooseUsSection() {
  return (
    <section className={`linear-bg py-100 ${SECTION_OUTER_PAD_CLASS}`}>
      <div className={SECTION_PAGE_CONTAINER_CLASS}>
        <div className={`${SECTION_TEXT_BLOCK_CLASS} mb-0`}>
          <h2 className="main-heading text-white">Why Choose Us</h2>
          <p className="description-text-white">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="margin-top-title why-choose-us mt-32 _w-100">
          <div className="statistic-block-wrapper">
            <Globe
              className="statictics-icon"
              strokeWidth={1.5}
              aria-label="Worldwide customers"
            />
            <div className="statistic-numeric">100+</div>
            <div className="statistic-description">
              Customers served across the globe
            </div>
          </div>

          <div className="statistic-block-wrapper">
            <MonitorCheck
              className="statictics-icon"
              strokeWidth={1.5}
              aria-label="Software development"
            />
            <div className="statistic-numeric">10+</div>
            <div className="statistic-description">
              Years of building high-quality software
            </div>
          </div>

          <div className="statistic-block-wrapper">
            <Rocket
              className="statictics-icon"
              strokeWidth={1.5}
              aria-label="Product deployment"
            />
            <div className="statistic-numeric">200+</div>
            <div className="statistic-description">
              Products designed, built, and deployed
            </div>
          </div>

          <div className="statistic-block-wrapper">
            <Users
              className="statictics-icon"
              strokeWidth={1.5}
              aria-label="Professional team"
            />
            <div className="statistic-numeric">175+</div>
            <div className="statistic-description">175+ Professional</div>
          </div>
        </div>
      </div>
    </section>
  );
}
