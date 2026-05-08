const CDN = "https://cdn.prod.website-files.com/670bb5250f6a6cfc3a22a7a3/";

const SERVICES = [
  {
    icon: `${CDN}6756857e07c74f79374aed68_Custom%20E-Learning%20Platforms.svg`,
    title: "Custom E-Learning Platforms",
    body: "We design and develop custom e-learning platforms tailored to your specific educational needs. Whether you're building a large-scale online university or a niche course-based platform, our e-learning solutions are intuitive, user-friendly, and scalable, providing seamless access to learning resources for students, teachers, and administrators alike.",
  },
  {
    icon: `${CDN}67568566fc09b2bb9e7e3220_LMS.svg`,
    title: "Learning Management Systems (LMS)",
    body: "Our team develops powerful Learning Management Systems (LMS) that make it easy to create, manage, and deliver courses online. Our LMS solutions include features such as content creation, student tracking, assessments, and certifications. We also provide integration with existing tools and platforms, ensuring a seamless learning experience.",
  },
  {
    icon: `${CDN}67568529fc49bb4bed26d630_AI-Powered%20Personalized%20Learning.svg`,
    title: "AI-Powered Personalized Learning",
    body: "We harness the power of Artificial Intelligence (AI) to offer personalized learning experiences that adapt to individual student needs. By analyzing student behavior and progress, our AI-driven solutions provide personalized recommendations, targeted resources, and adaptive content that enhances learning outcomes.",
  },
  {
    icon: `${CDN}675685294316d84a47261a87_Gamification%20and%20Interactive%20Learning.svg`,
    title: "Gamification and Interactive Learning",
    body: "We specialize in developing gamified learning experiences that keep students engaged and motivated. Our interactive learning tools incorporate quizzes, challenges, and rewards, turning learning into a fun and immersive experience. Whether for K-12 or corporate training, gamification can boost engagement and retention rates.",
  },
  {
    icon: `${CDN}675684fdae334f39ca304f5a_Mobile%20Learning%20Solutions.svg`,
    title: "Mobile Learning Solutions",
    body: "With mobile learning on the rise, we create responsive and mobile-friendly education platforms that allow students to access content anytime, anywhere. Our mobile learning solutions are optimized for smartphones and tablets, ensuring seamless access across devices and platforms.",
  },
  {
    icon: `${CDN}675684fd3fc98bbd52ccdd35_Virtual%20Classrooms%20and%20Collaboration%20Tools.svg`,
    title: "Virtual Classrooms and Collaboration Tools",
    body: "Our virtual classroom solutions enable real-time interaction between students and teachers, fostering collaboration and communication in online learning environments. Features like video conferencing, live chat, file sharing, and interactive whiteboards make virtual learning as effective as traditional classrooms.",
  },
  {
    icon: `${CDN}675684e25c97c34b61c94239_Data%20Analytics%20and%20Reporting.svg`,
    title: "Data Analytics and Reporting",
    body: "We integrate data analytics into our EdTech solutions to provide insights into student performance, course effectiveness, and overall learning outcomes. Our detailed reporting tools allow educators to track progress, identify areas for improvement, and make data-driven decisions to enhance teaching methods and learning experiences.",
  },
  {
    icon: `${CDN}675684b8f5aaaee2145a0115_EdTech%20Platform%20Integration.svg`,
    title: "EdTech Platform Integration",
    body: "We offer seamless integration of third-party EdTech platforms such as Google Classroom, Zoom, Microsoft Teams, and other popular tools into your existing infrastructure. This ensures that you can leverage the best available tools while maintaining a centralized and efficient learning ecosystem.",
  },
];

export default function EdtechServicesSection() {
  const row1 = SERVICES.slice(0, 3);
  const row2 = SERVICES.slice(3, 6);
  const row3 = SERVICES.slice(6, 8);

  return (
    <section className="et-section-dark">
      <div className="et-container">
        <div className="et-header">
          <h2 className="et-heading et-heading-white">Our EdTech Services</h2>
          <p className="et-desc et-desc-white">
            At HeapTrace Technology, we take a collaborative approach to implementing EdTech
            solutions, ensuring that your development and operations teams work together to deliver
            high-quality software efficiently.
          </p>
        </div>

        <div className="et-cards-grid">
          {row1.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="et-cards-grid" style={{ marginTop: "24px" }}>
          {row2.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="et-cards-grid-2" style={{ marginTop: "24px" }}>
          {row3.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="et-service-card">
      <div className="et-card-overlay" />
      <div className="et-card-inner">
        <img src={icon} alt={title} className="et-card-icon" />
        <h3 className="et-card-heading">{title}</h3>
        <p className="et-card-body">{body}</p>
      </div>
    </div>
  );
}
