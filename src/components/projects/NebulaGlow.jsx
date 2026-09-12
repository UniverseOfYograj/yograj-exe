import { motion } from "framer-motion";

export default function NebulaGlow() {
  return (
    <>
      <motion.div
        animate={{
          x: [-18, 18, -18],
          y: [-8, 8, -8],
          scale: [1, 1.04, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-cyan-400 blur-[45px]"
      />

      <motion.div
        animate={{
          x: [12, -12, 12],
          y: [8, -8, 8],
          scale: [1.03, 0.96, 1.03],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-blue-500 blur-[40px]"
      />
    </>
  );
}