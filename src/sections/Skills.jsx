import { motion } from "framer-motion";
import NeuralCore from "../components/skills/NeuralCore";
import CodingUniverse from "../components/skills/CodingUniverse";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020814] py-24"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
            Neural Core
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Engineering Ecosystem
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Every technology is connected to a single execution core, creating
            a living engineering network.
          </p>
        </motion.div>

        {/* Neural Core + Skills */}
        <div className="grid items-start gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <NeuralCore />

          <div className="space-y-5">
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
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-cyan-400/15 bg-[#061321]/80 p-6 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-white/65">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Coding Universe (Only Once) */}
        <CodingUniverse />
      </div>
    </section>
  );
}