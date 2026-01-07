import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Logo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");
  return (
    <div className={cn("flex select-none items-center gap-4", className)}>
      {logoImage && (
        <Image
          src={logoImage.imageUrl}
          alt={logoImage.description}
          width={64}
          height={64}
          data-ai-hint={logoImage.imageHint}
          className="h-16 w-16"
        />
      )}
      <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
        Block & Learn
      </h1>
    </div>
  );
}
