import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: pos.x - 10,
        y: pos.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
      className="hidden md:block fixed h-5 w-5 rounded-full border border-orange-300 bg-orange-300/30 backdrop-blur-sm pointer-events-none z-[100]"
    />
  );
}