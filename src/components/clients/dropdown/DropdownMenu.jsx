import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="absolute z-50">
      <div className=" flex flex-col items-start justify-start h-full">
        <div className="ml-6 divide-gray-100 rounded-md bg-white  ring-1 ring-black ring-opacity-5">
          <Link to="/">
            {" "}
            <div className="div md:right-0 w-56 origin-top-right divide-y  focus:outline-none hover:bg-blue-500 hover:text-white px-3 py-2">
              Home
            </div>
          </Link>
          <Link to="/new-products">
            <div className=" md:right-0 w-56 origin-top-right divide-y  hover:bg-blue-500 hover:text-white px-3 py-2">
              New
            </div>
          </Link>
          <Link to="/top-seller">
            <div className=" md:right-0 w-56 origin-top-right divide-y  hover:bg-blue-500 hover:text-white px-3 py-2">
              Top Seller
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
