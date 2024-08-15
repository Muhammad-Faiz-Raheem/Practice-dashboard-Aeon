import React, { useState } from "react";
import { PiArrowsDownUp } from "react-icons/pi";

/* eslint-disable react/prop-types */

function TableHeader({ onSetData }) {
  const [idSort, setIdSort] = useState(false);
  const [nameSort, setNameSort] = useState(false);
  const [amountSort, setAmountSort] = useState(false);
  const [statusSort, setStatusSort] = useState(false);

  function handleSortById() {
    if (!idSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) => a.id - b.id);
        return sortedData;
      });
      setIdSort(true);
    }
    if (idSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) => b.id - a.id);
        return sortedData;
      });
      setIdSort(false);
    }
  }

  function handleSortByName() {
    if (!nameSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) =>
          a.customerName.localeCompare(b.customerName),
        );
        return sortedData;
      });
      setNameSort(true);
    }
    if (nameSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) =>
          b.customerName.localeCompare(a.customerName),
        );
        return sortedData;
      });
      setNameSort(false);
    }
  }

  function handleSortByAmount() {
    if (!amountSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) => a.amount - b.amount);
        return sortedData;
      });
      setAmountSort(true);
    }
    if (amountSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) => b.amount - a.amount);
        return sortedData;
      });
      setAmountSort(false);
    }
  }

  function handleSortByStatus() {
    if (!statusSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) =>
          a.status.localeCompare(b.status),
        );
        return sortedData;
      });
      setStatusSort(true);
    }
    if (statusSort) {
      onSetData((data) => {
        const sortedData = [...data].sort((a, b) =>
          b.status.localeCompare(a.status),
        );
        return sortedData;
      });
      setStatusSort(false);
    }
  }

  return (
    <>
      <header className="grid grid-cols-[0.7fr_1fr_1fr_1.5fr_2fr_1fr_1.3fr_5%]">
        <span className="text-xs font-medium">No</span>
        <div className="flex items-center gap-x-2">
          <span className="text-xs font-medium">ID</span>
          <span
            className="cursor-pointer text-xs text-Blue-medium"
            onClick={handleSortById}
          >
            <PiArrowsDownUp />
          </span>
        </div>
        <span className="text-xs font-medium">Date</span>
        <div className="flex gap-x-2">
          <span className="text-xs font-medium">Customer Name</span>
          <span
            className="cursor-pointer text-xs text-Blue-medium"
            onClick={handleSortByName}
          >
            <PiArrowsDownUp />
          </span>
        </div>
        <span className="text-xs font-medium">Location</span>
        <div className="flex gap-x-2">
          <span className="text-xs font-medium">Amount</span>
          <span
            className="cursor-pointer text-xs text-Blue-medium"
            onClick={handleSortByAmount}
          >
            <PiArrowsDownUp />
          </span>
        </div>
        <div className="flex gap-x-2">
          <span className="text-xs font-medium">Status Order</span>
          <span
            className="cursor-pointer text-xs text-Blue-medium"
            onClick={handleSortByStatus}
          >
            <PiArrowsDownUp />
          </span>
        </div>
        <span className="text-xs font-medium">Action</span>
      </header>
    </>
  );
}

export default TableHeader;
