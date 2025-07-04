import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estrellita de Mar | Pescadería Premium",
  description: "Los productos más frescos del mar directo a tu mesa.",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#003049",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head />
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar />
        <main className="flex-1 flex flex-col pt-20 md:pt-24 transition-all duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 