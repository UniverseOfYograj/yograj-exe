import { motion } from "framer-motion";

export default function DepthMeter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="absolute left-8 top-10 z-20 w-28 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#06111B]/75 p-3 backdrop-blur-md"
    >
      {/* Tiny status light */}
      <div className="mb-2 flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
        <span className="text-[9px] tracking-[0.25em] text-cyan-200">
          DEPTH
        </span>
      </div>

      {/* Progress */}
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "92%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-300"
        />
      </div>

      <div className="text-3xl font-black leading-none text-cyan-100">
        984m
      </div>

      <div className="mt-1 text-[9px] tracking-[0.22em] text-cyan-300/70">
        ABYSS ZONE
      </div>
    </motion.div>
  );
}