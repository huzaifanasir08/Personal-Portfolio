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
        <Row className="about-con" style={{ justifyContent: "space-between", zIndex: "1"}}>
          <Col className="my-heading"
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
              width: "65.666667%",

            }}
          >
            <h1>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ padding: "0px 0px 50px 0px", marginTop: "50px", zIndex: "1", marginRight: "-32px", width: "35.666667%", }}
            className="about-img"
          >
            <img src={profile}  alt="about" className="about-img-fluid profile-pic" />
          </Col>
        </Row>
        <h1  style={{ marginTop: "40px", marginBottom: "10px" }} >
          Programming <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        <h1>
          My <strong className="purple">Education</strong>
        </h1>
        <Education />
        <h1 style={{ marginTop: "40px", marginBottom: "10px" }} >
          Other <strong className="purple">Courses</strong>
        </h1>
        <Courses />

        <h1 style={{marginTop: "30px"}}>
          <strong className="purple">Tools & Tech</strong> I use
        </h1>
        <Toolstack />

      </Container>
      <Particle />
    </Container>
  );
}

export default About;
