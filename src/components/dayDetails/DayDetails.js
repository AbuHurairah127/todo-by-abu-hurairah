import React from "react";
import { FiMenu } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import UseDayDetails from "./UseDayDetails";
import Navbar from "./../sidebars/navbar-left/Navbar";

const DayDetails = () => {
  const { day, date, month, sideBarToggler, isSideBar } = UseDayDetails();
  return (
    <div className="flex flex-row m-2 mx-4">
      <div className="left">
        <GiHamburgerMenu
          className="inline text-2xl relative cursor-pointer bottom-1 hover:fill-blue-600 active:fill-blue-400"
          onClick={sideBarToggler}
        ></GiHamburgerMenu>
        <h3 className="inline mx-2 text-2xl text-[#331e36]">MY DAY</h3>
        <div className="text-slate-400 mx-8">
          <span className="pr-1"> {day}, </span>
          <span> {date} </span>
          <span> {month} </span>
        </div>
      </div>
      <div>
        {isSideBar && (
          <Navbar toggler={sideBarToggler} togglingIcon={isSideBar} />
        )}
      </div>
      {/* //Add div with class name right to add the other functionalities on the right side of this component */}
    </div>
  );
};

export default DayDetails;
