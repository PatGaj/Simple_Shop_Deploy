"use client"
import "./globals.css";
import Footer from "../components/footer/Footer";
import Header from "@/components/header/Header";
import { AlertProvider } from "@/context/AlertContext";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="flex flex-col min-h-screen items-center">
        <SessionProvider>
          <AlertProvider>
            <Header />
            <main className="flex flex-grow justify-center w-[1440px] pb-20">{children}</main>
            <Footer />
          </AlertProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
