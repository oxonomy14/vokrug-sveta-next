import React from 'react';
import css from './PostContent.module.css';
import { PostPageProps } from '@/types/page';
import parse from 'html-react-parser';
import Image from 'next/image';
import CategoryInfo from '@/app/components/CategoryInfo/CategoryInfo';

export default function PostContent({ post }: PostPageProps) {
  return (
    <>
      <article>
        <Image
          className={css.headlineImg}
          src={
            post.post_img ||
            'https://res.cloudinary.com/daboofr8e/image/upload/v1755256967/samples/landscapes/beach-boat.jpg'
          }
          alt={post.title}
          width={728}
          height={416}
        />
        <div className={css.categoryInfo}>
          <CategoryInfo post={post} />
        </div>
        <h2 className={css.subTitle}>{post.title}</h2>
        <div className={css.meta}></div>
        <div className={css.body}> {parse(post.body)}</div>
      </article>
    </>
  );
}
