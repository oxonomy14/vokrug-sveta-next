import React from 'react';
import css from './PagePost.module.css';

import PostContent from '../PostContent/PostContent';
import AsideRightBlock from '../AsideRightBlock/AsideRightBlock';
import Container from '../Container/Container';
import { Post } from '@/types/api';


interface Props {
  post: Post;
  lang: 'ru' | 'uk';
};

export default function PagePost({ post, lang }: Props) {
  return (
    <>
      <div className={css.wrapHeadline}>
        <h1 className={css.headline}>{post.title_seo}</h1>
      </div>
      <Container>
        <div className={css.wrap}>
          <div className={css.content}>
            <PostContent post={post} params={{
                          slug: ''
                      }} />
          </div>
          <div className={css.aside}>
            <AsideRightBlock lang={lang} />
          </div>
        </div>
      </Container>
    </>
  );
}
