import { motion } from "framer-motion";

export default function SkillNode({
  name,
  x,
  y,
  active,
  onHover,
  onLeave,
  onClick,
}) {
  return (
    <motion.button
      onMouseEnter={() => onHover(name)}
      onMouseLeave={onLeave}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div
        className={`rounded-full border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
          active
            ? "border-cyan-300 bg-cyan-400/15 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,.35)]"
            : "border-cyan-400/20 bg-[#08111F] text-white/80"
        }`}
      >
        {name}
      </div>
    </motion.button>
  );
}