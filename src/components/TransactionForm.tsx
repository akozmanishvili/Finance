import { useState } from "react";
import useData from "../hooks/useData";
import { Category } from "../types";
const TransactionForm = () => {
  const [name, setName] = useState(``);
  const [cost, setCost] = useState(0);
  const [category, setCategory] = useState(``);
  const [type, setType] = useState<"Expense" | "Income" | "Empty">("Empty");

  const { categories, addTransaction } = useData();
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const id = Date.now();
    if (name !== "" && type !== "Empty" && category !== "" && cost !== 0)
      addTransaction({ name, cost, category, type, id });
    setName(``);
    setCost(0);
    setCategory(``);
    setType(`Empty`);
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
        onChange={(e) => setCost(Number(e.target.value))}
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

          {categories.map((category: Category) => {
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
          onChange={(e) =>
            setType(e.target.value as "Expense" | "Income" | "Empty")
          }
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
