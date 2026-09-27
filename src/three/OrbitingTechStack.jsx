import { RoundedBox, Text } from "@react-three/drei";

const skills = [
  { name: "Kafka", color: "#9AF7FF", position: [-1.3, 1.45, 1.2] },
  { name: "RabbitMQ", color: "#FFD18A", position: [1.3, 1.45, 1.2] },
  { name: "Spring", color: "#B6F5D0", position: [-1.3, 0.95, 1.2] },
  { name: "Spring JDBC", color: "#BDEBFF", position: [1.3, 0.95, 1.2] },
  { name: "Spring Boot", color: "#9AF7FF", position: [-1.3, -0.95, 1.2] },
  { name: "Microservices", color: "#FFD18A", position: [1.3, -0.95, 1.2] },
  { name: "Eureka", color: "#B6F5D0", position: [-1.3, -1.45, 1.2] },
  { name: "Multithreading", color: "#BDEBFF", position: [1.3, -1.45, 1.2] },
];

export default function OrbitingTechStack() {
  return (
    <>
      {skills.map(({ name, color, position }) => {
        const width = name.length * 0.075 + 0.22;
        return (
          <group key={name} position={position}>
            <RoundedBox args={[width, 0.3, 0.045]} radius={0.08} smoothness={4}>
              <meshStandardMaterial
                color="#061a2a"
                emissive="#07384b"
                emissiveIntensity={0.55}
                metalness={0.25}
                roughness={0.4}
              />
            </RoundedBox>
            <Text
              position={[0, 0, 0.03]}
              fontSize={0.125}
              color={color}
              outlineColor="#020814"
              outlineWidth={0.004}
              anchorX="center"
              anchorY="middle"
            >
              {name}
            </Text>
          </group>
        );
      })}
    </>
  );
}