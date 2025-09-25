"use client";

import React from "react";
import css from "./Header.module.css";
import clsx from "clsx";
import Container from "@/components/Container/Container";
import Navigation from "../Navigation/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {

  const pathname = usePathname();
  const lang = pathname.startsWith("/uk") ? "uk" : "ru";

  return (
    <>    
      <div className={css.wrapperFirstHeader}>
        <Container>
          <div className={css.firstHeader}>
            <div className={css.logoBlock}>
              <p className={css.logoBlockFirstText}>
            {lang === "uk" ? "Навколо світу" : "Вокруг Света"}
                <span> - {lang === "uk" ? "блог про подорожі" : "блог о путешествиях"}</span>
              </p>
            </div>

            <div className={css.secondBlock}>
              <div>
                <button type="button" className={css.btnSearch}>
                  <span className={css.btnSearchText}>  {lang === "uk" ? "Пошук" : "Поиск"}</span>
                  <svg className={css.btnSearchIcon}>
                    <use xlinkHref="/icon/sprite-main.svg#icon-search"></use>
                  </svg>
                </button>
              </div>

              <div className={css.langBlock}>
                <Link
                  href="/"
                  className={clsx(css.lng, {
                    [css.lngActive]: lang === "ru"
                  })}
                >
                  {lang === 'uk' ? "РОС" : "РУС"}
                </Link>

                <Link
                  href="/uk"
                  className={clsx(css.lng, {
                    [css.lngActive]: lang === "uk"
                  })}
                >
                  УКР
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={css.wrapperSecondHeader}>
        <Navigation lang={lang}/>
      </div>
    </>
  );
}
