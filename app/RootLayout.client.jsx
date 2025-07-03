"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayoutClient({ children }) {
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