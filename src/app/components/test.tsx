"use client";
import React from 'react';
import css from './About.module.css';
import clsx from 'clsx';
import Container from '@/app/components/Container/Container';

interface AboutProps {
  lang: "ru" | "uk";
}

export default function About({ lang }: AboutProps) {
  const texts = {
    ru: {
      title: "Блог о путешествиях: куда поехать в отпуск",
      desc: "Узнайте больше о культуре страны, в которой вы так хотели побывать",
      text1: "Путешествия – это не только отдых, но и развитие...",
      text2: "Дневник странника – блог о путешествиях..."
    },
    uk: {
      title: "Блог про подорожі: куди поїхати у відпустку",
      desc: "Дізнайтеся більше про культуру країни, яку ви мрієте відвідати",
      text1: "Подорожі – це не лише відпочинок, але й розвиток...",
      text2: "Щоденник мандрівника – блог про подорожі..."
    }
  };

  const t = texts[lang];

  return (
    <section>
      <Container>
        <div className={css.wrapAbout}>
          <h1 className={css.aboutTitle}>{t.title}</h1>
          <p className={css.aboutTitleDesc}>{t.desc}</p>
          <p className={css.aboutText}>{t.text1}</p>
          <p className={css.aboutText}>{t.text2}</p>
        </div>
      </Container>
    </section>
  );
}

