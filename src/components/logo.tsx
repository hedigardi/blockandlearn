import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex select-none items-center gap-4", className)}>
      <svg
        width="64"
        height="76"
        viewBox="0 0 64 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
      >
        <path
          d="M49.6155 0.943359H14.3845C13.595 0.943359 12.9434 1.59551 12.9434 2.38497V26.862C12.9434 27.6514 13.595 28.3036 14.3845 28.3036H49.6155C50.405 28.3036 51.0566 27.6514 51.0566 26.862V2.38497C51.0566 1.59551 50.405 0.943359 49.6155 0.943359Z"
          fill="#FBB03B"
          stroke="black"
          strokeWidth="1.88679"
        />
        <path
          d="M32 28.3036L12.9434 2.38497"
          stroke="black"
          strokeWidth="1.88679"
        />
        <path
          d="M32 28.3036L51.0566 2.38497"
          stroke="black"
          strokeWidth="1.88679"
        />
        <path
          d="M32 0.943359V28.3036"
          stroke="black"
          strokeWidth="1.88679"
        />
        <path
          d="M45.5472 49.1913C45.5472 56.1331 40.5401 62.1154 32.7359 63.541V75.0566H31.2642V63.541C23.4599 62.1154 18.4528 56.1331 18.4528 49.1913C18.4528 39.027 26.5401 32.3787 32 32.3787C37.4599 32.3787 45.5472 39.027 45.5472 49.1913Z"
          fill="#FBB03B"
          stroke="black"
          strokeWidth="1.88679"
        />
        <path
          d="M32 41.6051C29.7712 41.6051 28.1698 43.496 28.1698 46.592C28.1698 49.688 29.7712 51.5789 32 51.5789C34.2288 51.5789 35.8302 49.688 35.8302 46.592C35.8302 43.496 34.2288 41.6051 32 41.6051Z"
          fill="#FDE4B5"
          stroke="black"
          strokeWidth="1.88679"
        />
        <path
          d="M32 41.6051V51.5789"
          stroke="black"
          strokeWidth="1.88679"
        />
      </svg>
      <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Block & Learn
      </h1>
    </div>
  );
}
