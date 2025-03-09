import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profile from "../../Assets/profile.png";
import Toolstack from "./Toolstack";
import Education from "./Education";
import Courses from "./Courses";

function About() {
  return (
    <Container fluid className="about-section">
      <Container className="about-sec">
        <Row className="about-con" style={{ justifyContent: "center", padding: "10px", zIndex: "1"}}>
          <Col className="my-heading"
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <h1>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ padding: "0px 40px 50px 60px", marginTop: "50px", zIndex: "1" }}
            className="about-img"
          >
            <img src={profile}  alt="about" className="img-fluid profile-pic" />
          </Col>
        </Row>
        <h1>
          My <strong className="purple">Education</strong>
        </h1>
        <Education />
        <h1 style={{ marginTop: "40px", marginBottom: "10px" }} >
          Other <strong className="purple">Courses</strong>
        </h1>
        <Courses />
        <h1  style={{ marginTop: "40px", marginBottom: "10px" }} >
          Programming <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1>
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
      <Particle />
    </Container>
  );
}

export default About;
