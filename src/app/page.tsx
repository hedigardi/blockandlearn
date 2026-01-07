import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { TikTokIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const socialLinks = [
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "TikTok", href: "#", icon: TikTokIcon },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "X (Twitter)", href: "#", icon: Twitter },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between p-4 sm:p-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.1),transparent)]" />
      
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <main className="flex w-full max-w-3xl flex-col items-center gap-8 text-center animate-in fade-in-50 duration-1000">
        <Logo />

        <p className="text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
          At Block & Learn, we believe financial freedom starts with knowledge.
          Our mission is to empower you with easy-to-understand lessons on
          Bitcoin, blockchain, and the new world of digital finance. No
          confusion, no gatekeeping — just clear, honest education for anyone
          ready to take control of their financial future.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={`Visit our ${link.name} page`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full border border-border p-3 transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent/10"
            >
              <link.icon className="h-6 w-6 text-foreground/80 transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>
      </main>

      <footer className="w-full text-center text-sm text-foreground/60">
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href="mailto:contact@blockandlearn.com"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            <span>contact@blockandlearn.com</span>
          </a>
          <p>&copy; {new Date().getFullYear()} Block & Learn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
