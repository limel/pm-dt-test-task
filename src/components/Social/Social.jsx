import s from './Social.module.scss';
import sprite from 'img/sprite.svg';

export default function Social() {
  return (
    <ul className={s.list}>
      <li className={s.list__item}>
        <a href="https://twitter.com/home?lang=ru" aria-label="twitter">
          <svg>
            <use href={sprite + '#twitter'}></use>
          </svg>
        </a>
      </li>
      <li className={s.list__item}>
        <a href="https://twitter.com/home?lang=ru" aria-label="linkedin">
          <svg>
            <use href={sprite + '#linkedin'}></use>
          </svg>
        </a>
      </li>
      <li className={s.list__item}>
        <a href="https://twitter.com/home?lang=ru" aria-label="facebook">
          <svg>
            <use href={sprite + '#facebook'}></use>
          </svg>
        </a>
      </li>
      <li className={s.list__item}>
        <a href="https://twitter.com/home?lang=ru" aria-label="instagram">
          <svg>
            <use href={sprite + '#inst'}></use>
          </svg>
        </a>
      </li>
      <li className={s.list__item}>
        <a href="https://twitter.com/home?lang=ru" aria-label="youtube">
          <svg>
            <use href={sprite + '#youtube'}></use>
          </svg>
        </a>
      </li>
      <li className={s.list__item}>
        <a href="https://twitter.com/home?lang=ru" aria-label="whatsapp">
          <svg>
            <use href={sprite + '#whatsapp'}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}
