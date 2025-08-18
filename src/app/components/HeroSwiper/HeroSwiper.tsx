'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import css from './HeroSwiper.module.css';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

export default function HeroSwiper() {
  return (
    <Swiper
      // spaceBetween={50}
      // slidesPerView={3}
      spaceBetween={20} // расстояние между слайдами
      slidesPerView={1.2} // видно центральный + кусочки соседних
      centeredSlides={true} // активный по центру
      loop={true} // зациклен
      breakpoints={{
        320: {
          slidesPerView: 1.1, // на мобилках видно 1 + кусочек
        },
        640: {
          slidesPerView: 1.5, // на планшетах 1.5
        },
        1024: {
          slidesPerView: 2.5, // на десктопе 2.5
        },
        1440: {
          slidesPerView: 3.2, // на больших мониторах
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: SwiperClass) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className={css.categoryPostItemImgWrapper}>
          <Image
            className={css.categoryPostItemImg}
            src="https://res.cloudinary.com/daboofr8e/image/upload/v1755450110/UdThailand-868x496_ufdlih.jpg"
            alt="Удивительный Таиланд"
            fill
            priority // если это ключевое изображение для LCP
          />
        </div>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className={css.categoryPostItemImgWrapper}>
          <Image
            className={css.categoryPostItemImg}
            src="https://res.cloudinary.com/daboofr8e/image/upload/v1755450110/UdThailand-868x496_ufdlih.jpg"
            alt="Удивительный Таиланд"
            fill
          />
        </div>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className={css.categoryPostItemImgWrapper}>
          <Image
            className={css.categoryPostItemImg}
            src="https://res.cloudinary.com/daboofr8e/image/upload/v1755450110/UdThailand-868x496_ufdlih.jpg"
            alt="Удивительный Таиланд"
            fill
          />
        </div>
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
      </SwiperSlide>
      <SwiperSlide>
        <div className={css.categoryPostItemImgWrapper}>
          <Image
            className={css.categoryPostItemImg}
            src="https://res.cloudinary.com/daboofr8e/image/upload/v1755450110/UdThailand-868x496_ufdlih.jpg"
            alt="Удивительный Таиланд"
            fill
          />
        </div>
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
      </SwiperSlide>
    </Swiper>
  );
}
