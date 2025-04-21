import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Providers from "../components/Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Header />
          <main className="flex flex-grow justify-center">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
