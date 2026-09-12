export default function NetworkLines({ active }) {
  const glow = "rgba(34,211,238,.9)";
  const dim = "rgba(34,211,238,.18)";

  const color = (skills) =>
    active && skills.includes(active) ? glow : dim;

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path d="M50 18 L28 38" stroke={color(["Java","Spring Boot"])} strokeWidth="0.5" fill="none"/>
      <path d="M50 18 L72 38" stroke={color(["Java","SQL"])} strokeWidth="0.5" fill="none"/>
      <path d="M28 38 L18 72" stroke={color(["Spring Boot","REST APIs"])} strokeWidth="0.5" fill="none"/>
      <path d="M72 38 L82 72" stroke={color(["SQL","Git"])} strokeWidth="0.5" fill="none"/>
      <path d="M50 18 L50 62" stroke={color(["Java","React"])} strokeWidth="0.5" fill="none"/>
    </svg>
  );
}