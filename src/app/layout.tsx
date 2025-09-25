import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import "@fontsource/caveat";
import '@fontsource/caveat/700.css';
import 'modern-normalize';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Providers } from "./providers";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
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
