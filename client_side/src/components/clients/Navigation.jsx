import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../UI/Wrapper";
import { useDispatch } from "react-redux";

function Navigation(props) {
  const [category, setCategory] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  let location = window.location.href.split("-").at(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    let locationCat = window.location.href.split("-").at(-1);
    dispatch({
      type: "CHOOSE_CATEGORY",
      payload: locationCat,
    });
    axios
      .get(
        "http://localhost/php%20projects/Fil_Rouge/Client_Side/Server_Side/public/product/get_categories"
      )
      .then((res) => {
        setCategory(
          res.data.filter((e) => {
            return e.id == location;
          })[0]
        );
      })
      .catch((err) => console.log(err));
  }, [location]);
  return (
    <Wrapper className="flex justify-center w-full pb-3">
      <ul
        className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium lg:text-xl"
        style={{ marginTop: "1rem" }}
      >
        {user !== null&& (user.role === "seller" ? (
          <li>
            <Link
              to="/dashboard"
              className={`block py-2 pr-4 pl-3 rounded md:bg-transparent  ${
                props.active === "add" ? "text-blue-700 " : " text-gray-700 "
              } hover:text-blue-700 md:p-0 `}
            >
              Dashboard
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/add-your-own-shop"
              className={`block py-2 pr-4 pl-3  rounded md:bg-transparent  ${
                props.active === "add" ? "text-blue-700 " : " text-gray-700 "
              } hover:text-blue-700 md:p-0 `}
            >
              Add Shop
            </Link>
          </li>
        ))}
        {category && (
          <li>
            <Link
              to={`/category/${category.name}-${category.id}`}
              className={`block py-2 pr-4 pl-3 ${
                props.active === "category"
                  ? "text-blue-700 "
                  : " text-gray-700 "
              } rounded md:bg-transparent hover:text-blue-700 md:p-0 `}
            >
              {category.name}
            </Link>
          </li>
        )}
        <li>
          <Link
            to="/"
            className={`block py-2 pr-4 pl-3 ${
              props.active === "home" ? "text-blue-700 " : " text-gray-700 "
            } rounded md:bg-transparent hover:text-blue-700 md:p-0 `}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/new-products"
            className={` block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ${
              props.active === "new" ? "text-blue-700 " : "text-gray-700"
            } md:hover:text-blue-700 md:p-0 `}
          >
            New
          </Link>
        </li>
        <li>
          <Link
            to="/top-sells"
            className={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ${
              props.active === "top" ? "text-blue-700 " : "text-gray-700"
            } md:hover:text-blue-700 md:p-0`}
          >
            Top sells
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navigation;
