import React from "react";

import ExpenseItem from "./ExpenseItem";
import { ExpensesType } from "../../model/expeses";
import "./ExpensesList.css";

interface OwnProps {
  items: ExpensesType;
}

function ExpensesList({ items }: OwnProps) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">비용 없음</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
