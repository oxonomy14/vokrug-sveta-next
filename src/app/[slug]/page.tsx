import { notFound } from "next/navigation";
import {PostPageProps} from "@/types/page";
import { getPostBySlug } from "@/lib/getPostBySlug";
import type { Metadata } from "next";
import PagePost from "@/app/components/PagePost/PagePost";




export async function generateMetadata({
  params
}: {
  params: { lang: "ru" | "uk"; slug: string };
}): Promise<Metadata> {
  const { lang, slug } = await params; 

  const post = await getPostBySlug({ lang, slug });


  if (!post) {
    return {
      title: "Статья не найдена",
      description: "Статья отсутствует",
    };
  }

  return {
    title: post.title_seo || post.title,
    description: post.description_seo || "",
   
  };
}



export default async function PostPage({ params }: PostPageProps) {
const { slug } = await params; 

  const post = await getPostBySlug({
    lang: "ru", 
    slug
  });

  console.log("postBySlug:", post);
  

  if (!post) {
    notFound();
  }

  return (
 <PagePost post={post} lang={"ru"}/>
  );
}
