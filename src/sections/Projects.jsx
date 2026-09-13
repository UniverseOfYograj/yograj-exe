import { useState } from "react";
import { motion } from "framer-motion";

import NebulaGlow from "../components/projects/NebulaGlow";
import OrbitLines from "../components/projects/OrbitLines";
import ProjectPlanet from "../components/projects/ProjectPlanet";
import MissionPanel from "../components/projects/MissionPanel";

const projects = [
  {
    title: "Smart Agriculture",
    description:
      "Modern agriculture platform with responsive UI and scalable architecture.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    x: 18,
    y: 25,
    size: 70,
  },
  {
    title: "Portfolio",
    description:
      "3D DNA portfolio inspired by Apple and futuristic interfaces.",
    tech: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    x: 72,
    y: 25,
    size: 68,
  },
  {
    title: "430+ DSA",
    description:
      "Coding Ninjas and GFG journey with strong problem-solving experience.",
    tech: ["Java", "DSA"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    x: 22,
    y: 72,
    size: 68,
  },
  {
    title: "Next Universe",
    description:
      "Upcoming ambitious project currently under development.",
    tech: ["Coming Soon"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    x: 70,
    y: 72,
    size: 64,
  },
];

export default function Projects() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050B1A] to-black" />
      <NebulaGlow />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Project Orbit
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Explore My Universe
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Every project is a planet connected to my engineering core.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

          {/* Left Orbit */}
          <div className="relative h-[420px]">
            <OrbitLines />

            {/* Core */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(34,211,238,.18)",
                  "0 0 32px rgba(34,211,238,.35)",
                  "0 0 20px rgba(34,211,238,.18)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
              className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300 bg-cyan-400/15 text-sm font-bold text-cyan-200"
            >
              CORE
            </motion.div>

            {projects.map((p) => (
              <ProjectPlanet
                key={p.title}
                {...p}
                active={active.title === p.title}
                onClick={() => setActive(p)}
              />
            ))}
          </div>

          {/* Right Panel */}
          <MissionPanel project={active} />

        </div>
      </div>
    </section>
  );
}