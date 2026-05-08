import Image from "next/image";
import { benefits } from "../elements/careersData";

export default function CareersBenefitsSection() {
  return (
    <section className="section-28">
      <div className="careers-container">
        <div className="div-block-55">
          <h2 className="heading-29">What benefits are waiting for you?</h2>
          <p className="careers-paragraph">
            Heaptrace offers a variety of hand-picked benefits that you can
            take advantage of!
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const isGradient = index % 2 === 1;
            return (
              <div
                key={benefit.title}
                className={`small-container ${
                  isGradient ? "gradient-box" : "bg-white-card"
                }`}
              >
                <Image
                  src={benefit.icon}
                  alt=""
                  width={52}
                  height={52}
                  className="image-58"
                />
                <h4
                  className={`heading-38 ${
                    isGradient ? "text-white lh-14" : ""
                  }`}
                >
                  {benefit.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
