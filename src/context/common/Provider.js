import { useState, useMemo } from 'react';
import authContext from './common-context';

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggleFilter = () => {
    setIsActive(!isActive);
  };

  const onLogIn = () => {
    setUser({ name: 'Юра Марченко' });
    setIsLoggedIn(true);
  };

  const onLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut, toggleFilter, isActive };
  }, [user, isLoggedIn, toggleFilter, isActive]);

  return <authContext.Provider value={providerValue}>{children}</authContext.Provider>;
}
