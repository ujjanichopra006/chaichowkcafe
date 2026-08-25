import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./component/navbar";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chai Chowk Cafe",
  description:
    "Welcome to Chai Chowk Cafe — delicious chai, snacks, food and refreshing drinks.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Every page content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}