// lib/getPosts.ts
import { Post } from "@/types/post";

interface FetchPostsArgs {
  lang: "ru" | "uk";
  category: string;
  sort?: { field: string; order: "ASC" | "DESC" };
}

export async function getPosts({
  lang,
  category,
  sort,
}: FetchPostsArgs): Promise<Post[]> {
  const params = new URLSearchParams({ lang, category });

  if (sort) {
    params.append("sortField", sort.field);
    params.append("sortOrder", sort.order);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Помилка при завантаженні постів", res.status);
    return [];
  }

  const data = await res.json();

  // Перевірка: чи отримали масив
  if (Array.isArray(data)) {
    return data;
  }

  // Якщо API повертає { data: [...] }
  if (data?.data && Array.isArray(data.data)) {
    return data.data;
  }

  console.warn("Невірний формат даних від API", data);
  return [];
}
