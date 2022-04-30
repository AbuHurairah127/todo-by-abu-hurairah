import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import UseDayDetails from "./UseDayDetails";

const DayDetails = () => {
  const { day, date, month } = UseDayDetails();
  return (
    <div className="m-2 mx-4">
      <div className="left">
        <GiHamburgerMenu className="inline text-2xl relative cursor-pointer bottom-1"></GiHamburgerMenu>
        <h3 className="inline mx-2 text-2xl text-[#331e36]">MY DAY</h3>
        <div className="text-slate-400 mx-8">
          <span className="pr-1"> {day}, </span>
          <span> {date} </span>
          <span> {month} </span>
        </div>
      </div>
      {/* //Add div with class name right to add the other functionalities on the right side of this component */}
    </div>
  );
};

export default DayDetails;
