import { createContext } from "react";
import { useState } from "react";

const DataContextValue = createContext();

const DataContext = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || [],
  );
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || [],
  );

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    localStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, newTransaction]),
    );
  };

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    localStorage.setItem(
      "categories",
      JSON.stringify([...categories, newCategory]),
    );
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id),
    );
    localStorage.setItem(
      "transactions",
      JSON.stringify(
        transactions.filter((transaction) => transaction.id !== id),
      ),
    );
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id));
    localStorage.setItem(
      "categories",
      JSON.stringify(categories.filter((category) => category.id !== id)),
    );
  };

  return (
    <DataContextValue.Provider
      value={{
        transactions,
        categories,
        addTransaction,
        addCategory,
        deleteTransaction,
        deleteCategory,
      }}
    >
      {children}
    </DataContextValue.Provider>
  );
};

export default DataContext;
export { DataContextValue };
