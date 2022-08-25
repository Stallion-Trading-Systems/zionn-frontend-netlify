import React, { useState, useEffect } from "react";
import * as api from "../axios"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, ResponsiveContainer
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     pv: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
export default function LineChartP(props) {
  const [cname, setCname] = useState(props.company)
  const [cdetails, setDetails] = useState([])

  useEffect(() => {

    async function f() {
      let res = await api.getSharePriceHis(cname)

      setDetails(res.data.result);
    }

    f()

  }, []);
  const data = [];
  cdetails.map((index) => {
    var x = 1;
    if (index.Series_A != null) {
      data.push({ name: 'Series A', price: index.Series_A / x });
    }
    if (index.Series_B != null) {

      data.push({ name: 'Series B', price: index.Series_B / x });
    }
    if (index.Series_C != null) {
      data.push({ name: 'Series C', price: index.Series_C / x });
    }
    if (index.Series_D != null) {
      data.push({ name: 'Series D', price: index.Series_D / x });
    }
    if (index.Series_E != null) {
      data.push({ name: 'Series E', price: index.Series_E / x });
    }
    if (index.Series_F != null) {
      data.push({ name: "Series F", price: index.Series_F / x });
    }
    if (index.Series_G != null) {
      data.push({ name: "Series G", price: index.Series_G / x });
    }
    if (index.Series_H != null) {
      data.push({ name: "Series H", price: index.Series_H / x });
    }
    if (index.Series_I != null) {
      data.push({ name: "Series I", price: index.Series_I / x });
    }
    if (index.Series_J != null) {
      data.push({ name: "Series J", price: index.Series_J / x });
    }
    if (index.Series_K != null) {
      data.push({ name: "Series K", price: index.Series_K / x });
    }
    if (index.Series_L != null) {
      data.push({ name: "Series L", price: index.Series_L / x });
    }
    if (index.Series_M != null) {
      data.push({ name: "Series M", price: index.Series_M / x });
    }
    if (index.Series_N != null) {
      data.push({ name: "Series N", price: index.Series_N / x });
    }
  })
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-lc-css" >
          <p>{`${label}`}</p>
          <p >{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" display="none"  />
      {/* <YAxis /> */}
      <Tooltip content={<CustomTooltip />} />
      {/* <Legend /> */}
      <Line
        type="monotone"
        dataKey="price"
        stroke="#7B61FF"
        strokeWidth={5}
      //thickness
      //color->purple

      // activeDot={{ r: 8 }}
      />
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
    // </ResponsiveContainer>
  );
}
