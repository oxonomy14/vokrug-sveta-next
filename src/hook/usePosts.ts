// src/hooks/usePosts.ts
"use client";

import {FetchPostsArgs} from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/getPosts";

export function usePosts({lang, category, sort}:FetchPostsArgs) {
  return useQuery({
    queryKey: ["posts", lang, category, sort],
    queryFn: () => getPosts({ lang, category, sort }),
  });
}
