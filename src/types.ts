export type Transaction = {
  id: number;
  name: string;
  cost: number;
  category: string;
  type: "Expense" | "Income";
};

export type Category = {
  id: number;
  name: string;
};
