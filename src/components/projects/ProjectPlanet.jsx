import { motion } from "framer-motion";

export default function ProjectPlanet({
  title,
  x,
  y,
  size = 90,
  active,
  onClick,
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      className="absolute cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className={`relative rounded-full border transition-all duration-300 ${
          active
            ? "border-cyan-300 shadow-[0_0_22px_rgba(34,211,238,.45)]"
            : "border-cyan-400/30"
        }`}
        style={{
          width: size,
          height: size,
          background:
            "radial-gradient(circle at 30% 30%, rgba(34,211,238,.35), rgba(6,15,30,.95))",
        }}
      >
        {/* Inner glow */}
        <motion.div
          animate={{ opacity: [0.25, 0.6, 0.25] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-3 rounded-full bg-cyan-300/20"
        />

        {/* Planet name */}
        <div className="absolute left-1/2 top-full mt-3 w-28 -translate-x-1/2 text-center">
          <p className="text-xs font-medium text-white">{title}</p>
        </div>
      </div>
    </motion.button>
  );
}