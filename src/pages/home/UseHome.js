import { useState } from "react";

const UseHome = () => {
  const [isNavbarAppear, setIsNavbarAppear] = useState(false);
  const [isOptionBarAppear, setIsOptionBarAppear] = useState(false);
  const [isTodoButton, setIsTodoButton] = useState(true);
  const navbarToggler = () => {
    setIsNavbarAppear(!isNavbarAppear);
  };
  const optionBarToggler = () => {
    setIsOptionBarAppear(!isOptionBarAppear);
  };
  const todoModalLauncher = () => {
    setIsTodoButton(!isTodoButton);
  };
  return {
    isNavbarAppear,
    navbarToggler,
    isOptionBarAppear,
    optionBarToggler,
    isTodoButton,
    todoModalLauncher,
  };
};

export default UseHome;
