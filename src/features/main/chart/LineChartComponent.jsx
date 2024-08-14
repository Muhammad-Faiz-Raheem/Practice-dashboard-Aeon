import React from "react";
import { IoChevronDown } from "react-icons/io5";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatCurrency } from "../../../utils/helper";

const data = [
  { month: "Jan", onlineOrders: 40, offlineOrders: 20 },
  { month: "Feb", onlineOrders: 20, offlineOrders: 30 },
  { month: "Mar", onlineOrders: 0, offlineOrders: 10 },
  { month: "Apr", onlineOrders: 60, offlineOrders: 40 },
  { month: "May", onlineOrders: 80, offlineOrders: 100 },
  { month: "Jun", onlineOrders: 100, offlineOrders: 60 },
  { month: "Jul", onlineOrders: 80, offlineOrders: 80 },
];

/* eslint-disable react/prop-types */

function LineChartComponent() {
  function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            className="label"
            style={{
              color: "#7C8DB5",
              fontWeight: "400",
              fontSize: "12px",
            }}
          >{`${label}`}</p>
          <p
            className="intro"
            style={{ fontSize: "16px", fontWeight: "500" }}
          >{` ${payload[0].value > payload[1].value ? formatCurrency(payload[0].value) : formatCurrency(payload[1].value)}`}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">Orders Analytics</span>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-lg bg-Blue-dark"></span>
            <span className="text-xs font-normal">Offine orders</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-lg bg-Orange-primary"></span>
            <span className="text-xs font-normal">Online orders</span>
          </div>
          <div className="flex cursor-pointer gap-x-2 rounded-lg bg-white px-3 py-2 shadow-xl shadow-black/5">
            <span className="text-xs font-normal">Monthly</span>
            <span className="text-Blue-medium">
              <IoChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 35, right: 50, bottom: 20, left: 0 }}
          >
            <Line
              type="monotone"
              dataKey="onlineOrders"
              stroke="#FF9500"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="offlineOrders"
              stroke="#347AE2"
              strokeWidth={2}
            />
            <CartesianGrid stroke="#E6EDFF" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: "14px", fontWeight: "400", fill: "#7C8DB5" }}
              tickMargin={20}
              axisLine={{ stroke: "none" }}
              tickLine={{ stroke: "none" }}
            />
            <YAxis
              tickMargin={30}
              tick={{ fontSize: "14px", fontWeight: "400", fill: "#7C8DB5" }}
              axisLine={{ stroke: "none" }}
              tickLine={{ stroke: "none" }}
              tickCount={6}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Tooltip content={CustomTooltip} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineChartComponent;
