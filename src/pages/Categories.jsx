import useData from "../hooks/useData";
import { useState } from "react";

const Categories = () => {
  const { categories, addCategory, deleteCategory } = useData();
  const [name, setName] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    addCategory({ name, id });

    setName(``);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Category"
        ></input>
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <div>
        <ul>
          {categories.map((category) => {
            return (
              <>
                <li key={category.id}>
                  <h3>{category.name}</h3>
                  <button
                    type="button"
                    onClick={() => deleteCategory(category.id)}
                  >
                    Delete
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
