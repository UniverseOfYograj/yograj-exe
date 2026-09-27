import { motion } from "framer-motion";

export default function ProjectPlanet({
  title,
  shortTitle,
  status,
  tone,
  x,
  y,
  size,
  active,
  onClick,
}) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={`Inspect ${title}`}
      aria-pressed={active}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      className={`project-planet project-planet-${tone} absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Active Glow */}
        {active && (
          <div
            className="absolute rounded-full bg-cyan-400/15 blur-xl"
            style={{
              width: size + 30,
              height: size + 30,
            }}
          />
        )}

        {/* Orbit Ring */}
        <div
          className={`absolute rounded-full border ${
            active ? "border-cyan-200/70" : "border-cyan-100/20"
          }`}
          style={{
            width: size + 16,
            height: size + 16,
          }}
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300" />
          <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-200/80" />
        </div>

        {/* Planet */}
        <motion.div
          animate={
            active
              ? {
                  scale: [1, 1.04, 1],
                }
              : {}
          }
          transition={
            active
              ? {
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {}
          }
          className="relative overflow-hidden rounded-full border border-cyan-400/25"
          style={{
            width: size,
            height: size,
            background: active
              ? "radial-gradient(circle at 35% 28%, rgba(189,239,255,.5), rgba(7,25,40,.95) 72%)"
              : "radial-gradient(circle at 35% 28%, rgba(103,232,249,.24), rgba(7,25,40,.98) 72%)",
          }}
        >
          {/* Specular Highlight */}
          <div className="absolute left-4 top-4 h-4 w-4 rounded-full bg-white/35 blur-sm" />

          {/* Rim Light */}
          <div className="absolute inset-0 rounded-full ring-1 ring-cyan-300/20" />

          {/* Surface Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/35" />
        </motion.div>

        {/* Label */}
        <span
          className={`project-planet-label mt-4 max-w-32 text-center text-xs font-semibold leading-tight ${
            active ? "text-white" : "text-slate-200/75"
          }`}
        >
          <span className="block">{shortTitle || title}</span>
          {status && (
            <span className="mt-1 block font-mono text-[7px] tracking-[0.08em] text-cyan-100/70">
              {status}
            </span>
          )}
        </span>
      </div>
    </motion.button>
  );
}