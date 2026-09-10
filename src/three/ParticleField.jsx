import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

export default function ParticleField() {
  const ref = useRef();

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 22; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 8,
        z: (Math.random() - 0.5) * 3,
        s: Math.random() * 0.04 + 0.02,
      });
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.elapsedTime * 0.04;
  });

  return (
    <group ref={ref}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.s, 12, 12]} />
          <meshBasicMaterial color="#8fdcff" transparent opacity={0.65} />
        </mesh>
      ))}
    </group>
  );
}