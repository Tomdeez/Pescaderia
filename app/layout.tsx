import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";
import { WhatsappButton } from "@components/ui/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://estrellitademar.com'),
  title: "Estrellita de Mar | Pescadería Premium en [Tu Ciudad]",
  description: "Pescadería premium con los productos más frescos del mar. Mariscos selectos, pescados de primera calidad y servicio personalizado. Envíos a domicilio.",
  keywords: "pescadería premium, mariscos frescos, pescado fresco, marisco premium, pescadería gourmet, mariscos de calidad",
  openGraph: {
    title: "Estrellita de Mar | Pescadería Premium",
    description: "Los productos más frescos del mar directo a tu mesa. Calidad premium garantizada.",
    images: [
      {
        url: "/imagenes/pesfrescohielo.jpg",
        width: 1200,
        height: 630,
        alt: "Pescados frescos Estrellita de Mar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estrellita de Mar | Pescadería Premium",
    description: "Los productos más frescos del mar directo a tu mesa. Calidad premium garantizada.",
    images: ["/imagenes/pesfrescohielo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: "index, follow",
  canonical: "https://estrellitademar.com",
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
        <WhatsappButton 
          phone="+54 9 3364 01-0667" 
          message="Hola! Me interesa conocer más sobre sus productos frescos. ¿Podrían brindarme información?" 
        />
      </body>
    </html>
  );
} 