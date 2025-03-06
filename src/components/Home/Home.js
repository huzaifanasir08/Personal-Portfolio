import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profile1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ height: "68vh", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "70px" }}>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi There!
                <span style={{rotate:"40.5deg"}} className="wave" role="img" aria-labelledby="wave">
                🫲🏼
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Huzaifa Nasir</strong>
              </h1>

              <div style={{ paddingLeft: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, zIndex: 1 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", height:'26vw', borderRadius: "50%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
