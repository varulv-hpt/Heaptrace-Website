import iconELearning from "@/app/assets/icons/Custom E-Learning Platforms.svg";
import iconLMS from "@/app/assets/icons/LMS.svg";
import iconAI from "@/app/assets/icons/AI-Powered Personalized Learning.svg";
import iconGamification from "@/app/assets/icons/Gamification and Interactive Learning.svg";
import iconMobile from "@/app/assets/icons/Mobile Learning Solutions.svg";
import iconVirtual from "@/app/assets/icons/Virtual Classrooms and Collaboration Tools.svg";
import iconData from "@/app/assets/icons/Data Analytics and Reporting.svg";
import iconIntegration from "@/app/assets/icons/EdTech Platform Integration.svg";

const SERVICES = [
  {
    icon: iconELearning.src,
    title: "Custom E-Learning Platforms",
    body: "We design and develop custom e-learning platforms tailored to your specific educational needs. Whether you're building a large-scale online university or a niche course-based platform, our e-learning solutions are intuitive, user-friendly, and scalable, providing seamless access to learning resources for students, teachers, and administrators alike.",
  },
  {
    icon: iconLMS.src,
    title: "Learning Management Systems (LMS)",
    body: "Our team develops powerful Learning Management Systems (LMS) that make it easy to create, manage, and deliver courses online. Our LMS solutions include features such as content creation, student tracking, assessments, and certifications. We also provide integration with existing tools and platforms, ensuring a seamless learning experience.",
  },
  {
    icon: iconAI.src,
    title: "AI-Powered Personalized Learning",
    body: "We harness the power of Artificial Intelligence (AI) to offer personalized learning experiences that adapt to individual student needs. By analyzing student behavior and progress, our AI-driven solutions provide personalized recommendations, targeted resources, and adaptive content that enhances learning outcomes.",
  },
  {
    icon: iconGamification.src,
    title: "Gamification and Interactive Learning",
    body: "We specialize in developing gamified learning experiences that keep students engaged and motivated. Our interactive learning tools incorporate quizzes, challenges, and rewards, turning learning into a fun and immersive experience. Whether for K-12 or corporate training, gamification can boost engagement and retention rates.",
  },
  {
    icon: iconMobile.src,
    title: "Mobile Learning Solutions",
    body: "With mobile learning on the rise, we create responsive and mobile-friendly education platforms that allow students to access content anytime, anywhere. Our mobile learning solutions are optimized for smartphones and tablets, ensuring seamless access across devices and platforms.",
  },
  {
    icon: iconVirtual.src,
    title: "Virtual Classrooms and Collaboration Tools",
    body: "Our virtual classroom solutions enable real-time interaction between students and teachers, fostering collaboration and communication in online learning environments. Features like video conferencing, live chat, file sharing, and interactive whiteboards make virtual learning as effective as traditional classrooms.",
  },
  {
    icon: iconData.src,
    title: "Data Analytics and Reporting",
    body: "We integrate data analytics into our EdTech solutions to provide insights into student performance, course effectiveness, and overall learning outcomes. Our detailed reporting tools allow educators to track progress, identify areas for improvement, and make data-driven decisions to enhance teaching methods and learning experiences.",
  },
  {
    icon: iconIntegration.src,
    title: "EdTech Platform Integration",
    body: "We offer seamless integration of third-party EdTech platforms such as Google Classroom, Zoom, Microsoft Teams, and other popular tools into your existing infrastructure. This ensures that you can leverage the best available tools while maintaining a centralized and efficient learning ecosystem.",
  },
];

export default function EdtechServicesSection() {

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

        <div className="et-cards-all">
          {SERVICES.map((s) => (
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
