import { motion } from "framer-motion";

export default function WhaleEasterEgg() {
  return (
    <motion.div
      initial={{ x: "-120%", opacity: 0 }}
      whileInView={{ x: "140%", opacity: [0, 0.18, 0.12, 0] }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{
        duration: 4.2,
        ease: "easeInOut",
      }}
      className="pointer-events-none absolute bottom-8 left-0 z-10"
    >
      <svg
        width="760"
        height="220"
        viewBox="0 0 760 220"
        className="blur-[1px]"
      >
        <defs>
          <filter id="whaleGlow">
            <feGaussianBlur stdDeviation="10" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Tail */}
        <path
          d="M90 110 L30 60 L45 110 L30 160 Z"
          fill="rgba(90,220,255,.12)"
        />

        {/* Body */}
        <path
          d="M80 110
             C170 40 360 30 540 80
             C610 100 660 92 710 60
             C690 100 665 125 630 142
             C540 178 360 170 210 142
             C150 130 110 122 80 110 Z"
          fill="rgba(90,220,255,.14)"
          filter="url(#whaleGlow)"
        />

        {/* Eye */}
        <circle cx="500" cy="96" r="3" fill="#67E8F9" opacity=".55"/>

        {/* Soft highlight */}
        <path
          d="M180 86 C300 58 450 62 560 90"
          stroke="rgba(120,235,255,.12)"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}