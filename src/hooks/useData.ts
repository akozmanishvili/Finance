import { useContext } from "react";
import { DataContextValue } from "../context/DataContext";

const useData = () => {
  const context = useContext(DataContextValue);
  if (!context) {
    throw new Error("useData must be used within a DataContext provider");
  }
  return context;
};

export default useData;
