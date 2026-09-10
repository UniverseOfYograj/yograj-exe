import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

import StarField from "../components/timeline/StarField";
import ShootingStar from "../components/timeline/ShootingStar";
import TwinkleStars from "../components/timeline/TwinkleStars";
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

function ConstellationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto my-12 flex justify-center"
    >
      <svg width="260" height="120" viewBox="0 0 260 120">
        <defs>
          <filter id="constGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="constLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>

        <path
          d="M40 70 Q130 15 220 70"
          fill="none"
          stroke="url(#constLine)"
          strokeWidth="2"
          opacity="0.35"
        />

        <motion.path
          d="M40 70 Q130 15 220 70"
          fill="none"
          stroke="#8BE9FD"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          style={{ filter: "drop-shadow(0 0 10px #22d3ee)" }}
        />

        {[
          { x: 40, y: 70, d: 0 },
          { x: 130, y: 20, d: 0.4 },
          { x: 220, y: 70, d: 0.8 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.x}
            cy={s.y}
            r="6"
            fill="#67E8F9"
            filter="url(#constGlow)"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: s.d,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black pt-36 pb-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040A18] to-black" />

      {/* Nebula */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]"
      />

      <StarField />
      <ShootingStar />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="relative">
            <TwinkleStars />

            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Career Constellation
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
              Every Milestone Became a Star
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              My journey isn't a straight line—it's a constellation where every
              project, challenge and achievement connects to the next.
            </p>

            <ConstellationMap />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-12">
          <ConstellationLine />

          <div className="space-y-20">
            {timeline.map((item, index) => (
              <TimelineNode
                key={index}
                index={index}
                title={item.title}
                date={item.date}
                description={item.description}
                icon={item.icon}
                active={item.active}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center text-white/35"
        >
          Every milestone added another star to the constellation I'm still building.
        </motion.p>
      </div>
    </section>
  );
}