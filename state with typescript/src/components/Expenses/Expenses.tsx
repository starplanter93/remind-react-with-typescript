import React, { useState } from "react";

import Card from "../UI/Card";
import { ExpensesType } from "../../model/expeses";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
