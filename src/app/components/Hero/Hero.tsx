import css from './Hero.module.css';
import HeroSwiper from '@/app/components/HeroSwiper/HeroSwiper';

export default function Hero() {
  return (
    <section>
      <div className={css.wrapHero}>
        <div className={css.slider}>
          <HeroSwiper />
        </div>
      </div>
    </section>
  );
}
