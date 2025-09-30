import { Post } from "@/types/post";

export interface LangProps {
  lang: "ru" | "uk";
  
}

export interface PostPageProps {
  params: { slug: string };
  post: Post;

}