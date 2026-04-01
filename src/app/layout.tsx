import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohamed Osman | Software Developer & ML Specialist",
  description: "Portfolio of Mohamed Osman - Expert in Software Development, Machine Learning, and AI-driven solutions.",
  keywords: ["Software Development", "Machine Learning", "Google Gemini", "Portfolio", "Somali Developer"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

