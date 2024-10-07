import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pertiga App",
  description:
    "Pertiga adalah perusahaan pertanian dan perikanan yang berfokus pada penyediaan produk segar dan berkualitas. Dengan pendekatan berkelanjutan, Pertiga mendukung gaya hidup sehat melalui praktik pertanian dan perikanan yang modern dan bertanggung jawab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar /> {/* Tambahkan Navbar di sini */}
        {children}
      </body>
    </html>
  );
}
