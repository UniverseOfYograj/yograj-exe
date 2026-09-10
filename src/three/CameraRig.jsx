import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  useFrame(({ mouse, camera }) => {
    camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.25 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}