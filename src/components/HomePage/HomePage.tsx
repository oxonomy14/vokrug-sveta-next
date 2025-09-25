import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import CategoryPost from "@/components/CategoryPost/CategoryPost";
import AboutBlog from "@/components/AboutBlog/AboutBlog";
import Authors from "@/components/Authors/Autors";
import PopularPost from "@/components/PopularPost/PopularPost";
import { categoriesMap } from "@/config/categoriesMap";
import { getPosts } from "@/lib/getPosts";
import {LangProps} from '../../types/page';

export default async function HomePage({ lang }: LangProps) {
  const categories = categoriesMap[lang] || categoriesMap["ru"];

  const [heroPosts, travelPosts, tipsPosts, allPosts] = await Promise.all([
    getPosts({ lang, category: categories.hero, sort: { field: "view_count", order: "ASC" } }),
    getPosts({ lang, category: categories.travel }),
    getPosts({ lang, category: categories.tips }),
    getPosts({ lang, category: categories.all }),
  ]);

  return (
    <>
      <Hero posts={heroPosts} lang={lang}/>
      <About lang={lang}/>
      <CategoryPost posts={travelPosts} lang={lang}/>
      <AboutBlog lang={lang}/>
      <Authors lang={lang}/>
      <PopularPost posts={tipsPosts} allPosts={allPosts} lang={lang}/>
    </>
  );
}
