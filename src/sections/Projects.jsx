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
    x: 22,
    y: 28,
    size: 94,
  },
  {
    title: "Portfolio",
    description:
      "3D DNA portfolio inspired by Apple and futuristic interfaces.",
    tech: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    x: 78,
    y: 26,
    size: 84,
  },
  {
    title: "430+ DSA",
    description:
      "Coding Ninjas and GFG journey with strong problem-solving experience.",
    tech: ["Java", "DSA"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    x: 28,
    y: 76,
    size: 88,
  },
  {
    title: "Next Universe",
    description:
      "Upcoming ambitious project currently under development.",
    tech: ["Coming Soon"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    x: 82,
    y: 74,
    size: 82,
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
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Project Orbit
          </span>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Explore My Universe
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Every project is a planet. Click one to explore its mission.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          {/* Orbit */}
          <div className="relative h-[420px]">
            <OrbitLines />

            {/* Center Core */}
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300 bg-cyan-400/15 shadow-[0_0_30px_rgba(34,211,238,.35)]">
              <div className="flex h-full items-center justify-center text-sm font-bold text-cyan-200">
                CORE
              </div>
            </div>

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