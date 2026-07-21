import useData from "../hooks/useData";
import { Transaction, Category } from "../types";
const StatsInfo = () => {
  const { transactions, categories } = useData();

  const totalSpending = Number(
    transactions
      .filter((transaction: Transaction) => transaction.type === "Expense")
      .reduce((sum: number, n: Transaction) => {
        sum = sum + Number(n.cost);
        return sum;
      }, 0),
  );

  const totalIncome = Number(
    transactions
      .filter((transaction: Transaction) => transaction.type === "Income")
      .reduce((sum: number, n: Transaction) => {
        sum = sum + Number(n.cost);
        return sum;
      }, 0),
  );

  const netBalance = totalIncome - totalSpending;
  let savingsRate = "";
  if (netBalance > 0) {
    savingsRate = `${(100 * netBalance) / totalIncome}%`;
  } else {
    savingsRate = "Spent more than Income";
  }

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card">
          <span>Total Spending</span>
          <h2 style={{ color: "var(--red)" }}>{totalSpending}$</h2>
        </div>
        <div className="stat-card">
          <span>Total Income</span>
          <h2 style={{ color: "var(--green)" }}>{totalIncome}$</h2>
        </div>
        <div className="stat-card">
          <span>Net Balance</span>
          <h2 style={{ color: netBalance < 0 ? "var(--red)" : "var(--green)" }}>
            {netBalance}$
          </h2>
        </div>
        <div className="stat-card">
          <span>Savings Rate</span>
          <h3 style={{ color: netBalance < 0 ? "var(--red)" : "var(--green)" }}>
            {savingsRate}
          </h3>
        </div>
      </div>

      <div className="breakdown-section">
        <h1>Expense Breakdown by Category</h1>
        {categories.map((categoryParam: Category) => {
          const eachCategoryExpenses = transactions.filter(
            (transaction: Transaction) =>
              transaction.category === categoryParam.name &&
              transaction.type === "Expense",
          );
          const eachCategorySpending = eachCategoryExpenses.reduce(
            (sum: number, n: Transaction) => {
              return sum + Number(n.cost);
            },
            0,
          );
          if (eachCategorySpending === 0) return null;
          return (
            <div className="breakdown-row" key={categoryParam.id}>
              <span>{categoryParam.name}</span>
              <span>
                {((eachCategorySpending * 100) / totalSpending).toFixed(1)}%
              </span>
            </div>
          );
        })}
      </div>

      <div className="breakdown-section">
        <h1>Income Breakdown by Category</h1>
        {categories.map((categoryParam: Category) => {
          const eachCategoryIncomes = transactions.filter(
            (transaction: Transaction) =>
              transaction.category === categoryParam.name &&
              transaction.type === "Income",
          );
          const eachCategoryIncome = eachCategoryIncomes.reduce(
            (sum: number, n: Transaction) => {
              return sum + Number(n.cost);
            },
            0,
          );
          if (eachCategoryIncome === 0) return null;
          return (
            <div className="breakdown-row" key={categoryParam.id}>
              <span>{categoryParam.name}</span>
              <span>
                {((eachCategoryIncome * 100) / totalIncome).toFixed(1)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsInfo;
