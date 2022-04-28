import React from "react";

const Button = (props) => {
  return (
    <div className="">
      <button className="tracking-wider text-indigo-800  text-lg font-bold border-2 border-indigo-500 rounded-lg px-12 py-2 transition delay-50 ease-in-out    hover:bg-indigo-500 hover:text-white hover:border-indigo-500 duration-500 focus:outline-none focus:ring-4 focus:ring-indigo-300">
        {props.btn.label}
      </button>
    </div>
  );
};

export default Button;
