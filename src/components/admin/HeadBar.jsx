import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logoMshop.png";
import { useNavigate } from "react-router-dom";
import DropdownProfile from "../clients/dropdown/DropdownProfile";
import { useDispatch } from "react-redux";

function HeadBar() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [navProfile, setNavProfile] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (user === null) {
      setUser(JSON.parse(localStorage.getItem("user")));
      if (user === null) {
        navigate("/sign-in");
      }
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser(null);
    dispatch({
      type: "LOGIN_STATUS",
      payload: false,
    });
    setNavProfile(false);
    navigate("/");
  };


  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-gray-900">
        <Link
          className="text-sm font-bold leading-relaxed inline-block mr-4 w-32  whitespace-nowrap uppercase  ml-3 px-1 mt-2 text-gray-900"
          to="/"
        >
          <img src={logo} className="object-cover " alt="MShop" />
        </Link>
      </div>

      {/* <div className="flex md:w-1/3 justify-center md:justify-start  px-2">
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
      </div> */}


      <div className="flex pt-2 content-center justify-between  md:w-1/3 md:justify-end">
        {user !== null && (
            <button
              onClick={() => setNavProfile(!navProfile)}
              className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-gray-900 hover:opacity-75"
            >
              <div className="rounded-full w-12 h-12">
                <img
                  className="rounded-full"
                  src={require(`../../assets/images/profiles/${user.profile_photo_path}`)}
                  alt="account"
                />
              </div>
            </button>
          
          )}
          {navProfile && <DropdownProfile className="md:right-10 right-10 md:top-16 top-16 z-50" onClickLogout={logoutHandler} />}
      </div>
    </div>
  );
}

export default HeadBar;
