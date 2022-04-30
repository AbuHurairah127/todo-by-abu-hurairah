import React from "react";
import AddTodo from "../../components/addTodo/AddTodo";
import Button from "../../components/button/Button";
import DayDetails from "../../components/dayDetails/DayDetails";
import Header from "../../components/header/Header";
import Navbar from "../../components/sidebars/navbar-left/Navbar";

const Home = () => {
  return (
    <div className="flex w-full flex-col content-center">
      <Header />
      <DayDetails />
      <div className="block m-auto">
        <Button label="Add a TASK" />
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
