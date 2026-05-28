import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OFFFIT | Live Women Online Fitness community, Zumba, HIIT & Weight Loss",
  description: "Join India's most energetic, loving, and supportive women-only online live fitness batch family! 100% Live Zoom sessions with expert trainers, personalized diet support, and flexible timings.",
  keywords: "women fitness, weight loss challenge, live zumba, online yoga, home workouts for women, dietician support, PCOS weight loss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
