import {
  Database,
  Network,
  PanelsTopLeft,
  ServerCog,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import CodingUniverse from "../components/skills/CodingUniverse";
import NeuralCore from "../components/skills/NeuralCore";

const skillGroups = [
  {
    icon: ServerCog,
    title: "Backend Engineering",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Java EE",
      "Distributed Systems",
    ],
    accent: "#62DDF4",
  },
  {
    icon: Network,
    title: "Messaging & Scaling",
    items: ["Kafka", "RabbitMQ", "Redis", "Microservices", "Eureka"],
    accent: "#A997FF",
  },
  {
    icon: Database,
    title: "Data & Persistence",
    items: ["JPA", "Hibernate", "MySQL", "Oracle", "H2"],
    accent: "#7DE3C0",
  },
  {
    icon: PanelsTopLeft,
    title: "Frontend & Tools",
    items: ["React", "JavaScript", "Tailwind CSS", "Docker", "Git", "VS Code"],
    accent: "#F4BD76",
  },
];

function SkillCard({ group, index }) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 100, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 100, damping: 20 });
  const reduceMotion = useReducedMotion();
  const Icon = group.icon;

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
    pointerX.set((0.5 - y) * 1.2);
    pointerY.set((x - 0.5) * 1.2);
  };

  const resetPointer = (event) => {
    pointerX.set(0);
    pointerY.set(0);
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "50%");
  };

  return (
    <motion.article
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={{
        rotateX: reduceMotion ? 0 : springX,
        rotateY: reduceMotion ? 0 : springY,
        "--card-accent": group.accent,
      }}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative min-h-[155px] w-[86%] basis-[86%] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/[0.1] bg-[#061320]/75 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_18px_42px_rgba(0,0,0,.16)] backdrop-blur-xl transition-[border-color,background-color,box-shadow] duration-300 hover:border-white/20 hover:bg-[#081a2a]/90 hover:shadow-[0_18px_48px_rgba(0,0,0,.25)] sm:w-auto sm:basis-auto sm:shrink sm:p-5"
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--pointer-x,50%) var(--pointer-y,50%), color-mix(in srgb, var(--card-accent), transparent 88%), transparent 72%)",
        }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 0 1px color-mix(in srgb, var(--card-accent), transparent 58%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex items-center gap-3">
        <motion.span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-[color:var(--card-accent)] transition-colors duration-300 group-hover:border-[color:var(--card-accent)]/40 group-hover:bg-white/[0.08]"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          aria-hidden="true"
        >
          <Icon size={17} strokeWidth={1.7} />
        </motion.span>
        <h3 className="text-sm font-semibold text-white sm:text-base">
          {group.title}
        </h3>
      </div>
      <ul className="relative z-10 mt-4 flex flex-wrap gap-1.5">
        {group.items.map((item) => (
          <motion.li
            key={item}
            className="rounded-full border border-white/[0.09] bg-black/10 px-2.5 py-1 text-[10px] leading-4 text-slate-300 transition-colors duration-200 sm:text-[11px]"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.035,
                    borderColor: group.accent,
                    color: "#fff",
                    boxShadow: `0 0 12px ${group.accent}40`,
                  }
            }
            transition={{ duration: 0.18 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="neural-section relative isolate overflow-hidden bg-[#020814] py-20 sm:py-28"
      >
        <div
          className="neural-atmosphere pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">
              04 / SKILLS
            </p>
            <h2 className="text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Built to work <span className="text-cyan-200">together.</span>
            </h2>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            <div className="relative flex min-h-[280px] items-center justify-center rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,.08),transparent_66%)] sm:min-h-[360px]">
              <NeuralCore />
            </div>

            <div className="relative -mx-5 w-full min-w-0 sm:mx-0">
              <div className="mb-3 flex items-center justify-between px-5 sm:hidden">
                <p className="font-mono text-[8px] tracking-[0.16em] text-slate-400">
                  EXPLORE SKILLS
                </p>
                <span
                  className="font-mono text-[8px] tracking-[0.12em] text-cyan-100/60"
                  aria-hidden="true"
                >
                  SWIPE →
                </span>
              </div>
              <div
                className="skill-card-carousel flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden px-5 pb-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
                role="region"
                aria-label="Skill groups"
                tabIndex={0}
              >
              {skillGroups.map((group, index) => (
                  <SkillCard
                    key={group.title}
                    group={group}
                    index={index}
                  />
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CodingUniverse />
    </>
  );
}
