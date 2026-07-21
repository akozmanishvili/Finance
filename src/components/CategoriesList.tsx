import useData from "../hooks/useData";
import { type Transaction, type Category } from "../types";
const CategoriesList = () => {
  const { categories, transactions, addCategory, deleteCategory } = useData();
  return (
    <div className="category-group">
      {categories.map((categoryParam: Category) => {
        const filteredTransactions = transactions.filter(
          (transaction: Transaction) =>
            transaction.category === categoryParam.name,
        );
        if (filteredTransactions.length <= 0) return;
        return (
          <li key={categoryParam.id}>
            <h3>{categoryParam.name}</h3>
            {filteredTransactions.map((filteredTransaction: Transaction) => {
              return (
                <div
                  key={filteredTransaction.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span>{filteredTransaction.name}: </span>
                  <span
                    style={{
                      color:
                        filteredTransaction.type === "Expense"
                          ? "var(--red)"
                          : "var(--green)",
                    }}
                  >
                    {filteredTransaction.type === "Expense"
                      ? -filteredTransaction.cost
                      : filteredTransaction.cost}
                    $
                  </span>
                </div>
              );
            })}
          </li>
        );
      })}
    </div>
  );
};

export default CategoriesList;
