import React, { useState, useEffect } from "react";

interface OwnProps {
  children: React.ReactNode;
}

const initialState = {
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email: string, password: string) => {},
};

const AuthContext = React.createContext(initialState);

export function AuthContextProvider({ children }: OwnProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("logged-in");
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("logged-in", "1");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    if (localStorage.getItem("logged-in") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
