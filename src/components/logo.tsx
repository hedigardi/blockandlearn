import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex select-none items-center gap-4", className)}>
      <svg
        width="60"
        height="68"
        viewBox="0 0 60 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14"
      >
        <g clipPath="url(#clip0_103_2)">
          <path
            d="M29.9999 51.0001C31.5999 51.0001 32.9999 49.6001 32.9999 48.0001C32.9999 46.4001 31.5999 45.0001 29.9999 45.0001C28.3999 45.0001 26.9999 46.4001 26.9999 48.0001C26.9999 49.6001 28.3999 51.0001 29.9999 51.0001Z"
            fill="black"
          />
          <path
            d="M48 24H12C11.71 24 11.42 24.1 11.15 24.27L30 36L48.85 24.27C48.58 24.1 48.29 24 48 24Z"
            fill="black"
          />
          <path
            d="M31.18 38.0801L11.18 25.4101C10.68 25.7901 10.28 26.2701 10 26.8301V43.1701C10.28 43.7301 10.68 44.2101 11.18 44.5901L31.18 31.9201V38.0801Z"
            fill="black"
          />
          <path
            d="M48.82 44.59C49.32 44.21 49.72 43.73 50 43.17V26.83C49.72 26.27 49.32 25.79 48.82 25.41L28.82 38.08V31.92L48.82 19.25V44.59Z"
            fill="black"
          />
          <path
            d="M35 68C38.3137 68 41 65.3137 41 62C41 58.6863 38.3137 56 35 56C31.6863 56 29 58.6863 29 62C29 65.3137 31.6863 68 35 68Z"
            fill="black"
          />
          <path
            d="M30 0C46.56 0 60 13.44 60 30C60 46.56 46.56 60 30 60C13.44 60 0 46.56 0 30C0 13.44 13.44 0 30 0ZM30 58C45.44 58 58 45.44 58 30C58 14.56 45.44 2 30 2C14.56 2 2 14.56 2 30C2 45.44 14.56 58 30 58Z"
            fill="url(#paint0_linear_103_2)"
          />
          <path
            d="M30 2C14.56 2 2 14.56 2 30C2 45.44 14.56 58 30 58C45.44 58 58 45.44 58 30C58 14.56 45.44 2 30 2Z"
            fill="url(#paint1_radial_103_2)"
            fillOpacity="0.5"
          />
          <path
            d="M50 24.83V45.17C49.72 45.73 49.32 46.21 48.82 46.59L28.82 33.92V30.08L48.82 17.41C49.32 17.79 49.72 18.27 50 18.83V24.83Z"
            fill="url(#paint2_linear_103_2)"
          />
          <path
            d="M10 26.83C10.28 26.27 10.68 25.79 11.18 25.41L31.18 38.08V43.92L11.18 46.59C10.68 46.21 10.28 45.73 10 45.17V26.83Z"
            fill="url(#paint3_linear_103_2)"
          />
          <path
            d="M48 22C48.29 22 48.58 22.1 48.85 22.27L30 34L11.15 22.27C11.42 22.1 11.71 22 12 22H48Z"
            fill="url(#paint4_linear_103_2)"
          />
          <path
            d="M29.5 54C34.74 54 39 49.74 39 44.5C39 41.92 37.94 39.63 36.24 38H22.76C21.06 39.63 20 41.92 20 44.5C20 49.74 24.26 54 29.5 54Z"
            fill="url(#paint5_linear_103_2)"
          />
          <path
            d="M34 44H25C24.45 44 24 43.55 24 43V38H35V43C35 43.55 34.55 44 34 44Z"
            fill="url(#paint6_linear_103_2)"
          />
          <path
            d="M29.5 54C34.74 54 39 49.74 39 44.5C39 41.92 37.94 39.63 36.24 38H22.76C21.06 39.63 20 41.92 20 44.5C20 49.74 24.26 54 29.5 54Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M34 44H25C24.45 44 24 43.55 24 43V38H35V43C35 43.55 34.55 44 34 44Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M12 22H48L30 34L12 22Z"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M12 22V44"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M48 22V44"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_103_2"
            x1="30"
            y1="0"
            x2="30"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F9C97C" />
            <stop offset="1" stopColor="#F89225" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_103_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(30 30) rotate(90) scale(28)"
          >
            <stop stopColor="white" stopOpacity="0.5" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="paint2_linear_103_2"
            x1="28.8199"
            y1="17"
            x2="50"
            y2="45"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F8D77D" />
            <stop offset="1" stopColor="#F9A624" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_103_2"
            x1="10"
            y1="25"
            x2="31.18"
            y2="47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F8D77D" />
            <stop offset="1" stopColor="#F9A624" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_103_2"
            x1="11.15"
            y1="22"
            x2="48.85"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F8D77D" />
            <stop offset="1" stopColor="#F9A624" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_103_2"
            x1="29.5"
            y1="38"
            x2="29.5"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD15B" />
            <stop offset="1" stopColor="#FCA42E" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_103_2"
            x1="29.5"
            y1="38"
            x2="29.5"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFD15B" />
            <stop offset="1" stopColor="#FCA42E" />
          </linearGradient>
          <clipPath id="clip0_103_2">
            <rect width="60" height="68" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Block & Learn
      </h1>
    </div>
  );
}
