import React from "react";
import Button from "../../components/button/Button";
import DayDetails from "../../components/dayDetails/DayDetails";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div className="flex w-full flex-col h-screen content-center">
      <Header />
      <DayDetails />
      <div className="block mx-auto">
        <Button label="Add a TASK" />
      </div>
      <div className="mt-auto">
        <Footer className="" />
      </div>
    </div>
  );
};

export default Home;
