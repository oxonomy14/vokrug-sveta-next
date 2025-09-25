import type { Post } from "./post";

export interface SortArgs {
  field: "post_id" | "title" | "post_date" | "view_count";
  order: "ASC" | "DESC";
}

export interface FetchPostsArgs {
  lang?: "ru" | "uk";
  limit?: number;
  offset?: number;
  category?: string; 
  sort?: SortArgs;
}

export interface FetchPostsResponse {
   category: string;
 data: Post[];

  pagination: {
    limit: number;
    offset: number;
    total: number;
  };
}
