"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

export default function StarsBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // carrega todas as features do tsparticles
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: "#000000", // fundo preto
        },
        fpsLimit: 30,
        particles: {
          number: { value: 170 },
          size: { value: 1 },
          move: { enable: true, speed: 0.1 },
          opacity: { value: 0.8 },
          color: { value: "#ffffff" },
        },
      }}
    />
  );
}
