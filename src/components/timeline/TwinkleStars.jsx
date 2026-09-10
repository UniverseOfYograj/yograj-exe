import { motion } from "framer-motion";

const stars = [
  { x: "18%", y: "22%", size: 4, delay: 0 },
  { x: "82%", y: "16%", size: 3, delay: 1.3 },
  { x: "72%", y: "30%", size: 5, delay: 2.2 },
  { x: "28%", y: "12%", size: 2, delay: 3.1 },
];

export default function TwinkleStars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}