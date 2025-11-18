import { Container, Row, Col, Card } from "react-bootstrap";
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
      description: "Cutting-edge AI-powered solutions leveraging advanced machine learning algorithms, predictive analytics, and intelligent automation to streamline business processes, optimize performance, and enable data-driven decision making.",
    },
    {
      icon: <AiOutlineWechat />,
      title: "AI Chatbots",
      description: "Interactive AI chatbots using natural language processing (NLP) and conversational intelligence to deliver personalized customer experiences, improve engagement, reduce response times, and drive higher satisfaction.",
    },
    {
      icon: <AiOutlineCode />,
      title: "Full Stack Development",
      description: "End-to-end full stack web development services using modern frameworks, scalable architectures, and responsive design principles to build robust, high-performance web applications tailored for businesses of all sizes.",
    },
    {
      icon: <AiOutlineApi />,
      title: "API Development",
      description: "Design and development of secure, high-performance RESTful and GraphQL APIs that ensure seamless system integration, reliable data exchange, and optimized backend performance for complex applications.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytical Softwares",
      description: "Advanced data analytics software transforming raw business data into actionable insights with sophisticated visualization, reporting tools, and predictive models to enhance strategic planning and operational efficiency.",
    },
    {
      icon: <AiOutlineDatabase />,
      title: "Data Scraping & Automation",
      description: "Automated data scraping and workflow automation solutions that efficiently extract, process, and manage data from multiple sources, boosting productivity, saving time, and supporting data-driven decision making.",
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
              {/* <Tilt style={{ width: "100%" }}> */}
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
              {/* </Tilt> */}
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
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-huzaifanasir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
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