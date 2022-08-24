import React, { useEffect, useRef } from "react";
import LineChartP from "./LineChartP";
import "./grid.css";
import Lottie from 'lottie-react'
import gridd from '../assets/grid.json'

const Grid = (props) => {
  return (
    <div>
    <Lottie className="con-grid" animationData={gridd}/>
    <div className="chart-div"> 
    <LineChartP company={props.company} className="chart"/>
    </div>
    </div>
  );
};

export default Grid;
