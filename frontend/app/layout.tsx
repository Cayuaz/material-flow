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
      <body
        className={`${lato.className} antialiased grid grid-cols-1 grid-rows-[auto_2fr_auto]  min-h-screen`}
      >
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
