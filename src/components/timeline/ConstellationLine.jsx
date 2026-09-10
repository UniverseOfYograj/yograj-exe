export default function ConstellationLine() {
  return (
    <svg
      className="absolute left-8 top-0 h-full w-20 overflow-visible"
      viewBox="0 0 80 900"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="50%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>

      <path
        d="M40 40
           C52 140 28 220 40 320
           C54 420 24 500 40 600
           C56 700 30 780 40 860"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#lineGlow)"
      />
    </svg>
  );
}