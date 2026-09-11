import { motion } from "framer-motion";

export default function NebulaGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 30, -20],
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [20, -20, 20],
          scale: [1.1, 0.95, 1.1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-1/4 h-[420px] w-[420px] rounded-full bg-blue-500 blur-[140px]"
      />
    </>
  );
}