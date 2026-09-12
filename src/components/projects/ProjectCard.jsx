import { motion } from "framer-motion";
import ProjectButtons from "./ProjectButtons";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  live,
  hero,
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-3xl
      border border-cyan-400/15
      bg-[linear-gradient(180deg,#07111F,#040814)]
      backdrop-blur-md shadow-lg
      ${hero ? "lg:grid lg:grid-cols-[220px_1fr]" : ""}`}
    >
      {/* Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-4 top-4 h-14 w-14 rounded-full border border-cyan-400/15"
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300" />
      </motion.div>

      {/* Hover Glow (Optimized) */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-[35px]" />
        <div className="absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-blue-500/10 blur-[35px]" />
      </div>

      {/* Scan Beam (Lightweight) */}
      <motion.div
        animate={{ y: ["-120%", "140%"] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 right-0 z-10 h-8 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent"
      />

      {/* Mission HUD */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-cyan-400/10 bg-black/30 px-3 py-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <span className="text-[10px] tracking-[0.2em] text-cyan-200">
            ACTIVE
          </span>
        </div>

        <span className="text-[10px] tracking-[0.18em] text-white/50">
          {title.slice(0, 4).toUpperCase()}-01
        </span>
      </div>

      {/* Planet Image */}
      <div className="flex items-center justify-center p-5 pt-12">
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`relative overflow-hidden rounded-full border border-cyan-400/20 ${
            hero ? "h-36 w-36 lg:h-40 lg:w-40" : "h-24 w-24"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 pt-0 lg:pt-5">
        <h3 className="text-lg font-bold text-white md:text-xl">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-white/65">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 border-t border-cyan-400/10 pt-3">
          <ProjectButtons github={github} live={live} />
        </div>
      </div>
    </motion.div>
  );
}