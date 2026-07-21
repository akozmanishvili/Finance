import { AuthContextValue } from "../context/AuthContext";
import { useContext } from "react";
const useAuth = () => {
  const context = useContext(AuthContextValue);
  if (!context) {
    throw new Error("useData must be used within a DataContext provider");
  }
  return context;
};

export default useAuth;
