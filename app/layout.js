import "./globals.css";
import AppWrapper from "./components/AppWrapper";

export const metadata = {
  title: "Estrellita de Mar",
  description: "Pescadería Premium en San Nicolás",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
} 