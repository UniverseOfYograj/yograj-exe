import { useState } from "react";
import { motion } from "framer-motion";
import SkillNode from "./SkillNode";

const skills = [
  { label: "Java", x: 250, y: 70 },
  { label: "Spring", x: 380, y: 150 },
  { label: "React", x: 430, y: 250 },
  { label: "SQL", x: 250, y: 360 },
  { label: "Git", x: 80, y: 250 },
  { label: "Docker", x: 120, y: 150 },
];

const links = [
  [250, 220, 250, 70],
  [250, 220, 380, 150],
  [250, 220, 430, 250],
  [250, 220, 250, 360],
  [250, 220, 80, 250],
  [250, 220, 120, 150],
];

export default function NeuralCore() {
  const [active, setActive] = useState("Java");

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg viewBox="0 0 500 440" className="h-full w-full">
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="#A5F3FC" stopOpacity="1" />
            <stop offset="55%" stopColor="#22D3EE" stopOpacity=".75" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections */}
        {links.map((l, i) => (
          <line
            key={i}
            x1={l[0]}
            y1={l[1]}
            x2={l[2]}
            y2={l[3]}
            stroke="#22D3EE"
            strokeOpacity=".25"
            strokeWidth="2"
          />
        ))}

        {/* Energy packets */}
        {links.map((l, i) => (
          <motion.circle
            key={"packet" + i}
            r="4"
            fill="#67E8F9"
            animate={{
              cx: [l[0], l[2]],
              cy: [l[1], l[3]],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5 + i * 0.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Outer Ring */}
        <motion.circle
          cx="250"
          cy="220"
          r="108"
          fill="none"
          stroke="#22D3EE"
          strokeOpacity=".35"
          strokeWidth="2"
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "250px 220px" }}
        />

        {/* Inner Ring */}
        <motion.circle
          cx="250"
          cy="220"
          r="86"
          fill="none"
          stroke="#67E8F9"
          strokeOpacity=".25"
          strokeWidth="1.5"
          animate={{ rotate: -360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "250px 220px" }}
        />

        {/* Core Glow */}
        <motion.circle
          cx="250"
          cy="220"
          r="62"
          fill="url(#coreGlow)"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <circle
          cx="250"
          cy="220"
          r="38"
          fill="#061321"
          stroke="#67E8F9"
          strokeWidth="2"
        />

        <motion.circle
          cx="250"
          cy="220"
          r="8"
          fill="#CFFAFE"
          animate={{
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />

        {/* Skill Nodes */}
        {skills.map((s) => (
          <SkillNode
            key={s.label}
            {...s}
            active={active === s.label}
            onHover={() => setActive(s.label)}
            onLeave={() => setActive("Java")}
          />
        ))}
      </svg>

      {/* HUD Card */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-3 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-cyan-400/15 bg-[#05131F]/90 p-4 backdrop-blur-xl"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs tracking-[0.22em] text-cyan-200">
            ACTIVE MODULE
          </span>

          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        </div>

        <h3 className="text-xl font-black text-white">{active}</h3>

        <p className="mt-2 text-sm text-white/70">
          Core technology synchronized with my engineering ecosystem.
        </p>
      </motion.div>
    </div>
  );
}