import { motion } from "framer-motion";

const bubbles = [
  { left: "12%", size: 8, duration: 12, delay: 0 },
  { left: "22%", size: 12, duration: 16, delay: 2 },
  { left: "35%", size: 6, duration: 10, delay: 4 },
  { left: "48%", size: 10, duration: 15, delay: 1 },
  { left: "62%", size: 14, duration: 18, delay: 5 },
  { left: "74%", size: 7, duration: 11, delay: 3 },
  { left: "86%", size: 9, duration: 14, delay: 6 },
  { left: "93%", size: 5, duration: 9, delay: 2 },
];

export default function BubbleField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          initial={{ y: 120, opacity: 0 }}
          animate={{
            y: -900,
            opacity: [0, 0.5, 0.25, 0],
            x: [0, -8, 8, -4, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "linear",
            delay: b.delay,
          }}
          className="absolute rounded-full border border-cyan-300/40 bg-cyan-300/10 backdrop-blur-sm"
          style={{
            left: b.left,
            bottom: "-30px",
            width: b.size,
            height: b.size,
            boxShadow: "0 0 10px rgba(34,211,238,.18)",
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}