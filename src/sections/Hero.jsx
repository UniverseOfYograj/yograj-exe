import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import hero from "../assets/hero.jpg";
import CoreActivation from "../components/CoreActivation";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgX = useTransform(x, [-300, 300], [-25, 25]);
  const bgY = useTransform(y, [-300, 300], [-20, 20]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.width / 2);
    mouseY.set(e.clientY - rect.height / 2);
  };

  const letters = "YOGRAJ TRIPATHI".split("");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      onMouseMove={handleMove}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <motion.img
        src={hero}
        alt="Hero"
        style={{ x: bgX, y: bgY, scale: 1.12 }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Fog */}
      <motion.div
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-20%] top-[18%] h-48 w-[140%] rounded-full bg-white/10 blur-[90px] md:h-72"
      />

      <motion.div
        animate={{ x: [40, -40, 40] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 h-60 w-full rounded-full bg-white/6 blur-[100px] md:h-80"
      />

      {/* Sun */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-1/2 top-10 h-48 w-48 -translate-x-1/2 rounded-full bg-orange-300/35 blur-[110px] md:top-16 md:h-72 md:w-72"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#020617]" />

      {/* Particles */}
      {[...Array(14)].map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: Math.random(),
            x: Math.random() * 1400,
            y: Math.random() * 900,
          }}
          animate={{
            y: ["0%", "-50%"],
            opacity: [0.12, 0.5, 0.12],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute h-1 w-1 rounded-full bg-orange-200"
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 text-center">
        <h1 className="max-w-6xl text-5xl font-black leading-[0.9] tracking-[-0.05em] text-white drop-shadow-[0_10px_40px_rgba(0,0,0,.6)] sm:text-6xl md:text-7xl lg:text-9xl">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.55 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 text-base font-light text-white/90 sm:text-lg md:text-2xl"
        >
          Software Engineer @ TCS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base md:max-w-2xl md:text-lg"
        >
          Building scalable backend systems with Java, Spring Boot and React
          while solving real-world engineering problems through clean
          architecture.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
        >
          <button
            onClick={scrollToAbout}
            className="rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,.35)]"
          >
            Explore Universe
          </button>

          <button className="rounded-full border border-white/40 bg-white/10 px-8 py-3 backdrop-blur-xl transition hover:scale-105 hover:bg-white/20">
            Download Resume
          </button>
        </motion.div>

        {/* Core */}
        <div className="mt-12 md:mt-16">
          <CoreActivation />
        </div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 text-white/70"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}