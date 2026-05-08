const WHY = [
  {
    title: "Innovative Learning Experiences",
    body: "We create EdTech solutions that leverage the latest technologies, including AI, gamification, and mobile learning, to provide engaging and effective learning experiences.",
  },
  {
    title: "Tailored Solutions",
    body: "Our solutions are custom-built to meet the specific needs of your institution, whether you're an educational startup, a large university, or a corporate training organization.",
  },
  {
    title: "Scalability and Flexibility",
    body: "Our EdTech platforms are designed to grow with you. Whether you're adding new courses, increasing student enrollment, or expanding to new markets, our solutions are scalable and adaptable to changing needs.",
  },
  {
    title: "Data-Driven Insights",
    body: "With built-in data analytics, we provide real-time insights into learner progress and platform performance, allowing you to make informed decisions that improve learning outcomes.",
  },
  {
    title: "Student-Centric Design",
    body: "We put the learner at the heart of everything we do, creating platforms that are intuitive, easy to navigate, and focused on improving student engagement and success.",
  },
];

export default function EdtechWhyChooseSection() {
  const row1 = WHY.slice(0, 3);
  const row2 = WHY.slice(3, 5);

  return (
    <section className="et-section-why-choose">
      <div className="et-container">
        <div className="et-header">
          <h2 className="et-heading et-heading-white">
            Why Choose HeapTrace Technology for EdTech Solutions?
          </h2>
        </div>

        <div className="et-why-grid">
          {row1.map((item) => (
            <WhyCard key={item.title} {...item} />
          ))}
        </div>
        <div className="et-why-grid-2" style={{ marginTop: "28px" }}>
          {row2.map((item) => (
            <WhyCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="et-why-box">
      <h3 className="et-card-heading">{title}</h3>
      <p className="et-card-body">{body}</p>
    </div>
  );
}
