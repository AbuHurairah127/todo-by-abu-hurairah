import React from "react";
import { AiOutlineStar, AiFillEdit, AiOutlineDelete } from "react-icons/ai";
const TodoList = () => {
  return (
    <div className="mx-6 bg-[#d8ddef] cursor-pointer rounded-md h-14 flex flex-row items-center justify-between hover:bg-slate-300">
      <div className="mx-3 ">
        <input
          type="checkbox"
          className=" cursor-pointer scale-110"
          title="Completed"
          name="taskCompleted"
          id="completed"
        />
        <span className="mx-5">Abu Hurairah</span>
      </div>
      <div className="mx-3 flex flex-row space-x-3 items-center">
        <AiFillEdit
          size="20"
          color="#331e36"
          title="Edit"
          className="hover:fill-blue-700"
        />
        <AiOutlineDelete
          size="20"
          color="#331e36"
          className="hover:fill-red-600"
          title="Delete"
        />
        <AiOutlineStar
          size="20"
          color="#331e36"
          className="hover:fill-blue-700"
          title="Mark as Important"
        />
      </div>
    </div>
  );
};

export default TodoList;
