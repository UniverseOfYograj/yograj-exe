import { motion } from "framer-motion";

export default function AbyssScene() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden rounded-[36px]">
      {/* Ambient Blue Glow */}
      <div className="absolute left-10 top-8 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

     {/* Soft Volumetric Light */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <motion.div
    className="absolute -top-28 left-28 h-[700px] w-24 rounded-full bg-cyan-300/10 blur-[80px]"
    style={{ transform: "rotate(12deg)" }}
    animate={{ opacity: [0.08, 0.16, 0.08] }}
    transition={{ duration: 6, repeat: Infinity }}
  />

  <motion.div
    className="absolute -top-32 left-48 h-[760px] w-16 rounded-full bg-sky-300/8 blur-[70px]"
    style={{ transform: "rotate(9deg)" }}
    animate={{ opacity: [0.05, 0.12, 0.05] }}
    transition={{ duration: 7.5, repeat: Infinity }}
  />
</div>

      {/* Whale Shadow */}

      {/* Manta Drone (Autonomous) */}
      <motion.div
        animate={{
          x: [20, 180, 330, 210, 20],
          y: [35, 18, 42, 20, 35],
          rotate: [-2, 3, -1, 2, -2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20"
      >
        <svg width="220" height="120" viewBox="0 0 220 120">
          <defs>
            <filter id="mantaGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M22 58 Q110 -6 198 58 Q145 40 110 104 Q75 40 22 58Z"
            fill="rgba(20,130,185,.25)"
            stroke="#22d3ee"
            strokeWidth="2"
            filter="url(#mantaGlow)"
          />

          <motion.circle
            cx="110"
            cy="54"
            r="5"
            fill="#67E8F9"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />

          <circle cx="98" cy="46" r="3" fill="#67E8F9" />
          <circle cx="122" cy="46" r="3" fill="#67E8F9" />
        </svg>
      </motion.div>
{/* Underwater Research Station */}
<motion.div
  animate={{
    y: [0, -4, 0],
    opacity: [0.7, 1, 0.7],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-16 left-16"
>
  <svg width="170" height="120" viewBox="0 0 170 120">
    <defs>
      <filter id="stationGlow">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Legs */}
    <line x1="48" y1="60" x2="35" y2="100" stroke="#0ea5c6" strokeWidth="3" />
    <line x1="122" y1="60" x2="135" y2="100" stroke="#0ea5c6" strokeWidth="3" />

    {/* Base */}
    <line x1="28" y1="100" x2="142" y2="100" stroke="#0ea5c6" strokeWidth="3" />

    {/* Dome */}
    <path
      d="M45 60 Q85 18 125 60"
      fill="rgba(20,130,185,.12)"
      stroke="#22d3ee"
      strokeWidth="2"
      filter="url(#stationGlow)"
    />

    {/* Window */}
    <rect
      x="63"
      y="48"
      width="44"
      height="14"
      rx="7"
      fill="#67E8F9"
      opacity=".85"
    />
  </svg>
</motion.div>

      {/* Fish */}
      <motion.div
        className="absolute top-60 text-xl"
        animate={{
          x: [300, 210, 320],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🐟
      </motion.div>

      <motion.div
        className="absolute top-80 text-lg"
        animate={{
          x: [170, 250, 170],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🐠
      </motion.div>

      {/* Jellyfish */}
      <motion.div
        className="absolute right-12 top-36 text-3xl opacity-70"
        animate={{
          y: [0, 18, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🪼
      </motion.div>

      {/* Bubbles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 h-3 w-3 rounded-full border border-cyan-300/40"
          style={{ left: `${18 + i * 14}%` }}
          animate={{
            y: [-20, -460],
            opacity: [0, 1, 0],
            x: [0, i % 2 ? 8 : -8],
            scale: [0.8, 1.15, 0.7],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}