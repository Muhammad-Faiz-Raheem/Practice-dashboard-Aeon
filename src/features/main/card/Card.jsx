import React from "react";
import { formatNumberWithCommas } from "../../../utils/helper";

/* eslint-disable react/prop-types */

function Card({ label, value, icon, amount, arrow, percentage }) {
  return (
    <div>
      <div className="flex w-48 justify-between">
        <div>
          <span className="block text-[28px] font-semibold">
            {formatNumberWithCommas(value)}
          </span>
          <span className="text-base font-normal">{label}</span>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl text-Blue-dark shadow-lg shadow-black/10">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <span
          className={`${percentage > 0 ? "text-Green-primary" : "text-Red-primary"}`}
        >
          {arrow}
        </span>
        <span className="text-sm font-normal text-Blue-medium">{amount}</span>
        <span className="text-sm font-normal text-Blue-medium">
          {percentage > 0 ? "+" : ""}
          {percentage} % this week
        </span>
      </div>
    </div>
  );
}

export default Card;
