import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import AudioProvider from "@/providers/AudioProvider";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PodWiz",
  description: "Generated Your podcasts using AI",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className}`}>
              {children}
          </body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
