import "./pieChartP.css";
import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import * as api from "../axios"

// const data = [
//   { name: "Group A", value: 800},
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 300 },
//   { name: "Others", value: 200 },
// ];
const COLORS = ['#45F6E1', '#7B61FF', '#A1FF9F', '#ED2B2B','#F6BF45','#A1FF9F'];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
      {`(${(percent * 100).toFixed(2)}%)`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} />
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${value}`}
        </text> */}
      <text
        
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{payload.name}
      </text>
    </g>
  );
};

export default function PieChartP(props) {
  const [cname,setCname]=useState(props.company)
  const [cdetails, setDetails] = useState([]) 

  useEffect(() => {

    async function f() {
      let res = await api.getInvesData(cname)

      setDetails(res.data.result);
      // console.log(res);
    }

    f()

  }, []);
  const data=[];
  cdetails.map((index)=>{
    var x=index.name;
    var y=parseFloat(index.stake);
    y*=100;
    data.push({name:x,value:y});
  })
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <PieChart width={500} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        cx={250}
        cy={200}
        innerRadius={50}
        outerRadius={90}
        fill="F6BF45"
        dataKey="value"
        onMouseEnter={onPieEnter}
        startAngle={90}
        endAngle={-360}
        paddingAngle={2}
        cornerRadius={10}
      >
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
