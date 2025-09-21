export interface Post {
  id: number;
  title: string;
  slug: string;
  body: string;
  author_name: string;
  post_date: string;
  title_seo?: string;
  description_seo?: string;
  view_count?: number;
  comment_count?: number;
  category?: string;
  image?: string;
  thumb_img?: string;
  post_img?: string;
}
