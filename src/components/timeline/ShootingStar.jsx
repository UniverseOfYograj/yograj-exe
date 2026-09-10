import { motion } from "framer-motion";

const stars = [
  { top: "12%", left: "18%", delay: 1 },
  { top: "28%", left: "72%", delay: 8 },
  { top: "56%", left: "30%", delay: 16 },
  { top: "78%", left: "82%", delay: 24 },
];

export default function ShootingStar() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: star.top,
            left: star.left,
          }}
          initial={{ opacity: 0, x: -120, y: -80 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [-120, 120],
            y: [-80, 80],
          }}
          transition={{
            duration: 1.1,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 28,
            ease: "easeOut",
          }}
        >
          <div className="relative">
            {/* Tail */}
            <div className="h-[2px] w-28 rotate-[-28deg] rounded-full bg-gradient-to-r from-transparent via-cyan-300/90 to-white blur-[1px]" />

            {/* Head */}
            <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_16px_#67e8f9]" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}