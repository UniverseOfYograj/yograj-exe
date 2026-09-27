import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  CatmullRomCurve3,
  CylinderGeometry,
  MathUtils,
  Quaternion,
  TubeGeometry,
  Vector3,
} from "three";

const helixLength = 4;
const helixRadius = 0.42;
const turns = 3.5;
const sampleCount = 180;

function strandPoint(index, opposite = false) {
  const progress = index / sampleCount;
  const angle = progress * Math.PI * 2 * turns + (opposite ? Math.PI : 0);
  return new Vector3(
    (progress - 0.5) * helixLength,
    Math.cos(angle) * helixRadius,
    Math.sin(angle) * helixRadius,
  );
}

function createStrand(opposite = false) {
  const points = Array.from({ length: sampleCount + 1 }, (_, index) =>
    strandPoint(index, opposite),
  );
  const curve = new CatmullRomCurve3(points);
  return new TubeGeometry(curve, sampleCount * 2, 0.035, 8, false);
}

export default function DNAGlass() {
  const ref = useRef();
  const geometry = useMemo(
    () => ({
      strandA: createStrand(),
      strandB: createStrand(true),
      rungs: Array.from({ length: 24 }, (_, index) => {
        const sample = Math.round((index / 23) * sampleCount);
        const start = strandPoint(sample);
        const end = strandPoint(sample, true);
        const direction = new Vector3().subVectors(end, start);
        return {
          position: new Vector3().addVectors(start, end).multiplyScalar(0.5),
          quaternion: new Quaternion().setFromUnitVectors(
            new Vector3(0, 1, 0),
            direction.clone().normalize(),
          ),
          geometry: new CylinderGeometry(0.018, 0.018, direction.length(), 8),
        };
      }),
    }),
    [],
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.045;
    ref.current.rotation.y = MathUtils.damp(
      ref.current.rotation.y,
      state.pointer.x * 0.025,
      3,
      delta,
    );
    ref.current.rotation.z = MathUtils.damp(
      ref.current.rotation.z,
      state.pointer.y * 0.025,
      3,
      delta,
    );
  });

  return (
    <group ref={ref}>
      <mesh geometry={geometry.strandA}>
        <meshStandardMaterial
          color="#44dff5"
          emissive="#087d9b"
          emissiveIntensity={0.8}
          metalness={0.4}
          roughness={0.25}
        />
      </mesh>
      <mesh geometry={geometry.strandB}>
        <meshStandardMaterial
          color="#ffc46b"
          emissive="#925015"
          emissiveIntensity={0.55}
          metalness={0.35}
          roughness={0.28}
        />
      </mesh>
      {geometry.rungs.map((rung, index) => (
        <mesh
          key={index}
          geometry={rung.geometry}
          position={rung.position}
          quaternion={rung.quaternion}
        >
          <meshStandardMaterial
            color="#d5f6ff"
            emissive="#529eb7"
            emissiveIntensity={0.45}
            metalness={0.25}
            roughness={0.32}
          />
        </mesh>
      ))}
    </group>
  );
}
