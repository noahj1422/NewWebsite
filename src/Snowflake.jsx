import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Snowflake({ id = "tsparticles-snow" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        opacity: 0,
      },
      fpsLimit: 60,
      detectRetina: true,
      fullScreen: {
        enable: false,
        zIndex: 30,
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        shadow: {
          enable: true,
          color: "#ffffff",
          blur: 50,
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: {
            default: "out",
          },
          speed: {
            min: 0.8,
            max: 2.2,
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 220,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 2,
            max: 6,
          },
        },
      },
    }),
    []
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id={id}
        options={options}
        className="pointer-events-none absolute inset-0 z-30"
        aria-hidden="true"
      />
    </ParticlesProvider>
  );
}
