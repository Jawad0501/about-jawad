import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,
  metadataBase: new URL("https://about-jawad.vercel.app"),
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: "website",
    images: [{ url: "/portrait.png", width: 120, height: 120 }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    images: ["/portrait.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
