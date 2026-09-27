import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bug,
  CloudSun,
  Database,
  MessageCircle,
  ShieldCheck,
  Sprout,
  TicketCheck,
  Workflow,
} from "lucide-react";
import MissionPanel from "../components/projects/MissionPanel";
import NebulaGlow from "../components/projects/NebulaGlow";

const projects = [
  {
    title: "Smart Crop, Fertilizer & Disease Predictor",
    shortTitle: "Smart Crop",
    status: "FIELD SYSTEM · PRODUCT",
    description:
      "Local insights for healthier crops and more informed growing decisions.",
    detail:
      "Weather, crop guidance, fertilizer recommendations, disease detection, and an agriculture chatbot.",
    tech: ["React", "Node.js", "Express", "Firebase", "OpenWeatherMap", "Nominatim"],
    features: [
      "Local weather and location context",
      "Crop recommendations",
      "Fertilizer prediction",
      "Plant disease detection",
      "Agriculture chatbot",
    ],
    featureTags: [
      { label: "Weather", icon: CloudSun },
      { label: "Crop", icon: Sprout },
      { label: "Fertilizer", icon: Activity },
      { label: "Disease", icon: Bug },
      { label: "Assistant", icon: MessageCircle },
    ],
    live: "",
    github: "",
    icon: Sprout,
    tone: "crop",
  },
  {
    title: "Spring Boot ToDo",
    shortTitle: "ToDo System",
    status: "BACKEND · ENTERPRISE",
    description:
      "A maintainable task service built around clean backend boundaries.",
    detail:
      "Structured REST endpoints, persistent tasks, and validation across clear service boundaries.",
    tech: ["Java", "Spring Boot", "Spring MVC", "JPA", "MySQL"],
    features: [
      "Structured REST endpoints",
      "Persistent task management",
      "Validation and clear service boundaries",
    ],
    featureTags: [
      { label: "REST", icon: Workflow },
      { label: "Persistence", icon: Database },
      { label: "Validation", icon: ShieldCheck },
    ],
    live: "",
    github: "",
    icon: Database,
    tone: "todo",
  },
  {
    title: "High-Concurrency Ticket Booking System",
    shortTitle: "Ticket Booking",
    status: "CURRENTLY BUILDING",
    description:
      "A booking system exploring reliable reservations under contention.",
    detail:
      "Race-safe allocation, concurrency patterns, and a consistent reservation lifecycle.",
    tech: ["Java", "Spring Boot", "Concurrency", "SQL"],
    features: [
      "Race-safe ticket allocation",
      "Concurrency and contention patterns",
      "Consistent reservation lifecycle",
    ],
    featureTags: [
      { label: "Reservations", icon: TicketCheck },
      { label: "Concurrency", icon: Activity },
      { label: "Consistency", icon: ShieldCheck },
    ],
    live: "",
    github: "",
    icon: TicketCheck,
    tone: "booking",
  },
];

const petalPositions = [
  { left: "25%", top: "35%", rotate: -24 },
  { left: "75%", top: "35%", rotate: 24 },
  { left: "50%", top: "73%", rotate: 0 },
];

function BloomSelector({ active, onSelect, mobile = false }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`project-bloom relative mx-auto ${
        mobile ? "h-[210px] w-full max-w-[340px] lg:hidden" : "hidden h-[520px] w-full max-w-[590px] lg:block"
      }`}
      role="group"
      aria-label="Choose a project mission"
    >
      <div className="project-bloom-aura pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="project-bloom-core absolute left-1/2 top-1/2 z-10 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-100/30 bg-[#061320]/90 text-center shadow-[0_0_36px_rgba(56,189,248,.17)]">
        <span className="font-mono text-[7px] tracking-[0.17em] text-cyan-100/75">
          FIELD
        </span>
        <span className="mt-0.5 text-[10px] font-semibold text-white">MISSIONS</span>
      </div>
      {projects.map((project, index) => {
        const Icon = project.icon;
        const isActive = active.title === project.title;
        const position = petalPositions[index];

        return (
          <motion.button
            key={project.title}
            type="button"
            aria-label={`Show ${project.title}`}
            aria-pressed={isActive}
            onClick={() => onSelect(project)}
            className={`project-petal project-petal-${project.tone} absolute z-20 flex h-[74px] w-[132px] -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-[42px] border px-3 text-left outline-none transition-[border-color,background-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-cyan-100 focus-visible:ring-offset-4 focus-visible:ring-offset-[#020814] sm:h-[82px] sm:w-[154px] ${
              isActive
                ? "border-cyan-100/55 bg-cyan-100/[0.1] shadow-[0_0_32px_rgba(53,232,255,.16),inset_0_0_20px_rgba(53,232,255,.07)]"
                : "border-cyan-100/15 bg-[#061320]/80 shadow-[0_0_18px_rgba(53,232,255,.05)] hover:border-cyan-100/35"
            }`}
            style={{ left: position.left, top: position.top }}
            animate={
              reduceMotion
                ? { rotate: position.rotate, y: 0 }
                : {
                    rotate: [
                      position.rotate - 1.5,
                      position.rotate + 1.5,
                      position.rotate - 1.5,
                    ],
                    y: [0, -2, 0],
                  }
            }
            transition={{
              duration: 7 + index * 1.2,
              delay: index * 0.35,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
            whileHover={reduceMotion ? undefined : { scale: 1.045 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan-100/20 bg-cyan-100/[0.06] text-cyan-100 sm:h-10 sm:w-10">
              <Icon size={17} strokeWidth={1.7} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-semibold text-white sm:text-xs">
                {project.shortTitle}
              </span>
              <span className="mt-1 block truncate font-mono text-[7px] tracking-[0.08em] text-cyan-100/65">
                MISSION 0{index + 1}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

function FeatureGrid({ project }) {
  return (
    <ul
      className="grid grid-cols-2 gap-2"
      aria-label="Project features"
    >
      {project.featureTags.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="project-feature inline-flex min-w-0 items-center gap-1.5 rounded-lg border border-cyan-100/[0.08] bg-cyan-100/[0.025] px-2 py-2 text-[10px] text-slate-200/85"
        >
          <Icon size={13} className="shrink-0 text-cyan-200" aria-hidden="true" />
          <span className="truncate">{label}</span>
        </li>
      ))}
    </ul>
  );
}

function MobileProjectCard({ project, index, registerCard }) {
  const reduceMotion = useReducedMotion();
  const Icon = project.icon;

  return (
    <motion.article
      ref={registerCard}
      tabIndex={0}
      aria-label={`Mission ${index + 1}: ${project.title}`}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className={`project-mobile-card project-mobile-${project.tone} project-mission-card group relative min-h-[400px] w-[86%] shrink-0 snap-center overflow-hidden rounded-[26px] border border-cyan-100/15 bg-[#04111B]/95 p-5 shadow-[0_18px_50px_rgba(0,0,0,.28)] sm:min-h-[420px] sm:p-6`}
    >
      <div className="project-card-light pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="project-card-sweep pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 opacity-0 transition-all duration-700 group-hover:left-[130%] group-hover:opacity-100" />
      <div className="project-card-art relative mb-5 flex h-28 items-center justify-between overflow-hidden rounded-2xl border border-cyan-100/10 px-5 sm:h-32">
        <div className="project-card-art-glow pointer-events-none absolute inset-0" />
        <span className="relative z-10 font-mono text-[9px] tracking-[0.18em] text-cyan-100/75">
          MISSION 0{index + 1}
        </span>
        <Icon
          className="relative z-10 h-16 w-16 text-cyan-100/80 drop-shadow-[0_0_20px_rgba(53,232,255,.24)] transition-transform duration-500 group-hover:scale-105 sm:h-[76px] sm:w-[76px]"
          strokeWidth={1.15}
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[8px] tracking-[0.13em] text-cyan-100/70">
            {project.status}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-tight text-white sm:text-xl">
            {project.title}
          </h3>
        </div>
        {index === 2 && (
          <span className="shrink-0 rounded-full border border-amber-200/20 bg-amber-100/[0.06] px-2 py-1 font-mono text-[7px] tracking-[0.08em] text-amber-100">
            BUILDING
          </span>
        )}
      </div>
      <p className="relative z-10 mt-2 text-xs leading-5 text-slate-400">
        {project.description}
      </p>
      <div className="relative z-10 mt-4">
        <FeatureGrid project={project} />
      </div>
      <div className="relative z-10 mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((technology) => (
          <span key={technology} className="mission-chip">
            {technology}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(projects[0]);
  const [mobileIndex, setMobileIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollFrame = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(
    () => () => {
      if (scrollFrame.current !== null) {
        window.cancelAnimationFrame(scrollFrame.current);
      }
    },
    [],
  );

  const selectProject = (project) => {
    setActive(project);
    const index = projects.findIndex((item) => item.title === project.title);
    if (index >= 0) setMobileIndex(index);

    if (window.matchMedia("(max-width: 1023px)").matches && index >= 0) {
      const carousel = carouselRef.current;
      const card = cardRefs.current[index];
      if (carousel && card) {
        carousel.scrollTo({
          left: card.offsetLeft - (carousel.clientWidth - card.clientWidth) / 2,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }
    }
  };

  const handleCarouselScroll = () => {
    if (scrollFrame.current !== null) {
      window.cancelAnimationFrame(scrollFrame.current);
    }
    scrollFrame.current = window.requestAnimationFrame(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const center = carousel.scrollLeft + carousel.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(center - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setMobileIndex(closestIndex);
      setActive(projects[closestIndex]);
    });
  };

  const moveCarousel = (direction) => {
    const nextIndex = Math.max(
      0,
      Math.min(projects.length - 1, mobileIndex + direction),
    );
    selectProject(projects[nextIndex]);
  };

  return (
    <section
      id="projects"
      className="project-orbit-section relative isolate overflow-hidden bg-[#020814] py-24 sm:py-32"
    >
      <NebulaGlow />
      <div
        className="project-orbit-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">
            03 / SELECTED MISSIONS
          </p>
          <h2 className="text-4xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Ideas, in
            <span className="block text-cyan-200">their own orbit.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300/70 sm:text-base">
            Products built for the real world.
          </p>
        </motion.div>

        <div className="project-orbit-desktop hidden gap-12 lg:grid lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <BloomSelector active={active} onSelect={selectProject} />
          <MissionPanel project={active} />
        </div>

        <div className="lg:hidden">
          <BloomSelector active={active} onSelect={selectProject} mobile />
          <div className="mb-3 flex items-center justify-between px-1">
            <p className="font-mono text-[9px] tracking-[0.14em] text-slate-400">
              SWIPE TO EXPLORE
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => moveCarousel(-1)}
                disabled={mobileIndex === 0}
                className="grid h-9 w-9 place-items-center rounded-full border border-cyan-100/15 text-cyan-100 transition hover:border-cyan-100/40 disabled:opacity-35"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                type="button"
                aria-label="Next project"
                onClick={() => moveCarousel(1)}
                disabled={mobileIndex === projects.length - 1}
                className="grid h-9 w-9 place-items-center rounded-full border border-cyan-100/15 text-cyan-100 transition hover:border-cyan-100/40 disabled:opacity-35"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="project-mobile-list flex snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden pb-5 pl-[7%] pr-[7%] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Project missions"
            role="region"
            tabIndex={0}
          >
            {projects.map((project, index) => (
              <MobileProjectCard
                key={project.title}
                project={project}
                index={index}
                registerCard={(element) => {
                  cardRefs.current[index] = element;
                }}
              />
            ))}
          </div>
          <div className="mt-1 flex justify-center gap-2" aria-label="Project position">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                aria-label={`Go to project ${index + 1}: ${project.shortTitle}`}
                aria-current={mobileIndex === index ? "step" : undefined}
                onClick={() => selectProject(project)}
                className={`h-1.5 rounded-full transition-all ${
                  mobileIndex === index
                    ? "w-7 bg-cyan-200"
                    : "w-1.5 bg-cyan-100/30 hover:bg-cyan-100/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
