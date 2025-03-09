import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiGit,
  SiDocker,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px", marginTop: '25px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{fontSize:'1rem'}}>Visual Studio Code</div>
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
        <SiSlack />
        <div style={{fontSize:'1rem'}}>Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit/>
        <div style={{fontSize:'1rem'}}>Git</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
