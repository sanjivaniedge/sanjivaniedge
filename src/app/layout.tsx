import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanjivaniedge.com"),
  title: "Sanjivani Edge",
  description: "Rooted in Values. Engineered for the Future.",
  alternates: {
    canonical: "./",
  },
  verification: {
    google: "bDWjaHgJkN2byd8rmS5eingNDincuJBBBOtTVArI-vQ",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} antialiased`}
      >
        <Navbar />



        {children}
        <Footer />
      </body>
    </html>
  );
}
