import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Estrellita de Mar",
  description: "Pescadería Premium en San Nicolás",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-sky-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 