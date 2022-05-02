import React from "react";
import Button from "../../components/button/Button";
import DayDetails from "../../components/dayDetails/DayDetails";
import Header from "../../components/header/Header";
import TodoList from "../../components/todoList/TodoList";
import AddTodo from "../../components/addTodo/AddTodo";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div className="flex w-full flex-col h-screen content-center">
      <Header />
      <DayDetails />
      <div className="block mx-auto">
        <Button label="Add a TASK" />
      </div>
      <AddTodo />
      <TodoList />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
