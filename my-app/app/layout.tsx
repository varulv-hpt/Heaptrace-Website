import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import Preloader from "@/components/preloader";
import heaptraceFavicon from "@/app/assets/ht/Heaptrace-fevicon-256x256.png";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  adjustFontFallback: true,
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
  icons: {
    icon: [{ url: heaptraceFavicon.src, type: "image/png" }],
    shortcut: [{ url: heaptraceFavicon.src, type: "image/png" }],
    apple: [{ url: heaptraceFavicon.src, type: "image/png" }],
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${inter.className} min-h-full flex flex-col font-sans`}
      >
        <Preloader />
        <Navbar />
        <main className="flex-1 font-sans min-h-0">{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
