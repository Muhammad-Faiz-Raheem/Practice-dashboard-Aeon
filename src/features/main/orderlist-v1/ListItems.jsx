import React from "react";
import { IoIosMore } from "react-icons/io";
import BorderBetween from "../../../ui/BorderBetween";

/* eslint-disable react/prop-types */

function ListItems({ fakeData }) {
  return (
    <div>
      {fakeData.map((data, index) => (
        <ListItem data={data} serialNo={index + 1} key={data.id} />
      ))}
    </div>
  );
}

function ListItem({ data, serialNo }) {
  const { id, date, customerName, location, amount, status } = data;

  const checkStatus = status.split(" ").join("").toLowerCase();

  return (
    <div className="text-xs font-normal">
      <BorderBetween dimention="w" side="t" />
      <div className="grid grid-cols-[0.7fr_1fr_1fr_1.5fr_2fr_1fr_1.3fr_5%]">
        <span>{serialNo}</span>
        <span>#{id}</span>
        <span>{date}</span>
        <span>{customerName}</span>
        <span>{location}</span>
        <span>{amount}</span>
        <div>
          <div className="flex w-fit items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-xl shadow-black/5">
            <span
              className={`${checkStatus === "neworder" ? "bg-Green-primary" : checkStatus === "processing" ? "bg-Red-primary" : checkStatus === "shipped" ? "bg-Orange-primary" : checkStatus === "delivered" ? "bg-Blue-dark" : "bg-black"} h-2 w-2 rounded-lg`}
            ></span>
            <span>{status}</span>
          </div>
        </div>
        <span className="cursor-pointer pl-2 text-2xl">
          <IoIosMore />
        </span>
      </div>
    </div>
  );
}

export default ListItems;
