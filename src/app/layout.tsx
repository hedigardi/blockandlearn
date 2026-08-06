import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://blockandlearn.com"),
  title: {
    default: "Block & Learn",
    template: "%s | Block & Learn",
  },
  description:
    "Empowering you with easy-to-understand lessons on Bitcoin, blockchain, and the new world of digital finance.",
  applicationName: "Block & Learn",
  keywords: [
    "bitcoin",
    "blockchain",
    "crypto",
    "digital finance",
    "education",
  ],
  authors: [{ name: "Block & Learn" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blockandlearn.com",
    siteName: "Block & Learn",
    title: "Block & Learn",
    description:
      "Easy-to-understand lessons on Bitcoin, blockchain, and the new world of digital finance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Block & Learn",
    description:
      "Easy-to-understand lessons on Bitcoin, blockchain, and the new world of digital finance.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#151a28" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
