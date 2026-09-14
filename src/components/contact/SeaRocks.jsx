export default function SeaRocks() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <svg viewBox="0 0 1400 220" className="w-full">
        <path
          d="M0 220 L0 160 Q120 110 250 170 Q380 120 520 165 Q700 105 860 170 Q1030 115 1200 170 Q1300 150 1400 180 L1400 220 Z"
          fill="#08253A"
        />
        <path
          d="M0 220 L0 185 Q200 145 420 188 Q700 138 980 186 Q1180 160 1400 198 L1400 220 Z"
          fill="#0B3148"
          opacity=".8"
        />
      </svg>

      <div className="absolute bottom-8 left-[18%] h-8 w-20 rounded-full bg-cyan-400/15 blur-xl" />
      <div className="absolute bottom-10 left-[46%] h-10 w-28 rounded-full bg-cyan-400/10 blur-xl" />
      <div className="absolute bottom-6 right-[20%] h-8 w-20 rounded-full bg-cyan-400/15 blur-xl" />
    </div>
  );
}