import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { ExpensesType } from "../../model/expeses";

interface OwnProps {
  items: ExpensesType;
}

const Expenses = ({ items }: OwnProps) => {
  return (
    <Card className="expenses">
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
};

export default Expenses;
