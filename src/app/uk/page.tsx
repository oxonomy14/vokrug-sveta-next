import type { Metadata } from "next";
import HomePage from "@/app/components/HomePage/HomePage";

export const metadata: Metadata = {
  title: `Куди з'їздити відпочити: блог про подорожі`,
  description:
    `Щоденник мандрівника – блог про подорожі. Культура країн, відгуки про готелі та гарячі тури.`,
    alternates: {
    languages: {
      "ru": "/", // hreflang
    },
  },
};

export default function HomeUk() {
   
return <HomePage params={{
    lang: "uk"
  }} lang={"uk"}  />;

}
