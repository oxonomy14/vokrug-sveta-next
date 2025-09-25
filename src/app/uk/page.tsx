import type { Metadata } from "next";
import HomePage from "@/components/HomePage/HomePage";

export const metadata: Metadata = {
  title: `Куди з'їздити відпочити: блог про подорожі`,
  description:
    `Щоденник мандрівника – блог про подорожі. Культура країн, відгуки про готелі та гарячі тури.`,
};

export default function HomeUk() {
return <HomePage lang="uk" />;

}
