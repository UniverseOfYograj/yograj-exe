import { Canvas } from "@react-three/fiber";
import DNAGlass from "./DNAGlass";
import ParticleField from "./ParticleField";
import OrbitingTechStack from "./OrbitingTechStack";

export default function DNACanvasScene() {
  return (
    <div
      className="h-full w-full"
      role="img"
      aria-label="A horizontal DNA helix with Java and Spring ecosystem skills"
    >
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 35 }}
        dpr={[1, 1.3]}
        gl={{ powerPreference: "low-power", antialias: true }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 4, 3]} intensity={5} color="#72d7ff" />
        <pointLight position={[-2, 0, 3]} intensity={2} color="#fbbf68" />
        <pointLight position={[2, -2, -2]} intensity={1.8} color="#67e8f9" />
        <ParticleField />
        <DNAGlass />
        <OrbitingTechStack />
      </Canvas>
    </div>
  );
}
