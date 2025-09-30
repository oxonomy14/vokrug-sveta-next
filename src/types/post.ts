export interface Post {
  id: number;
  post_id: number;
  lang: string;
  slug: string;
  title: string;
  body: string;
  post_author: number;
  post_date: string;
  post_status: string;
  comment_status: string;
  comment_count: number | null;
  view_count: number | null;
  title_seo: string;
  description_seo: string;
  thumb_img: string;
  post_img: string;
  category_id: number;
  author_id: number;
  author_name: string;
  author_bio: string | null;
  category_title: string;
  category_slug: string;  
}



export interface Pagination {
  limit: number;
    offset: number;
    total: number;
 }

 