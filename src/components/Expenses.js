import ExpenceItem from "./ExpenceItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenceFilter";
import { useState } from "react";
export default function Expenses(props) {
  const [year, setYear] = useState("");

  let expenses = props.expenses;

  const handleSelectYear = (event) => {
    console.log(event.target.value, year);
    setYear(event.target.value);
  };
  return (
    <div className="expenses">
      <ExpensesFilter onselectyear={handleSelectYear} />
      {expenses.map((expence) => (
        <ExpenceItem
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
    </div>
  );
}
