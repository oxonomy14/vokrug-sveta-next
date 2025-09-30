
import { JSX } from "react";
import css from "./CategoryPost.module.css";
import clsx from "clsx";
import Container from "@/app/components/Container/Container";
import Image from "next/image";
//import { Post } from "@/types/Post";
import type { Post } from "@/types/api";
import Link from "next/link";
import CategoryInfo from '@/app/components/CategoryInfo/CategoryInfo';


interface CategoryPostProps {
  posts: Post[];
}
const CategoryPost: React.FC<CategoryPostProps> = ({ posts }: CategoryPostProps): JSX.Element => {

 

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
                       <CategoryInfo post={post} />
                </div>
                <h3 className={css.categoryPostItemTitle}><Link href={post.slug}>{post.title}</Link></h3>
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