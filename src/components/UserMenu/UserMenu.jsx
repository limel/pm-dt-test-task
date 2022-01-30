import s from './UserMenu.module.scss';
import sprite from 'img/sprite.svg';

export default function UserMenu({ name }) {
  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <svg>
          <use href={sprite + '#user'}></use>
        </svg>
      </div>
      <div className={s.name}>{name}</div>
    </div>
  );
}
