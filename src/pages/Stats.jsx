import useData from "../hooks/useData";
const Stats = () => {
  const { transactions, categories } = useData();

  const totalSpending = Number(
    transactions
      .filter((transaction) => transaction.type === "Expense")
      .reduce((sum, n) => {
        sum = sum + n.cost;
        return sum;
      }, 0),
  );

  const totalIncome = Number(
    transactions
      .filter((transaction) => transaction.type === "Income")
      .reduce((sum, n) => {
        sum = sum + n.cost;
        return sum;
      }, 0),
  );

  const netBalance = totalIncome - totalSpending;
  let savingsRate = 0;

  if (netBalance > 0) {
    savingsRate = (100 * netBalance) / totalIncome;
  } else {
    savingsRate = "Spent more than Income";
  }

  return (
    <div>
      <h2>Total Spending: {totalSpending}</h2>
      <h2>Total Income: {totalIncome}</h2>
      <h3>Net Balance: {netBalance}</h3>
      <h3>Savings rate: {savingsRate}%</h3>
      <div>
        {categories.map((categoryParam) => {
          const eachCategoryTransaction = transactions.filter(
            (transaction) => transaction.category === categoryParam.category,
          );
          const eachCategorySpending = eachCategoryTransaction.reduce(
            (sum, n) => {
              sum = sum + n;
              return sum;
            },
            0,
          );
          return (
            <h3 key={categoryParam.id}>
              {categoryParam.category} spent{" "}
              {(eachCategorySpending * 100) / totalSpending} of total expenses
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
