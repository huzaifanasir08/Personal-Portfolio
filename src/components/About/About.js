import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/profile1.png";
import Toolstack from "./Toolstack";
import Education from "./Education";
import Courses from "./Courses";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", zIndex: "1" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ padding: "0px 40px 50px 60px", marginTop: "50px", zIndex: "1" }}
            className="about-img"
          >
            <img src={laptopImg}  alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <Education />
        <h1 style={{ marginTop: "40px", marginBottom: "10px" }} className="project-heading">
          Other <strong className="purple">Courses</strong>
        </h1>
        <Courses />
        <h1  style={{ marginTop: "40px", marginBottom: "10px" }} className="project-heading">
          Programming <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
      <Particle />
    </Container>
  );
}

export default About;
