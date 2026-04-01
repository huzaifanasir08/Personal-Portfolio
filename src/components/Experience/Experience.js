import Container from "react-bootstrap/Container";
import Particle from "../Particle";
import "../../style.css";

const experiences = [
  {
    company: "Fablous Technology",
    role: "Software Engineer",
    duration: "Nov 2025 – Present",
    current: true,
    points: [
      "Working on full-stack development projects using modern web technologies.",
      "Collaborating with cross-functional teams to deliver scalable software solutions.",
      "Contributing to architecture decisions and code reviews.",
    ],
  },
  {
    company: "Datafunction",
    role: "Software Engineer",
    duration: "Jun 2024 – Nov 2025",
    current: false,
    points: [
      "Developed and maintained web applications using React and Django.",
      "Built and integrated REST APIs for dynamic data handling.",
      "Improved application performance and implemented responsive UI designs.",
    ],
  },
];

const Experience = () => {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Experience</strong>
        </h1>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-dot">
                <span className={exp.current ? "dot dot-active" : "dot"} />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-company">{exp.company}</h3>
                  <span className={`experience-badge ${exp.current ? "badge-current" : "badge-past"}`}>
                    {exp.current ? "Current" : "Past"}
                  </span>
                </div>
                <h5 className="experience-role">{exp.role}</h5>
                <p className="experience-duration">{exp.duration}</p>
                <ul className="experience-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Experience;
