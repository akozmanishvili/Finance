import React, { createContext } from "react";
import { type Transaction, type Category } from "../types";
import { useState } from "react";

type DataContextType = {
  transactions: Transaction[];
  categories: Category[];
  addTransaction: (transaction: Transaction) => void;
  addCategory: (category: Category) => void;
  deleteTransaction: (id: number) => void;
  deleteCategory: (id: number) => void;
};

const DataContextValue = createContext<DataContextType | undefined>(undefined);

const DataContext = ({ children }: { children: React.ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    JSON.parse(localStorage.getItem("transactions") || "[]"),
  );
  const [categories, setCategories] = useState<Category[]>(
    JSON.parse(localStorage.getItem("categories") || "[]"),
  );

  const addTransaction = (newTransaction: Transaction) => {
    setTransactions([...transactions, newTransaction]);
    localStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, newTransaction]),
    );
  };

  const addCategory = (newCategory: Category) => {
    setCategories([...categories, newCategory]);
    localStorage.setItem(
      "categories",
      JSON.stringify([...categories, newCategory]),
    );
  };

  const deleteTransaction = (id: number) => {
    setTransactions(
      transactions.filter((transaction: Transaction) => transaction.id !== id),
    );
    localStorage.setItem(
      "transactions",
      JSON.stringify(
        transactions.filter(
          (transaction: Transaction) => transaction.id !== id,
        ),
      ),
    );
  };

  const deleteCategory = (id: number) => {
    setCategories(
      categories.filter((category: Category) => category.id !== id),
    );
    localStorage.setItem(
      "categories",
      JSON.stringify(
        categories.filter((category: Category) => category.id !== id),
      ),
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
