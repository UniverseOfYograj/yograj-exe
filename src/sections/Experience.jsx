import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    title: "Software Engineer — TCS",
    date: "Jun 2025 — Present",
    description:
      "Building scalable Java backend applications using Spring Boot, Spring MVC, Spring Security and JPA/Hibernate while delivering secure MySQL-powered solutions.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Technology",
    date: "2020 — 2024",
    description:
      "Completed B.Tech at Oriental Institute of Science & Technology, Bhopal while building a strong foundation in Java development and backend engineering.",
  },
  {
    icon: Trophy,
    title: "430+ DSA Problems Solved",
    date: "Achievement",
    description:
      "Strengthened problem-solving through Coding Ninjas and GeeksforGeeks, including a Global Rank 1687.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020B18] to-black" />

      {/* Nebula */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ repeat: Infinity, duration: 18 }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]"
      />

      {/* Floating stars */}
      {Array.from({ length: 35 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 4,
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 1 + Math.random() * 3,
            height: 1 + Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Career Constellation
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            My Journey Through the Stars
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Every milestone added another star to the constellation I'm still building.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-cyan-500/30 md:block" />

          {/* Animated Pulse */}
          <motion.div
            animate={{ y: [0, 520, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute left-[18px] hidden h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_25px_#22d3ee] md:block"
          />

          <div className="space-y-14">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative flex flex-col gap-6 md:flex-row md:gap-10"
                >
                  {/* Star */}
                  <div className="relative hidden md:block">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,.35)]"
                    >
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </motion.div>

                    {/* Small orbiting dot */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      className="absolute inset-0"
                    >
                      <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300" />
                    </motion.div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="flex md:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,.35)]">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.01,
                    }}
                    transition={{ type: "spring", stiffness: 180 }}
                    className="flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,180,255,.06)]"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <span className="text-sm font-medium text-cyan-300">
                        {item.date}
                      </span>
                    </div>

                    <p className="mt-5 text-lg leading-relaxed text-white/65">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}