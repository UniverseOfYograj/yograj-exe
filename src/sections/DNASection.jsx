import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import DNAGlass from "../three/DNAGlass";
import CameraRig from "../three/CameraRig";
import ParticleField from "../three/ParticleField";
import OrbitingTechStack from "../three/OrbitingTechStack";

export default function DNASection() {
  return (
    <section
      id="dna"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040A18] to-black" />

      {/* Soft Glow */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Software in My DNA
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white lg:text-6xl">
            Engineering
            <br />
            Beyond Code.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            Clean architecture, scalable backend systems and immersive user
            experiences—that's how I approach software engineering.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Java",
              "Spring Boot",
              "React",
              "Docker",
              "REST APIs",
              "SQL",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl"
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
          className="h-[680px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.08)]"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 34 }}>

            <CameraRig />

            <ambientLight intensity={0.45} />

            <directionalLight
              position={[3, 4, 3]}
              intensity={5}
              color="#72d7ff"
            />

            <pointLight
              position={[-2, 0, 3]}
              intensity={2}
              color="#d946ef"
            />

            <pointLight
              position={[2, -2, -2]}
              intensity={1.8}
              color="#67e8f9"
            />

            <ParticleField />

            <Float
              speed={1.2}
              rotationIntensity={0.12}
              floatIntensity={0.22}
            >
              <DNAGlass />
            </Float>

            <OrbitingTechStack />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minDistance={5}
              maxDistance={5}
              autoRotate
              autoRotateSpeed={0.35}
            />

            <EffectComposer>
              <Bloom
  intensity={0.28}
  luminanceThreshold={0.72}
  luminanceSmoothing={0.95}
/>
            </EffectComposer>

          </Canvas>
        </motion.div>

      </div>
    </section>
  );
}