"use client";

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  useEffect(() => {
    let container: { destroy: () => void } | null = null;

    loadSlim(tsParticles).then(async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let container: any = null;
        container = await tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 40,
                duration: 2,
                speed: 0.4,
                factor: 10,
              },
            },
          },
          particles: {
            number: { value: 75 },
            color: { value: "#c8c8c8" },
            opacity: { value: { min: 0.2, max: 0.5 } },
            size: { value: { min: 1, max: 4 } },
            move: {
              enable: true,
              speed: { min: 0.3, max: 3 },
              direction: "bottom",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            wobble: {
              enable: true,
              distance: 50,
              speed: { min: 5, max: 25 },
            },
          },
          detectRetina: true,
        },
      });
    });

    return () => {
      container?.destroy();
    };
  }, []);

  return (
    <div
      id="tsparticles"
      className="absolute inset-0 z-[1]"
    />
  );
}