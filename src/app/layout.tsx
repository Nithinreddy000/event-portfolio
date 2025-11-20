import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue Moon Tales - Premium Event Management",
  description: "Crafting unforgettable moments for weddings, corporate events, live concerts, and celebrations. Professional event planning and management services.",
  keywords: ["event management", "wedding planning", "corporate events", "event coordination", "Blue Moon Tales"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
