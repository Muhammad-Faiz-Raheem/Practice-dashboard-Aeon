import React from "react";
import { BsBarChart } from "react-icons/bs";
import {
  HiOutlineBriefcase,
  HiOutlineNewspaper,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";

const iconStyle = "mr-3 inline text-xl";
const listStyle =
  "flex items-center justify-between relative pl-12 pr-10 box-border";

/* eslint-disable react/prop-types */

function TopMenu({ visited, onVisited }) {
  return (
    <div className="py-5">
      <nav>
        <ul className="flex flex-col gap-y-5 text-Blue-medium">
          <li className={`${listStyle}`}>
            <a
              href="#"
              className={visited === "overview" ? "visited:text-Blue-dark" : ""}
              onClick={() => onVisited("overview")}
            >
              <BsBarChart className={iconStyle} />
              <span>Overview</span>
            </a>
            {visited === "overview" && (
              <span className="absolute right-[-0.9px] h-6 rounded-s-sm border-2 border-Blue-dark bg-Blue-dark"></span>
            )}
          </li>

          <li className={`${listStyle}`}>
            <a
              href="#"
              className={visited === "product" ? "visited:text-Blue-dark" : ""}
              onClick={() => onVisited("product")}
            >
              <HiOutlineBriefcase className={iconStyle} />
              <span>Product</span>
            </a>
            <button>
              <IoChevronDown />
            </button>
            {visited === "product" && (
              <span className="absolute right-[-0.9px] h-6 rounded-s-sm border-2 border-Blue-dark bg-Blue-dark"></span>
            )}
          </li>

          <li className={`${listStyle} `}>
            <a
              href="#"
              className={visited === "orders" ? "visited:text-Blue-dark" : ""}
              onClick={() => onVisited("orders")}
            >
              <HiOutlineUser className={iconStyle} />
              <span>Orders</span>
            </a>
            <button>
              <IoChevronDown />
            </button>
            {visited === "orders" && (
              <span className="absolute right-[-0.9px] h-6 rounded-s-sm border-2 border-Blue-dark bg-Blue-dark"></span>
            )}
          </li>

          <li className={`${listStyle} `}>
            <a
              href="#"
              className={visited === "checkout" ? "visited:text-Blue-dark" : ""}
              onClick={() => onVisited("checkout")}
            >
              <HiOutlineNewspaper className={iconStyle} />
              <span>Checkout</span>
            </a>
            <span className="rounded-xl bg-Red-primary px-[5px] pt-[1px] text-xs font-medium text-white">
              2
            </span>
            {visited === "checkout" && (
              <span className="absolute right-[-0.9px] h-6 rounded-s-sm border-2 border-Blue-dark bg-Blue-dark"></span>
            )}
          </li>

          <li className={`${listStyle}`}>
            <a
              href="#"
              className={visited === "setting" ? "visited:text-Blue-dark" : ""}
              onClick={() => onVisited("setting")}
            >
              <LuSettings className={iconStyle} />
              <span>Setting</span>
              {visited === "setting" && (
                <span className="absolute right-[-0.9px] h-6 rounded-s-sm border-2 border-Blue-dark bg-Blue-dark"></span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopMenu;
