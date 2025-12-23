export default function HammerMark({ size = 22 }: { size?: number }) {
  const C = "#0E0E0E";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true">
      {/* Hammer head */}
      <rect x="8" y="10" width="28" height="16" rx="3" fill={C} />

      {/* Hammer neck */}
      <rect x="28" y="20" width="6" height="8" fill={C} />

      {/* Handle */}
      <rect
        x="30"
        y="26"
        width="8"
        height="30"
        rx="4"
        transform="rotate(45 30 26)"
        fill={C}
      />
    </svg>
  );
}
