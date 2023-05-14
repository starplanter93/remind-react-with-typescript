export type ExpensesType = ExpenseType[];
export type ExpenseType = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};
export type ExpenseTypeWithoutId = Omit<ExpenseType, "id">;

export type ChartDataPointsType = ChartDataPointType[];
export type ChartDataPointType = { label: string; value: number };
