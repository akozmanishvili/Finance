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
      <div></div>
    </div>
  );
};

export default Categories;
