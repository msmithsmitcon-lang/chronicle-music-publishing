import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chroniclemusic.co.za"),
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description:
    "Chronicle Music Publishing is an independent music publishing house focused on catalogue administration, composition rights, royalty readiness, licensing, and creator legacy.",
  openGraph: {
    title: brand.name,
    description:
      "Independent music publishing, catalogue administration, rights documentation, royalty readiness, and licensing support.",
    url: "https://chroniclemusic.co.za",
    siteName: brand.name,
    images: [
      {
        url: "/assets/hero/hero-studio-dark-gold.jpg",
        width: 1200,
        height: 630,
        alt: "Chronicle Music Publishing studio and rights administration visual",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  icons: {
    icon: "/assets/branding/chronicle-favicon-512.png",
    apple: "/assets/branding/chronicle-favicon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
