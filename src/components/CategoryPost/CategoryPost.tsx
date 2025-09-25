
import { JSX } from "react";
import css from "./CategoryPost.module.css";
import clsx from "clsx";
import Container from "@/components/Container/Container";
import Image from "next/image";
//import { Post } from "@/types/Post";
import type { Post } from "../../types/post";


interface CategoryPostProps {
  posts: Post[];
}
const CategoryPost: React.FC<CategoryPostProps> = ({ posts }: CategoryPostProps): JSX.Element => {
//export default function CategoryPost({ posts }: CategoryPostProps): JSX.Element {
 

  return (
    <section>
      <div className={css.wrapCategoryPost}>

      <Container >
        <h2 className={css.categoryPostTitle}>
          Куда съездить отдохнуть: блог о путешествиях
        </h2>
        <p className={css.categoryPostTitleDesc}>От пляжей до мегаполисов, куда поехать за яркими впечатлениями</p>
        <ul className={css.categoryPostList}>
          {posts.length === 0 ? (            
            <li>Постов нет</li>
          ) : (
            posts.map((post) => (
              <li className={css.categoryPostItem} key={post.id}>
                <Image
                  className={css.categoryPostItemImg}
                  src={
                    post.thumb_img ||
                    "https://res.cloudinary.com/daboofr8e/image/upload/v1755256967/samples/landscapes/beach-boat.jpg"
                  }
                  alt={post.title}
                  width={420}
                  height={304}
                />
                <div className={css.categoryPostItemInfo}>
                  <div className={css.categoryPostItemInfoCategory}>
                    <span>{post.category_title || "Категория"}</span>
                  </div>
                  <div className={css.categoryPostItemInfoAuthor}>
                    <span>{post.author_name}</span>
                  </div>
                </div>
                <h3 className={css.categoryPostItemTitle}>{post.title}</h3>
                <p className={css.categoryPostItemDesc}>
                  {post.description_seo || "короткое описание статьи"}
                </p>
              </li>
            ))
          )}
        </ul>
      </Container>
      </div>
          </section>
  );
}
export default CategoryPost;