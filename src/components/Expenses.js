import ExpenceItem from "./ExpenceItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenceFilter";
import { useState } from "react";
import ChartBarExpences from "./ChartBarExpences";
export default function Expenses(props) {
  const [year, setYear] = useState("");

  const expenses = props.expenses;
  const expensesforYear = expenses.filter((expence) => {
    return expence.date.getFullYear() == year;
  });

  const handleSelectYear = (event) => {
    console.log(event.target.value, year);
    setYear(event.target.value);
  };
  const displayExpenses =
    expensesforYear.length > 0 ? (
      expensesforYear.map((expence) => (
        <ExpenceItem
          key={expence.id}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))
    ) : (
      <p className="expenses-list__fallback"> No Expeses Found</p>
    );
  return (
    <div className="expenses">
      <ExpensesFilter onselectyear={handleSelectYear} />
      <ChartBarExpences expensesforYear={expensesforYear} />
      {displayExpenses}
    </div>
  );
}
