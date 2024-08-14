import React from "react";
import { IoIosMore } from "react-icons/io";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "offline",
    uv: 31.47,
    fill: "#34C759",
  },
  {
    name: "online",
    uv: 26.69,
    fill: "#FF9500 ",
  },
  {
    name: "trade",
    uv: 15.69,
    fill: "#347AE2 ",
  },
];

function CircleChartComponent() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h className="text-xl font-medium">Earnings</h>
        <span className="cursor-pointer text-2xl">
          <IoIosMore />
        </span>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="110%"
            barSize={10}
            data={data}
          >
            <RadialBar clockWise dataKey="uv" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-lg bg-Green-primary"></span>
          <span className="text-xs font-normal">Offine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-lg bg-Orange-primary"></span>
          <span className="text-xs font-normal">Online</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-lg bg-Blue-dark"></span>
          <span className="text-xs font-normal">Trade</span>
        </div>
      </div>
    </div>
  );
}

export default CircleChartComponent;
