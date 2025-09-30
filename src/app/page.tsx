import HomePage from "./components/HomePage/HomePage";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Куда съездить отдохнуть: блог о путешествиях",
  description:
    "Дневник странника – это блог о путешествиях. Здесь вы найдете советы и отзывы о путешествиях по всему миру.",
      alternates: {
    languages: {
      "uk": "/uk", // hreflang
    },
  },
};

export default function HomeRu() {
 
  return <HomePage lang={"ru"} />;
}