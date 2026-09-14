import { motion } from "framer-motion";

export default function WaterCaustics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 1600 900" className="h-full w-full">
          <defs>
            <linearGradient id="waterGlow" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(34,211,238,.08)" />
              <stop offset="50%" stopColor="rgba(120,235,255,.22)" />
              <stop offset="100%" stopColor="rgba(34,211,238,.08)" />
            </linearGradient>
          </defs>

          <path
            d="M-100 140 C250 20 550 240 900 120 C1200 30 1500 170 1700 90"
            stroke="url(#waterGlow)"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M-80 340 C300 210 620 430 980 300 C1300 190 1550 360 1720 250"
            stroke="url(#waterGlow)"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M-120 560 C260 470 600 660 980 520 C1320 410 1540 610 1700 500"
            stroke="url(#waterGlow)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}