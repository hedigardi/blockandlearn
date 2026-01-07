import { cn } from "@/lib/utils";
import Image from "next/image";
import logoImage from "@/ui/logo_transparent.png";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex select-none items-center gap-4", className)}>
      <Image
        src={logoImage}
        alt="Block & Learn Logo"
        width={64}
        height={64}
        className="h-16 w-16"
        priority
      />
      <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Block & Learn
      </h1>
    </div>
  );
}
