import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";

const stars = Array.from({ length: 52 }, (_, index) => ({
  id: index,
  left: `${(index * 73 + 9) % 100}%`,
  top: `${(index * 47 + 11) % 100}%`,
  size: index % 9 === 0 ? 3 : index % 4 === 0 ? 2 : 1,
  delay: `${(index % 13) * -0.31}s`,
}));

export default function UniverseTransition() {
  return (
    <section
      id="about"
      className="about-constellation relative isolate overflow-hidden bg-[#020814] py-24 sm:py-32"
    >
      <div className="about-nebula pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="about-stars pointer-events-none absolute inset-0" aria-hidden="true">
        {stars.map((star) => (
          <span
            className="constellation-star"
            key={star.id}
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="about-code mission-java-card relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#04111B]/90 shadow-[0_24px_90px_rgba(0,0,0,.28)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf68]/75" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-sky-300/65" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.18em] text-cyan-100/55">
              mission.java
            </span>
          </div>
          <pre className="mission-java-code overflow-x-auto px-4 py-5 text-[10px] leading-[1.9] sm:px-8 sm:py-8 sm:text-sm">
            <code>
              <span className="block">
                <span className="mission-code-keyword">class</span>{" "}
                <span className="mission-code-type">Yograj</span>{" "}
                <span className="mission-code-punctuation">{"{"}</span>
              </span>
              <span className="block">
                {"  "}role <span className="mission-code-punctuation">=</span>{" "}
                <span className="mission-code-string">"Software Engineer"</span>;
              </span>
              <span className="block">
                {"  "}company <span className="mission-code-punctuation">=</span>{" "}
                <span className="mission-code-string">"TCS"</span>;
              </span>
              <span className="block">
                {"  "}location <span className="mission-code-punctuation">=</span>{" "}
                <span className="mission-code-string">"Bhubaneswar, India"</span>;
              </span>
              <span className="block h-4 sm:h-5" aria-hidden="true" />
              <span className="block">
                {"  "}builds <span className="mission-code-punctuation">=</span>{" "}
                <span className="mission-code-punctuation">[</span>
              </span>
              <span className="block mission-code-string">
                {"    "}"Scalable backend systems",
              </span>
              <span className="block mission-code-string">
                {"    "}"Thoughtful user experiences"
              </span>
              <span className="block">
                {"  "}
                <span className="mission-code-punctuation">]</span>;
              </span>
              <span className="block h-4 sm:h-5" aria-hidden="true" />
              <span className="block">
                {"  "}mission <span className="mission-code-punctuation">=</span>{" "}
                <span className="mission-code-string">
                  "Keep making things better."
                </span>
                ;
              </span>
              <span className="block mission-code-punctuation">{"}"}</span>
            </code>
          </pre>
          <div className="mission-java-accent pointer-events-none absolute inset-x-0 top-0 h-px" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">
            <Sparkles size={14} /> ABOUT THE ENGINEER
          </p>
          <h2 className="max-w-2xl text-4xl font-bold leading-[1.04] text-white sm:text-5xl lg:text-6xl">
            Building software,
            <span className="block text-cyan-200"> not just screens.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-200/80 sm:text-lg">
            Software Engineer at TCS, building dependable Java services and
            intuitive web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {["Java", "Spring Boot", "React", "SQL", "REST APIs", "Clean Architecture"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-200/15 bg-cyan-100/[0.035] px-3.5 py-2 text-xs text-slate-100/85 transition-colors hover:border-cyan-200/40 hover:bg-cyan-100/[0.08]"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          <a
            href="#experience"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-100 transition-colors hover:text-white"
          >
            Follow the journey
            <ArrowDownRight size={16} />
          </a>
        </motion.div>
      </div>

      <svg
        className="about-constellation-line pointer-events-none absolute right-[8%] top-[14%] hidden h-40 w-72 opacity-60 lg:block"
        viewBox="0 0 288 160"
        fill="none"
        aria-hidden="true"
      >
        <path d="M12 115 92 28l91 75 83-82" stroke="url(#starPath)" strokeWidth="1" />
        <defs>
          <linearGradient id="starPath" x1="12" y1="28" x2="266" y2="115">
            <stop stopColor="#38bdf8" stopOpacity=".05" />
            <stop offset=".55" stopColor="#67e8f9" stopOpacity=".52" />
            <stop offset="1" stopColor="#fbbf68" stopOpacity=".18" />
          </linearGradient>
        </defs>
        {[
          [12, 115],
          [92, 28],
          [183, 103],
          [266, 21],
        ].map(([cx, cy], index) => (
          <circle key={index} cx={cx} cy={cy} r="3" fill="#bdefff" />
        ))}
      </svg>
    </section>
  );
}
