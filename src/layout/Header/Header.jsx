import Navigation from 'components/Navigation';
import HeaderActions from 'components/HeaderActions/';
import Search from 'components/Search';
import s from './Header.module.scss';
import UserMenu from 'components/UserMenu';
import authContext from 'context/common/common-context';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const { isLoggedIn, user, onLogIn } = useContext(authContext);

  const isMobile = useMediaQuery({
    query: '(max-width: 1223px)'
  });

  return (
    <header className={s.main}>
      <div className={s.container}>
        <nav className={s.navigation}>
          <Navigation />
          <HeaderActions />
        </nav>
        {isMobile &&
          (isLoggedIn ? (
            <UserMenu name={user.name} />
          ) : (
            <button type="button" className={s.auth} onClick={onLogIn}>
              Войти
            </button>
          ))}
        <Search />
      </div>
    </header>
  );
}
