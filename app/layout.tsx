import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Parvesh Upholstery Ltd — Furniture Reborn in Fabric & Light",
    template: "%s — Parvesh Upholstery Ltd",
  },
  description:
    "Upholstery, restoration and reupholstery workshop in Hayes, West London. Domestic, commercial and vehicle seating crafted by hand.",
  keywords: [
    "upholstery",
    "Hayes",
    "West London",
    "sofa reupholstery",
    "furniture restoration",
    "commercial seating",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="grain min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
