
import { JSX } from 'react';
import css from './PopularPost.module.css';
import clsx from 'clsx';
import Container from '@/app/components/Container/Container';
import Image from 'next/image';
import type { Post } from '../../../types/post';
import AsideRightBlock from '@/app/components/AsideRightBlock/AsideRightBlock';
import PopularBoxLeft from "@/app/components/PopularBoxLeft/PopularBoxLeft";

interface CategoryPostProps {
  posts: Post[];
  lang:  "ru" | "uk";
}
const PopularPost: React.FC<CategoryPostProps> = ({
  posts, lang
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
          <PopularBoxLeft posts={posts} lang={lang}/>
          </div>
          <div className={css.asideRightBlock}>
           <AsideRightBlock lang={lang}/> 
        </div>
        </div>
      </Container>
    </section>
  );
};

export default PopularPost;
