import React from "react";
import {
  HiOutlineArrowDownLeft,
  HiOutlineArrowUpRight,
  HiOutlineArrowUturnRight,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi2";
import { borderStyle } from "../Main";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import BorderBetween from "../../../ui/BorderBetween";

import Card from "./Card";

function Cards() {
  return (
    <div className={`flex justify-between p-6 ${borderStyle}`}>
      <div className="min-w-52">
        <Card
          label={"Total users"}
          value={89935}
          icon={<HiOutlineUsers />}
          amount={10.2}
          arrow={<HiOutlineArrowUpRight />}
          percentage={+1.01}
        />
      </div>

      <BorderBetween dimention="h" side="r" />

      <div className="min-w-52">
        <Card
          label={"Total products"}
          value={23283.5}
          icon={<HiOutlineBriefcase />}
          amount={3.1}
          arrow={<HiOutlineArrowUpRight />}
          percentage={+0.49}
        />
      </div>

      <BorderBetween />

      <div className="min-w-52">
        <Card
          label={"Total users"}
          value={46827}
          icon={<IoMdCheckmarkCircleOutline />}
          amount={2.56}
          arrow={<HiOutlineArrowDownLeft />}
          percentage={-0.91}
        />
      </div>

      <BorderBetween />

      <div className="min-w-52">
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
