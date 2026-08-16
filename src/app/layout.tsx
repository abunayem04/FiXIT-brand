import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Alex_Brush } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const alexBrush = Alex_Brush({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FIXIT - Super Immersive Experience",
  description: "A super unique, aesthetic, and elegant hero page for FIXIT brand.",
};

import SmoothScroll from "@/components/SmoothScroll";
import SecurityWrapper from "@/components/SecurityWrapper";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${alexBrush.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SecurityWrapper />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

// clearer intent

// added validation check

// refactored for clarity

// followed best practice
