import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import "@fontsource/caveat";
import '@fontsource/caveat/700.css';
import 'modern-normalize';
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Providers  from "@/app/components/Providers";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body className="wrapper">
        <Providers>
          <header><Header  /></header>
          <main>{children}</main>
          <footer><Footer  /></footer>
        </Providers>
      </body>
    </html>
  );
}
