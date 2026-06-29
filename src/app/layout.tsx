import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    default: "Brain Box Solutions - Tally on Cloud & Cloud Hosting Solutions",
    template: "%s | Brain Box Solutions"
  },
  description: "Brain Box Solutions is the leading provider of Tally on Cloud, Busy on Cloud, customized ERP solutions, and secure virtual database hosting for enterprises in Mumbai, Dubai, and worldwide.",
  keywords: ["Tally on Cloud", "TallyPrime on Cloud", "Busy on Cloud", "Marg on Cloud", "Database Hosting", "Customized ERP", "Virtual Private Server", "Mumbai Cloud Hosting", "Dubai Cloud Solutions"],
  authors: [{ name: "Brain Box Solutions" }],
  creator: "Brain Box Solutions",
  metadataBase: new URL("http://brainboxsolutions.net"),
  openGraph: {
    title: "Brain Box Solutions - Tally on Cloud & Cloud Hosting Solutions",
    description: "Secure, reliable, and lightning-fast cloud accounting and database solutions for modern enterprises.",
    url: "/",
    siteName: "Brain Box Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Box Solutions - Cloud Hosting",
    description: "Tally on Cloud, Busy on Cloud, and enterprise database hosting solutions.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
