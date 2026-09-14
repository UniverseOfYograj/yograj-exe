import { motion } from "framer-motion";
import NeuralCore from "../components/skills/NeuralCore";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020814] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
            Neural Core
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Engineering Ecosystem
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Every technology is connected to a single execution core, creating
            a living network rather than a static skill list.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <NeuralCore />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: "Backend Intelligence",
                desc: "Java, Spring Boot, REST APIs",
              },
              {
                title: "Frontend Systems",
                desc: "React, Tailwind CSS, Framer Motion",
              },
              {
                title: "Data Layer",
                desc: "SQL, Database Design",
              },
              {
                title: "Engineering Workflow",
                desc: "Git, Problem Solving, Clean Architecture",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-cyan-400/15 bg-[#061321]/80 p-6 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-2 text-white/65">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}