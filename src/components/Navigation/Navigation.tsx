import css from './Navigation.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import Container from '@/components/Container/Container';
import { LangProps } from '../../types/page';
import { navigationMenu } from '@/locales/navigationMenu';

const Navigation = ({ lang }: LangProps) => {

  const t = navigationMenu[lang];

  return (
    <Container>
      <div className={css.secondHeader}>
        <nav>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link
                href="/"
                aria-label="{t.menu1}"
                className={clsx(css.navItemText, css.active)}
              >
                {t.menu1}
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/" aria-label="{t.menu2}" className={css.navItemText}>
                  {t.menu2}
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/" aria-label="{t.menu3}" className={css.navItemText}>
                {t.menu3}
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/" aria-label="{t.menu4}" className={css.navItemText}>
                {t.menu4}
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/" aria-label="{t.menu5}" className={css.navItemText}>
                {t.menu5}
              </Link>
            </li>
            <li className={css.navItem}>
              <Link href="/" aria-label="{t.menu6}" className={css.navItemText}>
                {t.menu6}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Navigation;
