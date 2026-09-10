export default function HologramRing() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.1, 0]}>
      <ringGeometry args={[1.5, 1.8, 64]} />
      <meshBasicMaterial color="#22D3EE" transparent opacity={0.7} />
    </mesh>
  );
}