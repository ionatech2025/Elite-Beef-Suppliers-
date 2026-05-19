import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Beef Suppliers | Premium Fresh & Halal Bulk Beef Uganda",
  description: "Uganda's leading institutional and commercial supplier of fresh, strictly hygienic, Halal-certified beef. Serving schools, hotels, and restaurants across East Africa.",
  openGraph: {
    title: "Elite Beef Suppliers | Premium Fresh & Halal Bulk Beef",
    description: "Reliable commercial beef supply across Uganda. Hygienic processing, professional grading, and strict cold-chain delivery.",
    type: "website",
    locale: "en_EA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-brand-cream text-brand-charcoal antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}