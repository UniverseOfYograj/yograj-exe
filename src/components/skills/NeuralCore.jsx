import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillNode from "./SkillNode";

const skills = [
  { label: "Java", x: 250, y: 70 },
  { label: "Spring", x: 380, y: 145 },
  { label: "React", x: 430, y: 245 },
  { label: "SQL", x: 250, y: 390 },
  { label: "Git", x: 70, y: 245 },
  { label: "Docker", x: 120, y: 145 },
];

const links = [
  [250, 220, 250, 70],
  [250, 220, 380, 145],
  [250, 220, 430, 245],
  [250, 220, 250, 390],
  [250, 220, 70, 245],
  [250, 220, 120, 145],
];

export default function NeuralCore() {
  const [active, setActive] = useState("Java");
  const [visited, setVisited] = useState(["Java"]);

  const activate = (skill) => {
    setActive(skill);

    setVisited((prev) =>
      prev.includes(skill) ? prev : [...prev, skill]
    );
  };

  const synced = visited.length === skills.length;

  return (
    <div className="relative mx-auto w-full max-w-[520px] pb-40">
      <svg viewBox="0 0 500 430" className="h-auto w-full">
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="#C8FBFF" />
            <stop offset="55%" stopColor="#22D3EE" stopOpacity=".8" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        {links.map((l, i) => (
          <line
            key={i}
            x1={l[0]}
            y1={l[1]}
            x2={l[2]}
            y2={l[3]}
            stroke="#22D3EE"
            strokeOpacity=".22"
            strokeWidth="2"
          />
        ))}

        {links.map((l, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#74F3FF"
            animate={{
              cx: [l[0], l[2]],
              cy: [l[1], l[3]],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5 + i * 0.15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <motion.circle
          cx="250"
          cy="220"
          r="105"
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

        <motion.circle
          cx="250"
          cy="220"
          r="82"
          fill="none"
          stroke="#67E8F9"
          strokeOpacity=".22"
          strokeWidth="1.5"
          animate={{ rotate: -360 }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "250px 220px" }}
        />

        <motion.circle
          cx="250"
          cy="220"
          r="62"
          fill="url(#coreGlow)"
          animate={
            synced
              ? { scale: [1, 1.18, 1] }
              : { scale: [1, 1.08, 1] }
          }
          transition={{
            duration: synced ? 1.2 : 3,
            repeat: Infinity,
          }}
        />

        <circle
          cx="250"
          cy="220"
          r="38"
          fill="#05131F"
          stroke="#67E8F9"
          strokeWidth="2"
        />

        <motion.circle
          cx="250"
          cy="220"
          r="8"
          fill="#D9FFFF"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {skills.map((s) => (
          <SkillNode
            key={s.label}
            {...s}
            active={active === s.label}
            onHover={() => activate(s.label)}
            onLeave={() => setActive("Java")}
            onTap={() => activate(s.label)}
          />
        ))}
      </svg>

      <AnimatePresence>
        {synced && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2"
          >
            <div className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-3 backdrop-blur-xl">
              <p className="text-xs tracking-[0.3em] text-cyan-200">
                CORE SYNCHRONIZED
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-0 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-cyan-400/15 bg-[#05131F]/92 p-4 backdrop-blur-xl"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs tracking-[0.22em] text-cyan-200">
            {synced ? "SYSTEM STATUS" : "ACTIVE MODULE"}
          </span>

          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
        </div>

        <h3 className="text-xl font-black text-white">
          {synced ? "All Systems Online" : active}
        </h3>

        <p className="mt-2 text-sm text-white/70">
          {synced
            ? "Every engineering module is synchronized with the execution core."
            : "Core technology synchronized with my engineering ecosystem."}
        </p>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ width: `${(visited.length / skills.length) * 100}%` }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>

        <p className="mt-2 text-xs text-cyan-200">
          {visited.length}/{skills.length} Modules Activated
        </p>
      </motion.div>
    </div>
  );
}