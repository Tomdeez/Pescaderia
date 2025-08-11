import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@components/layout/Navbar";
import { Footer } from "@components/layout/Footer";
import { site } from "@data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tudominio.vercel.app"),
  title: "Estrellita de Mar – Pescadería Premium",
  description: "Pescados y mariscos frescos de mar y río, congelados y empanados. Calidad premium para consumo mayorista y minorista. Retiro en local (sin envíos).",
  keywords: [
    "pescadería premium",
    "pescados frescos",
    "mariscos congelados",
    "venta de pescado",
    "Estrellita de Mar"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Estrellita de Mar – Pescadería Premium",
    description: "Consultanos por nuestros productos frescos y congelados. Retiro en local (sin envíos).",
    url: "https://tudominio.vercel.app",
    type: "website",
    images: [
      {
        url: "/imagenes/pesfrescohielo.jpg",
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
        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: site.name,
              url: site.baseUrl,
              telephone: `+${site.phones.main}`,
              address: {
                '@type': 'PostalAddress',
                streetAddress: site.address,
                addressLocality: 'San Nicolás',
                addressCountry: 'AR',
              },
              openingHours: site.hours,
            }),
          }}
        />
        <Navbar />
        <main className="flex-1 flex flex-col transition-all duration-300">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}