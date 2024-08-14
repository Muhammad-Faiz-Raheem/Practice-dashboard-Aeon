import React from "react";
import Cards from "./card/Cards";
import Charts from "./chart/Charts";
import OrderList from "./orderlist/OrderList";

export const borderStyle =
  "rounded-lg border-2 border-Blue-light 2xl:rounded-2xl";

function Main() {
  return (
    <div className="grid grid-rows-[auto_auto_auto] gap-y-8">
      <Cards />
      <Charts />
      <OrderList />
    </div>
  );
}

export default Main;
