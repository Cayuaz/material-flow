import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import localFont from "next/font/local";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Material Flow",
    default: "Material Flow - Resource Planning",
  },
  description:
    "Smart inventory management and production planning powered by real-time bottleneck analysis.",
  keywords: ["MRP", "Inventory", "Production", "Next.js", "Management"],
  authors: [{ name: "Cayuã" }],
  // Social media - setup for Open Graph (Facebook, LinkedIn) and Twitter
  openGraph: {
    title: "Material Flow - Resource Planning",
    description: "Smart inventory management and production planning.",
    url: "https://material-flow-xi.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Material Flow - Resource Planning",
      },
    ],
    siteName: "Material Flow",
    locale: "pt_BR",
    type: "website",
  },
};

const lato = localFont({ src: "./fonts/Lato-Regular.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${lato.className} antialiased grid grid-cols-1 grid-rows-[auto_2fr_auto]  min-h-screen`}
      >
        <Header />
        <main> {children}</main>
        {/*Toaster to delete toast */}
        <Toaster theme="dark" />
        <Footer />
      </body>
    </html>
  );
}
