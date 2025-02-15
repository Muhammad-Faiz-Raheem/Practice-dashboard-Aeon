import React from "react";
import TableHeader from "./TableHeader";
import ListItems from "./ListItems";

/* eslint-disable react/prop-types */

function Table({ data, onSetData }) {
  return (
    <div className="mt-6 px-2">
      <TableHeader onSetData={onSetData} />
      <ListItems data={data} />
    </div>
  );
}

export default Table;
