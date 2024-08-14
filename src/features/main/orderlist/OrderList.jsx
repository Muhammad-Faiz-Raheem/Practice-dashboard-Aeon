import React from "react";
import { borderStyle } from "../Main";
import { IoChevronDown } from "react-icons/io5";
import Table from "./Table";

const fakeData = [
  {
    id: "12594",
    date: "Dec 1, 2021",
    customerName: "Frank Murlo",
    location: "312 S Wilmette Ave",
    amount: "$847.69",
    status: "New Order",
  },
  {
    id: "12595",
    date: "Dec 3, 2021",
    customerName: "Laura Bennett",
    location: "489 E Devonshire Dr",
    amount: "$1,235.00",
    status: "Processing",
  },
  {
    id: "12596",
    date: "Dec 4, 2021",
    customerName: "Jacob Martin",
    location: "50 N Springfield Ave",
    amount: "$920.15",
    status: "Shipped",
  },
  {
    id: "12597",
    date: "Dec 5, 2021",
    customerName: "Samantha Reid",
    location: "1500 W George St",
    amount: "$645.99",
    status: "Delivered",
  },
  {
    id: "12598",
    date: "Dec 6, 2021",
    customerName: "Michael Chang",
    location: "901 W Wilson Ave",
    amount: "$299.99",
    status: "New Order",
  },
  {
    id: "12599",
    date: "Dec 7, 2021",
    customerName: "Emily King",
    location: "202 N Milwaukee Ave",
    amount: "$1,020.50",
    status: "Processing",
  },
  {
    id: "12600",
    date: "Dec 8, 2021",
    customerName: "James Anderson",
    location: "7700 W Madison St",
    amount: "$580.00",
    status: "Shipped",
  },
  {
    id: "12601",
    date: "Dec 9, 2021",
    customerName: "Olivia Watson",
    location: "420 S State St",
    amount: "$700.45",
    status: "Delivered",
  },
  {
    id: "12602",
    date: "Dec 10, 2021",
    customerName: "William Turner",
    location: "1030 E Golf Rd",
    amount: "$1,500.99",
    status: "New Order",
  },
  {
    id: "12603",
    date: "Dec 11, 2021",
    customerName: "Sophia Harris",
    location: "2400 W Devon Ave",
    amount: "$899.75",
    status: "Processing",
  },
];

function OrderList() {
  return (
    <div className={`p-6 ${borderStyle}`}>
      <div className="flex items-center justify-between">
        <span className="text-xl font-medium">Order List</span>
        <div className="flex cursor-pointer gap-x-2 rounded-lg bg-white px-3 py-2 shadow-xl shadow-black/5">
          <span className="text-xs font-normal">Monthly</span>
          <span className="text-Blue-medium">
            <IoChevronDown />
          </span>
        </div>
      </div>
      <Table fakeData={fakeData} />
    </div>
  );
}

export default OrderList;
