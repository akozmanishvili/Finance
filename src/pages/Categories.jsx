import useData from "../hooks/useData";
import { useState } from "react";

const Categories = () => {
  const { transactions, categories, addCategory, deleteCategory } = useData();
  const [name, setName] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    addCategory({ name, id });

    setName(``);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Category"
        ></input>
        <button type="submit">Add</button>
      </form>
      <div>
        <ul>
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <h3>{category.name}</h3>
                <button
                  type="button"
                  onClick={() => deleteCategory(category.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {categories.map((categoryParam) => {
            const filteredTransactions = transactions.filter(
              (transaction) => transaction.category === categoryParam.name,
            );
            if (filteredTransactions.length <= 0) return;
            return (
              <li key={categoryParam.id}>
                <h3>{categoryParam.name}</h3>
                {filteredTransactions.map((filteredTransaction) => {
                  return (
                    <li key={filteredTransaction.id}>
                      <h4>
                        {filteredTransaction.type === "Expense"
                          ? -filteredTransaction.cost
                          : filteredTransaction.cost}
                        $
                      </h4>
                    </li>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
