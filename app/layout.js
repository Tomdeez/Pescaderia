import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Estrellita de Mar | Pescadería y Distribuidora DG Congelados",
  description: "La mejor pescadería y distribuidora de congelados en San Nicolás.",
  keywords: [
    "pescadería",
    "congelados",
    "San Nicolás",
    "DG Congelados",
    "pescados frescos",
    "empanados",
    "verduras congeladas",
    "frutas congeladas"
  ],
  openGraph: {
    title: "Estrellita de Mar | Pescadería y Distribuidora DG Congelados",
    description: "La mejor pescadería y distribuidora de congelados en San Nicolás.",
    url: "https://estrellitademar.com.ar",
    siteName: "Estrellita de Mar",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0e7490" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-sky-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col pt-20 md:pt-24 transition-all duration-300">{children}</div>
        <Footer />
      </body>
    </html>
  );
} 