import { Menu, Transition } from "@headlessui/react";
import userEvent from "@testing-library/user-event";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DropdownProfile = (props) => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="md:mt-0 mt-1 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <div className="rounded-full w-10 h-10">
              {props.image && <img
                className="rounded-full"
                src={require(`../../../assets/images/profiles/${props.image}`)}
                alt="account"
              />}
            </div>
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
                    to="/profile"
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Profile
                  </Link>
                )}
              </Menu.Item>
              {
                user.role==="seller"&&<Menu.Item key="store">
                {({ active }) => (
                  <Link
                    to={`/store/${props.linkStore}`}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    My store
                  </Link>
                )}
              </Menu.Item>
              }
              
              <Menu.Item key="logout">
                {({ active }) => (
                  <button
                    onClick={() => props.onClickLogout()}
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownProfile;
