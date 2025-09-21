import React from 'react';
import Link from 'next/link';
import css from './Header.module.css';
import clsx from 'clsx';
import Container from '@/components/Container/Container';

export default function Header() {
  return (
    <>
      <div className={css.wrapperFirstHeader}>
        <Container className={css.firstHeader}>
          <div className={css.logoBlock}>
            <p className={css.logoBlockFirstText}>
              Вокруг Света - Блог о путешествиях
            </p>
            <p className={css.logoBlockSecondText}></p>
          </div>
          <div className={css.secondBlock}>
            <div>
              <button type="button" className={css.btnSearch}>
                <span className={css.btnSearchText}>Поиск</span>
                <svg className={css.btnSearchIcon}>
                  <use xlinkHref="/icon/sprite-main.svg#icon-search"></use>
                </svg>
              </button>
            </div>
            <div className={css.langBlock}>
              <Link href="#" className={css.lng}>
                УКР
              </Link>
              <Link href="#" className={clsx(css.lng, css.lngActive)}>
                РУС
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className={css.wrapperSecondHeader}>
        <Container className={css.secondHeader}>
          <nav>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <Link
                  href="/"
                  aria-label="Главная"
                  className={clsx(css.navItemText, css.active)}
                >
                  Главная
                </Link>
              </li>
              <li className={css.navItem}>
                <Link href="/" aria-label="Главная" className={css.navItemText}>
                  Отдых
                </Link>
              </li>
              <li className={css.navItem}>
                <Link href="/" aria-label="Главная" className={css.navItemText}>
                  Гостиницы
                </Link>
              </li>
              <li className={css.navItem}>
                <Link href="/" aria-label="Главная" className={css.navItemText}>
                  Путешествия
                </Link>
              </li>
              <li className={css.navItem}>
                <Link href="/" aria-label="Главная" className={css.navItemText}>
                  Полезные советы
                </Link>
              </li>
              <li className={css.navItem}>
                <Link href="/" aria-label="Главная" className={css.navItemText}>
                  Активный отдых
                </Link>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
}
