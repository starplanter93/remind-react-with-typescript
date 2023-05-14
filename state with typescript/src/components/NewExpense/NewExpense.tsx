import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { ExpenseType, ExpenseTypeWithoutId } from "../../model/expeses";

interface OwnProps {
  onAddExpense(expense: ExpenseType): void;
}

function NewExpense({ onAddExpense }: OwnProps) {
  const [isEditting, setIsEditting] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData: ExpenseTypeWithoutId) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  }

  function startEdittingHandler() {
    setIsEditting(true);
  }
  function stopEdittingHandler() {
    setIsEditting(false);
  }

  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEdittingHandler}>Add New Expense</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
