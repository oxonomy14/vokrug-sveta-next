import type { Post } from "./post";

export interface FetchPostsArgs {
  lang?: "ru" | "uk";
  limit?: number;
  offset?: number;
}

export interface FetchPostsResponse {
  data: Post[];
  pagination: {
    limit: number;
    offset: number;
    count: number;
  };
}
