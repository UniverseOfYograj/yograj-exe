import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { label: "Kafka", color: "#FF995C" },
  { label: "RabbitMQ", color: "#FFD66B" },
  { label: "Redis", color: "#FF765D" },
  { label: "Spring Boot", color: "#8EE6A1" },
  { label: "Microservices", color: "#58E0D0" },
  { label: "Eureka", color: "#68BFFF" },
  { label: "Java", color: "#FFC46B" },
  { label: "Spring MVC", color: "#52D6B5" },
  { label: "Spring Security", color: "#8EE6A1" },
  { label: "Java EE", color: "#35E8FF" },
  { label: "Distributed Systems", color: "#68BFFF" },
  { label: "Spring JDBC", color: "#35E8FF" },
  { label: "Multithreading", color: "#B99AFF" },
];

const primaryWave = [
  "M 250 76 C 319 79 393 125 398 199 C 404 274 331 334 251 337 C 172 340 100 290 101 213 C 102 136 179 73 250 76 Z",
  "M 250 80 C 332 72 396 133 390 207 C 384 281 327 326 248 330 C 169 334 94 280 108 205 C 121 130 168 88 250 80 Z",
  "M 250 72 C 326 86 402 123 401 205 C 400 287 337 345 255 340 C 173 335 94 281 104 207 C 114 133 174 58 250 72 Z",
  "M 250 78 C 324 72 388 136 395 204 C 402 272 326 330 249 335 C 172 340 106 291 105 213 C 104 135 176 84 250 78 Z",
  "M 250 76 C 319 79 393 125 398 199 C 404 274 331 334 251 337 C 172 340 100 290 101 213 C 102 136 179 73 250 76 Z",
];

const secondaryWave = [
  "M 250 91 C 317 88 378 134 381 200 C 384 267 323 317 251 320 C 179 323 119 274 119 210 C 119 146 186 94 250 91 Z",
  "M 250 95 C 322 86 382 141 375 207 C 368 273 320 312 249 314 C 178 316 113 267 124 204 C 135 141 183 103 250 95 Z",
  "M 250 87 C 320 98 385 130 384 204 C 383 278 329 326 255 324 C 181 322 113 267 121 205 C 129 143 184 77 250 87 Z",
  "M 250 93 C 315 86 372 143 379 203 C 386 263 321 314 250 318 C 179 322 124 278 123 211 C 122 144 185 98 250 93 Z",
  "M 250 91 C 317 88 378 134 381 200 C 384 267 323 317 251 320 C 179 323 119 274 119 210 C 119 146 186 94 250 91 Z",
];

const circuits = [
  "M22 165h54l18-18h43m-32 18 18 18h35",
  "M478 165h-54l-18-18h-43m32 18-18 18h-35",
  "M30 230h58l17-17h27m-15 17 15 15h34",
  "M470 230h-58l-17-17h-27m15 17-15 15h-34",
  "M156 106v22l15 15v17m173-54v22l-15 15v17",
  "M156 314v-22l15-15v-17m173 54v-22l-15-15v-17",
];

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  x: 50 + ((index * 37) % 400),
  y: 62 + ((index * 53) % 286),
  radius: index % 4 === 0 ? 1.8 : 1.15,
  duration: 15 + (index % 5),
  delay: -(index % 7) * 1.7,
}));

export default function NeuralCore() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 70, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 70, damping: 24 });
  const waveX = useTransform(springX, [-1, 1], [-2, 2]);
  const waveY = useTransform(springY, [-1, 1], [2, -2]);
  const secondaryWaveX = useTransform(waveX, (value) => value * -0.6);
  const secondaryWaveY = useTransform(waveY, (value) => value * -0.6);
  const glowX = useTransform(springX, [-1, 1], [-6, 6]);
  const glowY = useTransform(springY, [-1, 1], [6, -6]);
  const activeSkill = skills[activeIndex];

  useEffect(() => {
    if (reduceMotion) return undefined;
    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % skills.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const waveTransition = (duration, delay = 0) => ({
    duration,
    delay,
    repeat: Infinity,
    ease: "easeInOut",
  });

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="relative mx-auto aspect-[5/4] w-full max-w-[520px] overflow-hidden rounded-2xl sm:aspect-[5/4]"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,180,216,.11), transparent 58%), radial-gradient(ellipse at 50% 50%, rgba(138,92,255,.06), transparent 76%)",
        }}
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 500 400"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`Living energy core featuring ${activeSkill.label}`}
      >
        <defs>
          <linearGradient id="core-wave-primary" x1="65" y1="90" x2="438" y2="310" gradientUnits="userSpaceOnUse">
            <stop stopColor="#35E8FF" />
            <stop offset=".48" stopColor="#00B4D8" />
            <stop offset="1" stopColor="#8A5CFF" />
          </linearGradient>
          <linearGradient id="core-wave-secondary" x1="110" y1="105" x2="390" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8A5CFF" />
            <stop offset=".52" stopColor="#35E8FF" />
            <stop offset="1" stopColor="#00B4D8" />
          </linearGradient>
          <radialGradient id="core-center-glow">
            <stop stopColor="#E8FDFF" stopOpacity=".96" />
            <stop offset=".22" stopColor="#35E8FF" stopOpacity=".72" />
            <stop offset=".65" stopColor="#00B4D8" stopOpacity=".18" />
            <stop offset="1" stopColor="#8A5CFF" stopOpacity="0" />
          </radialGradient>
          <filter id="core-wave-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          fill="none"
          stroke="#3C8BD7"
          strokeOpacity=".13"
          strokeWidth="1"
          aria-hidden="true"
        >
          {circuits.map((path) => (
            <path key={path} d={path} />
          ))}
          {[["76", "165"], ["424", "165"], ["88", "230"], ["412", "230"], ["156", "106"], ["329", "106"], ["156", "314"], ["329", "314"]].map(
            ([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2" fill="#3C8BD7" fillOpacity=".45" />
            ),
          )}
        </g>

        <motion.g
          fill="none"
          style={{ transformOrigin: "250px 200px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <circle
            cx="250"
            cy="200"
            r="151"
            stroke="#35E8FF"
            strokeOpacity=".2"
            strokeWidth="1"
            strokeDasharray="1 10"
          />
          <circle
            cx="250"
            cy="200"
            r="137"
            stroke="#FF995C"
            strokeOpacity=".14"
            strokeWidth="1"
            strokeDasharray="22 16 2 16"
          />
        </motion.g>

        <motion.g
          fill="none"
          style={{ transformOrigin: "250px 200px" }}
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <circle
            cx="250"
            cy="200"
            r="119"
            stroke="#8A5CFF"
            strokeOpacity=".16"
            strokeWidth="1"
            strokeDasharray="2 12"
          />
        </motion.g>

        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.radius}
            fill={particle.id % 3 === 0 ? "#8A5CFF" : "#35E8FF"}
            initial={{ opacity: 0.12 }}
            animate={
              reduceMotion
                ? { opacity: 0.18 }
                : {
                    cx: [particle.x, particle.x + (particle.id % 2 ? 5 : -5), particle.x],
                    cy: [particle.y, particle.y - 9, particle.y],
                    opacity: [0.12, 0.48, 0.12],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            aria-hidden="true"
          />
        ))}

        <motion.path
          d={secondaryWave[0]}
          style={{ x: secondaryWaveX, y: secondaryWaveY }}
          fill="none"
          stroke="url(#core-wave-secondary)"
          strokeWidth="1.5"
          strokeOpacity=".42"
          animate={reduceMotion ? undefined : { d: secondaryWave }}
          transition={waveTransition(12, 0.8)}
          aria-hidden="true"
        />

        <motion.path
          d={primaryWave[0]}
          style={{ x: waveX, y: waveY }}
          fill="none"
          stroke="url(#core-wave-primary)"
          strokeWidth="2.2"
          strokeOpacity=".9"
          filter="url(#core-wave-glow)"
          animate={reduceMotion ? undefined : { d: primaryWave }}
          transition={waveTransition(9)}
          aria-hidden="true"
        />
      </svg>

      <motion.div
        key={activeIndex}
        className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-32 sm:w-32"
        style={{ background: "radial-gradient(circle, rgba(53,232,255,.18), rgba(255,153,92,.07) 28%, rgba(138,92,255,.08) 48%, transparent 72%)" }}
        initial={reduceMotion ? false : { scale: 0.25, opacity: 0.42 }}
        animate={{ scale: reduceMotion ? 1 : 1.9, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        aria-hidden="true"
      />

      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-100/30 bg-[#04111B]/75 text-center shadow-[0_0_30px_rgba(53,232,255,.16),inset_0_0_24px_rgba(53,232,255,.08)] backdrop-blur-sm sm:h-28 sm:w-28">
        <span className="mb-1 font-mono text-[7px] tracking-[0.22em] text-cyan-100/65">
          ACTIVE CORE
        </span>
        <div className="relative flex min-h-8 items-center justify-center px-2">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={activeSkill.label}
              className="max-w-[88px] text-center font-display text-[11px] font-bold leading-tight sm:max-w-[100px] sm:text-xs"
              style={{ color: activeSkill.color, textShadow: `0 0 14px ${activeSkill.color}88` }}
              initial={reduceMotion ? false : { opacity: 0, y: 5, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -5, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {activeSkill.label}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="mt-1 h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_8px_#35E8FF]" />
      </div>

      <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] tracking-[0.16em] text-cyan-100/45">
        ENGINEERING SYSTEM · ACTIVE
      </span>
    </div>
  );
}
