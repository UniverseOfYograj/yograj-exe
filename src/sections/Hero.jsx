import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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

  return (
    <section
      onMouseMove={handleMove}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <motion.img
        src={hero}
        alt="Hero"
        style={{
          x: bgX,
          y: bgY,
          scale: 1.12,
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Fog Layer 1 */}
      <motion.div
        animate={{ x: [-40, 40, -40] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-[-20%] top-[18%] h-72 w-[140%] rounded-full bg-white/12 blur-[90px]"
      />

      {/* Fog Layer 2 */}
      <motion.div
        animate={{ x: [50, -50, 50] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 h-80 w-full rounded-full bg-white/8 blur-[110px]"
      />

      {/* Sun Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-300/40 blur-[120px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#020617]" />

      {/* Floating Particles */}
      {[...Array(18)].map((_, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: Math.random(),
            x: Math.random() * 1400,
            y: Math.random() * 900,
          }}
          animate={{
            y: ["0%", "-60%"],
            opacity: [0.15, 0.6, 0.15],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-orange-200"
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Boot Power-On Pulse */}
        <div className="relative mb-2 flex items-center justify-center">
          <div className="absolute h-[280px] w-[280px] md:h-[380px] md:w-[380px]">
            <CoreActivation />
          </div>

          <h1 className="relative z-10 max-w-6xl text-6xl font-black leading-none tracking-[-0.05em] text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)] md:text-8xl lg:text-9xl">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.03,
                  duration: 0.55,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-lg font-light text-white/90 md:text-2xl"
        >
          Software Engineer @ TCS
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          Building scalable backend systems with Java, Spring Boot and React
          while solving real-world engineering problems through clean
          architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
            Explore Universe
          </button>

          <button className="rounded-full border border-white/40 bg-white/10 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20">
            Download Resume
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 text-white/70"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}