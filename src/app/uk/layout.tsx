
// app/uk/layout.tsx
import type { Metadata } from "next";
import Providers  from "@/app/components/Providers";
import "../globals.css";

export const metadata: Metadata = {
  title: "Куди з'їздити відпочити",
  description: "Щоденник мандрівника – блог про подорожі.",
  alternates: {
    canonical: "/uk",
    languages: {
      uk: "/uk",
      ru: "/"
    }
  }
};

export default function UkLayout({ children }: { children: React.ReactNode }) {
  return (
    
      <Providers>
        <main>{children}</main>
      </Providers>

  );
}