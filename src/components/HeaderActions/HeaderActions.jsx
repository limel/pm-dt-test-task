import s from './HeaderActions.module.scss';
import UserMenu from '../UserMenu';
import authContext from 'context/common/common-context';
import { useContext, useState, useRef, useEffect, useCallback } from 'react';
import sprite from 'img/sprite.svg';
import { useMediaQuery } from 'react-responsive';

export default function HeaderActions() {
  const { isLoggedIn, user, onLogIn } = useContext(authContext);
  const [isActive, setIsActive] = useState(false);
  const languageEl = useRef(null);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  });

  const onClick = useCallback(
    e => {
      if (languageEl.current && !languageEl.current.contains(e.target)) {
        setIsActive(false);
        return;
      }
      setIsActive(!isActive);
      return;
    },
    [isActive]
  );

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [onClick]);

  return (
    <div className={s.container}>
      <div className={s.language} ref={languageEl} onClick={onClick}>
        <div className={s.language__selected}>
          <svg className={s.language__icon}>
            <use href={sprite + '#globe'}></use>
          </svg>
          <span>RU</span>
          <svg className={isActive ? s.icon_active : ''}>
            <use href={sprite + '#arrow'}></use>
          </svg>
        </div>
        <ul className={isActive ? `${s.language__list_active} ${s.language__list}` : s.language__list}>
          <li className={s.language__item}>EN</li>
          <li className={s.language__item}>UA</li>
        </ul>
      </div>
      {isDesktop &&
        (isLoggedIn ? (
          <UserMenu name={user.name} />
        ) : (
          <button type="button" className={s.auth} onClick={onLogIn}>
            Войти
          </button>
        ))}
    </div>
  );
}
