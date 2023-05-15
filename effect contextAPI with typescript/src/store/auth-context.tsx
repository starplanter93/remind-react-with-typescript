import React from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  onLogout(): void;
};

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
} as AuthContextType);

export default AuthContext;
