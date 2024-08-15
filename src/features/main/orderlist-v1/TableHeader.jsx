import React from "react";
import { PiArrowsDownUp } from "react-icons/pi";

function TableHeader() {
  return (
    <>
      <header className="grid grid-cols-[0.7fr_1fr_1fr_1.5fr_2fr_1fr_1.3fr_5%]">
        <span className="text-xs font-medium">No</span>
        <div className="flex items-center gap-x-2">
          <span className="text-xs font-medium">ID</span>
          <span className="text-xs text-Blue-medium">
            <PiArrowsDownUp />
          </span>
        </div>
        <span className="text-xs font-medium">Date</span>
        <div className="flex gap-x-2">
          <span className="text-xs font-medium">Customer Name</span>
          <span className="text-xs text-Blue-medium">
            <PiArrowsDownUp />
          </span>
        </div>
        <span className="text-xs font-medium">Location</span>
        <div className="flex gap-x-2">
          <span className="text-xs font-medium">Amount</span>
          <span className="text-xs text-Blue-medium">
            <PiArrowsDownUp />
          </span>
        </div>
        <div className="flex gap-x-2">
          <span className="text-xs font-medium">Status Order</span>
          <span className="text-xs text-Blue-medium">
            <PiArrowsDownUp />
          </span>
        </div>
        <span className="text-xs font-medium">Action</span>
      </header>
    </>
  );
}

export default TableHeader;
