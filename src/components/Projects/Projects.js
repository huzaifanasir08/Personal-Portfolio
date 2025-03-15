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
import React, { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectList, setProjects] = useState([]);
  const [contributionList, setContributions] = useState([]);

  const projects = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/projects/");
        setData(response.data['contributionData']);
      } catch (error) {
        setData({projects: [], contributions: []});
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (

    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        {loading ? (
          <p style={{ color: "white" }}>
            Loaing....
          </p>
        ) : (
          data.projects.length > 0 ? (
            <p style={{ color: "white" }}>
              Here are a few projects I've worked on recently.
            </p>
          ) : (
            <p style={{ color: "white" }}>
              Nothing to show....
            </p>
          )
          )
        }
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {loading ? (
            console.log("Loading...")
          ) : (

            data.projects.length > 0 ? (
              data.projects.map((project, index) => (
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={project.image}
                    isOnDemand={project.isOnDemand}
                    title={project.title}
                    description={project.description}
                    ghLink={project.gitLink}
                  />
                </Col>

              ))
            ) : (console.log("No projects found"))
          )
          }
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
        My Recent <strong className="purple">Contributions </strong>
        </h1>
        {loading ? (
          <p style={{ color: "white" }}>
            Loaing....
          </p>
        ) : (
          data.projects.length > 0 ? (
            <p style={{ color: "white" }}>
              Here are a few contributions I've done recently.
            </p>
          ) : (
            <p style={{ color: "white", marginBottom:'43vh' }}>
              Nothing to show....
            </p>
          )
          )
        }
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {loading ? (
            console.log("Loading...")
          ) : (

            data.contributions.length > 0 ? (
              data.contributions.map((contribution, index) => (
                <Col md={4} className="project-card">
                  <ProjectCard
                    imgPath={contribution.image}
                    isOnDemand={contribution.isOnDemand}
                    title={contribution.title}
                    description={contribution.description}
                    ghLink={contribution.ghLink}
                  />
                </Col>

              ))
            ) : (console.log("No Contributions found"))
          )
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Projects = () => {
//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         axios.get("http://127.0.0.1:8000/projects/")
//             .then(response => {
//                 setImages(response.data.images); // Access 'images' array
//             })
//             .catch(error => {
//                 console.error("Error fetching images:", error);
//             });
//     }, []);

//     return (
//         <div>
//             <h2>Image Gallery</h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//                 {images.map((image, index) => (
//                     <img key={index} src={`http://127.0.0.1:8000${image}`} 
//                          alt="Fetched from API" width="200" height="200" />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Projects;
