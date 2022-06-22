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
      <div className="flex pt-2 content-center justify-between pr-4  md:w-1/3 md:justify-end">
        {user !== null && (
          <DropdownProfile
            image={user.profile_photo_path}
            className="md:right-10 right-20 md:top-16 top-16 z-50"
            onClickLogout={logoutHandler}
          />
        )}
      </div>
    </div>
  );
}

export default HeadBar;
