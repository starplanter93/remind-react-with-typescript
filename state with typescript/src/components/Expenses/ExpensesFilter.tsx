import React from "react";

import "./ExpensesFilter.css";

interface OwnProps {
  selectedYear: string;
  onSelectYear(selectedYear: string): void;
}

function ExpensesFilter({ selectedYear, onSelectYear }: OwnProps) {
  function yearChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    onSelectYear(e.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
