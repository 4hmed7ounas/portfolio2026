import type { Metadata } from "next";
import { Inter, Philosopher } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const philosopher = Philosopher({
  weight: ["400", "700"],
  variable: "--font-philosopher",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahmed Younas — AI Systems Engineer & Full Stack Developer",
    template: "%s — Ahmed Younas",
  },
  description:
    "Full-stack software developer specializing in React, Next.js, and Node.js. Building performant, elegant web applications.",
  keywords: [
    "software developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${philosopher.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
