"use client";
import Hero from "@/app/components/Hero/Hero";
import About from "@/app/components/About/About";
import CategoryPost from "@/app/components/CategoryPost/CategoryPost";
import AboutBlog from "@/app/components/AboutBlog/AboutBlog";
import Authors from "@/app/components/Authors/Autors";
import PopularPost from "@/app/components/PopularPost/PopularPost";
import { categoriesMap } from "@/config/categoriesMap";
import { getPosts } from "@/lib/getPosts";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/app/components/Loader/Loader";

export interface LangProps {
  lang: "uk" | "ru";
}

 export default function HomePage({ lang }: LangProps) {

  const categories = categoriesMap[lang] || categoriesMap["ru"];

// Hero posts
  const {
    data: heroPosts = [],
    isLoading: isHeroLoading,
  } = useQuery({
    queryKey: ["heroPosts", lang],
    queryFn: () =>
      getPosts({
        lang,
        category: categories.hero,
        sort: { field: "view_count", order: "ASC" },
      }),
  });

  // Travel posts
  const {
    data: travelPosts = [],
    isLoading: isTravelLoading,
  } = useQuery({
    queryKey: ["travelPosts", lang],
    queryFn: () =>
      getPosts({
        lang,
        category: categories.travel,
      }),
  });

  // Tips posts
  const {
    data: tipsPosts = [],
    isLoading: isTipsLoading,
  } = useQuery({
    queryKey: ["tipsPosts", lang],
    queryFn: () =>
      getPosts({
        lang,
        category: categories.tips,
      }),
  });



  return (
    <>
      {/* Hero */}
      {isHeroLoading ? <Loader loading={true} /> : <Hero posts={heroPosts} />}

      <About lang={lang} />

      {/* Travel */}
      {isTravelLoading ? (
        <Loader loading={true} />
      ) : (
        <CategoryPost posts={travelPosts} />
      )}

      <AboutBlog lang={lang} />

      <Authors />

      {/* Tips */}
      {isTipsLoading ? (
        <Loader loading={true} />
      ) : (
        <PopularPost posts={tipsPosts} lang={lang} />
      )}
    </>
  );




}
