import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inventory from "../../Assets/Projects/inventory.png";
import LearnAgenticAI from "../../Assets/Projects/LearnAgenticAI.png";
import textutils from "../../Assets/Projects/textutils.png";
import gemini from "../../Assets/Projects/gemini.png";
import hellojs from "../../Assets/Projects/hellojs.png";
import contentScraper from "../../Assets/Projects/contentScraper.png";
import rainPridiction from "../../Assets/Projects/rainPridiction.png";
import webchangesdetector from "../../Assets/Projects/webchangesdetector.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isOnDemand={false}
              title="Inventory Management"
              description="A full-stack inventory management website designed to track, manage, and analyze stock levels in real time. It provides automated restocking alerts, sales tracking, and insightful reports to help businesses optimize operations, reduce waste, improve efficiency, and enhance decision-making with data-driven insights."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gemini}
              isOnDemand={false}
              title="Gemini Clone"
              description="An AI-powered chatbot designed to provide intelligent and human-like responses, leveraging advanced natural language processing (NLP) capabilities. It can answer questions, generate text, summarize content, and assist with various tasks, making it a versatile tool for users."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contentScraper}
              isOnDemand={true}
              title="Website Content Scraper"
              description="Designed to efficiently extract data from various websites using Crawl4AI, a powerful web crawling tool. It supports dynamic content fetching, integrates Celery for task management, and offers modular, user-friendly code. Ideal for developers seeking quick and customizable web scraping solutions."
              ghLink="https://github.com/huzaifanasir08/Website_Content_Scraper"
              // demoLink="https://blogs.soumya-jit.tech/"

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rainPridiction}
              isOnDemand={true}
              title="Rain Pridiction Model"
              description="A Prediction Model using machine learning and real-time weather data. Using a Random Forest Classifier to predict whether it will rain tomorrow based on historical weather data. The model is trained on the Australian weather dataset and considers key weather features like temperature, humidity, and wind speed."
              ghLink="https://github.com/huzaifanasir08/Rain-Pridiction"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webchangesdetector}
              isOnDemand={true}
              title="Web Changes Detector"
              description="Monitor your website's integrity with automated alerts for unauthorized changes. By getting HTML content and comparing it over time, this system ensures originality. It features asynchronous crawling, automated checks, and email notifications for detected modifications—keeping you informed effortlessly."
              ghLink="https://github.com/huzaifanasir08/WebChangesDetector"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isOnDemand={false}
              title="Text Utils"
              description="A simple yet powerful text manipulation tool that allows users to perform various operations on text, such as converting case (uppercase/lowercase), removing extra spaces, counting words and characters, reversing text, and more. Text Utils enhances productivity with its easy-to-use interface and efficient functionality."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Contributions </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few contributions I've done recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LearnAgenticAI}
              isOnDemand={true}
              title="Learn Agentic AI"
              description="A structured program designed to teach the fundamentals and advanced concepts of Agentic Artificial Intelligence. It covers CrewAI, LangChain, and LangGraph, providing hands-on projects to enhance learning. Ideal for developers seeking expertise in building intelligent agent-based AI systems effectively."
              ghLink="https://github.com/huzaifanasir08/learn-agentic-ai"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hellojs}
              isOnDemand={true}
              title="Hello JS"
              description="A client-side JavaScript SDK that enables authentication with OAuth2 services and facilitates interaction with their RESTful APIs, standardizes API paths, supporting platforms like Google, and Facebook. Ideal for developers seeking seamless integration with multiple third-party services."
              ghLink="https://github.com/huzaifanasir08/hello.js"
              // demoLink="https://blogs.soumya-jit.tech/"

            />
          </Col>
          
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contentScraper}
              isOnDemand={true}
              title="Website Content Scraper"
              description="Designed to efficiently extract data from various websites using Crawl4AI, a powerful web crawling tool. It supports dynamic content fetching, integrates Celery for task management, and offers modular, user-friendly code. Ideal for developers seeking quick and customizable web scraping solutions."
              ghLink="https://github.com/huzaifanasir08/Website_Content_Scraper"
              // demoLink="https://blogs.soumya-jit.tech/"

            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutils}
              isOnDemand={false}
              title="Text Utils"
              description="A simple yet powerful text manipulation tool that allows users to perform various operations on text, such as converting case (uppercase/lowercase), removing extra spaces, counting words and characters, reversing text, and more. Text Utils enhances productivity with its easy-to-use interface and efficient functionality."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
