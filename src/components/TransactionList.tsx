import useData from "../hooks/useData";
import { type Transaction } from "../types";
const TransactionList = () => {
  const { transactions, deleteTransaction } = useData();
  return (
    <div>
      <ul>
        {transactions.map((transaction: Transaction) => {
          return (
            <li
              key={transaction.id}
              style={{
                color: transaction.type === "Expense" ? "red" : "green",
              }}
            >
              <h3>{transaction.name}</h3>
              <h4>{transaction.category}</h4>
              <h4>{transaction.cost}$</h4>
              <h4>{transaction.type}</h4>
              <button
                type="button"
                onClick={() => deleteTransaction(transaction.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
