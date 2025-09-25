import React from 'react';
import css from './Footer.module.css';
import clsx from 'clsx';
import Container from '@/components/Container/Container';

export default function Footer() {
  return (
    <div  className={css.wrapFooter}>
      <Container>
        <div className={css.footerLogoBlock}>
          <p className={css.footerLogoBlockFirstText}>Вокруг Света</p>
          <p className={css.footerLogoBlockSecondText}>
            блог о путешествиях - дневник странника
          </p>
        </div>
        <nav className={css.footerNav}>
          <ul className={css.footerNavList}>
            <li className={css.footerNavItem}>Главная</li>
            <li className={css.footerNavItem}>Авторы</li>
            <li className={css.footerNavItem}>Контакты</li>
          </ul>
        </nav>
        <div className={css.footerCopyRightBox}>
          <hr className={css.footerCopyRightBorder} />
          <p className={css.footerCopyRightText}>
            © Вокруг Света. All Rights Reserved
          </p>
        </div>
      </Container>
    </div>
  );
}
