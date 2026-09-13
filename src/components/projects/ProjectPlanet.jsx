import { motion } from "framer-motion";

export default function ProjectPlanet({
  title,
  x,
  y,
  size,
  active,
  onClick,
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
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
        <motion.div
          animate={active ? { rotate: 360 } : {}}
          transition={
            active
              ? {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }
              : {}
          }
          className={`absolute rounded-full border ${
            active
              ? "border-cyan-300/70"
              : "border-cyan-400/20"
          }`}
          style={{
            width: size + 16,
            height: size + 16,
          }}
        >
          {/* Satellite 1 */}
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300" />

          {/* Satellite 2 */}
          <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-200/80" />
        </motion.div>

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
            background:
              "radial-gradient(circle at 35% 28%, rgba(120,235,255,.45), rgba(7,25,40,.95) 72%)",
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
        <motion.p
          animate={
            active
              ? {
                  y: [-1, 1, -1],
                }
              : {}
          }
          transition={
            active
              ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {}
          }
          className={`mt-4 w-28 text-center text-sm font-semibold ${
            active ? "text-white" : "text-white/75"
          }`}
        >
          {title}
        </motion.p>
      </div>
    </motion.button>
  );
}