import Image from "next/image";
import RevealOnScroll from "@/components/shared/RevealOnScroll";
import { valuedClientRows } from "../components/careersData";

const valuedClientLogos = valuedClientRows.flat();

export default function CareersValuedClientsSection() {
  return (
    <section className="careers-valued-clients-section">
      <div className="careers-container">
        <div className="about-block valued-clients-section">
          <div className="div-block-41 valued-clients">
            <h2 className="heading-29">
              Meet some of our{" "}
              <span className="text-span-2">valued clients</span>
            </h2>
            <p className="careers-paragraph">
              Our team of HeapTrace is committed to guiding you towards your
              business goals with unparalleled expertise and dedication.
            </p>
            <p className="careers-paragraph">
              At HeapTrace, we are dedicated to helping you reach your
              business aspirations by providing exceptional knowledge,
              tailored strategies, and a steadfast commitment to your
              success.
            </p>
          </div>

          <RevealOnScroll className="div-block-40 careers-img-box valued-images">
            <div className="valued-client-grid">
              {valuedClientLogos.map((logo) => (
                <div key={logo.name} className="div-block-53">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={56}
                    className="image-57"
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
