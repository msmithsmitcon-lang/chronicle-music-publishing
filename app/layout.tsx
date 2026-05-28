import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { brand } from "@/lib/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description:
    "Chronicle Music Publishing is an independent music publishing house focused on catalogue administration, composition rights, royalty readiness, licensing, and creator legacy.",
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
