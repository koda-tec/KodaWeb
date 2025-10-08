import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koda - Software con calidad desde la raíz",
  description: "Desarrollo de software a medida, robusto y escalable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-light text-dark`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}