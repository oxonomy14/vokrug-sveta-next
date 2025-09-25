import css from "./PopularBoxRightPost.module.css";
import { JSX } from 'react';
import type { Post } from '../../types/post';
import Image from 'next/image';

interface CategoryPostProps {
  posts: Post[];
  allPosts: Post[];
}

const PopularBoxRightPost: React.FC<CategoryPostProps>=({posts, allPosts}:CategoryPostProps):JSX.Element=> {
     const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.post_date).getTime() - new Date(a.post_date).getTime();
  });
    return (
        <>
     
         <div className={css.latestPost}>
              <h2 className={css.latestPostTitle}>последние публикации</h2>
              <ul className={css.latestPostList}>
                  {sortedPosts.map((post) => ( 
                <li className={css.latestPostItem} key={post.id}>
                  <Image
                    src={post.thumb_img}
                    alt={post.title}
                    width={84}
                    height={68}
                  />
                  <div>
                    <h3 className={css.latestPostItemTitle}>
                       {post.title}
                    </h3>
                    <p className={css.latestPostItemDate}> {new Date (post.post_date).toLocaleDateString("ru-RU", {
  day: "2-digit",
  month: "long",
  year: "numeric",
}).replace(" г.", "")}</p>
                  </div>
                </li>))}
                </ul>
            </div>
            <div className={css.ad}>
              <Image src="/img/BANNER.jpg" alt="" width={308} height={384} />
            </div>
            {/* <div className={css.tags}>
              <h2 className={css.tagsTitle}>Tags</h2>
              <ul className={css.tagsList}>
                <li className={css.tagsItem}>Китай</li>
                <li className={css.tagsItem}>Таиланд</li>
                <li className={css.tagsItem}>острова Бали</li>
                <li className={css.tagsItem}>Азия</li>
                <li className={css.tagsItem}>Кипр</li>
              </ul>
            </div>
            <div className={css.aboutAuthor}>
              <h2 className={css.aboutAuthorTitle}>Георгий Горбенко</h2>
              <p className={css.aboutAuthorDesc}>краткое описание об авторе</p>
            </div> */}
          
          
        </>
    );
}

export default PopularBoxRightPost;