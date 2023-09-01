import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const  isLoggedIn  = false //заменить потом

  return (
    <nav className={css.nav}>
      <NavLink className="nav_link" to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink className="nav_link" to="/contacts">
            Contacts
          </NavLink>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
    </nav>
  );
};
