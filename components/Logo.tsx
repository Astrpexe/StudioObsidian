export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 2L2 9.5L5.5 25.5L16 30L26.5 25.5L30 9.5L16 2Z"
        fill="#131313"
        stroke="#4d8eff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 2L16 30"
        stroke="#4d8eff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M2 9.5L16 16.5L30 9.5"
        stroke="#4d8eff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 25.5L16 16.5L26.5 25.5"
        stroke="#4d8eff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16.5" r="3" fill="#adc6ff" />
    </svg>
  );
}
