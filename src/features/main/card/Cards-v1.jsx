import React from "react";
import {
  HiOutlineArrowDownLeft,
  HiOutlineArrowUpRight,
  HiOutlineArrowUturnRight,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi2";
import { borderStyle } from "./Main";
import Card from "./Card";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Cards() {
  return (
    <div
      className={`grid min-h-20 grid-cols-[auto_auto_auto_auto] items-center gap-x-12 p-5 ${borderStyle}`}
    >
      <div className="border-r border-Blue-light">
        <Card
          label={"Total users"}
          value={89935}
          icon={<HiOutlineUsers />}
          amount={10.2}
          arrow={<HiOutlineArrowUpRight />}
          percentage={+1.01}
        />
      </div>

      <div className="border-r border-Blue-light">
        <Card
          label={"Total products"}
          value={23283.5}
          icon={<HiOutlineBriefcase />}
          amount={3.1}
          arrow={<HiOutlineArrowUpRight />}
          percentage={+0.49}
        />
      </div>

      <div className="border-r border-Blue-light">
        <Card
          label={"Total users"}
          value={46827}
          icon={<IoMdCheckmarkCircleOutline />}
          amount={2.56}
          arrow={<HiOutlineArrowDownLeft />}
          percentage={-0.91}
        />
      </div>

      <div>
        <Card
          label={"Refunded"}
          value={124854}
          icon={<HiOutlineArrowUturnRight />}
          amount={7.2}
          arrow={<HiOutlineArrowUpRight />}
          percentage={+1.51}
        />
      </div>
    </div>
  );
}

export default Cards;
