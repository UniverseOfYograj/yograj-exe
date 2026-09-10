import { motion } from "framer-motion";

export default function ConstellationLine() {
  return (
    <div className="absolute left-1/2 top-0 hidden h-full w-[220px] -translate-x-1/2 md:block">
      <svg
        viewBox="0 0 220 900"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Base line */}
        <path
          d="M110 20
             C150 120,70 220,110 320
             C150 420,70 520,110 620
             C150 720,70 820,110 880"
          fill="none"
          stroke="rgba(34,211,238,.18)"
          strokeWidth="2"
        />

        {/* Animated glow */}
        <motion.path
          d="M110 20
             C150 120,70 220,110 320
             C150 420,70 520,110 620
             C150 720,70 820,110 880"
          fill="none"
          stroke="#5eead4"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          style={{
            filter: "drop-shadow(0 0 12px #22d3ee)"
          }}
        />

        {[110,320,620].map((y)=>(
          <g key={y}>
            <circle cx="110" cy={y} r="13" fill="#04131d"/>
            <circle
              cx="110"
              cy={y}
              r="12"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2"
            />
            <motion.circle
              cx="110"
              cy={y}
              r="4"
              fill="#67e8f9"
              animate={{ scale:[1,1.7,1] }}
              transition={{
                repeat:Infinity,
                duration:2,
                delay:y/300
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}