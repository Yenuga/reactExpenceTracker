import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const expenceamount = props.datapoints.map((ele) => ele.value);
  const maxvalue = Math.max(...expenceamount);
  console.log(maxvalue);
  return (
    <div className="chart">
      {props.datapoints.map((data) => (
        <ChartBar
          key={data.label}
          label={data.label}
          max={maxvalue}
          value={data.value}
        />
      ))}
    </div>
  );
};
export default Chart;
