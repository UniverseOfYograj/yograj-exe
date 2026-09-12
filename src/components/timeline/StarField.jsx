import { motion } from "framer-motion";

const stars = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 5,
}));

export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          animate={{ opacity: [0.25, 0.8, 0.25] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
}