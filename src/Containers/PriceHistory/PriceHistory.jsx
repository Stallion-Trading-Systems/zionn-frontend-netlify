import React, { useState, useEffect } from "react";
import * as api from "../../axios"
import "./pricehistory.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { noCurve } from "./NoCurve";

export default function PriceHistory(props) {
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
        //   <div style={{ width: '100%' }}>
        // <ResponsiveContainer width="100%" height={200}>
        <div>
            <AreaChart

                width={1000}
                height={300}
                data={data}
                margin={{
                    top: 0,
                    right: 20,
                    left: 20,
                    bottom: 0,
                }}

            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} />
                <YAxis dataKey="price" axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type={noCurve}
                    dataKey="price"
                    stroke="#68b9ae"
                    fill="#d4eae7"
                    strokeWidth={2} />
            </AreaChart>
        </div>

        // </ResponsiveContainer>
        //   </div>
        // </ResponsiveContainer>
    );
}

