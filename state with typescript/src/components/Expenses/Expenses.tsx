import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { ExpensesType } from "../../model/expeses";
import ExpensesFilter from "./ExpensesFilter";

interface OwnProps {
  items: ExpensesType;
}

function Expenses({ items }: OwnProps) {
  function selectYearHandler(selectedYear: string) {
    console.log(selectedYear);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYearHandler} />
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
