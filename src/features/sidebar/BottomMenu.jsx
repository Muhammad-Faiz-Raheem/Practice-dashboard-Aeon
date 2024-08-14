import React from "react";
import { FiInfo, FiLogOut } from "react-icons/fi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

/* eslint-disable react/prop-types */

const listStyle = "flex items-center justify-between relative pl-12 pr-10";

function BottomMenu({ visited, onVisited }) {
  return (
    <div className="py-14">
      <nav>
        <ul className="flex flex-col gap-y-5 text-Blue-medium">
          <li className={`${listStyle}`}>
            <a
              href="#"
              className={
                visited === "helpCentre" ? "visited:text-Blue-dark" : ""
              }
              onClick={() => onVisited("helpCentre")}
            >
              <FiInfo className="mr-3 inline rotate-180 text-xl" />
              <span>Help Centre</span>
            </a>
            {visited === "helpCentre" && (
              <span className="absolute right-[-0.9px] h-6 rounded-s-sm border-2 border-Blue-dark bg-Blue-dark"></span>
            )}
          </li>

          <li className={`${listStyle}`}>
            <a
              href="#"
              className={
                visited === "contactUs" ? "visited:text-Blue-dark" : ""
              }
              onClick={() => onVisited("contactUs")}
            >
              <IoChatbubbleEllipsesOutline className="mr-3 inline scale-x-[-1] text-xl" />
              <span>Contact us</span>
            </a>
            {visited === "contactUs" && (
              <span className="absolute right-[-0.9px] h-6 rounded-s-sm border-2 border-Blue-dark bg-Blue-dark"></span>
            )}
          </li>

          <li className={`text-Red-primary ${listStyle}`}>
            <a className="cursor-pointer">
              <FiLogOut className="mr-3 inline text-xl" />
              <span>Log out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BottomMenu;
