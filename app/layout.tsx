import "./globals.css";
import Footer from "../components/footer/Footer";
import Providers from "../components/Providers";
import Breadcrumb from "@/components/Breadcrumb";
import Header from "@/components/header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="flex flex-col min-h-screen items-center">
        <Providers>
          <Header />
          <Breadcrumb />
          <main className="flex flex-grow justify-center w-[1440px] pb-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
