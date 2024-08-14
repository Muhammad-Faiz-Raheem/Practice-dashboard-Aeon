import React, { useState } from "react";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";

/* eslint-disable react/prop-types */

function Sidebar({ isOpen }) {
  const [visited, setVisited] = useState("");

  return (
    <div className={`relative flex h-full flex-col gap-y-5`}>
      <div
        className={`h-full justify-between border-r-[1px] border-Blue-light bg-white transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}
      >
        <TopMenu visited={visited} onVisited={setVisited} />
        <BottomMenu visited={visited} onVisited={setVisited} />
      </div>
    </div>
  );
}

export default Sidebar;
