
'use client';
import css from "./AsideRightBlock.module.css";
import { Post } from "@/types/api";
import Image from "next/image";
import { categoriesMap } from "@/config/categoriesMap";
import { LangProps } from "@/types/page";
import { FetchPostsArgs } from "@/types/api";
import { useQuery } from '@tanstack/react-query';



async function fetchPosts( { lang, category }: FetchPostsArgs) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?lang=${lang}&category=${category}`);
  if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data.data)) return data.data;
  return [];
}
export default function AsideRightBlock({ lang }: LangProps) {
  const categories = categoriesMap[lang] || categoriesMap["ru"];

  const { data: allPosts = [], error, isLoading } = useQuery<Post[]>({
    queryKey: ['allPosts', lang, categories.all],
    queryFn: () => fetchPosts({lang, category: categories.all }),
  });


  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  //console.log("Мова яка передається вбоковий sidebar:", lang);
  


  const sortedPosts: Post[] = [...allPosts].sort((a, b) => {
    return (
      new Date(b.post_date).getTime() - new Date(a.post_date).getTime()
    );
  });

  return (
    <>
    <div className={css.asideRightBlock}>
      <div className={css.latestPost}>
        <h2 className={css.latestPostTitle}>
          {lang === "uk" ? "Останні публікації" : "Последние публикации"}
        </h2>
        <ul className={css.latestPostList}>
          {sortedPosts.map((post) => (
            <li className={css.latestPostItem} key={post.id}>
              <Image
                src={post.thumb_img}
                alt={post.title}
                width={84}
                height={68}
              />
              <div>
                <h3 className={css.latestPostItemTitle}>{post.title}</h3>
                <p className={css.latestPostItemDate}>
                  {new Date(post.post_date)
                    .toLocaleDateString(lang === "uk" ? "uk-UA" : "ru-RU", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })
                    .replace(" р.", "") // для українського
                    .replace(" г.", "")} {/* для російського */}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.ad}>
        <Image src="/img/BANNER.jpg" alt="" width={308} height={384} />
      </div>
      </div>
    </>
  );
}
