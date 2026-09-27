import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { Sparkles } from "lucide-react";
import ProjectButtons from "./ProjectButtons";

export default function MissionPanel({ project }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const rotateY = useSpring(pointerY, { stiffness: 90, damping: 22 });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    event.currentTarget.style.setProperty("--light-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--light-y", `${y * 100}%`);
    pointerX.set((0.5 - y) * 1.3);
    pointerY.set((x - 0.5) * 1.3);
  };

  const resetPointer = (event) => {
    pointerX.set(0);
    pointerY.set(0);
    event.currentTarget.style.setProperty("--light-x", "50%");
    event.currentTarget.style.setProperty("--light-y", "50%");
  };

  const ProjectIcon = project.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={project.title}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformPerspective: 1100,
        }}
        initial={reduceMotion ? false : { opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
        transition={{ duration: 0.3 }}
        className="project-mission-card group relative overflow-hidden rounded-3xl border border-cyan-100/15 bg-[#04111B]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur-xl xl:p-7"
        aria-label={project.title}
      >
        <div className="project-card-light pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="project-card-sweep pointer-events-none absolute -left-1/2 top-0 z-20 h-full w-1/3 -skew-x-12 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />

        <div className={`project-card-art project-card-art-${project.tone} relative mb-5 flex h-36 items-center justify-between overflow-hidden rounded-2xl border border-cyan-100/10 px-6 xl:h-40`}>
          <div className="project-card-art-glow pointer-events-none absolute inset-0" />
          <div className="relative z-10">
            <p className="font-mono text-[8px] tracking-[0.18em] text-cyan-100/70">
              FIELD MISSION
            </p>
            <p className="mt-2 max-w-[180px] text-sm font-medium text-white/90">
              {project.shortTitle}
            </p>
          </div>
          <ProjectIcon
            className="relative z-10 h-[82px] w-[82px] text-cyan-100/85 drop-shadow-[0_0_24px_rgba(53,232,255,.24)] transition-transform duration-500 group-hover:scale-105 xl:h-24 xl:w-24"
            strokeWidth={1.1}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.14em] text-cyan-100">
            <Sparkles size={13} aria-hidden="true" />
            {project.status}
          </span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,.8)]" />
        </div>

        <h3 className="relative z-10 text-2xl font-bold leading-[1.05] text-white xl:text-3xl">
          {project.title}
        </h3>
        <p className="relative z-10 mt-3 text-sm leading-6 text-slate-300/75">
          {project.description}
        </p>

        <ul
          className="relative z-10 mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3"
          aria-label="Project features"
        >
          {project.featureTags.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="project-feature inline-flex min-w-0 items-center gap-2 rounded-lg border border-cyan-100/[0.08] bg-cyan-100/[0.025] px-2.5 py-2 text-[10px] text-slate-200/85"
            >
              <Icon
                size={14}
                className="shrink-0 text-cyan-200"
                aria-hidden="true"
              />
              <span className="truncate">{label}</span>
            </li>
          ))}
        </ul>

        <div className="relative z-10 mt-5 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span key={technology} className="mission-chip">
              {technology}
            </span>
          ))}
        </div>

        {project.tone === "booking" && (
          <p className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200/15 bg-amber-100/[0.04] px-3 py-2 font-mono text-[9px] tracking-[0.12em] text-amber-100">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
            CURRENTLY BUILDING
          </p>
        )}

        {(project.github || project.live) && (
          <div className="mission-panel-actions relative z-10 mt-5 border-t border-white/10 pt-4">
            <ProjectButtons github={project.github} live={project.live} />
          </div>
        )}
      </motion.article>
    </AnimatePresence>
  );
}
