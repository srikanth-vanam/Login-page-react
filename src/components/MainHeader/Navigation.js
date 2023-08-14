import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../contexts/auth-context';

const Navigation = (props) => {
  const ctxt=useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctxt.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxt.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
