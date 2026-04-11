export interface Budget {
  id: string;
  name: string;
  amount: number;
  createdAt: number;
}

export interface Expense {
  id: string;
  name: string;
  amount: number;
  budgetId: string;
  createdAt: number;
}
