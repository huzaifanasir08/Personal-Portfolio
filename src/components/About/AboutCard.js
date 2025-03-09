import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "clamp(15px, 3vw, 22px)" }}>
            I am <span className="purple">Huzaifa Nasir </span>
            from <span className="purple"> Sialkot, Pakistan. </span>
            I am currently employed as a backend developer at <span className="purple">Datafunction.ca.</span> I'm pursuing<span className="purple"> BS Software Engineering</span> from the<span className="purple"> University of Sialkot.</span> I am a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage those to solve real-life problems. I am a quick learner and a team player who loves to be surrounded by smart and passionate people.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
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
