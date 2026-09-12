import { motion, AnimatePresence } from "framer-motion";

const info = {
  Java: "Core language used for backend development and DSA.",
  "Spring Boot": "Building scalable RESTful backend services.",
  React: "Creating smooth, interactive user experiences.",
  SQL: "Designing and querying relational databases.",
  Git: "Version control and collaborative development.",
  "REST APIs": "Connecting frontend and backend systems.",
};

export default function SkillInfo({ active }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.25 }}
        className="rounded-3xl border border-cyan-400/15 bg-[#07111F]/90 p-6 backdrop-blur-md shadow-lg"
      >
        <span className="text-xs tracking-[0.22em] text-cyan-200">
          NEURAL SIGNAL
        </span>

        <h3 className="mt-3 text-3xl font-black text-white">
          {active}
        </h3>

        <p className="mt-4 text-white/70">
          {info[active]}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}