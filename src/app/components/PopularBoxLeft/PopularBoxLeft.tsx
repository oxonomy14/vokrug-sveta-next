import { JSX } from 'react';
import css from './PopularBoxLeft.module.css';
import clsx from 'clsx';
import CategoryInfo from '@/app/components/CategoryInfo/CategoryInfo';
import Image from 'next/image';
import type { Post } from '../../../types/post';


interface CategoryPostProps {
  posts: Post[];
  lang:  "ru" | "uk";
}
const PopularBoxLeft: React.FC<CategoryPostProps> = ({
  posts, lang
}: CategoryPostProps): JSX.Element => {
  return (
  
       <>
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
                    <div className={css.postPopularBoxLeftItemPostInfo}>
                           <CategoryInfo post={post} />
                    </div>
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
   
</>
  );
};

export default PopularBoxLeft;
