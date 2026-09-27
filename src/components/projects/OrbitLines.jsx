export default function OrbitLines() {
  return (
    <svg
      className="project-orbit-lines pointer-events-none absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)]"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="50"
        cy="50"
        rx="34"
        ry="20"
        stroke="rgba(103,232,249,.28)"
        strokeWidth=".35"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="37"
        ry="23"
        transform="rotate(55 50 50)"
        stroke="rgba(189,239,255,.16)"
        strokeWidth=".28"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="29"
        ry="17"
        transform="rotate(-48 50 50)"
        stroke="rgba(251,191,104,.18)"
        strokeWidth=".25"
      />
    </svg>
  );
}
