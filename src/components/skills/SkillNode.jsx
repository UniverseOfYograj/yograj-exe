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
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onTap();
    }
  };

  return (
    <motion.g
      role="button"
      tabIndex={0}
      aria-label={`Activate ${label} technology node`}
      aria-pressed={active}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      onKeyDown={handleKeyDown}
      onTap={onTap}
      style={{ cursor: "pointer", outline: "none" }}
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