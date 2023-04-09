import "./ChartBar.css";
const ChartBar = (props) => {
  let percentamount = "0%";
  if (props.value > 0) {
    percentamount = Math.round((props.value / props.max) * 100) + "%";
  }
  console.log(props.value, props.max, percentamount);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: percentamount }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
