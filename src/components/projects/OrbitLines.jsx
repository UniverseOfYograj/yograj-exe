import { motion } from "framer-motion";

export default function OrbitLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <g
        stroke="rgba(34,211,238,.18)"
        strokeWidth="0.7"
        strokeLinecap="round"
        fill="none"
      >
        {/* Smart Agriculture */}
        <path d="M50 50 Q36 34 18 25" />

        {/* Portfolio */}
        <path d="M50 50 Q60 35 72 25" />

        {/* 430+ DSA */}
        <path d="M50 50 Q37 66 22 72" />

        {/* Next Universe - FIXED */}
        <path d="M50 50 Q59 61 67 70" />
      </g>

      {/* Active signal */}
      <motion.circle
        r="1.1"
        fill="#22d3ee"
        animate={{
          offsetDistance: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          offsetPath: "path('M50 50 Q36 34 18 25')",
        }}
      />
    </svg>
  );
}