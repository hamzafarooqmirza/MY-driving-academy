type Props = {
  className?: string;
};

/** Purely decorative curved route line with a couple of "stop" points,
 * used across sections to echo the driving-school theme. Pure SVG/CSS -
 * no animation cost, respects the parent's `currentColor`. */
export default function RoutePath({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 400 600"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M 40 0 C 40 150, 360 150, 360 300 C 360 450, 40 450, 40 600"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 16"
        strokeLinecap="round"
      />
      <circle cx="40" cy="4" r="4" fill="currentColor" />
      <circle cx="360" cy="300" r="4" fill="currentColor" />
      <circle cx="40" cy="596" r="4" fill="currentColor" />
    </svg>
  );
}
