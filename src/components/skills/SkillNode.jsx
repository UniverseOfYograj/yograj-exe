import { motion } from "framer-motion";

export default function SkillNode({
  x,
  y,
  label,
  active,
  onHover,
  onLeave,
}) {
  return (
    <motion.g
      whileHover={{ scale: 1.08 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      style={{ cursor: "pointer" }}
    >
      <circle
        cx={x}
        cy={y}
        r="24"
        fill="#07131E"
        stroke={active ? "#67E8F9" : "#22D3EE"}
        strokeWidth="2"
      />

      <motion.circle
        cx={x}
        cy={y}
        r="30"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.5"
        animate={
          active
            ? { scale: [1, 1.15, 1], opacity: [0.25, 0.7, 0.25] }
            : { opacity: 0.2 }
        }
        transition={{ duration: 2, repeat: Infinity }}
      />

      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize="10"
        fill="#E6F9FF"
        fontWeight="600"
      >
        {label}
      </text>
    </motion.g>
  );
}