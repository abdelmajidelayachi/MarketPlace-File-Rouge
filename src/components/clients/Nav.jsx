import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logoMshop.png";
// importing Icons
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../UI/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import DropdownCategory from '../clients/DropdownCategory'
import axios from "axios";
export default function Nav(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const loginStatus = useSelector((state)=>state.login)
  const [categories,setCategories]=useState([]);
  // const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("product")));

  const storedProducts = useDispatch();
  const navigate =useNavigate();

  useEffect(() => {
    if (localStorage.getItem("cartItems") === null) {
      localStorage.setItem("cartItems", JSON.stringify([]));
    } else {
      storedProducts({
        type: "GET_PRODUCTS",
        payload:
          JSON.parse(localStorage.getItem("cartItems")) !== undefined
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
      });
    }
    if(user===null)
    {
      // navigate('/');
    }
    // console.log(props.category)
    

  }, [loginStatus]);
  useEffect(()=>{
    axios.get("http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_categories").then(res=>{
      setCategories(res.data);
    }).catch(err=>console.log(err))
 },[])


  const countItems = useSelector((state) => {
     let countItem = 0;
      state.cartItems.map((item) => 
        countItem += item.quantity
        );
    return countItem;
    
  }
  );

  const logoutHandler = ()=>{
      localStorage.removeItem("user");
      storedProducts( {
        type: "LOGIN_STATUS",
        payload: false
      })
  }

  const user = localStorage.getItem("user");
  return (
    <Wrapper className="w-full">
      <div className="absolute border-b top-14 left-0 w-full z-0" />
      <div className=" py-7"></div>
      <nav className="relative flex flex-wrap items-center justify-around px-2 pt-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 w-32  whitespace-nowrap uppercase text-gray-900"
              to="/"
            >
              <img src={logo} className="object-cover " alt="MShop" />
            </Link>
            <button
              className="text-gray-900 cursor-pointer text-xl leading-none px-3 p-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
            <div className="flex w-full justify-between">
              <div className="w-10/12">
                <form className="w-2/3 mx-auto">
                  <div className="flex">
                    <label
                      htmlFor="search-dropdown"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only "
                    >
                      Your Email
                    </label>
                   
                   
                      <DropdownCategory categories={categories}/>
                   
                    <div className="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg  border-l-2 border-2 focus:outline-none focus:bg-bgBlue border-mainBlue focus:border-mainBlue"
                        placeholder="Search..."
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 right-0 py-2 px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                      >
                        <i className="fas fa-search fa-lg text-2xl"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto w-1/5 justify-around">
                {user === null ? (
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
                  </li>
                ):(<button onClick={logoutHandler} className=" font-semibold text-xl text-red-600">logout</button>)}
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
                    to="/card"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 22 22"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-btn opacity-75"></span>
                      <span className="relative inline-flex rounded-full text-white justify-center items-center h-5 w-5 bg-btn">
                        {/* {cart !== undefined ? cart.length: 0} */}
                        {countItems}
                      </span>
                    </span>
                  </Link>
                </li>
                {user !== null && (
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
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav> 
      <Navigation categorySelected={props.category} active={props.active} />
    </Wrapper>
  );
}
