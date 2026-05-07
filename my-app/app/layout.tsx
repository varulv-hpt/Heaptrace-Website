import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heaptrace.com"),
  title: {
    default: "Heaptrace Technology",
    template: "%s | Heaptrace Technology",
  },
  description:
    "Heaptrace Technology builds scalable software, cloud, and AI solutions for modern businesses.",
  openGraph: {
    title: "Heaptrace Technology",
    description:
      "Build the future with smart technology solutions across web, cloud, data, and AI.",
    url: "https://heaptrace.com",
    siteName: "Heaptrace Technology",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaptrace Technology",
    description:
      "Build the future with smart technology solutions across web, cloud, data, and AI.",
  },
  alternates: {
    canonical: "https://heaptrace.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
