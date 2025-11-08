import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Experienced Django Developer",
          "Full Stack Web Developer",
          "ML Engineer",
          "AI Chatbot Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;