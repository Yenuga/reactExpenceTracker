import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
function ExpenceItem(props) {
  const amount = props.amount;
  const date = props.date;
  const title = props.title;
  return (
    <div className="expense-item">
      <ExpenceDate date={date} />
      <div className="expense-item__description">
        <h2 className="expense-item">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
export default ExpenceItem;
