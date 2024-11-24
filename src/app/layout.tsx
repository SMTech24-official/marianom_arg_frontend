import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "@/assets/background/background.png";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import TopBar from "@/components/common/TopBar";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Grommr - A site for guys into gaining and encouraging, bellies, chubby bears, gay chubs and admirers",
  description:
    "A site for guys into gaining and encouraging, bellies, chubby bears, gay chubs and admirers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        style={{ background: `url('${Background.src}')` }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopBar />
        <div className="md:container">
          <Navbar />
        </div>
        <div className="md:px-5">
          <div className="md:container md:rounded-lg text-text bg-white">
            {children}
          </div>
        </div>
        <div className="md:container">
          <Footer />
        </div>
      </body>
    </html>
  );
}
