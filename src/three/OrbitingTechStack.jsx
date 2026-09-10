import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const skills = [
  "Java",
  "Spring Boot",
  "React",
  "Docker",
  "REST APIs",
];

export default function OrbitingTechStack() {
  const group = useRef();

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * 0.22;
  });

  return (
    <group ref={group}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2;
        const radius = 2.2;

        return (
          <group
            key={skill}
            position={[
              Math.cos(angle) * radius,
              1 - i * 0.45,
              Math.sin(angle) * radius,
            ]}
          >
            <Text
              fontSize={0.18}
              color="#A5F3FC"
              anchorX="center"
              anchorY="middle"
            >
              {skill}
            </Text>

            <mesh position={[0, -0.18, 0]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#67E8F9" />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}