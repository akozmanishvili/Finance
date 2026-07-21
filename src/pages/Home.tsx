import useData from "../hooks/useData";
import { useState } from "react";
import TransactionList from "../components/TransactionList";
import TransactionForm from "../components/TransactionForm";
import { type Transaction } from "../types";
const Home = () => {
  const { transactions } = useData();

  const calculateSum = () => {
    let total = transactions.reduce((sum: number, transaction: Transaction) => {
      if (transaction.type === "Expense") {
        sum = sum - Number(transaction.cost);
      } else if (transaction.type === "Income") {
        sum = sum + Number(transaction.cost);
      }
      return sum;
    }, 0);

    return total;
  };

  const total = calculateSum();

  return (
    <div>
      <div>
        <h2
          style={{
            color: total < 0 ? "red" : "green",
          }}
        >
          {" "}
          Sum of all transactions: {total} $
        </h2>
      </div>
      <TransactionForm></TransactionForm>
      <TransactionList></TransactionList>
    </div>
  );
};

export default Home;
