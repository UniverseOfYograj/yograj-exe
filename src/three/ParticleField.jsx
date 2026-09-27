const particles = Array.from({ length: 22 }, (_, index) => ({
  x: Math.sin(index * 12.9898) * 2.5,
  y: ((index * 37) % 22) * 0.36 - 4,
  z: Math.cos(index * 4.1414) * 1.5,
  s: 0.02 + ((index * 17) % 5) * 0.009,
}));

export default function ParticleField() {
  return (
    <group>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.s, 12, 12]} />
          <meshBasicMaterial color="#8fdcff" transparent opacity={0.65} />
        </mesh>
      ))}
    </group>
  );
}