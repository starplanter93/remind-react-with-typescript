import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

interface OwnProps {
  isAuthenticated: boolean;
  onLogout(): void;
}

function MainHeader({ isAuthenticated, onLogout }: OwnProps) {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
}

export default MainHeader;
