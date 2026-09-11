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
      whileHover={{
        y: -8,
        rotateX: 2,
      }}
      transition={{ duration: 0.35 }}
      className={`group relative overflow-hidden rounded-[28px]
      border border-cyan-400/15
      bg-[linear-gradient(180deg,#07111F,#040814)]
      shadow-[0_0_35px_rgba(34,211,238,0.04)]
      ${
        hero ? "min-h-[540px]" : "min-h-[420px]"
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-cyan-400/10"
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_16px_#22d3ee]" />
      </motion.div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-[90px]" />
        <div className="absolute -right-20 bottom-12 h-56 w-56 rounded-full bg-blue-500/10 blur-[90px]" />
      </div>

      {/* Scan Beam */}
      <motion.div
        animate={{ y: ["-120%", "140%"] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 right-0 z-20 h-16 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent"
      />

      {/* Mission HUD */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-cyan-400/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-cyan-200">
            ONLINE
          </span>
        </div>

        <span className="text-[11px] tracking-[0.18em] text-white/60">
          {title.slice(0, 4).toUpperCase()}-01
        </span>
      </div>

      {/* Project Image */}
      <div className="relative overflow-hidden pt-12">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8 }}
          src={image}
          alt={title}
          className={`w-full object-cover ${
            hero ? "h-[300px]" : "h-[190px]"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-cyan-400/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <motion.h3
          whileHover={{
            textShadow: "0 0 18px rgba(34,211,238,.35)",
          }}
          className="text-2xl font-black text-white md:text-3xl"
        >
          {title}
        </motion.h3>

        <p className="mt-3 text-base leading-7 text-white/65">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <motion.span
              key={item}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(103,232,249,.6)",
              }}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-cyan-200"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Footer HUD */}
        <div className="mt-6 flex items-center justify-between border-t border-cyan-400/10 pt-4">
          <span className="text-xs uppercase tracking-[0.22em] text-white/40">
            Mission Ready
          </span>

          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
            }}
            className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]"
          />
        </div>

        <ProjectButtons github={github} live={live} />
      </div>
    </motion.div>
  );
}