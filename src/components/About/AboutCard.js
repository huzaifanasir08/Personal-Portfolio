import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{ paddingLeft: "2px" }}>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "clamp(15px, 3vw, 22px)" }}> I’m <span className="purple">Huzaifa Nasir</span> from <span className="purple">Sialkot, Pakistan</span>. Currently, I work as a <span className="purple">Senior Backend Developer</span> at <span className="purple">Datafunction.ca</span>, where I build scalable and efficient solutions that power real-world applications. I completed my <span className="purple">BS in Software Engineering</span> from the <span className="purple">University of Sialkot</span>. I’m a passionate and curious learner who loves exploring emerging technologies and turning complex problems into practical, impactful solutions. I adapt quickly, thrive in collaborative environments, and enjoy working with driven, talented people. <br /><br /> Apart from coding, some other activities that I love to do! </p>
          <ul className="other-activity">
            <li className="about-activity">
              <ImCheckmark /> Explore New Tech
            </li>
            <li className="about-activity">
              <ImCheckmark /> Explore Nature
            </li>
          </ul>

          <p className="quoet" style={{ color: "#42e5ff", fontStyle: "italic" }}>
            "Innovation distinguishes between a leader and a follower!"{" "}
          </p>
          <footer style={{ fontStyle: "italic" }} className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
