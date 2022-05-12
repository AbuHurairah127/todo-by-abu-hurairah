import React from "react";
import { useState } from "react";

const UseTodoList = () => {
  const [isSideBarToggle, setIsSideBarToggle] = useState(true);
  const rightSideBarToggler = () => {
    setIsSideBarToggle(!isSideBarToggle);
  };
  console.log("r", isSideBarToggle);
  return {
    isSideBarToggle,
    rightSideBarToggler,
  };
};

export default UseTodoList;
