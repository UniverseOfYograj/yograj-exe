
import { motion } from "framer-motion";

const stars = Array.from({ length: 160 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: 0.8 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 2 + Math.random() * 5,
}));

export default function UniverseTransition() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#020617]"
    >
      {/* Animated Nebula Background */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A] via-[#081021] to-black"
      />

      {/* Main Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/20 blur-[150px]"
      />

      {/* Aurora */}
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="absolute left-1/3 top-10 h-[520px] w-[220px] rounded-full bg-cyan-300/20 blur-[150px]"
      />

      {/* Purple Nebula */}
      <motion.div
        animate={{
          x: [-40, 40, -40],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
        }}
        className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-indigo-500/20 blur-[180px]"
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            filter: `blur(${star.size > 3 ? 0.5 : 0}px)`,
          }}
        />
      ))}

      {/* Floating Space Dust */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          initial={{
            x: Math.random() * 1400,
            y: Math.random() * 900,
            opacity: 0,
            scale: Math.random() * 0.8 + 0.5,
          }}
          animate={{
            y: ["0%", "-130%"],
            opacity: [0, 0.45, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12 + Math.random() * 8,
            delay: Math.random() * 8,
            ease: "linear",
          }}
          className="absolute h-2 w-2 rounded-full bg-blue-200/70 blur-[1px]"
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">

          {/* Code Window */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -6 }}
            className="
              overflow-hidden
              rounded-3xl
              border border-blue-400/20
              bg-white/5
              backdrop-blur-3xl
              shadow-[0_0_80px_rgba(59,130,246,.25)]
              hover:shadow-[0_0_120px_rgba(59,130,246,.35)]
              transition-all
              duration-700
            "
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 p-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <pre className="overflow-x-auto p-7 text-sm leading-8 text-blue-100">
{`class Yograj {

  role = "Software Engineer";

  company = "TCS";

  stack = [
    "Java",
    "Spring Boot",
    "React"
  ];

  mission =
    "Build software people remember.";

}`}
            </pre>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2 text-sm text-blue-200 backdrop-blur-xl"
            >
              Into the Universe
            </motion.span>

            <h2 className="mt-7 text-5xl font-black leading-tight text-white lg:text-6xl">
              Building Software,
              <br />
              Not Just Screens.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-white/75">
              I'm Yograj Tripathi, a Software Engineer at TCS who enjoys
              building scalable backend systems with Java and Spring Boot while
              crafting polished user experiences with React.
            </p>

            <p className="mt-5 text-white/60">
              My focus is writing clean, maintainable code and creating products
              that feel fast, intuitive and memorable.
            </p>

            {/* Skills */}
            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "React",
                "SQL",
                "Git",
                "REST APIs",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="
                    rounded-full
                    border border-blue-400/20
                    bg-white/5
                    px-4 py-2
                    text-sm
                    text-white/90
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-blue-300/60
                    hover:bg-blue-500/10
                    hover:shadow-[0_0_35px_rgba(59,130,246,.35)]
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 h-36 w-full bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}