import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafi Ramadian - Full Stack Developer",
  description: "Full Stack Developer & Software Engineer specializing in React, Next.js, and modern web technologies. Building exceptional digital experiences.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Rafi Ramadian" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Rafi Ramadian - Full Stack Developer",
    description: "Full Stack Developer & Software Engineer specializing in React, Next.js, and modern web technologies.",
    type: "website",
    url: "https://rafiramadian.vercel.app",
    siteName: "Rafi Ramadian Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafi Ramadian - Full Stack Developer",
    description: "Full Stack Developer & Software Engineer specializing in React, Next.js, and modern web technologies.",
    creator: "@rafiramadian",
  },
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
        {children}
      </body>
    </html>
  );
}
