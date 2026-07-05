import { useContext } from "react";
import { DataContextValue } from "../context/DataContext";

const useData = () => {
  return useContext(DataContextValue);
};

export default useData;
