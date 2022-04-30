import React from "react";
import Button from "../../components/button/Button";
import DayDetails from "../../components/dayDetails/DayDetails";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="flex flex-col content-center">
      <Header />
      <DayDetails />
      <div className="block m-auto">
        <Button />
      </div>
    </div>
  );
};

export default Home;
