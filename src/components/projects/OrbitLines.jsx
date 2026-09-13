import { motion } from "framer-motion";

const lineColor = "rgba(34,211,238,.18)";
const glowColor = "#22D3EE";

const paths = {
  "Smart Agriculture": "M50 50 Q36 18 18 22",
  Portfolio: "M50 50 Q68 18 76 18",
  "430+ DSA": "M50 50 Q34 72 20 72",
  "Next Universe": "M50 50 Q70 70 78 70",
};

export default function OrbitLines({ active }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Static Orbit Lines */}
      {Object.values(paths).map((d, i) => (
        <path
          key={i}
          d={d}
          stroke={lineColor}
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
        />
      ))}

      {/* Active Energy Beam */}
      {active && (
        <>
          <path
            d={paths[active]}
            stroke="rgba(34,211,238,.55)"
            strokeWidth="1.3"
            strokeLinecap="round"
            fill="none"
          />

          <motion.circle
            r="1.3"
            fill={glowColor}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
            style={{
              offsetPath: `path("${paths[active]}")`,
            }}
          />
        </>
      )}
    </svg>
  );
}