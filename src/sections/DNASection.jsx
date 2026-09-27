import { lazy, Suspense, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const DNACanvasScene = lazy(() => import("../three/DNACanvasScene"));

function StaticDNAVisual() {
  return (
    <div
      className="dna-static-orbit grid h-full place-items-center"
      role="img"
      aria-label="An illuminated DNA helix representing software in my DNA"
    >
      <div className="dna-static-core relative grid h-36 w-36 place-items-center rounded-full border border-cyan-100/30 text-center sm:h-44 sm:w-44">
        <span className="font-mono text-xs tracking-[0.2em] text-cyan-100">
          BUILT TO
          <br />
          EXPLORE
        </span>
      </div>
    </div>
  );
}

export default function DNASection() {
  const [render3d, setRender3d] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1200px) and (pointer: fine)");
    const update = () => setRender3d(desktop.matches && !reducedMotion);
    update();
    desktop.addEventListener("change", update);
    return () => desktop.removeEventListener("change", update);
  }, [reducedMotion]);

  return (
    <section
      id="dna"
      className="dna-section relative min-h-screen overflow-hidden bg-[#020814]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04111B] via-[#020814] to-[#04111B]" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[95px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100">
            06 / Software in My DNA
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
            Engineering
            <br />
            Beyond Code.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            From messaging and service discovery to concurrency, I build
            Spring-based systems designed to communicate and scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Java",
              "Kafka",
              "RabbitMQ",
              "Spring",
              "Spring JDBC",
              "Spring Boot",
              "Microservices",
              "Eureka",
              "Multithreading",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-200/30 bg-cyan-100/[0.08] px-4 py-2 text-sm font-medium text-cyan-50 backdrop-blur-xl shadow-[0_0_18px_rgba(103,232,249,0.08)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - 3D DNA */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="dna-canvas-frame h-[360px] overflow-hidden rounded-3xl border border-cyan-100/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-[0_0_48px_rgba(56,189,248,0.08)] sm:h-[460px] lg:h-[620px]"
        >
          {render3d ? (
            <Suspense fallback={<StaticDNAVisual />}>
              <DNACanvasScene />
            </Suspense>
          ) : (
            <StaticDNAVisual />
          )}
        </motion.div>

      </div>
    </section>
  );
}