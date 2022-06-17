import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  return (
    <div className="right-0   md:w-56  text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
          <i className="fas fa-bars fa-lg"></i>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-max right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item key="home">
                {({ active }) => (
                  <Link
                    to="/"
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Home 
                  </Link>
                )}
                </Menu.Item>
              <Menu.Item key="New">
                {({ active }) => (
                  <Link
                    to="/new-products"
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    New products 
                  </Link>
                )}
                </Menu.Item>
          
              <Menu.Item key="top">
                {({ active }) => (
                  <Link
                    to="/top-products"
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Top Products 
                  </Link>
                )}
                </Menu.Item>
          
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownMenu;

    // <div className="absolute z-max">
    //   <div className=" flex flex-col items-start justify-start h-full">
    //     <div className="ml-6 divide-gray-100 rounded-md bg-white  ring-1 ring-black ring-opacity-5">
    //       <Link to="/">
    //         {" "}
    //         <div className="div md:right-0 w-56 origin-top-right divide-y  focus:outline-none hover:bg-blue-500 hover:text-white px-3 py-2">
    //           Home
    //         </div>
    //       </Link>
    //       <Link to="/new-products">
    //         <div className=" md:right-0 w-56 origin-top-right divide-y  hover:bg-blue-500 hover:text-white px-3 py-2">
    //           New
    //         </div>
    //       </Link>
    //       <Link to="/top-seller">
    //         <div className=" md:right-0 w-56 origin-top-right divide-y  hover:bg-blue-500 hover:text-white px-3 py-2">
    //           Top Seller
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>