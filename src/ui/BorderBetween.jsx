import React from "react";

/* eslint-disable react/prop-types */

function BorderBetween({ dimention = "h", side = "r" }) {
  return (
    <div
      className={`flex ${dimention === "w" ? "min-h-8" : "min-w-20"} items-center justify-center`}
    >
      <div
        className={`${dimention === "w" ? "w-[100%]" : "h-[100%]"} ${side === "t" ? "border-t" : "border-r"} border-Blue-light`}
      ></div>
    </div>
  );
}

export default BorderBetween;
