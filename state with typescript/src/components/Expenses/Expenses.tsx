import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { ExpensesType } from "../../model/expeses";
import ExpensesFilter from "./ExpensesFilter";

interface OwnProps {
  items: ExpensesType;
}

function Expenses({ items }: OwnProps) {
  const [filteredYear, setFilteredYear] = useState("2020");
  function selectYearHandler(selectedYear: string) {
    setFilteredYear(selectedYear);
  }
  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectYear={selectYearHandler}
      />
      {filteredItems.map((item) => (
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
