import num1 from "@/app/assets/icons/number-circle-one-light.png";
import num2 from "@/app/assets/icons/number-circle-two-light.png";
import num3 from "@/app/assets/icons/number-circle-three-light.png";
import num4 from "@/app/assets/icons/number-circle-four-light.png";

const CDN = "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/";
const num5 = `${CDN}672e0b0d080e2f04e728513b_number-circle-five-light.png`;

const STEPS = [
  {
    icon: num1.src,
    title: "Consultation and Strategy",
    body: "We begin by understanding your educational goals, audience, and platform requirements. Our team works closely with you to create a custom EdTech strategy that aligns with your vision, ensuring that your platform meets the unique needs of your learners.",
  },
  {
    icon: num2.src,
    title: "Design and Development",
    body: "Our expert developers and designers craft engaging and intuitive user interfaces that make learning enjoyable and accessible. Whether you're building an e-learning platform or an LMS, we focus on creating a seamless experience that is easy to navigate for both educators and students.",
  },
  {
    icon: num3.src,
    title: "AI-Driven Personalization",
    body: "We integrate AI-powered personalization tools that adapt content, assessments, and learning paths to individual users. This ensures that every learner receives a tailored experience that addresses their specific needs, improving engagement and retention.",
  },
  {
    icon: num4.src,
    title: "Testing and Implementation",
    body: "Before going live, we rigorously test your platform to ensure optimal performance, security, and scalability. We work with you to deploy the solution in a way that minimizes disruption and allows for a smooth transition to your new learning system.",
  },
  {
    icon: num5,
    title: "Continuous Support and Optimization",
    body: "After the launch, our team provides ongoing support, ensuring that your EdTech solution continues to perform at its best. We also offer regular updates and enhancements based on your evolving needs and the latest technological advancements.",
  },
];

export default function EdtechHowWeWorkSection() {
  const row1 = STEPS.slice(0, 3);
  const row2 = STEPS.slice(3, 5);

  return (
    <section className="et-section-light">
      <div className="et-container">
        <div className="et-header">
          <h2 className="et-heading">
            How We <span style={{ color: "#4dac8a" }}>Work</span>
          </h2>
          <p className="et-desc">
            At HeapTrace Technology, we follow a student-centered approach to develop and deliver
            high-quality EdTech solutions.
          </p>
        </div>

        <div className="et-why-grid">
          {row1.map((s) => (
            <StepCard key={s.title} {...s} />
          ))}
        </div>
        <div className="et-why-grid-2" style={{ marginTop: "28px" }}>
          {row2.map((s) => (
            <StepCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="et-why-box">
      <img src={icon} alt="" className="et-why-num-img" />
      <h3 className="et-card-heading" style={{ marginBottom: "8px" }}>{title}</h3>
      <p className="et-card-body">{body}</p>
    </div>
  );
}
