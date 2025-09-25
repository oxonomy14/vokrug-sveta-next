import Container from '../Container/Container';
import css from './AboutBlog.module.css';
import clsx from 'clsx';

const AboutBlog = () => {
  return (
    <section>
      <Container>
        <div className={css.wrapAboutBlog}>
          <h2 className={css.aboutBlogTitle}>
            В блоге о путешествиях вы найдете
          </h2>
          <ul className={css.aboutBlogList}>
            <li className={css.aboutBlogItem}>
              <div className={css.aboutBlogItem}>
                <div className={css.aboutBlogItemBox}>
                  <div className={css.aboutBlogItemTitle}>
                    <div>
                      <svg className={css.aboutBlogItemIcon}>
                        <use href="icon//sprite-aboutBlog.svg#icon-earth"></use>
                      </svg>
                    </div>
                    <div>
                      <h3 className={css.aboutBlogItemTitle}>
                        Описание особенностей культуры стран
                      </h3>
                    </div>
                  </div>
                  <p className={css.aboutBlogItemText}>
                    В статьях прочтете о том, почему так популярен отдых в
                    Тайланде, ОАЭ и других странах. Планируйте отпуск вместе с
                    нами – расскажем о том, когда лучше всего бронировать и
                    оформлять туры, какие достопримечательности нужно посетить в
                    первую очередь, как работает сервис и многое другое.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.aboutBlogItem}>
              <div className={css.aboutBlogItem}>
                <div className={css.aboutBlogItemBox}>
                  <div className={css.aboutBlogItemTitle}>
                    <div>
                      <svg className={css.aboutBlogItemIcon}>
                        <use href="icon/sprite-aboutBlog.svg#icon-address-book"></use>
                      </svg>
                    </div>
                    <div>
                      <h3 className={css.aboutBlogItemTitle}>
                        Полезную информацию об отелях и турах
                      </h3>
                    </div>
                  </div>
                  <p className={css.aboutBlogItemText}>
                    Не беспокойтесь – мы поможем найти горящий тур по выгодной
                    цене. сотрудничаем с надежными агентствами. Расскажем о
                    функционирующих отелях, опишем их плюсы и минусы. Также
                    узнаете, в какое время путешествие будет наиболее удачным и
                    почему.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.aboutBlogItem}>
              <div className={css.aboutBlogItem}>
                <div className={css.aboutBlogItemBox}>
                  <div className={css.aboutBlogItemTitle}>
                    <div>
                      <svg className={css.aboutBlogItemIcon}>
                        <use href="icon/sprite-aboutBlog.svg#icon-bubbles4"></use>
                      </svg>
                    </div>
                    <div>
                      <h3 className={css.aboutBlogItemTitle}>
                        Отзывы туристов об отелях
                      </h3>
                    </div>
                  </div>
                  <p className={css.aboutBlogItemText}>
                    Выбирайте гостиницу, опираясь на честное мнение – публикуем
                    отзывы реальных людей, которые захотели поделиться своим
                    опытом. Вы узнаете о том, как в отеле обустроены номера,
                    какое питание предлагают, найдете подробное описание пляжа и
                    прочее. Таким образом избежите неприятных сюрпризов по
                    приезде.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.aboutBlogItem}>
              <div className={css.aboutBlogItem}>
                <div className={css.aboutBlogItemBox}>
                  <div className={css.aboutBlogItemTitle}>
                    <div>
                      <svg className={css.aboutBlogItemIcon}>
                        <use href="icon//sprite-aboutBlog.svg#icon-bullhorn"></use>
                      </svg>
                    </div>
                    <div>
                      <h3 className={css.aboutBlogItemTitle}>Горящие туры</h3>
                    </div>
                  </div>
                  <p className={css.aboutBlogItemText}>
                    Бронируйте туры заранее – нашими партнерами являются
                    проверенные агентства, с которыми ваша поездка будет не
                    просто запоминающейся, но и выгодной. 
                  </p>
                </div>
              </div>
            </li>
            <li className={css.aboutBlogItem}>
              <div className={css.aboutBlogItem}>
                <div className={css.aboutBlogItemBox}>
                  <div className={css.aboutBlogItemTitle}>
                    <div>
                      <svg className={css.aboutBlogItemIcon}>
                        <use href="icon//sprite-aboutBlog2.svg#icon-coin-dollar"></use>
                      </svg>
                    </div>
                    <div>
                      <h3 className={css.aboutBlogItemTitle}>
                        Секреты экономии в путешествиях
                      </h3>
                    </div>
                  </div>
                  <p className={css.aboutBlogItemText}>
                    Подскажем, как выгодно купить авиабилеты, сэкономить на
                    проживании и при этом получить максимум впечатлений.
                  </p>
                </div>
              </div>
            </li>
            <li className={css.aboutBlogItem}>
              <div className={css.aboutBlogItem}>
                <div className={css.aboutBlogItemBox}>
                  <div className={css.aboutBlogItemTitle}>
                    <div>
                      <svg className={css.aboutBlogItemIcon}>
                        <use href="icon//sprite-aboutBlog2.svg#icon-map2"></use>
                      </svg>
                    </div>
                    <div>
                      <h3 className={css.aboutBlogItemTitle}>
                        Подробные маршруты
                      </h3>
                    </div>
                  </div>
                  <p className={css.aboutBlogItemText}>
                    Готовые планы с указанием достопримечательностей, времени в
                    пути, советами по транспорту и питанию.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AboutBlog;
