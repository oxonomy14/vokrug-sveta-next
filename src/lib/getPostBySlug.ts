import { Post } from "@/types/post";

interface FetchPostArgs {
  lang: "ru" | "uk";
  slug: string;
}

export async function getPostBySlug({ lang, slug }: FetchPostArgs): Promise<Post | null> {
  const params = new URLSearchParams({ lang });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/slug/${slug}?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Помилка при завантаженні посту", res.status);
    return null;
  }

  const data = await res.json();

  return data || null;
}
