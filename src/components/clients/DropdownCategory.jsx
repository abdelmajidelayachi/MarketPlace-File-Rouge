import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

export default function DropdownCategory(props) {
  const navigate = useNavigate()
  const selectCategory =(e)=>{
    navigate(e)
    props.reload(e)
  }
 
  return (
    <div className=" md:top-16 md:left-52   md:w-56 w-12 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex-shrink-0 z-0 inline-flex items-center md:py-2 py-1 md:px-4 px-2 text-sm font-medium text-center text-gray-900 bg-gray-100  rounded-l-lg focus:outline-none border-2 border-mainBlue">
            {props.mobile==="true"?'All':" All categories"}
           
            <ChevronDownIcon
              className="md:ml-2 mt-0.5 -mr-1 h-4 w-4 text-gray-500 hover:text-gray-700"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute z-max md:right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item key={12}>
                {({ active }) => (
                  <Link
                    to="/"
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    All categories
                  </Link>
                )}
              </Menu.Item>
              {props.categories.map((category, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button type="button"
                      onClick={()=>selectCategory(`/category/${category.name}-${category.id}`)}
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {category.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
