import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import AmongUs from "@/components/particles/AmongUs";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDSC SSIU",
  description:
    "Google developer student clubs Swarrnim Startup and Innovation University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white dark`}>
        <Providers>
          <div className="absolute w-full">
            <AmongUs />
            <Header />
            {children}
            <Analytics />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
