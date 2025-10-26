import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  // SiVisualstudiocode,
  SiPostman,
  SiMysql,
  SiGit,
  SiDocker,
  SiReact,
  SiAxios,
  SiDjango,
  SiPython,
  SiGooglecolab,
  SiGithub,
  SiFastapi,
  SiOpenai,
  SiPandas,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "space-between", paddingBottom: "20px", marginTop: '25px' }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{fontSize:'1rem'}}>Visual Studio Code</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango/>
        <div style={{fontSize:'1rem'}}>Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython/>
        <div style={{fontSize:'1rem'}}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
        <div style={{fontSize:'1rem'}}>FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={{fontSize:'1rem'}}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div style={{fontSize:'1rem'}}>Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div style={{fontSize:'1rem'}}>MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
        <div style={{fontSize:'1rem'}}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
        <div style={{fontSize:'1rem'}}>GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab/>
        <div style={{fontSize:'1rem'}}>Google Colab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact/>
        <div style={{fontSize:'1rem'}}>React</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFastapi/>
        <div style={{fontSize:'1rem'}}>Fast API</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAxios/>
        <div style={{fontSize:'1rem'}}>Axios</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas/>
        <div style={{fontSize:'1rem'}}>Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai/>
        <div style={{fontSize:'1rem'}}>Open AI</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
