
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import css from './HeroSwiper.module.css';
import Image from 'next/image';
import { JSX } from "react";
// Import Swiper styles
import 'swiper/css';
import type { Post } from "../../types/post";


interface CategoryPostProps {
  posts: Post[];
}

const HeroSwiper: React.FC<CategoryPostProps> = ({ posts }: CategoryPostProps): JSX.Element => {
//export default function HeroSwiper() {
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
      {posts.map((post)=> (
      <SwiperSlide key={post.id}>
        <div className={css.categoryPostItemImgWrapper}>
          <Image
            className={css.categoryPostItemImg}
            src={post.post_img}
            alt={post.title}
            fill
          
          />
        </div>
        <div className={css.categoryPostItemInfo}>
          <div className={css.categoryPostItemInfoCategory}>
            <span>{post.category || "Категория"}</span>
          </div>
          <div className={css.categoryPostItemInfoAuthor}>
            <span>{post.author_name}</span>
          </div>
        </div>
        <h3 className={css.categoryPostItemTitle}>{post.title}</h3>      
      </SwiperSlide>
      ))}
        </Swiper>
  );
}

export default HeroSwiper;