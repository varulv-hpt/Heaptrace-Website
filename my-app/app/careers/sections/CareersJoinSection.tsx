import Image from "next/image";
import { HERO_IMAGE, ICON } from "../components/careersData";
import { RetentionIcon, SatisfactionIcon } from "../components/StatIcons";

export default function CareersJoinSection() {
  return (
    <section className="careers-join-section">
      <div className="careers-container">
        <div className="about-block">
          <div className="careers-img-box">
            <Image
              src={HERO_IMAGE}
              alt="Heaptrace careers team"
              width={900}
              height={760}
              className="careers-left-img"
            />
            <div className="careers-image-block">
              <Image
                src={ICON.global}
                alt=""
                width={32}
                height={32}
                className="image-54"
              />
              <span className="text-block-28">
                We’re always here to Motivate you
              </span>
            </div>
          </div>

          <div className="div-block-41">
            <div className="text-wrap">
              <h2 className="heading-29">
                Join us to get <span>more experience</span>
              </h2>
              <p className="careers-subtxt">
                We are dedicated to building careers and driving innovation in
                IT solutions globally
              </p>
            </div>

            <p className="careers-paragraph">
              At HeapTrace, we believe in attracting top talent and providing
              our employees with opportunities for professional growth and
              development. Join our team and embark on a rewarding career
              where you can make a meaningful impact and achieve your full
              potential.
            </p>

            <div className="divider-line" />

            <div className="grid-6">
              <div className="div-block-48">
                <SatisfactionIcon size={72} className="career-stat-icon" />
                <div className="div-block-49">
                  <h5 className="satisfication-heading">
                    Employee Satisfaction Rate
                  </h5>
                  <p className="satisfication-txt">
                    Demonstrates commitment to positive work.
                  </p>
                </div>
              </div>
              <div className="div-block-48">
                <RetentionIcon size={72} className="career-stat-icon" />
                <div className="div-block-49">
                  <h5 className="satisfication-heading">
                    Employee Retention Rate
                  </h5>
                  <p className="satisfication-txt">
                    Reflects long-term trust and loyalty across our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
