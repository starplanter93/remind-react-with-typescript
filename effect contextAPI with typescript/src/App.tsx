import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email: any, password: any) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("logged-in", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("logged-in");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("logged-in") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
