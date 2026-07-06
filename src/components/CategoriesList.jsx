import useData from "../hooks/useData";
const CategoriesList = () => {
  const { categories, transactions, addCategory, deleteCategory } = useData();
  return (
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
                  <div key={filteredTransaction.id}>
                    <h4>
                      {filteredTransaction.type === "Expense"
                        ? -filteredTransaction.cost
                        : filteredTransaction.cost}
                      $
                    </h4>
                  </div>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
