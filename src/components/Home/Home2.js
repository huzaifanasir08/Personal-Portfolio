import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import programmer from "../../Assets/programmer.png";
import profile from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import "../../style.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import Particle from "../Particle";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Particle />
        <Row className="home-about">
          <Col md={8} className="home-about-description small-row">
            <h1 style={{ textAlign: "left" }} className="home-about-title">
              Decoding my expertise<span className="purple">—</span>who am I?
            </h1>
            <p className="home-about-body">
              Full-Stack Developer &nbsp;<span className="purple">|</span>&nbsp; AI/ML Enthusiast &nbsp;<span className="purple">|</span>&nbsp; IT Consultant &nbsp; <span className="purple">「 </span><span style={{color:'green'}}>✔</span> ᵛᵉʳᶦᶠᶦᵉᵈ<span className="purple"> 」</span>
              <br />
              <br />As a Software Engineer and Full-Stack Web Developer, I specialize in building seamless, scalable, and high-performance applications that integrate intuitive user experiences with powerful backend solutions. With expertise in Django, AI/ML, and digital marketing, I bring a multidisciplinary approach to software development, ensuring innovative and impactful solutions.
              <i>
                {/* <b className="purple"> C++, Javascript and Go. </b> */}
              </i>
              <br />
              <br />
              <button className="button_more">
                <Link to={"/about"} style={{textDecoration:"blink", color:"rgb(11 10 69)"}}>View More</Link>
                
                </button>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={programmer} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={4} className="myAvtar-small">
            
          <Tilt>
              <img src={profile} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
