import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import profile from "../../Assets/profile.png";
import progarmmer from "../../Assets/programmer.png";
import profileSmall from "../../Assets/profile-small.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Services from "./Services";
import Type from "./Type";
import "./Home.css";

function Home() {

  const handleViewResume = () => {
    // Add your resume link here
    window.open('https://drive.google.com/file/d/1K4Snx0eN4D9mT1KvejV8WTvYHMv6AUE_/view?usp=sharing', '_blank');
  };
  const handleHireMe = () => {
    // Add your resume link here
    window.open('https://calendar.app.google/zfHN7vBTX4fZzAz4A', '_blank');
  };


  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{ position: "relative", zIndex: 10 }}>
          <Row style={{ height: "68vh", justifyContent: "center", alignItems: "center", paddingBottom: "70px" }}>
            <Col md={7} className="home-header description">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi There!
                <span style={{ rotate: "40.5deg" }} className="wave" role="img" aria-labelledby="wave">
                  🫲🏼
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Huzaifa Nasir</strong>
              </h1>
              <div className='typer' style={{ paddingLeft: 12, textAlign: "left" }}>
                <Type />
                <p style={{ marginTop: "20px", marginBottom: "30px", fontSize: "1.1rem", opacity: 0.9 }}>
                  Let's work together to bring your ideas to life. I'm here to help you build amazing digital solutions.
                </p>
                <div className="hero-btns" style={{ display: "flex", gap: "15px", marginTop: "25px", position: "relative", zIndex: 100 }}>
                  <Button 
                    size="lg"
                    style={{ padding: "12px 30px", cursor: "pointer", pointerEvents: "auto" }}
                    onClick={handleHireMe}
                  >
                    Book a Meeting
                  </Button>
                  <Button 
                    className="hero-btn"
                    size="lg"
                    style={{ padding: "12px 30px", cursor: "pointer", pointerEvents: "auto", backgroundColor: "rgba(136, 1, 1, 1)" }}
                    onClick={handleViewResume}
                  >
                    View Resume
                  </Button>
                </div>
              </div>
            </Col>
            <Col className="pic" md={5} style={{ paddingBottom: 0, zIndex: 1, justifyContent: "end", paddingRight: "20px" }}>
              <img
                src={profile}
                alt="home pic"
                className="profile-picture"
                style={{ maxHeight: "450px", height: '26vw', borderRadius: "50%" }}
              />
            </Col>
            <Col className="pic" md={5} style={{ paddingBottom: 0, zIndex: 1 }}>
              <img
                src={progarmmer}
                alt="home pic"
                className="profile-picture-small"
                style={{ maxHeight: "450px", height: '26vw'}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Services />
    </section>
  );
}

export default Home;