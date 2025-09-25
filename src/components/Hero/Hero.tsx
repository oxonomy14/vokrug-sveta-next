"use client";
import { JSX } from "react";
import css from './Hero.module.css';
import HeroSwiper from '@/components/HeroSwiper/HeroSwiper';
import type { Post } from "../../types/post";


interface CategoryPostProps {
  posts: Post[];
}

const Hero: React.FC<CategoryPostProps> = ({ posts }: CategoryPostProps): JSX.Element => {
//export default function Hero() {
  return (
    <section>
      <div className={css.wrapHero}>
        <div className={css.slider}>
          <HeroSwiper posts={posts}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;