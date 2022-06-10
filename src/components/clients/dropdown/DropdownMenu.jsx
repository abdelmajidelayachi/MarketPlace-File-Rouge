import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="fixed z-50">
      <div className=" flex flex-col items-start justify-start h-full">
        <ul className="ml-6 divide-gray-100 rounded-md bg-white  ring-1 ring-black ring-opacity-5">
          <li className=" md:right-0 w-56 origin-top-right divide-y  focus:outline-none hover:bg-blue-500 hover:text-white px-3 py-2">
            <Link to="/">Home</Link>
          </li>

          <li className=" md:right-0 w-56 origin-top-right divide-y  hover:bg-blue-500 hover:text-white px-3 py-2">
            <Link to="/top-products">New</Link>
          </li>
          <li className=" md:right-0 w-56 origin-top-right divide-y  hover:bg-blue-500 hover:text-white px-3 py-2">
            <Link to="/top-products">Top Seller</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
