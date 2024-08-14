import React from "react";

const boxStyle = "bg-Blue-dark h-[8px] w-[8px] rounded-[3.3px]";

function Logo() {
  return (
    <div className="ml-0 flex items-center gap-x-2 text-[20px] font-medium sm:ml-12 sm:px-0">
      <div className="grid grid-cols-2 gap-0.5">
        <div className={`${boxStyle} col-span-2`}></div>
        <div className={boxStyle}></div>
        <div className={boxStyle}></div>
      </div>
      <span className="text-3xl sm:text-xl">Aeon</span>
    </div>
  );
}

export default Logo;
