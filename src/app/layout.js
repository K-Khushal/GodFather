import { Inter } from "next/font/google";
import {Providers} from "./providers";
import "./globals.css";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GDSC SSIU",
  description: "Google developer student clubs Swarrnim Startup and Innovation University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
            <Header/>
            {children}
            <Footer/>
        </Providers>
      </body>
    </html>
  );
}
