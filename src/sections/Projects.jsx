import { motion } from "framer-motion";

import NebulaGlow from "../components/projects/NebulaGlow";
import ProjectCard from "../components/projects/ProjectCard";


import hero from "../assets/hero.jpg";
const projects = [
  {
    title: "Smart AgriCulture",
    description:
      "A modern agriculture platform focused on smart farming, clean UI and scalable architecture. Built as a complete web experience with responsive layouts and intuitive navigation.",
    image: hero,
    tech: ["React", "Tailwind", "JavaScript", "Responsive UI"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
    hero: true,
  },

  {
    title: "Yograj Portfolio",
    description:
      "A cinematic portfolio featuring 3D DNA animation, constellation timeline and immersive UI inspired by Apple and space aesthetics.",
    image: hero,
    tech: ["React", "Three.js", "Framer Motion"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
  },

  {
    title: "430+ DSA Journey",
    description:
      "Documenting competitive programming progress with Coding Ninjas and GeeksforGeeks achievements, including Global Rank 1687.",
    image: hero,
    tech: ["Java", "DSA", "Problem Solving"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
  },

  {
    title: "Next Universe Project",
    description:
      "A placeholder for the next ambitious project currently under development.",
    image: hero,
    tech: ["Coming Soon"],
    github: "https://github.com/UniverseOfYograj",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050B1A] to-black" />

      <NebulaGlow />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Project Nebula
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Things I've Built
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Every project explores a different part of my engineering journey—
            from clean frontend experiences to scalable backend systems.
          </p>
        </motion.div>

        {/* Hero Project */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ProjectCard {...projects[0]} />
        </motion.div>

        {/* Remaining Projects */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}