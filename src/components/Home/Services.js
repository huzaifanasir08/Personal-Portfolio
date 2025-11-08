import {Col, Card } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import "./Home.css";
import {
  AiOutlineWechat,
  AiOutlineCode,
  AiOutlineApi,
  AiOutlineDatabase,
  AiOutlineThunderbolt,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiOutlinePhone,
} from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import {
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <AiOutlineThunderbolt />,
      title: "AI Powered Solutions",
      description: "Intelligent systems leveraging machine learning algorithms for predictive analytics and automation.",
    },
    {
      icon: <AiOutlineWechat />,
      title: "AI Chatbots",
      description: "Conversational AI solutions with natural language processing for enhanced customer engagement.",
    },
    {
      icon: <AiOutlineCode />,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern frameworks and scalable architecture.",
    },
    {
      icon: <AiOutlineApi />,
      title: "API Development",
      description: "RESTful and GraphQL APIs designed for performance, security, and seamless integration.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytical Softwares",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
    },
    {
      icon: <AiOutlineDatabase />,
      title: "Data Scraping & Automation",
      description: "Automated data extraction pipelines and workflow automation for efficiency.",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="services">
      <Container className='serv-cards'>
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", paddingBottom: "0px" }}>
          <Col md={12} style={{ paddingBottom: "0" }}>
            <h1 className="project-heading" style={{ textAlign: "center" }}>
              My <strong className="purple">Services</strong>
            </h1>
            <p className="serv-text">
              Comprehensive solutions tailored to your digital needs
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {services.map((service, index) => (
            <Col md={6} lg={4} className="services-project-card" key={index} style={{ display: "flex" }}>
              <Tilt style={{ width: "100%" }}>
                <Card className="services-project-card-view" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <div
                      style={{
                        fontSize: "3em",
                        color: "#42e5ff",
                        marginBottom: "15px",
                        textAlign: "center",
                      }}
                    >
                      {service.icon}
                    </div>
                    <Card.Title
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        marginBottom: "15px",
                      }}
                    >
                      {service.title}
                    </Card.Title>
                    <Card.Text style={{ textAlign: "justify", flex: 1 }}>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tilt>
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/huzaifanasir08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/923201511248"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-huzaifanasir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/muhammad_huzaifanasir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:03201511248"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlinePhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;