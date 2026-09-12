import { motion, AnimatePresence } from "framer-motion";
import ProjectButtons from "./ProjectButtons";

export default function MissionPanel({ project }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.title}
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.25 }}
        className="rounded-3xl border border-cyan-400/15 bg-[#07111F]/90 p-6 backdrop-blur-md shadow-lg"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs tracking-[0.22em] text-cyan-200">
            MISSION ACTIVE
          </span>

          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        </div>

        <h3 className="text-3xl font-black text-white">{project.title}</h3>

        <p className="mt-4 text-white/70">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
            >
              {t}
            </span>
          ))}
        </div>

        <ProjectButtons github={project.github} live={project.live} />
      </motion.div>
    </AnimatePresence>
  );
}