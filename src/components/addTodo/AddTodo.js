import React from "react";
import Button from "../button/Button";
import { BsCalendarMonth, BsBell, BsArrowRepeat } from "react-icons/bs";

const AddTodo = () => {
  return (
    <div className="flex align-center justify-center bg-slate-200 flex-col px-4 py-3 mt-4 mx-6 rounded-md">
      <input
        type="text"
        placeholder="Add a task"
        className="p-2 border-b-2 border-b-indigo-800 w-[75] focus:outline-none"
      />
      <div className="flex justify-between flex-row items-center">
        <div className="text-2xl cursor-pointer mt-2">
          <BsCalendarMonth
            className="inline p-0.5 rounded-sm hover:border-2 hover:border-slate-300 hover:bg-slate-300"
            title="Add a due date"
          ></BsCalendarMonth>
          <BsBell
            className="inline ml-4 p-0.5 rounded-sm hover:border-2 hover:border-slate-300 hover:bg-slate-300"
            title="Remind me"
          ></BsBell>
          <BsArrowRepeat
            className="inline ml-4 p-0.5 rounded-sm hover:border-2 hover:border-slate-300 hover:bg-slate-300"
            title="Repeat"
          ></BsArrowRepeat>
        </div>
        <div className="self-end mt-2">
          <Button label="Add" />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
