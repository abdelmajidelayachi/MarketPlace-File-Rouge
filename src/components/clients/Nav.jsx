import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/logo/logo.jpg";
// importing Icons
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import account from "../../assets/images/profiles/default_profile.png";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownCategory,setDropdownCategory] = React.useState(false);
  
  const user = localStorage.getItem("user");
  return (
    <>
      <div className="border-b py-7"></div>
      <nav className="relative flex flex-wrap items-center justify-around px-2 py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 w-28 h-10 whitespace-nowrap uppercase text-gray-900"
              to="/"
            >
              <img src={logo} alt="MShop" />
            </Link>
            <button
              className="text-gray-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex w-full justify-around">
              <div className="w-2/3">
                <form className="w-2/3 float-right">
                  <div className="flex">
                    <label
                      htmlFor="search-dropdown"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only "
                    >
                      Your Email
                    </label>
                    <button onClick={()=>setDropdownCategory(!dropdownCategory)}
                      
                      className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100  rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 border-2 border-mainBlue"
                      type="button"
                    >
                      All categories{" "}
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    {dropdownCategory &&<div
                    
                      className="absolute top-14 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow "
                    
                     
                    >
                      {/* {showCategory} */}
                      
                      <ul
                        className="py-1 text-sm text-gray-700"
                        
                      >
                        <li>
                          <button
                            type="button"
                            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 "
                          >
                            Mockups
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 "
                          >
                            Templates
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 "
                          >
                            Design
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex py-2 px-4 w-full hover:bg-gray-100 "
                          >
                            Logos
                          </button>
                        </li>
                      </ul>
                    </div>}
                    <div className="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border-2 border-mainBlue focus:border-blue-500"
                        placeholder="Search..."
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto w-1/5 justify-around">
                {user === null && (
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
                    to="/sign-in"
                  >
                    <FontAwesomeIcon
                      className="text-2xl leading-lg text-gray-900 opacity-7"
                      icon={faUser}
                    />
                    <span className="ml-2">Sign In</span>
                  </Link>
                </li>)}
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
                    href="#pablo"
                  >
                    
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 22 22" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-btn opacity-75"></span>
                <span className="relative inline-flex rounded-full text-white justify-center items-center h-5 w-5 bg-btn">11
                </span>
              </span>
          </a>
                  
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
                    href="#pablo"
                  >
                    <div className="rounded-full w-12 h-12">
                      <img
                        className="rounded-full"
                        src={require("../../assets/images/profiles/default_profile.png")}
                        alt="account"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Navigation/>
      </nav>
    </>
  );
}
