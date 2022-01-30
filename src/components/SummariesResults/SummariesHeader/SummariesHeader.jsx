import sprite from 'img/sprite.svg';
import s from './SummariesHeader.module.scss';
import authContext from 'context/common/common-context';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function SummariesHeader({ summaries }) {
  const { toggleFilter } = useContext(authContext);
  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)'
  });

  return (
    <>
      <h1 className={s.title}>
        Мы подобрали <span className={s.title__count}>{summaries.total_count}</span> резюме
      </h1>
      <div className={s.subtitle}>
        <p>Резюме продавец консультант во Всей Украине</p>
        {isMobile ? (
          <div className={s.actions}>
            <div className={s['subtitle-dropdown']}>
              за все время
              <svg className={s['subtitle-dropdown__icon']}>{<use href={sprite + '#arrow'}></use>}</svg>
            </div>
            <button type="button" aria-label="filter" className={s.filter__button} onClick={toggleFilter}>
              <svg>
                <use href={sprite + '#filter'}></use>
              </svg>
            </button>
          </div>
        ) : (
          <div className={s['subtitle-dropdown']}>
            за все время
            <svg className={s['subtitle-dropdown__icon']}>{<use href={sprite + '#arrow'}></use>}</svg>
          </div>
        )}
      </div>
    </>
  );
}
