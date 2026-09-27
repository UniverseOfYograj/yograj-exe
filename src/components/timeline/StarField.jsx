const stars = Array.from({ length: 36 }, (_, index) => ({
  id: index,
  left: `${(index * 71 + 17) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  delay: `${(index % 12) * -0.45}s`,
}));

export default function StarField() {
  return (
    <div className="mission-starfield pointer-events-none absolute inset-0" aria-hidden="true">
      {stars.map((star) => (
        <span
          className="mission-star"
          key={star.id}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
