import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            position: "fixed",  // Ensures particles stay in the background
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1, // Keeps it behind everything
          }}
          options={{
            background: {
              color: "rgb(221 221 255 / 0%)", // Dark background for contrast
            },
            fpsLimit: 140,
            particles: {
              color: {
                value: "#ffffff", // Single color (white)
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
              },
              number: {
                value: 50,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              opacity: {
                value: { min: 0.3, max: 1 }, // Blinking effect
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.2,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.4, max: 2 },
                animation: {
                  enable: true,
                  speed: 2,
                  minimumValue: 1,
                  sync: false,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

