import React from "react";
import UseFooter from "./UseFooter";

const Footer = () => {
  const { year } = UseFooter();
  return (
    <div className="z-0 justify-center w-screen flex-grow flex-shrink-0 flex items-center h-12 bg-indigo-600">
      <span className="text-white px-2">
        &copy; {year} All rights reserved.
      </span>
      <a href="/" className="font-bold text-white">
        www.abuhurairah.com
      </a>
    </div>
  );
};

export default Footer;
