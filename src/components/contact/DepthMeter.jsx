import { motion } from "framer-motion";

export default function DepthMeter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="depth-meter absolute right-5 top-5 z-20 flex items-center gap-3 rounded-full border border-cyan-100/15 bg-[#04111B]/75 px-3.5 py-2 backdrop-blur-md sm:right-8 sm:top-7 sm:gap-4 sm:px-4"
      role="meter"
      aria-label="Ocean depth"
      aria-valuemin={0}
      aria-valuemax={1100}
      aria-valuenow={984}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_#67e8f9]" />
      <span className="font-mono text-[8px] tracking-[0.13em] text-cyan-100/80 sm:text-[9px]">
        DEPTH
      </span>
      <span className="h-3 w-px bg-white/15" />
      <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
        984<span className="ml-0.5 text-[9px] font-normal text-cyan-100/80">m</span>
      </span>
    </motion.div>
  );
}
