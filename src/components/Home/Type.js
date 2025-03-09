import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Software Engineer",
          "Full Stack Web Developer",
          "Django Developer",
          "Digital Marketer",
          "AI/ML Enthusiast",
          "IT Solutions Consultant",
        ],
        // & SEO Specialist
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;