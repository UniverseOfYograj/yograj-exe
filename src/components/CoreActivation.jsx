import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoreActivation() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setActive(true);
      setTimeout(() => setActive(false), 700);
    };

    window.addEventListener("yograj:boot-complete", trigger);

    return () =>
      window.removeEventListener("yograj:boot-complete", trigger);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <>
          {/* Outer Shockwave */}
          <motion.div
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 3.2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 rounded-full border border-cyan-300"
          />

          {/* Inner Energy Pulse */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0.8 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl"
          />

          {/* Core Flash */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.18, 1] }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 rounded-full ring-2 ring-cyan-300/70"
          />
        </>
      )}
    </AnimatePresence>
  );
}