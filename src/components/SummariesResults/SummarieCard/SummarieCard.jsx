import s from './SummarieCard.module.scss';
import defaultImg from 'img/default-user.png';
import sprite from 'img/sprite.svg';
import Moment from 'moment';
import { useState, useCallback, useEffect, useRef } from 'react';
import { extendMoment } from 'moment-range';
import { useMediaQuery } from 'react-responsive';

export default function SummarieCard({ summaries }) {
  const [isActive, setIsActive] = useState(false);
  const moreButtonEl = useRef(null);
  const moment = extendMoment(Moment);
  const position = summaries.desiredposition[0].position.split(',');
  const photo = summaries.photo !== null ? summaries.photo : defaultImg;
  const age =
    summaries.birthday !== null ? new Date().getFullYear() - Number(summaries.birthday.split('-')[0]) : 'неизвестно';
  const expierenceTime =
    summaries.workexperience.length !== 0
      ? moment.range(new Date(summaries.workexperience[0].date_from), new Date(summaries.workexperience[0].date_to))
      : null;

  const onClick = useCallback(
    e => {
      if (moreButtonEl.current && !moreButtonEl.current.contains(e.target)) {
        setIsActive(false);
        return;
      }
      setIsActive(!isActive);
      return;
    },
    [isActive]
  );

  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)'
  });

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [onClick]);

  if (isMobile) {
    return (
      <li className={s.card}>
        <div className={s.description}>
          <img src={summaries.photo ? photo : defaultImg} alt="user" className={s.card__img} width="164" height="164" />
          <div className={s.description__main}>
            <h2 className={s.description__position}>{position[0]}</h2>
            <div className={s.description__info}>
              <p>
                {summaries.first_name ? summaries.first_name : 'Пользователь'}, {age} {age > 21 ? 'года' : ''}
              </p>
              <p>
                <svg className={s.description__icon}>
                  <use href={sprite + '#pin'}></use>
                </svg>
                Kyiv, Ukraine
              </p>
            </div>
          </div>
        </div>
        <div className={s.description__experience}>
          {summaries.workexperience.length !== 0
            ? summaries.workexperience.map(item => {
                return (
                  <div key={item.id} className={s.experience__item}>
                    {item.position} {item.company_name} -{' '}
                    {expierenceTime.diff('months') > 12
                      ? `${expierenceTime.diff('years')} лет`
                      : expierenceTime.diff('months') === 0
                      ? `${expierenceTime.diff('days')} дн.`
                      : `${expierenceTime.diff('months')} мес.`}
                  </div>
                );
              })
            : 'нет опыта'}
        </div>
        <span className={s.description__status_online}>Онлайн</span>
        <div className={s.description__status}>
          <span className={s.updateTime}>Обновлено 9 минут назад</span>
          <div className={s.actions}>
            <button type="button" className={s.actions__like}>
              <svg>
                <use href={sprite + '#heart'}></use>
              </svg>
            </button>
            <button type="button" ref={moreButtonEl} className={s.actions__more} onClick={onClick}>
              <svg>
                <use href={sprite + '#more'}></use>
              </svg>
            </button>
            {isActive ? (
              <ul className={s.actions__menu}>
                <li>Пожаловаться</li>
                <li>Скрыть кандидата</li>
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={s.card}>
      <img src={summaries.photo ? photo : defaultImg} alt="user" className={s.card__img} width="164" height="164" />
      <div className={s.descripotion}>
        <div className={s.description__main}>
          <h2 className={s.description__position}>{position[0]}</h2>
          <div className={s.description__info}>
            <p>
              {summaries.first_name ? summaries.first_name : 'Пользователь'}, {age} {age > 21 ? 'года' : ''}
            </p>
            <p>
              <svg className={s.description__icon}>
                <use href={sprite + '#pin'}></use>
              </svg>
              Kyiv, Ukraine
            </p>
          </div>
        </div>
        <div className={s.description__experience}>
          {summaries.workexperience.length !== 0
            ? summaries.workexperience.map(item => {
                return (
                  <div key={item.id} className={s.experience__item}>
                    {item.position} {item.company_name} -{' '}
                    {expierenceTime.diff('months') > 12
                      ? `${expierenceTime.diff('years')} лет`
                      : expierenceTime.diff('months') === 0
                      ? `${expierenceTime.diff('days')} дн.`
                      : `${expierenceTime.diff('months')} мес.`}
                  </div>
                );
              })
            : 'нет опыта'}
        </div>
        <div className={s.description__status}>
          <span className={s.updateTime}>Обновлено 9 минут назад</span>
          <span className={s.description__status_online}>Онлайн</span>
          {/* {summaries.visibility ? (
        <span className={s.description__status_online}>Онлайн</span>
      ) : (
        <span className={s.description__status_offline}>Оффлайн</span>
      )} */}
        </div>
      </div>
      <div className={s.actions}>
        <button type="button" className={s.actions__like}>
          <svg>
            <use href={sprite + '#heart'}></use>
          </svg>
        </button>
        <button type="button" ref={moreButtonEl} className={s.actions__more} onClick={onClick}>
          <svg>
            <use href={sprite + '#more'}></use>
          </svg>
        </button>
        {isActive ? (
          <ul className={s.actions__menu}>
            <li>Пожаловаться</li>
            <li>Скрыть кандидата</li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </li>
  );
}
