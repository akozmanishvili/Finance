import { AuthContextValue } from "../context/AuthContext";
import { useContext } from "react";
const useAuth = () => {
  return useContext(AuthContextValue);
};

export default useAuth;
