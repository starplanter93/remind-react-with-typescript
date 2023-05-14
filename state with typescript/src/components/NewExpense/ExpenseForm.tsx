import React, { useState } from "react";

import "./ExpenseForm.css";
import { ExpenseTypeWithoutId } from "../../model/expeses";

interface OwnProps {
  onSaveExpenseData(enteredExpenseData: ExpenseTypeWithoutId): void;
  onCancel(): void;
}

function ExpenseForm({ onSaveExpenseData, onCancel }: OwnProps) {
  const [expenseForm, setExpenseForm] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function expenseFormChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setExpenseForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const expenseData = {
      title: expenseForm.enteredTitle,
      amount: Number(expenseForm.enteredAmount),
      date: new Date(expenseForm.enteredDate),
    };
    onSaveExpenseData(expenseData);
    setExpenseForm({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="enteredTitle">Title</label>
          <input
            type="text"
            name="enteredTitle"
            id="enteredTitle"
            value={expenseForm.enteredTitle}
            onChange={expenseFormChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredAmount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="enteredAmount"
            id="enteredAmount"
            value={expenseForm.enteredAmount}
            onChange={expenseFormChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="enteredDate">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="enteredDate"
            id="enteredDate"
            value={expenseForm.enteredDate}
            onChange={expenseFormChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
