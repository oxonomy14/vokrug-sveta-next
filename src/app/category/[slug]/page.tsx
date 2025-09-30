import { getPosts } from "@/lib/getPosts";
import { categoriesMap } from "@/config/categoriesMap";
import { Post } from "@/types/post";
import Caption from "@/app/components/Caption/Caption";
import CategoryPost from "@/app/components/CategoryPost/CategoryPost";
//import type { Metadata } from "next";

interface CategoryPageProps {
  params: { lang: "ru" | "uk"; slug: string };
}


// export async function generateMetadata({
//   params
// }: {
//   params: { lang: "ru" | "uk"; slug: string };
// }): Promise<Metadata> {
//   const { lang, slug } = await params; 

//   const post = await getPostBySlug({ lang, slug });


//   if (!post) {
//     return {
//       title: "Категория не найдена",
//       description: "Категория отсутствует",
//     };
//   }

//   return {
//     title: "",
//     description: "",
   
//   };
// }



export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

console.log('slug:',slug);


  // дістаємо id категорії по slug
  const categories = categoriesMap["ru"];
  const categoryId = categories[slug as keyof typeof categories];

  console.log('categoryId:',categoryId);

  if (!categoryId) {
    return <h1>Категория не найдена</h1>;
  }

  // отримуємо пости цієї категорії
  const posts: Post[] = await getPosts({ lang: "ru", category: categoryId });

  return (

    <>
    <Caption>
      {categoryId}
    </Caption>
    
    <CategoryPost posts={posts}/>
    </>
  );
}
