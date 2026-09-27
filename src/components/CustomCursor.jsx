import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const pointerX = useMotionValue(-24);
  const pointerY = useMotionValue(-24);
  const x = useSpring(pointerX, { stiffness: 420, damping: 36, mass: 0.35 });
  const y = useSpring(pointerY, { stiffness: 420, damping: 36, mass: 0.35 });

  useEffect(() => {
    const move = (event) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [pointerX, pointerY]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[100] h-5 w-5 rounded-full border border-cyan-100/75 bg-cyan-100/20"
    />
  );
}
