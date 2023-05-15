import React from "react";

import classes from "./Navigation.module.css";

interface OwnProps {
  isLoggedIn: boolean;
  onLogout(): void;
}

function Navigation({ isLoggedIn, onLogout }: OwnProps) {
  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
