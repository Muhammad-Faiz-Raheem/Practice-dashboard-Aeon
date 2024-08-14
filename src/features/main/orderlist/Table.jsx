import React from "react";
import TableHeader from "./TableHeader";
import ListItems from "./ListItems";

/* eslint-disable react/prop-types */

function Table({ fakeData }) {
  return (
    <div className="mt-6 px-2">
      <TableHeader />
      <ListItems fakeData={fakeData} />
    </div>
  );
}

export default Table;
