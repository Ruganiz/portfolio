import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, Inter } from "next/font/google";
import Header from "@/components/Header";
import LenisProvider from "@/components/providers/LenisProvider";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vinicius Rugani | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${barlowCondensed.variable} ${barlow.variable} ${inter.variable} antialiased min-h-screen w-full flex flex-col font-sans`}
      >
        <LenisProvider>
          <main className="relative z-10">
            <Header />
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
