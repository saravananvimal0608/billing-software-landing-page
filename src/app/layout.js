import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Billing App | Billing Software for Small Shops",
  description:
    "Manage billing, products, and sales easily with Smart Billing App. Perfect POS solution for small shops, restaurants, and retail stores.",
  keywords: [
    "billing software",
    "POS system",
    "shop billing app",
    "invoice generator",
    "retail billing",
    "small business billing",
  ],
   icons: {
    icon: "/icon.jpeg",
  },
  authors: [{ name: "Cotechies Team" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
      <Navbar/>
      {children}
      <Footer />
      </body>

    </html>
  );
}
