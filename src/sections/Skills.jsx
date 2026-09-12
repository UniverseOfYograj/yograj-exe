import { useState } from "react";
import { motion } from "framer-motion";

import SkillNode from "../components/skills/SkillNode";
import NetworkLines from "../components/skills/NetworkLines";
import SkillInfo from "../components/skills/SkillInfo";

const nodes = [
  { name: "Java", x: 50, y: 18 },
  { name: "Spring Boot", x: 28, y: 38 },
  { name: "SQL", x: 72, y: 38 },
  { name: "React", x: 50, y: 62 },
  { name: "REST APIs", x: 18, y: 74 },
  { name: "Git", x: 82, y: 74 },
];

export default function Skills() {
  const [active, setActive] = useState("Java");

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050B1A] to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Neural Network
          </span>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            How My Skills Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Every technology connects to another—forming the network behind how I build software.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative h-[420px]">
            <NetworkLines active={active} />

            {nodes.map((node) => (
              <SkillNode
                key={node.name}
                {...node}
                active={active === node.name}
                onHover={setActive}
                onLeave={() => {}}
                onClick={setActive}
              />
            ))}
          </div>

          <SkillInfo active={active} />
        </div>
      </div>
    </section>
  );
}