import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celeste Johnson for Utah House District 59",
  description: "Love Your Neighbor - Community-Focused Leadership. Former Mayor of Midway running for Utah House District 59.",
  keywords: "Celeste Johnson, Utah House District 59, Midway Mayor, Utah politics, community leadership",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
