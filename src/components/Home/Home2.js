import { Container, Row, Col } from "react-bootstrap";
import programmer from "../../Assets/programmer.png";
import profile from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import "./Home.css";
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
            <p style={{textAlign:"justify"}} className="home-about-body">
              Experienced Django Developer &nbsp;<span className="purple">|</span> Full-Stack Web Developer &nbsp;<span className="purple">|</span>&nbsp; ML Engineer &nbsp;<span className="purple">「 </span><span style={{color:'green'}}>✔</span> ᵛᵉʳᶦᶠᶦᵉᵈ<span className="purple"> 」</span>
              <br />
              <br/>As an <span className="purple">Experienced Django Backend</span> & <span className="purple">AI Developer</span>, I architect and deliver scalable, high-performance, and intelligently designed applications that blend robust backend engineering with seamless user experiences. My expertise spans <span className="purple">Django</span>, <span className="purple">Machine Learning</span>, and modern <span className="purple">Full-Stack Frameworks</span>, allowing me to build solutions that are not just functional, but strategic, efficient, and future-ready. I thrive on solving complex problems, optimizing performance, and driving innovation that actually moves the needle.
              <i>
                
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
              <img src={profile} className="img-flui" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
