import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Trophy } from "lucide-react";
import StarField from "../components/timeline/StarField";
import ShootingStar from "../components/timeline/ShootingStar";

const timeline = [
  {
    date: "JUNE 2025 — PRESENT",
    label: "CURRENT MISSION",
    title: "Software Engineer",
    organization: "Tata Consultancy Services",
    description:
      "Designing and building dependable Java backend applications, secure APIs, and maintainable services for real-world business needs.",
    icon: BriefcaseBusiness,
    current: true,
    technologies: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "MySQL"],
  },
  {
    date: "2020 — 2024",
    label: "FOUNDATIONS",
    title: "B.Tech — Information Technology",
    organization: "Oriental Institute of Science & Technology · Bhopal",
    description:
      "Built a strong grounding in computer science, software design, and full-stack development.",
    icon: GraduationCap,
    technologies: ["CGPA 8.65", "Information Technology"],
  },
];

const achievements = [
  { value: "430+", label: "DSA PROBLEMS", detail: "Solved and still counting" },
  { value: "AI", label: "GENERATIVE AI", detail: "Microsoft × LinkedIn learning" },
  { value: "Spring", label: "SPRING BOOT", detail: "Learning through practical builds" },
  { value: "Clean", label: "ARCHITECTURE", detail: "Maintainability as a design choice" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="mission-section relative isolate overflow-hidden bg-[#04111B] py-24 sm:py-32"
    >
      <div className="mission-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
      <StarField />
      <ShootingStar />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl sm:mb-20"
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">
            02 / MISSION TIMELINE
          </p>
          <h2 className="text-4xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Every chapter
            <span className="block text-cyan-200">builds the next.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300/70 sm:text-base">
            From IT foundations to production Java systems.
          </p>
        </motion.div>

        <div className="mission-timeline relative">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`mission-entry relative grid gap-5 py-7 sm:py-9 ${
                  item.current ? "mission-entry-current" : ""
                }`}
              >
                <div className="mission-date flex items-start gap-3 sm:gap-4">
                  <span className="mission-marker relative z-10 mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan-200/30 bg-[#04111B] text-cyan-100">
                    <Icon size={16} strokeWidth={1.7} />
                  </span>
                  <span className="pt-2 font-mono text-[9px] leading-5 tracking-[0.12em] text-slate-400 sm:text-[10px]">
                    {item.date}
                  </span>
                </div>

                <div className="mission-entry-content min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-cyan-200">
                      {item.label}
                    </span>
                    {item.current && (
                      <span className="mission-current-badge inline-flex items-center gap-1.5 rounded-full border border-cyan-200/20 bg-cyan-200/[0.07] px-2.5 py-1 font-mono text-[8px] tracking-[0.1em] text-cyan-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_#67e8f9]" />
                        IN ORBIT
                      </span>
                    )}
                  </div>
                  <h3 className="mission-entry-title text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mission-entry-organization mt-1 text-sm font-semibold text-sky-100/80 sm:text-base">
                    {item.organization}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300/70">
                    {item.description}
                  </p>
                  <div className="mission-chip-list mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span key={technology} className="mission-chip">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-20 border-t border-white/10 pt-7 sm:mt-24">
          <div className="mb-6 flex items-center gap-2 text-cyan-100">
            <Trophy size={16} />
            <p className="font-mono text-[10px] tracking-[0.18em]">
              PROGRESS LOG
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={reveal}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="mission-achievement group bg-[#061320]/95 px-5 py-6 sm:px-7 sm:py-7"
              >
                <p className="mission-achievement-value text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {achievement.value}
                </p>
                <p className="mission-achievement-label mt-2 font-mono text-[9px] tracking-[0.14em] text-cyan-100">
                  {achievement.label}
                </p>
                <p className="mission-achievement-detail mt-2 text-xs text-slate-400">
                  {achievement.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <a
          href="#projects"
          className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-slate-300 transition-colors hover:text-cyan-100"
        >
          Continue to selected work <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
