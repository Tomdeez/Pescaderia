import "./globals.css";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";
import { WhatsappButton } from "@components/ui/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  metadataBase: new URL('https://estrellitademar.com'),
  title: "Estrellita de Mar | Pescadería de Calidad en [Tu Ciudad]",
  description: "Pescadería de calidad con los productos más frescos del mar. Mariscos selectos, pescados de primera calidad y servicio personalizado. Envíos a domicilio.",
  keywords: "pescadería de calidad, mariscos frescos, pescado fresco, marisco selecto, pescadería gourmet, mariscos de calidad",
  openGraph: {
    title: "Estrellita de Mar | Pescadería de Calidad",
    description: "Los productos más frescos del mar directo a tu mesa. Calidad garantizada.",
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
    title: "Estrellita de Mar | Pescadería de Calidad",
    description: "Los productos más frescos del mar directo a tu mesa. Calidad garantizada.",
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
      <body className={`${inter.className} ${playfair.variable} ${montserrat.variable} bg-white text-slate-900`}>
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