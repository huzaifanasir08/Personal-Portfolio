import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Particle from "../Particle";
import { MdWork, MdLocationOn, MdCalendarToday } from "react-icons/md";
import { SiDjango } from "react-icons/si";
import "../../style.css";

const experiences = [
  {
    company: "Fabulous Technology Solutions",
    role: "Django Backend Developer",
    duration: "Nov 2025 – Present",
    type: "Full-time",
    current: true,
    description:
      "Leading backend development using Django and Django REST Framework to build scalable, production-ready APIs and services.",
    points: [
      "Designing and developing RESTful APIs consumed by frontend and mobile clients.",
      "Implementing authentication & authorization using JWT and session-based flows.",
      "Optimizing database queries and managing migrations with Django ORM.",
      "Collaborating with frontend teams to define API contracts and data schemas.",
      "Deploying and maintaining applications on cloud infrastructure.",
    ],
    tech: ["Django", "DRF", "PostgreSQL", "JWT", "REST API", "Stripe"],
  },
  {
    company: "Datafunction Inc.",
    role: "Django Backend Developer",
    duration: "Jun 2024 – Nov 2025",
    type: "Remote, Full-time",
    current: false,
    description:
      "Worked as a backend developer building and maintaining Django-based web applications and APIs for data-driven products.",
    points: [
      "Built and maintained Django REST Framework APIs for multiple client projects.",
      "Integrated third-party services and external APIs into backend systems.",
      "Wrote clean, testable Python code following best practices and PEP standards.",
      "Managed MySQL/PostgreSQL databases, wrote complex queries and optimized performance.",
      "Participated in code reviews, sprint planning, and agile development cycles.",
    ],
    tech: ["Django", "DRF", "MySQL", "REST API", "Python", "Git"],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`exp-card ${visible ? "exp-card--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Left: icon column */}
      <div className="exp-icon-col">
        <div className={`exp-icon-wrap ${exp.current ? "exp-icon-wrap--active" : ""}`}>
          <SiDjango size={22} />
        </div>
        {index < experiences.length - 1 && <div className="exp-connector" />}
      </div>

      {/* Right: content */}
      <div className="exp-body">
        <div className="exp-meta">
          <span className="exp-duration">
            <MdCalendarToday size={13} style={{ marginRight: 5 }} />
            {exp.duration}
          </span>
          <span className={`exp-badge ${exp.current ? "exp-badge--current" : "exp-badge--past"}`}>
            {exp.current ? "● Current" : "✓ Completed"}
          </span>
        </div>

        <div className="exp-header">
          <div>
            <h3 className="exp-company">{exp.company}</h3>
            <h5 className="exp-role">
              <MdWork size={15} style={{ marginRight: 6, color: "#42e5ff" }} />
              {exp.role}
            </h5>
          </div>
          <span className="exp-type">{exp.type}</span>
        </div>

        <p className="exp-description">{exp.description}</p>

        <ul className="exp-points">
          {exp.points.map((point, i) => (
            <li key={i} className="exp-point" style={{ animationDelay: `${i * 0.07}s` }}>
              <span className="exp-point-dot" />
              {point}
            </li>
          ))}
        </ul>

        <div className="exp-tech-row">
          {exp.tech.map((t, i) => (
            <span key={i} className="exp-tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container className="exp-container">
        <div className="exp-heading-wrap">
          <h1 className="project-heading">
            Work <strong className="purple">Experience</strong>
          </h1>
          <p className="exp-subheading">My professional journey so far</p>
        </div>
        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Experience;
