import { useState } from "react";
import { createContext } from "react";
const AuthContextValue = createContext();

const AuthContext = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem(`loggedIn`)),
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
