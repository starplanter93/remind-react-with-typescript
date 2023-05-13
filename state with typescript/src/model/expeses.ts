export type ExpensesType = ExpenseType[];

export type ExpenseType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export type ExpenseTypeWithoutId = Omit<ExpenseType, "id">;
