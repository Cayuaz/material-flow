import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Material Flow",
  description:
    "Smart inventory management and production planning powered by real-time bottleneck analysis.",
};

const lato = localFont({ src: "./fonts/Lato-Regular.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${lato.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
