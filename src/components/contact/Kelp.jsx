import { motion } from "framer-motion";

export default function Kelp({ side = "left" }) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute bottom-0 ${isLeft ? "left-0" : "right-0"} pointer-events-none`}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
          className="absolute bottom-0 origin-bottom"
          style={{
            left: isLeft ? `${25 + i * 18}px` : `${-25 - i * 18}px`,
          }}
        >
          <svg width="42" height="240" viewBox="0 0 42 240">
            <path
              d="M20 240 C5 190 38 150 18 110 C4 80 32 50 20 0"
              fill="none"
              stroke="rgba(34,211,238,.28)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}