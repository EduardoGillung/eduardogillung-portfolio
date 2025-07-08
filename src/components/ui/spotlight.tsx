import { cn } from "../../lib/utils";

// Gradiente animado e movimento sutil
export const Spotlight = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-80 animate-spotlight-move mix-blend-lighten",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill="url(#spotlight-gradient)"
          fillOpacity="0.95"
        ></ellipse>
      </g>
      <defs>
        <linearGradient id="spotlight-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="40%" stopColor="#e0e7ef" />
          <stop offset="70%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="220"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

// Animacao Tailwind (adicione no tailwind.config.js):
// theme: { extend: { keyframes: { 'spotlight-move': { '0%, 100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-30px) scale(1.04)' } } }, animation: { 'spotlight-move': 'spotlight-move 8s ease-in-out infinite' } } }
