import useData from "../hooks/useData";
import { useState } from "react";
import TransactionList from "../components/TransactionList";
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

  const calculateSum = () => {
    let total = transactions.reduce((sum, transaction) => {
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
        <label htmlFor="transaction-category">
          Choose Transaction Category:
        </label>
        <select
          id="transaction-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Empty">Choose Category</option>

          {categories.map((category) => {
            return (
              <option value={category.name} key={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="transaction-type">Choose Transaction Type:</label>
        <select
          id="transaction-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Empty">Choose Type</option>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>
      <TransactionList></TransactionList>
    </div>
  );
};

export default Home;
