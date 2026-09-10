import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function DNAGlass() {
  const { scene } = useGLTF("/models/dna.glb");
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y += 0.003;
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
  });

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = 0.95;
      child.material.roughness = 0.18;
      child.material.metalness = 0.35;
      child.material.envMapIntensity = 1.6;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2.15}
      position={[0, -0.25, 0]}
      rotation={[0.15, 0.45, 0]}
    />
  );
}

useGLTF.preload("/models/dna.glb");