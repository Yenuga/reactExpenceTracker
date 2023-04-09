import "./NewExpenceForm.css";
import { useState } from "react";
const NewExpenceForm = (props) => {
  const [title, settitle] = useState(" ");
  const handleTitleChange = (event) => {
    settitle(event.target.value);
  };
  const [amount, setamount] = useState(" ");
  const handleamountChange = (event) => {
    setamount(event.target.value);
  };
  const [date, setdate] = useState(" ");
  const handledateChange = (event) => {
    setdate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onDataChange(data);
    setamount(" ");
    setdate(" ");
    settitle(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} value={title} />
        </div>
        <div className="new-expense__control">
          <label>ExpenceAmount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={handleamountChange}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={date}
            onChange={handledateChange}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expence</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenceForm;
