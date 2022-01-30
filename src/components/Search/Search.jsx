import s from './Search.module.scss';
import { useMediaQuery } from 'react-responsive';

import sprite from 'img/sprite.svg';

export default function Search() {
  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)'
  });

  return (
    <form action="search" className={s.form}>
      <div className={s.input}>
        <svg>
          <use href={sprite + '#zoom'}></use>
        </svg>
        <input type="text" placeholder={isMobile ? 'Поиск' : 'На какую должность вы ищете кандидата?'} />
      </div>
      <div className={s.input}>
        <svg>
          <use href={sprite + '#pin'}></use>
        </svg>
        <input type="text" placeholder="Город" />
      </div>
      <button type="submit" className={s.submit}>
        Найти кандидатов
      </button>
    </form>
  );
}
