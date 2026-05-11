import worldMap from "@/app/assets/banner/worldmap.svg";
import { Headset, Send } from "lucide-react";

export default function ConnectSection() {
  return (
    <section
      className="section-25 py-100"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(15, 58, 54, 0.92) 0%, rgba(16, 63, 55, 0.88) 35%, rgba(11, 37, 53, 0.9) 100%), url(${worldMap.src})`,
      }}
    >
      <div className="mx-auto w-full max-w-[1350px] px-6">
        <div className="connect-shell">
          <div className="connect-left-pane">
            <h2 className="connect-hero-title">
              Let&apos;s Connect What We Can Collaborate, Build, And Scale Together
            </h2>

            <div className="connect-info-stack">
              <div className="connect-info-row">
                <Headset className="connect-info-icon" aria-hidden="true" />
                <div>
                  <p className="connect-info-label">Customer sales enquiries</p>
                  <p className="connect-info-value">
                    Sales: +91 814-990-6449
                    <br />
                    HR: +91 909-671-5022
                  </p>
                </div>
              </div>

              <div className="connect-divider" />

              <div className="connect-info-row">
                <Send className="connect-info-icon" aria-hidden="true" />
                <div>
                  <p className="connect-info-label">General enquiries</p>
                  <p className="connect-info-value">service@heaptrace.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="connect-form-pane">
            <h3 className="connect-form-title">Get In Touch Today!</h3>
            <p className="connect-form-subtitle">
              Share a few details and our team will get back within one business day.
            </p>
            <form className="connect-form-grid" action="/contact-us">
              <div className="connect-row">
                <input className="connect-field" type="text" placeholder="Your Name" />
                <input className="connect-field" type="email" placeholder="Work Email" />
              </div>
              <textarea
                className="connect-field connect-message"
                placeholder="Tell us about your project goals..."
                rows={4}
              />
              <button className="connect-submit-btn" type="submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
