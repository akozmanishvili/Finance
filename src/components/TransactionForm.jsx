import { useState } from "react";
import useData from "../hooks/useData";
const TransactionForm = () => {
  const [name, setName] = useState(``);
  const [cost, setCost] = useState(``);
  const [category, setCategory] = useState(``);
  const [type, setType] = useState(``);

  const { categories, addTransaction } = useData();
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
      <div className="form-group">
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
      </div>
      <div className="form-group">
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
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
