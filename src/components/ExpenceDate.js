export default function ExpenceDate(props) {
  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const day = props.date.getDate().toLocaleString("hi-IN");
  const year = props.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}
