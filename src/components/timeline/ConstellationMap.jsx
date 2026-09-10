import { motion } from "framer-motion";

export default function ConstellationMap() {
  return (
    <div className="mx-auto mt-10 mb-12 flex justify-center">
      <svg
        width="260"
        height="120"
        viewBox="0 0 260 120"
        className="overflow-visible"
      >
        <defs>
          <filter id="starGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="constellationLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>

        {/* Base Lines */}
        <path
          d="M40 60 L130 25 L220 75"
          stroke="url(#constellationLine)"
          strokeWidth="1.6"
          fill="none"
          opacity="0.35"
        />

        {/* Animated Line */}
        <motion.path
          d="M40 60 L130 25 L220 75"
          stroke="#8BE9FD"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          style={{
            filter: "drop-shadow(0 0 8px #22d3ee)"
          }}
        />

        {[
          { x: 40, y: 60, delay: 0 },
          { x: 130, y: 25, delay: 0.4 },
          { x: 220, y: 75, delay: 0.8 },
        ].map((star, i) => (
          <g key={i}>
            <motion.circle
              cx={star.x}
              cy={star.y}
              r="6"
              fill="#67E8F9"
              filter="url(#starGlow)"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: star.delay,
              }}
            />
          </g>
        ))}

        {/* Traveling Light */}
        <motion.circle
          r="3.5"
          fill="#E0FFFF"
          filter="url(#starGlow)"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        >
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path="M40 60 L130 25 L220 75"
          />
        </motion.circle>
      </svg>
    </div>
  );
}