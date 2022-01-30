import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import s from './Navigation.module.scss';
import { useMediaQuery } from 'react-responsive';
import sprite from 'img/sprite.svg';

export default function Header() {
  const [activePage, setActivePage] = useState('Работодатель');
  const [isActive, setIsActive] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)'
  });

  const handleClick = e => {
    setIsActive(false);
    setActivePage(e.target.text);
  };

  return (
    <>
      {isMobile && (
        <div
          className={isActive ? `${s['dropdown-toggle']} ${s['dropdown-toggle_active']}` : s['dropdown-toggle']}
          onClick={() => setIsActive(!isActive)}>
          {activePage}{' '}
          <svg>
            <use href={sprite + '#arrow'}></use>
          </svg>{' '}
        </div>
      )}
      <ul className={isActive ? `${s.container} ${s.container_active}` : s.container}>
        <li className={s.item} onClick={handleClick}>
          <NavLink to="/workers" className={({ isActive }) => (isActive ? `${s.active} ${s.link}` : s.link)}>
            Соискатель
          </NavLink>
        </li>
        <li className={s.item} onClick={handleClick}>
          <NavLink to="/" className={({ isActive }) => (isActive ? `${s.active} ${s.link}` : s.link)}>
            Работодатель
          </NavLink>
        </li>
        <li className={s.item} onClick={handleClick}>
          <NavLink to="/hr" className={({ isActive }) => (isActive ? `${s.active} ${s.link}` : s.link)}>
            HR
          </NavLink>
        </li>
      </ul>
    </>
  );
}
