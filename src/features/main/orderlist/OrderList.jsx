import React, { useState } from "react";
import { borderStyle } from "../Main";
import Table from "./Table";
import { CiSearch } from "react-icons/ci";

const fakeData = [
  {
    id: 12594,
    date: "Dec 1, 2021",
    customerName: "Frank Murlo",
    location: "312 S Wilmette Ave",
    amount: 847.69,
    status: "New Order",
  },
  {
    id: 12595,
    date: "Dec 3, 2021",
    customerName: "Laura Bennett",
    location: "489 E Devonshire Dr",
    amount: 1235.0,
    status: "Processing",
  },
  {
    id: 12596,
    date: "Dec 4, 2021",
    customerName: "Jacob Martin",
    location: "50 N Springfield Ave",
    amount: 920.15,
    status: "Shipped",
  },
  {
    id: 12597,
    date: "Dec 5, 2021",
    customerName: "Samantha Reid",
    location: "1500 W George St",
    amount: 645.99,
    status: "Delivered",
  },
  {
    id: 12598,
    date: "Dec 6, 2021",
    customerName: "Michael Chang",
    location: "901 W Wilson Ave",
    amount: 299.99,
    status: "New Order",
  },
  {
    id: 12599,
    date: "Dec 7, 2021",
    customerName: "Emily King",
    location: "202 N Milwaukee Ave",
    amount: 1020.5,
    status: "Processing",
  },
  {
    id: 12600,
    date: "Dec 8, 2021",
    customerName: "James Anderson",
    location: "7700 W Madison St",
    amount: 580.0,
    status: "Shipped",
  },
  {
    id: 12601,
    date: "Dec 9, 2021",
    customerName: "Olivia Watson",
    location: "420 S State St",
    amount: 700.45,
    status: "Delivered",
  },
  {
    id: 12602,
    date: "Dec 10, 2021",
    customerName: "William Turner",
    location: "1030 E Golf Rd",
    amount: 1500.99,
    status: "New Order",
  },
  {
    id: 12603,
    date: "Dec 11, 2021",
    customerName: "Sophia Harris",
    location: "2400 W Devon Ave",
    amount: 899.75,
    status: "Processing",
  },
];

function OrderList() {
  const [data, setData] = useState(fakeData);

  function handleChange(e) {
    const newValue = e.target.value;

    if (newValue === "") {
      setData(fakeData);
      return;
    }

    const searchedData = fakeData.filter(
      (item) =>
        item.id
          .toString()
          .toLowerCase()
          .includes(newValue.toLowerCase().split(" ").join("")) ||
        item.customerName
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(newValue.toLowerCase().split(" ").join("")) ||
        item.status
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(newValue.toLowerCase().split(" ").join("")),
    );
    setData(searchedData);
  }

  return (
    <div className={`p-6 ${borderStyle}`}>
      <div className="flex items-center justify-between">
        <span className="text-xl font-medium">Order List</span>
        <div className="flex items-center gap-x-2 rounded-lg bg-white px-3 py-2 shadow-xl shadow-black/5">
          <input
            className="text-xs outline-none"
            placeholder="Search"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <span className="text-Blue-medium">
            <CiSearch />
          </span>
        </div>
      </div>
      <Table data={data} onSetData={setData} />
    </div>
  );
}

export default OrderList;
