import useData from "../hooks/useData";
import { useState } from "react";

const Home = () => {
  const {
    transactions,
    categories,
    addTransaction,
    addCategory,
    deleteTransaction,
    deleteCategory,
  } = useData();

  const [name, setName] = useState(``);
  const [cost, setCost] = useState(``);
  const [category, setCategory] = useState(``);
  const [type, setType] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    addTransaction({ name, cost, category, type, id });
    setName(``);
    setCost(``);
    setCategory(``);
    setType(``);
  };

  return (
    <div>
      <div>
        <ul>
          {transactions.map((transaction) => {
            const sum = 0;
            if (transaction.type === "Expense") sum = sum - transaction.cost;
            else if (transaction.type === "Income") sum += transaction.cost;
            return sum;
          })}
        </ul>
        <h2> Sum of all transactions: {sum}</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name of the transaction"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Cost of the transaction"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Category of the transaction"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <label htmlFor="transaction-type">Choose Transaction Type:</label>
        <select
          id="transaction-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Empty"></option>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
      <div>
        <ul>
          {transactions.map((transaction) => {
            return (
              <li key={transaction.id}>
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
    </div>
  );
};

export default Home;
