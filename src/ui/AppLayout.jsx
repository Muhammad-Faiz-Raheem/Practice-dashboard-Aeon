import React, { useEffect, useState } from "react";
import Header from "../features/header/Header";
import Sidebar from "../features/sidebar/Sidebar";
import Main from "../features/main/Main";

/* Main Content */
const mainStyle =
  "scrollbar-custom col-start-1 col-end-3 row-start-2 row-end-3 ml-12 mr-12 mt-5 pb-12";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Check the initial screen size
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setZIndex(10); // Set z-index to 10 when sidebar is open
    } else {
      setTimeout(() => setZIndex(-10), 700); // Delay z-index change when closing the sidebar
    }
  }, [isOpen]);

  return (
    <div className="grid h-screen grid-cols-[18rem_1fr] gap-x-6 gap-y-5 pt-[30px] font-poppins sm:gap-x-12">
      {/* Header */}
      <div
        className={`col-start-1 col-end-3 row-start-1 row-end-2 ${isOpen ? "" : "sm:mr-12"}`}
      >
        <Header isOpen={isOpen} onIsOpen={setIsOpen} />
      </div>

      {/* Slidebar */}
      <div
        className={`${zIndex === 10 ? "z-10" : zIndex === -10 ? "z-[-10]" : ""} col-start-1 col-end-2 row-start-2 row-end-3`}
      >
        <Sidebar isOpen={isOpen} />
      </div>

      {/* Main Content */}
      <div
        className={
          isOpen ? `${mainStyle} md:col-span-2 md:ml-0` : `${mainStyle}`
        }
      >
        <Main />
      </div>
    </div>
  );
}

export default AppLayout;
