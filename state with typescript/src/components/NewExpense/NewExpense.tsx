import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { ExpenseType, ExpenseTypeWithoutId } from "../../model/expeses";

interface OwnProps {
  onAddExpense(expense: ExpenseType): void;
}

function NewExpense({ onAddExpense }: OwnProps) {
  function saveExpenseDataHandler(enteredExpenseData: ExpenseTypeWithoutId) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
