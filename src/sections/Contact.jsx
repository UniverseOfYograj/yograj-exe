import { motion } from "framer-motion";

import AbyssBackground from "../components/contact/AbyssBackground";
import CommunicationTerminal from "../components/contact/CommunicationTerminal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32"
    >
      <AbyssBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Abyss Communication
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Establish Contact
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
            After exploring mountains, constellations, planets and neural
            networks—this is where the signal reaches the surface.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden lg:block">
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto h-[420px] w-[320px]"
            >
              <div className="absolute left-1/2 top-24 h-28 w-28 -translate-x-1/2 rounded-full border border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,.25)]" />

              <svg
                viewBox="0 0 320 420"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M160 120 C140 200 120 260 160 340"
                  stroke="rgba(34,211,238,.25)"
                  strokeWidth="3"
                  fill="none"
                />

                <circle
                  cx="160"
                  cy="120"
                  r="6"
                  fill="rgba(34,211,238,.9)"
                />

                <circle
                  cx="160"
                  cy="340"
                  r="8"
                  fill="rgba(34,211,238,.7)"
                />
              </svg>
            </motion.div>
          </div>

          <CommunicationTerminal />
        </div>
      </div>
    </section>
  );
}