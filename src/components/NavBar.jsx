
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = ["About", "Experience", "Projects", "Coding", "Contact"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className={`flex gap-6 rounded-full border px-7 py-3 transition-all duration-500 ${
          scrolled
            ? "border-orange-300/40 bg-black/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,170,70,0.35)]"
            : "border-white/20 bg-white/10 backdrop-blur-xl"
        }`}
      >
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-white/85 transition-colors duration-300 hover:text-orange-300"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}