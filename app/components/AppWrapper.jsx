"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppWrapper({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex-1 flex flex-col pt-20 md:pt-24">{children}</div>
      <Footer />
    </>
  );
} 