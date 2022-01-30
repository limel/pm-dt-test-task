import s from './Footer.module.scss';
import Social from 'components/Social';

export default function Footer() {
  return (
    <footer className={s.main}>
      <div className={s.container}>
        <nav className={s.navigation}>
          <h3 className={s.navigation__title}>Другое</h3>
          <ul className={s.navigation__list}>
            <li>Про Нас</li>
            <li>Блог</li>
          </ul>
        </nav>
        <nav className={s.navigation}>
          <h3 className={s.navigation__title}>Сотрудничество с нами</h3>
          <ul className={s.navigation__list}>
            <li>Реклама на сайте</li>
            <li>Партнерская программа</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <Social />
        <div className={s.copyright}>
          <ul className={s.copyright__list}>
            <li>Privacy Policy </li>
            <li>© 2021 All rights reserved</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
