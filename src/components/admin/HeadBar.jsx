import React from "react";

function HeadBar() {
  return (
    <div className="flex flex-wrap items-center">
      <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-gray-900">
        <a href="/">
          <span className="">
          <h6
                className="
              uppercase
              font-semibold
              mb-4
              flex
              items-center
              justify-center
              md:justify-start
            "
              >
                <span className="text-white md:text-4xl text-xl font-bold ">
                  M
                </span>
                <span className="md:text-4xl text-xl font-medium">Shop</span>
              </h6>
          </span>
        </a>
      </div>

      <div className="flex md:w-1/3 justify-center md:justify-start text-white px-2">
        <span className="relative w-full flex">
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="w-full bg-gray-50 text-gray-900 transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal"
          />
          <div className="absolute search-icon left-3.5 top-3.5 w-1/12 h-full cursor-pointer">
            <svg
              className="fill-current pointer-events-none text-black w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
            </svg>
          </div>
        </span>
      </div>

      <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li className="flex-1 md:flex-none md:mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline"
              href="/"
            >
              Active
            </a>
          </li>
          <li className="flex-1 md:flex-none md:mr-3">
            <a
              className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
              href="/"
            >
              link
            </a>
          </li>
          <li className="flex-1 md:flex-none md:mr-3">
            <div className="relative inline-block">
              <button className="drop-button text-white py-2 px-2">
                {" "}
                <span className="pr-2">
                  <i className="em em-robot_face"></i>
                </span>{" "}
                Hi, User
              </button>
              <div
                id="myDropdown"
                className="dropdownlist absolute bg-mainBlue text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
              >
                <input
                  type="text"
                  className="drop-search p-2 text-gray-600"
                  placeholder="Search.."
                  id="myInput"
                />
                <a
                  href="/"
                  className="p-2 hover:bg-mainBlue text-white text-sm no-underline hover:no-underline block"
                >
                  <i className="fa fa-user fa-fw"></i> Profile
                </a>
                <a
                  href="/"
                  className="p-2 hover:bg-mainBlue text-white text-sm no-underline hover:no-underline block"
                >
                  <i className="fa fa-cog fa-fw"></i> Settings
                </a>
                <div className="border border-mainbg-mainBlue"></div>
                <a
                  href="/"
                  className="p-2 hover:bg-mainBlue text-white text-sm no-underline hover:no-underline block"
                >
                  <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeadBar;
