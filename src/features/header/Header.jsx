import React from "react";
import Logo from "./Logo";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import { HiOutlineBell } from "react-icons/hi2";

/* eslint-disable react/prop-types */

function Header({ isOpen, onIsOpen }) {
  return (
    <div className="relative grid grid-cols-1 grid-rows-2 items-center gap-x-12 sm:grid-cols-[10rem_1fr] sm:grid-rows-1 md:grid-cols-[18rem_1fr]">
      <div className="row-start-1 row-end-2 justify-self-center sm:col-start-1 sm:col-end-2 sm:justify-self-start">
        <Logo />
        <div className="absolute left-12 top-3 sm:left-40 sm:top-4 md:left-[275px] md:top-5">
          <button onClick={() => onIsOpen((open) => !open)}>
            {isOpen ? (
              <FaChevronLeft className="text-sm" />
            ) : (
              <FaChevronRight className="text-sm" />
            )}
          </button>
        </div>
      </div>

      <div className="row-start-2 row-end-3 px-12 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:px-0">
        <div className="flex justify-between gap-x-2">
          <div>
            <h1 className="text-[15px] font-medium sm:text-[20px] md:text-[24px] min-[1185px]:text-[28px]">
              Welcome Back, Faiz
            </h1>
            <p className="text-[7px] font-normal leading-3 text-Blue-medium sm:text-[12px] md:text-[12px] min-[1185px]:text-[16px]">
              Here is the information about all your orders
            </p>
          </div>
          <div className="flex h-12 cursor-pointer items-center gap-x-5">
            <IoSearchOutline className="md:text-xl" />
            <div className="relative">
              <div className="absolute right-0 h-1 w-1 rounded-full bg-Red-primary"></div>
              <HiOutlineBell className="md:text-xl" />
            </div>
            <img
              src="/me.jpg"
              alt="avatar"
              className="hidden w-8 rounded-full min-[900px]:block"
            />
            <span className="hidden font-normal min-[1185px]:block">
              Muhammad Faiz Raheem
            </span>
            <button>
              <IoChevronDown className="text-Blue-medium" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
