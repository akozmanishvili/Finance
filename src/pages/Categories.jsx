import useData from "../hooks/useData";
import { useState } from "react";
import CategoriesList from "../components/CategoriesList";

const Categories = () => {
  const [name, setName] = useState(``);
  const { categories, transactions, addCategory, deleteCategory } = useData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    addCategory({ name, id });

    setName(``);
  };

  return (
    <div>
      <h1>Manage Categories</h1>
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
        <h3> Categories </h3>
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
      <div style={{ marginTop: "32px" }}>
        <h1>Transactions by Category</h1>
        <CategoriesList />
      </div>
    </div>
  );
};

export default Categories;
