import { motion } from "framer-motion";
import { Code2, Trophy, Target } from "lucide-react";

const planets = [
  {
    name: "LeetCode",
    icon: Code2,
    color: "#F59E0B",
    angle: 210,
    radiusX: 125,
    radiusY: 82,
    url: "#",
  },
  {
    name: "GeeksforGeeks",
    icon: Trophy,
    color: "#16A34A",
    angle: 20,
    radiusX: 170,
    radiusY: 120,
    url: "#",
  },
  {
    name: "Coding Ninjas",
    icon: Target,
    color: "#7C3AED",
    angle: 75,
    radiusX: 95,
    radiusY: 165,
    url: "#",
  },
];

export default function CodingUniverse() {
  return (
    <div className="relative mt-20 overflow-hidden rounded-[36px] border border-cyan-400/10 bg-[#020814] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
          Coding Universe
        </span>

        <h3 className="mt-6 text-4xl font-black text-white md:text-6xl">
          Competitive Programming Orbit
        </h3>

        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Every coding platform connects to one execution core.
        </p>

        <div className="relative mx-auto mt-14 h-[520px] w-full max-w-[640px]">
          {/* Ambient glow */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

          {/* Organic overlapping orbits */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 640 520"
          >
            <ellipse
              cx="320"
              cy="260"
              rx="180"
              ry="200"
              stroke="rgba(34,211,238,.16)"
              strokeWidth="1.5"
              fill="none"
            />

            <ellipse
              cx="320"
              cy="260"
              rx="150"
              ry="175"
              transform="rotate(-18 320 260)"
              stroke="rgba(34,211,238,.13)"
              strokeWidth="1.3"
              strokeDasharray="5 7"
              fill="none"
            />

            <ellipse
              cx="320"
              cy="260"
              rx="140"
              ry="170"
              transform="rotate(24 320 260)"
              stroke="rgba(34,211,238,.09)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Core */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 25px rgba(34,211,238,.35)",
                "0 0 45px rgba(34,211,238,.55)",
                "0 0 25px rgba(34,211,238,.35)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-18 w-18 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300 bg-[#061B2A]"
          >
            <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300" />

            <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40" />
          </motion.div>

          {/* Planets */}
          {planets.map((planet, i) => {
            const rad = (planet.angle * Math.PI) / 180;

            const x = 320 + Math.cos(rad) * planet.radiusX;
            const y = 260 - Math.sin(rad) * planet.radiusY;

            const Icon = planet.icon;

            return (
              <motion.a
                key={planet.name}
                href={planet.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.45,
                }}
                className="absolute"
                style={{
                  left: x - 42,
                  top: y - 42,
                }}
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 16px ${planet.color}35`,
                      `0 0 28px ${planet.color}60`,
                      `0 0 16px ${planet.color}35`,
                    ],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                  }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border backdrop-blur-md"
                  style={{
                    borderColor: `${planet.color}55`,
                    background: `${planet.color}12`,
                  }}
                >
                  <Icon
                    size={30}
                    style={{ color: planet.color }}
                  />
                </motion.div>

                <div className="mt-3 text-center text-sm font-medium text-white/80">
                  {planet.name}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}