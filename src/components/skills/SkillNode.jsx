import { motion } from "framer-motion";

export default function SkillNode({
  x,
  y,
  label,
  active,
  onHover,
  onLeave,
  onTap,
}) {
  return (
    <motion.g
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onTap={onTap}
      style={{ cursor: "pointer" }}
    >
      <circle
        cx={x}
        cy={y}
        r="23"
        fill="#061320"
        stroke={active ? "#7BE9FF" : "#22D3EE"}
        strokeWidth="2"
      />

      <motion.circle
        cx={x}
        cy={y}
        r="29"
        fill="none"
        stroke="#22D3EE"
        strokeWidth="1.5"
        animate={
          active
            ? { scale: [1, 1.18, 1], opacity: [0.2, 0.7, 0.2] }
            : { opacity: 0.15 }
        }
        transition={{ duration: 2, repeat: Infinity }}
      />

      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        fontSize="10"
        fill="#E8FCFF"
        fontWeight="600"
      >
        {label}
      </text>
    </motion.g>
  );
}