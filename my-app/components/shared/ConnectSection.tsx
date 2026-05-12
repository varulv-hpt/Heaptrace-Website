import worldMap from "@/app/assets/banner/worldmap.svg";

export default function ConnectSection() {
  return (
    <section
      className="section-25 py-100"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(15, 58, 54, 0.92) 0%, rgba(16, 63, 55, 0.88) 35%, rgba(11, 37, 53, 0.9) 100%), url(${worldMap.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto w-full max-w-[1350px] px-6">
        <div className="connect-shell">
          <div className="connect-left-pane">
            <h2 className="connect-hero-title">
              Let&apos;s Connect what we can collaborate, Build, and Scale Together
            </h2>
            <div className="connect-heading-accent">
              <div className="connect-divider" />
            </div>
          </div>

          <div className="connect-form-pane">
            <h3 className="connect-form-title">Get In Touch today!</h3>
            <form className="connect-form-grid" action="/contact-us">
              <input className="connect-field" type="text" placeholder="Your Name" required />
              <input className="connect-field" type="email" placeholder="Your Email" required />
              <textarea
                className="connect-field connect-message"
                placeholder="Your Message"
                rows={4}
                required
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
