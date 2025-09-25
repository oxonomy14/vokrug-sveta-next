import { JSX } from 'react';
import css from './PopularPost.module.css';
import clsx from 'clsx';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import type { Post } from '../../types/post';
import PopularBoxRightPost from '@/components/PopularBoxRightPost/PopularBoxRightPost';

interface CategoryPostProps {
  posts: Post[];
  allPosts: Post[];
}
const PopularPost: React.FC<CategoryPostProps> = ({
  posts, allPosts
}: CategoryPostProps): JSX.Element => {
  return (
    <section className={css.wrapPostPopular}>
      <Container>
        <h2 className={css.postPopularTitle}>Где отдохнуть летом</h2>
        <p className={css.postPopularTitleDesc}>
          блог о путешествиях - куда съездить, что посмотреть и как сделать отдых незабываемым
        </p>
        <div className={css.postPopularBox}>
          <div className={css.postPopularBoxLeft}>
            <ul className={css.postPopularBoxLeftList}>
            {posts.map((post) => ( 
                 <li className={css.postPopularBoxLeftItem} key={post.id}>
                <div className={css.postPopularBoxLeftItemPost}>
                  <div>
                    <Image
                      className={css.postPopularBoxLeftItemImg}
                      src={post.thumb_img}
                      alt={post.title}
                      width={420}
                      height={236}
                    />
                  </div>
                  <div>
                    <p className={css.postPopularBoxLeftItemPostInfo}>
                      <span className={css.postPopularBoxLeftItemPostCategory}>
                       {post.category_title || "Категория"}
                      </span>
                      <span className={css.postPopularBoxLeftItemPostAuthor}>
                        {post.author_name}
                      </span>
                    </p>
                    <h3 className={css.postPopularBoxLeftItemPostTitle}>
                     {post.title}
                    </h3>
                    <p className={css.postPopularBoxLeftItemPostDesc}>
                     {post.description_seo || "короткое описание статьи"}
                    </p>
                  </div>
                </div>
              </li>))
            }
            </ul>
          </div>
          <div className={css.postPopularBoxRight}>
           <PopularBoxRightPost posts={posts} allPosts={allPosts}/>
        </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularPost;
