import { ThemeProvider } from "@/contexts/ThemeContext";
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
  title: "Rafi Ramadian Rahman - Flutter Developer & Mobile Engineer",
  description: "Flutter Developer & Mobile Engineer with 3+ years of experience building high-quality cross-platform applications for Android, iOS, and Web. Specialized in Firebase, state management, and modern mobile architecture.",
  keywords: ["Flutter Developer", "Mobile Engineer", "Flutter", "Android", "iOS", "Firebase", "Mobile App Development", "Cross-Platform", "Dart"],
  authors: [{ name: "Rafi Ramadian Rahman" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Rafi Ramadian Rahman - Flutter Developer & Mobile Engineer",
    description: "Flutter Developer & Mobile Engineer with 3+ years of experience building high-quality cross-platform applications.",
    type: "website",
    url: "https://rafi-dev-portfolio-5pddq2cic-rafiramadians-projects.vercel.app",
    siteName: "Rafi Ramadian Rahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafi Ramadian Rahman - Flutter Developer & Mobile Engineer",
    description: "Flutter Developer & Mobile Engineer with 3+ years of experience building high-quality cross-platform applications.",
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
