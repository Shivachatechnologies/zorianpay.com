import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ZorianPay | Crypto Cards, Multi-Currency Wallets & Global Payments",
    template: "%s | ZorianPay",
  },
  description:
    "ZorianPay is a blockchain-powered crypto card and multi-currency wallet platform from Shivacha Technologies LLC offering multi-currency wallets, instant global transfers, and crypto card issuance for individuals and businesses.",
  keywords: [
    "ZorianPay",
    "crypto card platform",
    "crypto card",
    "multi-currency wallet",
    "blockchain payments",
    "Shivacha Technologies LLC",
  ],
  metadataBase: new URL("https://zorianpay.com"),
  openGraph: {
    title: "ZorianPay | Blockchain-Powered Crypto Card Platform",
    description:
      "Multi-currency wallets, crypto card issuance, and borderless payments — powered by ZorianPay.",
    url: "https://zorianpay.com",
    siteName: "ZorianPay",
    type: "website",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
