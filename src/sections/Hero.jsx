import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import hero from "../assets/hero.jpg";
import CoreActivation from "../components/CoreActivation";
import { siteConfig } from "../config/site";

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${(index * 67 + 13) % 100}%`,
  top: `${(index * 43 + 17) % 85}%`,
  duration: 9 + (index % 6) * 1.8,
  delay: (index % 5) * 0.6,
}));

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(x, [-300, 300], [-25, 25]);
  const bgY = useTransform(y, [-300, 300], [-20, 20]);

  const handleMove = (e) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.width / 2);
    mouseY.set(e.clientY - rect.height / 2);
  };

  return (
    <section
      id="home"
      onPointerMove={handleMove}
      className="hero-scene relative min-h-[min(900px,100svh)] overflow-hidden"
    >
      <motion.img
        src={hero}
        alt="Sunrise over a forest-covered mountain island"
        fetchPriority="high"
        decoding="async"
        style={{ x: reduceMotion ? 0 : bgX, y: reduceMotion ? 0 : bgY, scale: 1.12 }}
        className="hero-landscape absolute inset-0 h-full w-full object-cover"
      />

      <motion.div
        animate={reduceMotion ? false : { x: [-30, 30, -30] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="hero-fog absolute left-[-20%] top-[18%] h-48 w-[140%] rounded-full bg-white/10 blur-[60px] md:h-72"
      />

      <motion.div
        animate={reduceMotion ? false : { x: [40, -40, 40] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="hero-fog absolute bottom-10 h-60 w-full rounded-full bg-white/6 blur-[70px] md:h-80"
      />

      <motion.div
        animate={reduceMotion ? false : {
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="hero-sun absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-orange-300/35 blur-[80px] md:top-16 md:h-72 md:w-72"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#020617]" />
      <div className="hero-vignette absolute inset-0" aria-hidden="true" />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={reduceMotion ? false : {
            y: [0, -28, 0],
            opacity: [0.16, 0.48, 0.16],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: particle.left, top: particle.top }}
          className="hero-particle absolute h-1 w-1 rounded-full bg-amber-200"
        />
      ))}

      <div className="hero-content relative z-10 mx-auto flex min-h-[min(900px,100svh)] max-w-7xl flex-col items-center justify-center px-5 text-center">
        <motion.p
          className="hero-eyebrow mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-amber-100/90"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Sparkles size={14} /> A curious mind. An engineering mindset.
        </motion.p>
        <h1 className="hero-title max-w-full text-6xl font-bold leading-[0.82] tracking-[-0.075em] text-white drop-shadow-[0_10px_40px_rgba(0,0,0,.6)] sm:text-8xl md:text-[9rem] lg:text-[11rem]" aria-label="Yograj Tripathi">
          {"YOGRAJ".split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={reduceMotion ? false : { opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.55 }}
            >
              {letter}
            </motion.span>
          ))}
          <span className="hero-title-last block">
            {"TRIPATHI".split("").map((letter, i) => (
              <motion.span
                key={letter}
                initial={reduceMotion ? false : { opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.035, duration: 0.55 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-base font-light tracking-wide text-white/90 sm:text-lg md:text-2xl"
        >
          Software Engineer <span className="text-amber-200">@ TCS</span>
        </motion.p>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:max-w-2xl md:text-lg"
        >
          I build scalable backend systems with Java and Spring Boot—and
          thoughtful web experiences with React.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hero-actions mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="hero-primary-cta group rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-[1.03]"
          >
            Explore Universe <ArrowDownRight size={16} className="inline-block transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </button>

          {siteConfig.resume && (
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-cta rounded-full border border-white/40 bg-white/10 px-8 py-3 backdrop-blur-xl transition hover:bg-white/20"
            >
              View Resume <ArrowUpRight size={16} className="ml-1 inline-block" />
            </a>
          )}
        </motion.div>

        <div className="relative mt-12 h-8 w-8 md:mt-16">
          <div className="absolute inset-0 rounded-full border border-cyan-200/45" />
          <div className="absolute inset-[9px] rounded-full bg-cyan-100 shadow-[0_0_28px_rgba(103,232,249,.8)]" />
          <CoreActivation />
        </div>

        <a
          href="#about"
          className="hero-scroll absolute bottom-7 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
        >
          <ArrowDown size={14} /> Scroll to explore
        </a>
      </div>
    </section>
  );
}