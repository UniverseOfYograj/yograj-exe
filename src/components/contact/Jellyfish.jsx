import { motion } from "framer-motion";

export default function Jellyfish() {
  const items = [
    { left: "16%", top: "26%", delay: 0 },
    { left: "82%", top: "20%", delay: 2 },
  ];

  return (
    <>
      {items.map((j, i) => (
        <motion.div
          key={i}
          animate={{ y: [-8, 10, -8] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: j.delay,
          }}
          className="absolute pointer-events-none"
          style={{ left: j.left, top: j.top }}
        >
          <svg width="42" height="70" viewBox="0 0 42 70">
            <ellipse
              cx="21"
              cy="18"
              rx="14"
              ry="11"
              fill="rgba(120,235,255,.16)"
              stroke="rgba(120,235,255,.35)"
            />
            {[15, 20, 25, 30].map((x) => (
              <path
                key={x}
                d={`M${x} 28 C${x - 3} 40 ${x + 3} 50 ${x} 68`}
                stroke="rgba(120,235,255,.25)"
                fill="none"
                strokeWidth="1.6"
              />
            ))}
          </svg>
        </motion.div>
      ))}
    </>
  );
}