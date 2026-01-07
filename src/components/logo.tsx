import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex select-none items-center gap-4", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary shadow-lg shadow-primary/30 transition-transform duration-300 hover:scale-105 md:h-14 md:w-14">
        <div className="h-6 w-6 rounded-md bg-primary-foreground md:h-7 md:w-7" />
      </div>
      <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Block & Learn
      </h1>
    </div>
  );
}
