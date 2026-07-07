import useData from "../hooks/useData";

const StatsInfo = () => {
  const { transactions, categories } = useData();

  const totalSpending = Number(
    transactions
      .filter((transaction) => transaction.type === "Expense")
      .reduce((sum, n) => {
        sum = sum + Number(n.cost);
        return sum;
      }, 0),
  );

  const totalIncome = Number(
    transactions
      .filter((transaction) => transaction.type === "Income")
      .reduce((sum, n) => {
        sum = sum + Number(n.cost);
        return sum;
      }, 0),
  );

  const netBalance = totalIncome - totalSpending;
  let savingsRate = 0;

  if (netBalance > 0) {
    savingsRate = `${(100 * netBalance) / totalIncome}%`;
  } else {
    savingsRate = "Spent more than Income";
  }

  return (
    <div>
      <h2>Total Spending: {totalSpending}</h2>
      <h2>Total Income: {totalIncome}</h2>
      <h3>Net Balance: {netBalance}</h3>
      <h3>Savings rate: {savingsRate}</h3>
      <div>
        {categories.map((categoryParam) => {
          const eachCategoryExpenses = transactions.filter(
            (transaction) =>
              transaction.category === categoryParam.name &&
              transaction.type === "Expense",
          );
          const eachCategorySpending = eachCategoryExpenses.reduce((sum, n) => {
            sum = sum + Number(n.cost);
            return sum;
          }, 0);
          if (eachCategorySpending === 0) return;

          return (
            <h3 key={categoryParam.id}>
              {categoryParam.name} spent{" "}
              {(Number(eachCategorySpending) * 100) / totalSpending}% of total
              expenses
            </h3>
          );
        })}
      </div>
      <div>
        {categories.map((categoryParam) => {
          const eachCategoryIncomes = transactions.filter(
            (transaction) =>
              transaction.category === categoryParam.name &&
              transaction.type === "Income",
          );
          const eachCategorySpending = eachCategoryIncomes.reduce((sum, n) => {
            sum = sum + Number(n.cost);
            return sum;
          }, 0);
          if (eachCategorySpending === 0) return;
          return (
            <h3 key={categoryParam.id}>
              {categoryParam.name} is{" "}
              {(Number(eachCategorySpending) * 100) / totalIncome}% of total
              incomes
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default StatsInfo;
