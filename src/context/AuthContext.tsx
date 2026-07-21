import React, { useState } from "react";
import { createContext } from "react";

type AuthContextType = {
  loggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContextValue = createContext<AuthContextType | undefined>(undefined);

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    JSON.parse(localStorage.getItem(`loggedIn`) || "false"),
  );

  const login = () => {
    setLoggedIn(true);
    localStorage.setItem(`loggedIn`, JSON.stringify(true));
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem(`loggedIn`);
  };
  return (
    <AuthContextValue.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContextValue.Provider>
  );
};
export default AuthContext;
export { AuthContextValue };
