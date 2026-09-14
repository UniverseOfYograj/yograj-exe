import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "> Initializing Yograj.exe",
  "> Loading Neural Blueprint...",
  "> Mapping Project Orbit...",
  "> Establishing Deep Ocean Link...",
  "> Ready.",
];

export default function BootSequence() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const seen = sessionStorage.getItem("boot-seen");

  if (seen) {
    window.dispatchEvent(new Event("yograj:boot-complete"));
    return;
  }

  sessionStorage.setItem("boot-seen", "true");
  setShow(true);

  const interval = setInterval(() => {
    setIndex((i) => {
      if (i >= lines.length - 1) {
        clearInterval(interval);
        return i;
      }
      return i + 1;
    });
  }, 140);

  const hide = setTimeout(() => {
    window.dispatchEvent(new Event("yograj:boot-complete"));
    setShow(false);
  }, 900);

  return () => {
    clearInterval(interval);
    clearTimeout(hide);
  };
}, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#01040C]"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.10),transparent_65%)]" />

          {/* Terminal */}
          <div className="relative w-[92%] max-w-xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#04111B]/90 p-8 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs tracking-[0.35em] text-cyan-200">
                BOOT TERMINAL
              </span>
            </div>

            <div className="space-y-2 font-mono text-sm text-cyan-300">
              {lines.slice(0, index + 1).map((line) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.12 }}
                >
                  {line}
                </motion.p>
              ))}

              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                }}
                className="inline-block text-cyan-100"
              >
                _
              </motion.span>
            </div>

            {/* Progress */}
            <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.82 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-sky-300"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}