import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex select-none items-center gap-4", className)}>
      <svg
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.006 22.8899H19.994C19.994 22.8899 19.994 22.8899 19.994 22.8899C11.534 22.8899 4.75 29.6739 4.75 38.1339C4.75 42.9229 7.03 47.2029 10.64 49.8659C10.559 49.8119 40.25 63.2509 40.25 63.2509C40.25 63.2509 40.25 63.2509 40.25 63.2509C41.791 64.1399 43.625 64.2509 45.25 63.5009C45.25 63.5009 67.25 54.2509 67.25 54.2509V54.2509C65.5 50.5 64 45.6259 64 41.0009C64 31.0509 56.949 23.1399 48.006 22.8899Z"
          fill="black"
        />
        <path
          d="M40.25 63.25L10.559 49.811C10.64 49.865 7.03 47.202 4.75 42.922C4.75 38.133 11.534 29.673 19.994 29.673H48.006C56.949 29.923 64 37.834 64 47.784C64 47.784 64 41.001 64 41.001C64 45.626 65.5 50.5 67.25 54.25L40.25 63.25Z"
          fill="url(#paint0_linear_1_2)"
        />
        <path
          d="M34 4C21.296 4 11 14.296 11 27V29H57V27C57 14.296 46.704 4 34 4Z"
          fill="black"
        />
        <path
          d="M57 27V29H11V27C11 14.296 21.296 4 34 4C46.704 4 57 14.296 57 27Z"
          fill="url(#paint1_linear_1_2)"
        />
        <path
          d="M34 4C21.296 4 11 14.296 11 27V29H57V27C57 14.296 46.704 4 34 4Z"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M48 23H20C11.716 23 5 29.716 5 38C5 42.823 7.298 47.11 10.838 49.811M40.25 63.25C40.25 63.25 67.25 54.25 67.25 54.25V54.25C65.5 50.5 64 45.625 64 41C64 31.159 56.841 23.133 48 23Z"
          stroke="black"
          strokeWidth="2"
        />
        <path
          d="M42.25 40.25V33H46.25V40.25C46.25 42.46 44.46 44.25 42.25 44.25H25.75C23.54 44.25 21.75 42.46 21.75 40.25V33H25.75V40.25H42.25Z"
          fill="black"
        />
        <path
          d="M42.25 40.25V33H46.25V40.25C46.25 42.46 44.46 44.25 42.25 44.25H25.75C23.54 44.25 21.75 42.46 21.75 40.25V33H25.75V40.25H42.25Z"
          fill="url(#paint2_linear_1_2)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_2"
            x1="35.5"
            y1="29.5"
            x2="35.5"
            y2="62"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBB03B" />
            <stop offset="1" stopColor="#F48322" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_2"
            x1="34"
            y1="4"
            x2="34"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBB03B" />
            <stop offset="1" stopColor="#F48322" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_2"
            x1="34"
            y1="33"
            x2="34"
            y2="44.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBB03B" />
            <stop offset="1" stopColor="#F48322" />
          </linearGradient>
        </defs>
      </svg>
      <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Block & Learn
      </h1>
    </div>
  );
}
