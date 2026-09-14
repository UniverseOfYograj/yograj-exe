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
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050B1A] to-black" />
      <NebulaGlow />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center md:mb-20"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Project Orbit
          </span>

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl">
            Explore My Universe
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base md:mt-6 md:max-w-2xl md:text-lg">
            Every project is a planet connected to my engineering core.
          </p>
        </motion.div>

        {/* ---------------- MOBILE ---------------- */}
        <div className="lg:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((project, i) => (
              <motion.button
                key={project.title}
                onClick={() => setActive(project)}
                whileTap={{ scale: 0.98 }}
                className={`min-w-[280px] snap-center overflow-hidden rounded-[28px] border text-left transition ${
                  active.title === project.title
                    ? "border-cyan-300 bg-[#061321]"
                    : "border-cyan-400/15 bg-[#04101A]"
                }`}
              >
                {/* Planet Preview */}
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400/10 via-[#071B2D] to-black">
                  <motion.div
                    animate={{
                      scale: active.title === project.title ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="relative h-24 w-24 rounded-full border border-cyan-300/30 bg-[radial-gradient(circle_at_35%_30%,rgba(120,235,255,.45),rgba(8,28,45,.95)_72%)]"
                  >
                    <div className="absolute left-5 top-5 h-4 w-4 rounded-full bg-white/30 blur-sm" />
                  </motion.div>

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_70%)]" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs tracking-[0.25em] text-cyan-200">
                      MISSION
                    </span>

                    {active.title === project.title && (
                      <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3 py-1 text-[11px] text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-5 flex justify-center gap-2">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setActive(project)}
                className={`h-2 rounded-full transition ${
                  active.title === project.title
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Mobile Action Panel */}
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-[26px] border border-cyan-400/15 bg-[#061321] p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs tracking-[0.24em] text-cyan-200">
                ACTIVE MISSION
              </span>

              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            </div>

            <h3 className="text-2xl font-black text-white">
              {active.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              {active.description}
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={active.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 py-3 text-center text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
              >
                GitHub
              </a>

              <a
                href={active.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-cyan-400 py-3 text-center text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Live →
              </a>
            </div>
          </motion.div>
        </div>

        {/* ---------------- DESKTOP ---------------- */}
        <div className="hidden items-center gap-12 lg:grid lg:grid-cols-[1.1fr_.9fr]">
          {/* Orbit */}
          <div className="relative h-[420px]">
            <OrbitLines />

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 20px rgba(34,211,238,.18)",
                  "0 0 32px rgba(34,211,238,.35)",
                  "0 0 20px rgba(34,211,238,.18)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
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

          <MissionPanel project={active} />
        </div>
      </div>
    </section>
  );
}