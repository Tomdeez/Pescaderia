import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estrellita de Mar – Pescadería Premium",
  description: "Pescados y mariscos frescos, congelados y empanados. Calidad premium para consumo mayorista y minorista.",
  keywords: [
    "pescadería premium",
    "pescados frescos",
    "mariscos congelados",
    "venta de pescado",
    "Estrellita de Mar"
  ],
  themeColor: "#003049",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Estrellita de Mar – Pescadería Premium",
    description: "Consultanos por nuestros producto frescos y congelados.",
    url: "https://tudominio.vercel.app",
    type: "website",
    images: [
      {
        url: "/imagenes/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pescados y mariscos Estrellita de Mar",
      }
    ]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport = {
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
        <main className="flex-1 flex flex-col transition-all duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}