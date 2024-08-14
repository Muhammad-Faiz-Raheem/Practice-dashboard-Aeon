import React from "react";
import { borderStyle } from "../Main";
import LineChartComponent from "./LineChartComponent";
import CircleChartComponent from "./CircleChartComponent";

function Charts() {
  return (
    <div className="grid grid-cols-[auto_23%] gap-5">
      <div className={`${borderStyle}`}>
        <LineChartComponent />
      </div>
      <div className={`${borderStyle}`}>
        <CircleChartComponent />
      </div>
    </div>
  );
}

export default Charts;
