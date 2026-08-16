import type { Metadata, Viewport } from "next";
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
    default: "ZorianPay | Financial Infrastructure for the Digital Asset Economy",
    template: "%s | ZorianPay",
  },
  description:
    "ZorianPay is a financial infrastructure platform from Shivacha Technologies LLC connecting merchants, enterprises, banks, and digital assets — enabling digital asset payment acceptance with local currency settlement, enterprise APIs, and compliance by design.",
  keywords: [
    "ZorianPay",
    "financial infrastructure",
    "merchant payments",
    "digital asset payments",
    "local currency settlement",
    "enterprise APIs",
    "Universal Merchant QR",
    "Shivacha Technologies LLC",
  ],
  metadataBase: new URL("https://zorianpay.com"),
  openGraph: {
    title: "ZorianPay | Financial Infrastructure for the Digital Asset Economy",
    description:
      "One network connecting merchants, enterprises, banks, and digital assets — with local currency settlement, enterprise APIs, and compliance by design.",
    url: "https://zorianpay.com",
    siteName: "ZorianPay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZorianPay | Financial Infrastructure for the Digital Asset Economy",
    description:
      "One network connecting merchants, enterprises, banks, and digital assets — with local currency settlement, enterprise APIs, and compliance by design.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060608" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("zp-theme")==="light")document.documentElement.classList.add("light")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
