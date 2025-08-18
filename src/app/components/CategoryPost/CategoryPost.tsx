import React from 'react';
import css from './CategoryPost.module.css';
import clsx from 'clsx';
import Container from '@/app/components/Container/Container';
import Image from 'next/image';

export default function CategoryPost() {
  return (
    <section>
      <Container className={css.wrapCategoryPost}>
        <h2 className={css.categoryPostTitle}>
          Куда съездить отдохнуть: блог о путешествиях
        </h2>
        <p className={css.categoryPostTitleDesc}>описание к заголовку</p>
        <ul className={css.categoryPostList}>
          <li className={css.categoryPostItem}>
            <Image
              className={css.categoryPostItemImg}
              src="https://res.cloudinary.com/daboofr8e/image/upload/v1755289606/UdThailand-1_iuvnto.webp"
              alt="Удивительный Таиланд"
              width={420}
              height={304}
              // priority // если это ключевое изображение для LCP
            />
            <div className={css.categoryPostItemInfo}>
              <div className={css.categoryPostItemInfoCategory}>
                <span>Отдых и туризм</span>
              </div>
              <div className={css.categoryPostItemInfoAuthor}>
                <span>Георгий Горбенко</span>
              </div>
            </div>
            <h3 className={css.categoryPostItemTitle}>Удивительный Таиланд</h3>
            <p className={css.categoryPostItemDesc}>короткое описание статьи</p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
