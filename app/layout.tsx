import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cursive | The Verticalized Buyer-Intent Engine",
  description: "Cursive is a verticalized buyer-intent engine for service businesses. We plug into your market, find the people already looking for what you sell, and turn that intent into a predictable pipeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <div className="app-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
