import "./NewExpence.css";
import NewExpenceForm from "./NewExpenceForm";
const NewExpence = (props) => {
  const handleNewItem = (data) => {
    const dataRec = {
      ...data,
      id: Math.round(Math.random() * 1000),
    };
    props.onAddExpence(dataRec);
  };

  return (
    <div className="new-expense">
      <NewExpenceForm onDataChange={handleNewItem} />
    </div>
  );
};

export default NewExpence;
