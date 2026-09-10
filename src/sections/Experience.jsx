import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

import StarField from "../components/timeline/StarField";
import ConstellationLine from "../components/timeline/ConstellationLine";
import TimelineNode from "../components/timeline/TimelineNode";

const timeline = [
  {
    title: "Software Engineer — TCS",
    date: "Jun 2025 — Present",
    active: true,
    icon: <Briefcase className="h-5 w-5 text-cyan-300" />,
    description:
      "Building scalable Java backend applications using Spring Boot, Spring MVC, Spring Security, JPA/Hibernate and MySQL while delivering secure backend solutions.",
  },
  {
    title: "Bachelor of Technology",
    date: "2020 — 2024",
    icon: <GraduationCap className="h-5 w-5 text-cyan-300" />,
    description:
      "Graduated from Oriental Institute of Science & Technology, Bhopal with a strong foundation in Java development, backend engineering and software design.",
  },
  {
    title: "430+ DSA Problems Solved",
    date: "Achievement",
    icon: <Trophy className="h-5 w-5 text-cyan-300" />,
    description:
      "Strengthened problem-solving through Coding Ninjas and GeeksforGeeks, including a Global Rank 1687.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black pt-40 pb-28"
    >
        
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040A18] to-black" />

      {/* Nebula */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/8 blur-[180px]"
      />

      {/* Animated Stars */}
      <StarField />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Career Constellation
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Every Milestone Became a Star
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            My journey isn't a straight line—it's a constellation where every
            project, challenge and achievement connects to the next.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          <ConstellationLine />

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <TimelineNode
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}