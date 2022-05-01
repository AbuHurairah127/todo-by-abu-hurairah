import React from "react";
import Button from "../../components/button/Button";
import DayDetails from "../../components/dayDetails/DayDetails";
import Header from "../../components/header/Header";
import OptionBar from "../../components/sidebars/optionBar-right/OptionBar";

const Home = () => {
  return (
    <div className="flex w-full flex-col content-center">
      <Header />
      <DayDetails />
      <div className="block m-auto">
        <Button label="Add a TASK" />
      </div>
      <OptionBar />
    </div>
  );
};

export default Home;
