
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FlaskConical } from "lucide-react";
const timeline = [
  {
    icon: Briefcase,
    title: "Software Engineer — TCS",
    date: "Jun 2025 — Present",
    description:
      "Building Java backend applications using Spring Boot, Spring MVC, JSP and Servlets while implementing Spring Security, JPA/Hibernate and MySQL-based solutions."
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Technology",
    date: "2020 — 2024",
    description:
      "Completed B.Tech at Oriental Institute of Science & Technology, Bhopal while building a strong foundation in Java development, backend engineering and problem solving."
  },
  {
    icon: Briefcase,
    title: "430+ DSA Problems Solved",
    date: "Achievement",
    description:
      "Solved over 430 coding problems across Coding Ninjas and GeeksforGeeks, including a Global Rank 1687 in a Coding Ninjas contest."
  }
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040A18] to-black" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            My Journey
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Experience Timeline
          </h2>

          <p className="mt-4 max-w-2xl text-white/60">
            From Pharmacy to Software Engineering — every milestone shaped how I
            solve problems today.
          </p>
        </motion.div>

        <div className="relative mt-20">

          <div className="absolute left-6 top-0 h-full w-px bg-cyan-400/30" />

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative mb-12 flex gap-6"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-[#071322] shadow-[0_0_25px_rgba(34,211,238,.4)]">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>

                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,.2)]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <span className="text-sm text-cyan-300">
                      {item.date}
                    </span>
                  </div>

                  <p className="mt-4 leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}