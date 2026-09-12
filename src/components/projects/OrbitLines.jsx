import { motion } from "framer-motion";

export default function OrbitLines() {
  const line = "rgba(34,211,238,.18)";
  const pulse = "rgba(34,211,238,.9)";

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Static Orbit Lines */}
      <path d="M22 28 Q36 18 50 50" stroke={line} strokeWidth="0.45" fill="none"/>
      <path d="M50 50 Q67 36 78 26" stroke={line} strokeWidth="0.45" fill="none"/>
      <path d="M50 50 Q36 72 24 78" stroke={line} strokeWidth="0.45" fill="none"/>
      <path d="M50 50 Q72 70 82 76" stroke={line} strokeWidth="0.45" fill="none"/>

      {/* Moving Pulse */}
      <motion.circle
        r="1"
        fill={pulse}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          offsetPath: 'path("M22 28 Q36 18 50 50")',
        }}
      />
    </svg>
  );
}