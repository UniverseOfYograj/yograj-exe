import { motion } from "framer-motion";

const stars = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 1 + Math.random() * 2,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 3,
}));

export default function StarField() {
  return (
    <>
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
          }}
        />
      ))}
    </>
  );
}