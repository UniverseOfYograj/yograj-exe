import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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
  const intervalRef = useRef(null);
  const hideRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("boot-seen") === "true";
    } catch (error) {
      console.error("Unable to read the boot-sequence preference.", error);
    }

    if (seen || reducedMotion) {
      window.dispatchEvent(new Event("yograj:boot-complete"));
      return undefined;
    }

    try {
      sessionStorage.setItem("boot-seen", "true");
    } catch (error) {
      console.error("Unable to save the boot-sequence preference.", error);
    }

    const frame = requestAnimationFrame(() => setShow(true));
    intervalRef.current = setInterval(() => {
      setIndex((current) => Math.min(current + 1, lines.length - 1));
    }, 135);
    hideRef.current = setTimeout(() => {
      window.dispatchEvent(new Event("yograj:boot-complete"));
      setShow(false);
    }, 850);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(intervalRef.current);
      clearTimeout(hideRef.current);
    };
  }, [reducedMotion]);

  const skip = () => {
    clearInterval(intervalRef.current);
    clearTimeout(hideRef.current);
    window.dispatchEvent(new Event("yograj:boot-complete"));
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="boot-sequence fixed inset-0 z-[9999] flex items-center justify-center bg-[#01040C]"
          aria-label="Portfolio loading sequence"
          aria-live="polite"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.10),transparent_65%)]" />
          <div className="relative w-[92%] max-w-xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#04111B]/95 p-6 shadow-[0_24px_100px_rgba(0,0,0,.4)] backdrop-blur-xl sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <span className="font-mono text-[10px] tracking-[0.24em] text-cyan-100">
                  BOOT TERMINAL
                </span>
              </div>
              <button
                type="button"
                onClick={skip}
                className="rounded-full px-2 py-1 text-[10px] text-slate-300 transition-colors hover:text-white"
              >
                Skip intro
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs leading-5 text-cyan-100 sm:text-sm">
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
            </div>

            <div
              className="mt-6 h-1 overflow-hidden rounded-full bg-white/10"
              role="progressbar"
              aria-label="Portfolio startup"
              aria-valuemin={0}
              aria-valuemax={lines.length}
              aria-valuenow={index + 1}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.82 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-200 via-cyan-400 to-sky-300"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
