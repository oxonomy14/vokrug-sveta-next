import css from './page.module.css';
import Hero from '@/app/components/Hero/Hero';
import About from './components/About/About';
import CategoryPost from './components/CategoryPost/CategoryPost';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CategoryPost />
    </>
  );
}
